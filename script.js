// What are you doing here ??

// Prevent right click and drag
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
document.body.style.userSelect = 'none';

// dark / light mod
document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.querySelector('.switch');
    const sunElement = document.querySelector('.sun');
    const moonElement = document.querySelector('.moon');

    sunElement.style.display = 'none';

    switchElement.addEventListener('click', (event) => {
        event.preventDefault();

        switchElement.classList.toggle('active');

        if (switchElement.classList.contains('active')) {
            sunElement.style.display = 'block';
            moonElement.style.display = 'none';
        } else {
            sunElement.style.display = 'none';
            moonElement.style.display = 'block';
        }

        const root = document.documentElement;
        const currentColor = getComputedStyle(root).getPropertyValue('--pallino-color').trim();
        const currentMainColor = getComputedStyle(root).getPropertyValue('--sfondo-color').trim();
        const currentThirdColor = getComputedStyle(root).getPropertyValue('--testo-color').trim();
        const Secondcolor = getComputedStyle(root).getPropertyValue('--secondo-color').trim();
        const Terzocolor = getComputedStyle(root).getPropertyValue('--terzo-color').trim();
        const Quartocolor = getComputedStyle(root).getPropertyValue('--quarto-color').trim();

        root.style.setProperty('--pallino-color', currentColor === '#ffffff3f' ? '#00000030' : '#ffffff3f');
        root.style.setProperty('--sfondo-color', currentMainColor === '#1a1a1a' ? '#ffffff' : '#1a1a1a');
        root.style.setProperty('--testo-color', currentThirdColor === '#ffffff' ? '#333333' : '#ffffff');
        root.style.setProperty('--secondo-color', Secondcolor === '#2d2f33' ? '#f0f0f0' : '#2d2f33');
        root.style.setProperty('--terzo-color', Terzocolor === '#e6e6e6e3' ? '#585151' : '#e6e6e6e3');
        root.style.setProperty('--quarto-color', Quartocolor === '#494949e3' ? '#bdbdbde3' : '#494949e3');
    });
});



// animations
const elements = document.querySelectorAll('.fade-in-on-scroll');

function handleScroll() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// show the widget
document.querySelector('.widget').addEventListener('click', (event) => {
    event.preventDefault();
    var box = document.querySelector('.box');
    box.classList.toggle('hidden');
});

// show the contact
var toggleForm = document.getElementById('toggleForm');
    var formContainer = document.getElementById('formContainer');

    toggleForm.addEventListener('click', function(e) {
        e.preventDefault();
        formContainer.classList.toggle('visible'); 
});

// telegram
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var message = "Name: " + formData.get('fname') + "\n";
    message += "Email: " + formData.get('email') + "\n";
    message += "Message: " + formData.get('message');

    var chatId = 5491711090;
    var token = '6804544016:AAECGISla263Q4XtTu913Km-lQ0bR_jVzGg';
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage';

    var data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent to Telegram:', data);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error sending message to Telegram:', error);
        alert('Error sending message. Please try again later.');
    });
});