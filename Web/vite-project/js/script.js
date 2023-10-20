document.addEventListener("DOMContentLoaded", function () {
    const drawer = document.getElementById("drawer");
    const drawerButton = document.getElementById("drawerButton");
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("#drawer a");
    const main = document.querySelector("main");
    const buttonContainer = document.getElementById("a-container");

    // Função para remover a classe "selected" do <main>
    function removeMainSelected() {
        main.classList.remove("selected");
    }

    sections.forEach(section => {
        section.style.display = "none";
    });

    
    drawerButton.addEventListener("click", () => {
        if (drawer.style.left === "-250px" || drawer.style.left === "") {
            drawer.style.left = "0";
            buttonContainer.style.display = "block";
        } else {
            drawer.style.left = "-250px";
            buttonContainer.style.display = "none";
        }
    });+

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = "none";
            });
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = "block";
                removeMainSelected();
                setTimeout(() => {
                    main.classList.add("selected");
                }, 10);
            }
            drawer.style.left = "-250px";
            buttonContainer.style.display = "none"; 
        });
    });
});
