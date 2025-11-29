document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.querySelector('[data-include="nav"]');
    if (!placeholder) return;

    fetch('nav.html')
        .then(response => {
            if (!response.ok) throw new Error('Erreur de chargement');
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            placeholder.innerHTML = `
                <nav>
                    <a href="Index.html">Accueil</a>
                    <a href="jeux.html" class="eurl">Nos Jeux</a>
                    <a href="membres.html">Nos Membres</a>
                    <a href="archive.html">Archive</a>
                </nav>`;
        });
});