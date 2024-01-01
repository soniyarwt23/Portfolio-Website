
// Typing Effect
function typeEffect(element, text, typingSpeed = 100, breakTime = 2000) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(resetAndType, breakTime);
        }
    }

    function resetAndType() {
        element.textContent = ''; 
        index = 0; 
        type(); 
    }

    type();
}
const nameElement = document.getElementById('my-name');
typeEffect(nameElement, 'Soniya Rawat');




var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

// Smooth Scrolling
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
var isAutoScrolling = false;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        isAutoScrolling = true;
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0 || !isAutoScrolling) {
        clearInterval(interval);
        isAutoScrolling = false;
        return;
    }
    window.scrollBy(0, 50);
}

window.addEventListener('wheel', function() {
    isAutoScrolling = false;
})
// EmailJS Integration
emailjs.init("7aJHOiPXqFWxc8qQJ"); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    emailjs.sendForm('service_rz6c986', 'template_4nkkjgi', this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); 

        })
        .catch(function(error) {
            alert('Failed to send the message, please try again.');
        });
});
