document.addEventListener('DOMContentLoaded', function() {
    const evacDiv = document.getElementById('seaFacts');
    const deportDiv = document.getElementById('industryFacts');
    const showEvacBtn = document.getElementById('showSeaBtn');
    const showDeportBtn = document.getElementById('showIndustryBtn');

    function hideAll() {
        if (evacDiv) evacDiv.classList.remove('show');
        if (deportDiv) deportDiv.classList.remove('show');
    }

    if (showEvacBtn && evacDiv) {
        showEvacBtn.addEventListener('click', () => {
            if (evacDiv.classList.contains('show')) {
                evacDiv.classList.remove('show');
            } else {
                hideAll();
                evacDiv.classList.add('show');
            }
        });
    }

    if (showDeportBtn && deportDiv) {
        showDeportBtn.addEventListener('click', () => {
            if (deportDiv.classList.contains('show')) {
                deportDiv.classList.remove('show');
            } else {
                hideAll();
                deportDiv.classList.add('show');
            }
        });
    }
});