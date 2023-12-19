let text = "Welcome to the Text Animation Project! In this project, we'll explore various animations to display words from a text in a captivating and dynamic way. As you hover over the text container, you'll observe different effects such as fade, popup, and wipe, bringing life to the words. This lengthy text is crafted to provide a comprehensive animation experience. Feel free to customize the project to suit your needs. Adjust the animations, tweak the speeds, and add your own content to create a unique presentation. We hope this project proves useful in enhancing interactivity and design on your web pages. Have fun exploring and experimenting!".split(" ");

text.forEach((word, i) => {
    let span = document.createElement("span");
        span.innerHTML = word;
        span.className = "word";
        span.style.setProperty("--delay", i/10 + "s");

    [...document.querySelectorAll(".textContainer")].forEach(container => { 
        container.append(span.cloneNode(true));
    })
})