document.addEventListener('DOMContentLoaded', function() {
    const areaSelect = document.getElementById('areaSelect');
    const interviewCards = document.querySelectorAll('.interview-cards .card');
    const occurrenceCards = document.querySelectorAll('.occurrence-cards .card');

    areaSelect.addEventListener('change', function() {
        const selectedArea = areaSelect.value;

        // Filter interview cards
        interviewCards.forEach(card => {
            if (selectedArea === 'all' || card.getAttribute('data-area') === selectedArea) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Filter occurrence cards
        occurrenceCards.forEach(card => {
            if (selectedArea === 'all' || card.getAttribute('data-area') === selectedArea) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
