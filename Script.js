window.addEventListener('load', () => {
    const nameElement = document.querySelector('.animated-name');
    
    // Initial animation to slide in the name
    setTimeout(() => {
        nameElement.style.opacity = '1';
        nameElement.style.transform = 'translateY(0)';
    }, 500);
});




const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeLabel.textContent = 'Dark Mode';
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeLabel.textContent = 'Light Mode';
    }
});

// Set initial theme to light mode
window.onload = () => {
    body.classList.add('light-mode');
    themeLabel.textContent = 'Light Mode';
};

const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active')
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Open the modal
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Close the modal
}

// Close the modal when clicking outside of the content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
