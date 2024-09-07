function nextStep(step) {
    // Hide all sections
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('home-selection').style.display = 'none';
    document.getElementById('organization-selection').style.display = 'none';
    document.getElementById('impact-popup').style.display = 'none';
    document.getElementById('actions').style.display = 'none';
    document.getElementById('action-impact-popup').style.display = 'none';

    // Show the next step
    document.getElementById(step).style.display = 'block';
}

function showImpact() {
    let role = document.getElementById('role').value;
    let homeOptions = Array.from(document.querySelectorAll('#home-selection input:checked')).map(el => el.value);
    let organization = document.getElementById('organization').value;

    let impactMessage = `As a ${role}, your choices at home such as ${homeOptions.join(', ')} and working in a ${organization} have certain effects on climate change.`;

    document.getElementById('impact-message').textContent = impactMessage;

    // Show the impact popup
    document.getElementById('impact-popup').style.display = 'block';
}

function showActionImpact(action) {
    let actionImpactMessage = '';

    switch(action) {
        case 'cut_tree':
            actionImpactMessage = 'Cutting trees increases carbon dioxide in the atmosphere. To mitigate, plant more trees.';
            break;
        case 'industrial_work':
            actionImpactMessage = 'Industrial work contributes to pollution. Use green technologies to reduce emissions.';
            break;
        case 'alter_river':
            actionImpactMessage = 'Altering rivers disrupts ecosystems. Protect natural water bodies to maintain biodiversity.';
            break;
    }

    document.getElementById('action-impact-message').textContent = actionImpactMessage;

    // Show the action impact popup
    document.getElementById('action-impact-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('action-impact-popup').style.display = 'none';
}
