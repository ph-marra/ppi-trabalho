window.onload = function() {
    mostrarConteudo("schedual-fields")
}

function mostrarConteudo(id_conteudo) {
    var iframes = document.querySelectorAll(".iframe-component");

    iframes.forEach(elem => {
        elem.removeAttribute("hidden");
        if (elem.id == id_conteudo)
            elem.classList.add("visible");
        else
            elem.classList.remove("visible");
    });
}

function toggleMenu() {
    var menu_content = document.getElementById('sanduiche');
    menu_content.classList.toggle('expandido');
    
    var menu_content = document.getElementById('menu-content');
    menu_content.classList.toggle('expandido');

    var menu = document.getElementById('menu');
    menu.classList.toggle('expandido');
}