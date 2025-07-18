


document.addEventListener("DOMContentLoaded", function () {
    const pcIcon = document.querySelector(".fa-computer");
    const mobileIcon = document.querySelector(".fa-mobile");
    const pcScreen = document.querySelector(".container.pc-screen");
    const mobileScreen = document.querySelector(".container.mobile-screen");

    // Inicialmente, exibe apenas a moldura do celular
    pcScreen.classList.add("hide"); // Começa oculto
    mobileScreen.classList.add("show"); // Começa visível

    function toggleScreens(showPc) {
        if (showPc) {
            // Mostra o PC e oculta o celular
            pcScreen.classList.remove("hide");
            pcScreen.classList.add("show");
            mobileScreen.classList.remove("show");
            mobileScreen.classList.add("hide-mobile");

            // Após a animação, realmente desativa a tela móvel
            setTimeout(() => {
                mobileScreen.classList.add("disabled");
                pcScreen.classList.remove("disabled");
            }, 500); // Tempo da animação
        } else {
            // Mostra o celular e oculta o PC
            mobileScreen.classList.remove("hide-mobile");
            mobileScreen.classList.add("show");
            pcScreen.classList.remove("show");
            pcScreen.classList.add("hide");

            // Após a animação, realmente desativa a tela do PC
            setTimeout(() => {
                pcScreen.classList.add("disabled");
                mobileScreen.classList.remove("disabled");
            }, 500); // Tempo da animação
        }

         let isDesktop = true;
        let isDesktopSVG = true;

        function toggleSwitch() {
            const thumb = document.getElementById('thumb');
            const desktopIcon = document.getElementById('desktop-icon');
            const mobileIcon = document.getElementById('mobile-icon');
            const statusText = document.getElementById('status-text');

            if (isDesktop) {
                thumb.classList.add('active');
                desktopIcon.style.display = 'none';
                mobileIcon.style.display = 'block';
                statusText.textContent = 'Modo Mobile';
            } else {
                thumb.classList.remove('active');
                desktopIcon.style.display = 'block';
                mobileIcon.style.display = 'none';
                statusText.textContent = 'Modo Desktop';
            }

            isDesktop = !isDesktop;
        }

        function toggleSwitchSVG() {
            const thumbSVG = document.getElementById('thumb-svg');
            const desktopSVG = document.getElementById('desktop-svg');
            const mobileSVG = document.getElementById('mobile-svg');
            const statusTextSVG = document.getElementById('status-text-svg');

            if (isDesktopSVG) {
                thumbSVG.classList.add('active');
                desktopSVG.style.display = 'none';
                mobileSVG.style.display = 'block';
                statusTextSVG.textContent = 'Modo Mobile';
            } else {
                thumbSVG.classList.remove('active');
                desktopSVG.style.display = 'block';
                mobileSVG.style.display = 'none';
                statusTextSVG.textContent = 'Modo Desktop';
            }

            isDesktopSVG = !isDesktopSVG;
        }
    }

    // Quando clicar no ícone de PC
    pcIcon.addEventListener("click", function () {
        toggleScreens(true);
    });

    // Quando clicar no ícone de celular
    mobileIcon.addEventListener("click", function () {
        toggleScreens(false);
    });
});
