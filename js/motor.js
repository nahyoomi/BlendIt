//Declare if blender it´s ON/OFF
let blenderState ="turnoff";
let blenderSound = document.getElementById("blender_motor");
let blenderSoundButton = document.getElementById("blender_button_sound");
let blender = document.getElementById("blender");
function controlblender() {
    if(blenderState =="turnoff") {
        blenderState ="turnon";
        blenderbrr();
        blender.classList.add("active");
        /* console.log("it is on!") */
    } else {
        blenderState ="turnoff"
        blenderbrr();
        blender.classList.remove("active");
        /* console.log("it is off!"); */
    }
}

function blenderbrr() {
    if(blenderSound.paused) {
        blenderSoundButton.play();
        blenderSound.play();
    } else {
        blenderSoundButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}