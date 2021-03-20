function playAudio(src){
    let audio = new Audio();
    audio.src = src;
    audio.currentTime= 0;
    audio.play();
}

function mouseOver(){
    piano.addEventListener('mouseover',function(event){
        const k = event.target.dataset.letter;
        if(event.target.classList.contains('piano-key')){
            const note = event.target.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
        }
    });
}

function mouseOut(){
    playAudio('');
}


function removeClass(){
    buttons.forEach(button=>{
        button.classList.remove('btn-active');
    });
}


function addColorToKeys(code){
    keys.forEach(key=>{
        if(key.dataset.letter==code){
            key.classList.add('piano-key-active');
        }
    })
}

function removeColorToKeys(code){
    keys.forEach(key=>{
        if(key.dataset.letter==code){
            console.log('yes');
            key.classList.remove('piano-key-active');
        }
    })
}


const obj = {
    'KeyR' : 'c♯',
    'KeyT' : 'd♯',
    'KeyU' : 'f♯',
    'KeyI' : 'g♯',
    'KeyO' : 'a♯',
    'KeyD' : 'c',
    'KeyF' : 'd',
    'KeyG' : 'e',
    'KeyH' : 'f',
    'KeyJ' : 'g',
    'KeyK' : 'a',
    'KeyL' : 'b',
};

const piano = document.querySelector('.piano');

piano.addEventListener('mousedown',function(event){
    const k = event.target.dataset.letter;
    if(event.target.classList.contains('piano-key')){
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        addColorToKeys(k);
    }
});


piano.addEventListener('mouseup', event=>{
    const k = event.target.dataset.letter;
    removeColorToKeys(k);
});

piano.classList.add('addState');

const buttons = document.querySelectorAll('.btn');
const keys = document.querySelectorAll('.piano-key');

buttons.forEach( btn=>btn.addEventListener('click',function(event){
    const name = event.target.outerText;
    let checker = event.target.classList.contains('btn-active');
    if(name=='Letters' && !checker){
        removeClass();
        event.target.classList.add('btn-active');
        keys.forEach(key=>{
            key.classList.add('lol');
        });
    }
    if(name=='Notes' && !checker){
        removeClass();
        event.target.classList.add('btn-active');
        keys.forEach(key=>{
            key.classList.remove('lol');
        });
    }
}));

window.addEventListener('keydown',function(event){
    const k = event.code;
    if(obj[k]){
        addColorToKeys(k[k.length-1]);
        const note = obj[k];
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

window.addEventListener('keyup',function(event){
    const k = event.code;
    if(obj[k]){
        removeColorToKeys(k[k.length-1]);
    }
});
