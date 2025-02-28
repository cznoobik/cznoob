// Získání všech obrázků v galerii
const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenWrapper = document.createElement('div');
fullscreenWrapper.classList.add('fullscreen-img-wrapper');
document.body.appendChild(fullscreenWrapper);

// Přidání click event listeneru na každý obrázek
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const text = item.querySelector('.hidden-text').textContent;

        // Vytvoření obrázku pro fullscreen
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = imgSrc;

        // Vytvoření textu pro fullscreen
        const fullscreenText = document.createElement('div');
        fullscreenText.classList.add('fullscreen-text');
        fullscreenText.textContent = text;

        // Přidání obrázku a textu do fullscreen wrapperu
        fullscreenWrapper.innerHTML = ''; // Vyčistí obsah
        fullscreenWrapper.appendChild(fullscreenImage);
        fullscreenWrapper.appendChild(fullscreenText);

        // Zobrazení fullscreen wrapperu
        fullscreenWrapper.classList.add('active');

        // Zavíráme fullscreen obrázek po kliknutí
        fullscreenWrapper.addEventListener('click', () => {
            fullscreenWrapper.classList.remove('active');
        });
    });
});
