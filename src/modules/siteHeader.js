export function siteHeader() {
    let temp = document.getElementsByClassName("siteHeader");
    for (let elem of temp) {
        elem.innerHTML = `
            <div class="logo">Bookshop</div>

            <div class="header-books">books</div>
            <div class="header-audiobooks">audiobooks</div>
            <div class="header-Stationery">Stationery & gifts</div>
            <div class="header-blog">blog</div>

            <img class="header-img-icons" src="./assets/icons.svg" alt="IMG"/>
        `;
    }
}