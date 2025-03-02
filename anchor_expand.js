function openDetails() {
    if (!location.hash.match(/#c\d+/)){ return; }

    let anchor = location.hash.substring(1);

    let details = document.getElementById(anchor)?.parentElement?.parentElement;
    if(details?.tagName?.toLowerCase() === 'details') {
        details.open = true;
    }
}

window.addEventListener('hashchange', openDetails);
openDetails()
