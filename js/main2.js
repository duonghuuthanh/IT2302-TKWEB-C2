function deleteProduct(product) {
    let p = this.document.querySelector(".products");

    if (confirm("Ban chac chan xoa khong?") === true) {
        p.removeChild(product);
    }
}

window.addEventListener('load', function() {
    let p = this.document.querySelector(".products");
    let closes = this.document.querySelectorAll("a.delete");
    for (let c of closes)
        c.onclick = function() {
            deleteProduct(this.parentElement.parentElement);
            // if (confirm("Ban chac chan xoa khong?") === true) {
            //     p.removeChild(this.parentElement.parentElement);
            // }
        }

    let insert = this.document.querySelector("a.insert");
    let form = this.document.querySelector(".form")
    insert.addEventListener("click", function() {
        form.classList.toggle("show");
    });

    let btn = this.document.getElementById("btnAdd");
    btn.addEventListener("click", function() {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("image").value;
        let h = `
            <div class="product">
                <div class="new">
                    <img src="${image}" alt="${name}" />
                    <h2>${name}</h2>
                    <div class="price">${price}<sup>đ</sup></div>
                    <a onclick="deleteProduct(this.parentElement.parentElement)" href="#" class="delete">&times;</a>
                </div>
            </div>
        `;

        // p.innerHTML = h + p.innerHTML;
        let prod = document.querySelector(".product:first-child");
        prod.insertAdjacentHTML("beforebegin", h);

        let t = setTimeout(function() {
            let tmps = document.querySelectorAll(".product .new");
            for (let t of tmps)
                t.classList.remove("new");

            clearTimeout(t);
        }, 1000);
    });
});