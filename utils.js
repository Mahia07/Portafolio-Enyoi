const textosTransversales = [
    {
        navBar: ["Inicio", "Sobre Mi", "Proyectos", "Contacto"]
    }
]

function renderNavBar() {
    const divNavBg = document.createElement('div');
    divNavBg.classList.add("navBg");

    let navBar = document.createElement('nav');
    navBar.classList.add("navBar");

        textosTransversales[0].navBar.forEach((element) => {
        let links = document.createElement('a');
        links.textContent = element;


        if (element.toLocaleLowerCase() == "inicio") {  
            links.href = "../index/index.html"
          } else if (element.toLocaleLowerCase() == 'sobre mi') { 
             links.href ="../sobremi/sobremi.html"
          } else {
            links.href = `../${element}/${element}.html`
          }

        navBar.appendChild(links);
    });


    divNavBg.appendChild(navBar);

    const body = document.body;
    const firstChild = body.firstChild;
    body.insertBefore(divNavBg, firstChild);

}
renderNavBar()

 function renderFooter() {
    let footer = document.createElement('footer');

    let divElement = document.createElement('div');
    divElement.classList.add("element");

    let divFtContent = document.createElement('div');
    divFtContent.classList.add("footerContent");

    let text = document.createElement('p');
    text.textContent = "2024 Mahia Umbarila. Todos los derechos reservados.";

    divFtContent.appendChild(text)

    let navFooter = document.createElement('nav');
    navFooter.classList.add("redesSociales");

    const icons = {
        gitHub: '../redesSociales/github.svg',
        linkedin: '../redesSociales/linkedin.svg',
        gmail: '../redesSociales/gmail.svg',
        instagram: '../redesSociales/instagram.svg'
    };

    Object.keys(icons).forEach((key) => {
        let links = document.createElement('a');
        links.href =`https://www.${key.toLowerCase()}.com`; 
        links.target = '_blank'; 

        let iconsSocialMedia = document.createElement('img');
        iconsSocialMedia.classList.add("icons")
        iconsSocialMedia.src = icons[key];

        links.appendChild(iconsSocialMedia);
        navFooter.appendChild(links); 
    });

    footer.appendChild(divElement);
    footer.appendChild(navFooter);
    divElement.appendChild(divFtContent)

    document.body.appendChild(footer);

}
renderFooter()