window.onload = function() {
    let main = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onclick = function() {
            main.src = this.src;
        }
    
    let products = document.querySelectorAll(".product > div");
    let buttons = document.querySelectorAll(".buttons > button");
    for (let b of buttons)
        b.onclick = function() {
            let prefix = this.getAttribute("rel");
            main.setAttribute("src", `images/galaxys8/${prefix}1.jpg`);

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${prefix}${i + 1}.jpg`

            for (let p of products)
                p.style.background = `linear-gradient(lightblue, ${prefix.slice(0, -1)})`;
        }

    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        let txt = this.value;

        for (let p of products) {
            p.style.border = "";
            p.children[0].style.transform = "";
        }

        let prods = document.querySelectorAll(".product h2");
        for (let p of prods)
            if (p.innerText.includes(txt) === true) {
                p.parentElement.style.border = "2px solid red";
                p.previousElementSibling.style.transform = "translateY(8px)";
            }
    }
}