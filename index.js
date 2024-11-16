let lamp_is_on = false;
let bird_is_out = false;
let magic_in_process = false;

function open_curtain() {
    curtain.style.transition = "1s ease";
    curtain.style.bottom = "100%";
}

click_lamp.addEventListener("mousedown", () => {
    tumbler.style.top = "120px";
    lamp_is_on = !lamp_is_on;
    if (lamp_is_on) {
        light.style.opacity = "0.5";
        props.style.opacity = "1";
    }
    else {
        light.style.opacity = "0";
        props.style.opacity = "0";
    }
});

click_lamp.addEventListener("mouseup", () => {
    tumbler.style.top = "85px";
});

function switch_pet() {
    if (lamp_is_on && !magic_in_process) {
        magic_in_process = true;
        pet.style.top = "700px";
        setTimeout(() => {
            if (bird_is_out) {
                pet.src = "images/rabbit.jpg";
                pet.style.top = "550px";
            }
            else {
                pet.src = "images/bird.jpg";
                pet.style.top = "520px";
            }

            bird_is_out = !bird_is_out;

            setTimeout(() => {
                magic_in_process = false;
            }, 500);

        }, 500);
    }
}