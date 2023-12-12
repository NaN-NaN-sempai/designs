var elarr = ["i3", "io2"];
elarr.forEach(id=>{ 
    var htmlEl = document.getElementById(id);
    var cssEl = Array.from(document.styleSheets[0].cssRules).find(e=>e.selectorText == "#"+id);

    htmlEl.addEventListener("mousemove", (e)=>{ 
        var x = ((e.offsetX / i3.clientWidth) * 100) + "%";
        var y = ((e.offsetY / i3.clientHeight) * 100) + "%";
        
        cssEl.style.clipPath = "circle(30% at "+x+" "+y+")";
    });

    htmlEl.addEventListener("mouseover", ()=>{
        cssEl.style.transition = "none";
    });

    htmlEl.addEventListener("mouseout", ()=>{
        cssEl.style.transition = "1s";
        cssEl.style.clipPath = "circle(100%)";
    });
})