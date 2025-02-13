document.addEventListener('DOMContentLoaded', () => {
    const flowersContainer = document.getElementById('flowers-container');
    const popupFlowersContainer = document.getElementById('popup-flowers');
    const modal = document.getElementById('modal');
    const dateModal = document.getElementById('date-modal');
    const openButton = document.getElementById('open-letter');
    const closeButton = document.getElementById('close-letter');
    const dateButton = document.getElementById('date-button');
    const yesButton = document.getElementById('yes-date');
    const noButton = document.getElementById('no-date');

    // Initialize EmailJS with your public key
    emailjs.init("104kxWAcydc7glswA");
    const emailEnabled = true;

    // Function to send email notification
    const sendEmailNotification = (response) => {
        if (!emailEnabled) {
            console.log('Email notifications are currently disabled');
            return;
        }

        const templateParams = {
            to_email: 'berdonjhon0@gmail.com',
            response: response,
            date: new Date().toLocaleString()
        };

        emailjs.send('service_1c21ijl', 'template_id', templateParams)
            .then(() => {
                console.log('Email notification sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email notification:', error);
            });
    };

    // Function to create popup flowers
    const createPopupFlowers = (x, y) => {
        const flowerEmojis = ['🌸', '🌺', '🌹', '🌷', '💐'];
        for (let i = 0; i < 5; i++) {
            const flower = document.createElement('div');
            flower.className = 'popup-flower';
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            flower.style.left = `${x - 20 + Math.random() * 40}px`;
            flower.style.top = `${y - 20 + Math.random() * 40}px`;
            popupFlowersContainer.appendChild(flower);

            // Remove flower after animation
            flower.addEventListener('animationend', () => {
                flower.remove();
            });
        }
    };

    // Create falling flowers
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = '🌸';
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
        flowersContainer.appendChild(flower);

        // Remove flower after animation completes
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Create initial flowers
    for (let i = 0; i < 12; i++) {
        setTimeout(createFlower, Math.random() * 5000);
    }

    // Continuously create new flowers
    setInterval(createFlower, 2000);

    // Add click handlers with flower effects
    const addFlowerEffect = (button) => {
        button.addEventListener('click', (e) => {
            createPopupFlowers(e.clientX, e.clientY);
        });
    };

    // Add flower effects to all buttons
    [openButton, closeButton, dateButton, yesButton, noButton].forEach(addFlowerEffect);

    // Modal controls
    openButton.addEventListener('click', () => {
        modal.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Date invitation controls
    dateButton.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            dateModal.classList.add('show');
        }, 300);
    });

    yesButton.addEventListener('click', () => {
        alert('Yay! 🎉 I can\'t wait to spend time with you, beshy! 💕');
        dateModal.classList.remove('show');
        sendEmailNotification('YES! They accepted the date invitation! 💝');
    });

    noButton.addEventListener('click', () => {
        alert('Aww... maybe next time then! 🥺');
        dateModal.classList.remove('show');
        sendEmailNotification('They said maybe next time 🥺');
    });

    // Close modals when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    dateModal.addEventListener('click', (e) => {
        if (e.target === dateModal) {
            dateModal.classList.remove('show');
        }
    });
});