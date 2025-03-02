// Najdeme všechny obrázky v galerii
const galleryItems = document.querySelectorAll('.gallery-item');

// Najdeme nebo vytvoříme fullscreen wrapper
let fullscreenWrapper = document.querySelector('.fullscreen-img-wrapper');
if (!fullscreenWrapper) {
    fullscreenWrapper = document.createElement('div');
    fullscreenWrapper.classList.add('fullscreen-img-wrapper');
    document.body.appendChild(fullscreenWrapper);
}

// Přidání event listeneru na každý obrázek
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const text = item.querySelector('.hidden-text').textContent;

        // Vyčištění fullscreen wrapperu
        fullscreenWrapper.innerHTML = '';

        // Vytvoření obrázku
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = imgSrc;

        // Vytvoření textu
        const fullscreenText = document.createElement('div');
        fullscreenText.classList.add('fullscreen-text');
        fullscreenText.textContent = text;

        // Přidání prvků do wrapperu
        fullscreenWrapper.appendChild(fullscreenImage);
        fullscreenWrapper.appendChild(fullscreenText);

        // Zobrazení fullscreen wrapperu
        fullscreenWrapper.classList.add('active');
        fullscreenWrapper.style.display = 'flex'; // Zajistí, že se objeví

        // Zavření fullscreen po kliknutí na něj
        fullscreenWrapper.addEventListener('click', () => {
            fullscreenWrapper.classList.remove('active');
            fullscreenWrapper.style.display = 'none';
        });
    });
});
