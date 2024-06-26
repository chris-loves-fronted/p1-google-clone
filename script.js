// @ts-nocheck

window.addEventListener('DOMContentLoaded', () => {
    // Alle Elemente aus dem DOM ziehen
    const searchInput = document.getElementById('searchInput');
    const suggestionSection = document.getElementById('suggestionSection');
    const searchSection = document.querySelector('search');

    const suggestResults = ['Javascript', 'Javascript lernen', 'Javascript array'];

    let searchInputValue = '';

    // Auf Suchinput hören und Vorschläge geben
    searchInput.addEventListener('input', ({ target: { value } }) => {
        searchInputValue = value.toLowerCase();
        suggestionSection.innerHTML = '';

        searchSection.style.borderRadius = '20px 20px 0 0';
        searchSection.style.background = '#303134';
        searchSection.style.border = 'none';
        suggestionSection.style.display = 'flex';

        if (!searchInputValue) {
            styleSections();
        }

        suggestResults.forEach((suggest) => {
            if (suggest.toLowerCase().includes(searchInputValue)) {
                const searchSuggestion = document.createElement('search-suggestion');

                searchSuggestion.innerHTML = `
                    <img src="./assets/search.svg" alt width="17" height="17" /> ${suggest}
                `;

                suggestionSection.appendChild(searchSuggestion);
            } else {
                styleSections();
            }
        });
    });

    // Helper Functions
    function styleSections() {
        suggestionSection.style.display = 'none';
        searchSection.style.borderRadius = '50px';
        searchSection.style.border = '1px solid #5f6368';
        searchSection.style.background = 'transparent';
    }
});
