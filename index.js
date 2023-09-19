for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let key = this.innerHTML;
        play_sound(key);
        btn_animation(key);
    });

    document.querySelectorAll("button")[i].addEventListener("keypress", function (event) {
        play_sound(event.key);
        btn_animation(event.key);
    });


}

function play_sound(key) {
    switch (key) {
        case 'w':
            new Audio("./sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("./sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("./sounds/tom-4.mp3").play();
            break;
    }

}

function btn_animation(class_name) {

    document.querySelector('.' + class_name).classList.add('pressed');

    setTimeout(function () {  
        document.querySelector('.' + class_name).classList.remove('pressed');
    }, 200)
}