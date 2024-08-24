let thumb = document.getElementById("thumb");
thumb.onmousedown = function (event) {
    event.preventDefault();
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
        let left = event.clientX - shiftX - slider.getBoundingClientRect().left;
        console.log(event.clientX);

        if (left > slider.clientWidth - thumb.offsetWidth)
            left = slider.clientWidth - thumb.offsetWidth;
        if (left < 0) left = 0;
        thumb.style.left = left + "px";
    }
    function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    thumb.ondragStart = function () {
        return false;
    };
};
