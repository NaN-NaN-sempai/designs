[...document.querySelectorAll('.notch')].forEach(notch => {
    let wrapper = document.createElement("div");
        wrapper.className = "wrapper";

    let draw = document.createElement("div");
        draw.className = "draw";

    for(let i of [...Array(10).keys()].reverse()) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            svg.setAttribute('class', 'shape');
            svg.setAttribute('width', '50');
            svg.setAttribute('height', '50');
            svg.setAttribute("viewBox", `0 0 100 100`);
            
            var shape = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
                shape.setAttribute("points", `${i * 10} 50, 50 0, 100 50, 50 100`);

            svg.append(shape);
        draw.append(svg);
    }

    for(let i in [...Array(3)])
        wrapper.append(draw.cloneNode(true))

    notch.append(wrapper)
    
});