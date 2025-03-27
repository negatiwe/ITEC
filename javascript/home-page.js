function showContent(selectedFeature) {
    document.querySelectorAll('.feature').forEach(feature => {
        const desc = feature.querySelector('.description');

        anime.remove(desc);

        desc.style.display = 'none';
        desc.style.opacity = 0;

        feature.classList.remove('active');
    });

    selectedFeature.classList.add('active');
    const selectedDesc = selectedFeature.querySelector('.description');
    selectedDesc.style.display = 'block';

    anime({
        targets: selectedDesc,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad'
    });

    anime({
        targets: selectedFeature.querySelector('.circle'),
        scale: [1, 1.3, 1],
        duration: 500,
        easing: 'easeInOutQuad'
    });
}