const setBg = (el) => {
    addEventListener("mousemove", ({clientX, clientY}) => {
        let posX = ((clientX - el.getBoundingClientRect().x) / el.offsetWidth) * 100;
        let posY = ((clientY - el.getBoundingClientRect().y) / el.offsetHeight) * 100;

        el.style.setProperty('--mouseX', posX + '%');
        el.style.setProperty('--mouseY', posY + '%');
    });
}

[...document.querySelectorAll(".hoverBox, .hoverBox .inner")].forEach(hoverBox => {
    setBg(hoverBox);
});