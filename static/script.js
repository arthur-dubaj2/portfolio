function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
});

//Gestion de la rotation des yeux

//document.addEventListener('mousemove')

// Gestion de l'accordéon
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('active');
        });
    });
});

function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Utilisation de mailto pour ouvrir le client mail par défaut
    const mailtoLink = `mailto:arthur.dubaj@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
    // Fermer la modale
    closeModal('modal8');
}
