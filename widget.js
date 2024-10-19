(function () {
  // Function to inject the widget and popup modal into the page
  function injectWidget() {
    const widgetContainer = document.querySelector('.floating-widget');

    if (!widgetContainer) {
      return; // Exit if no widget container is found
    }

    // Create the floating image element
    const floatingImage = document.createElement('img');
    floatingImage.src = 'https://i.imghippo.com/files/FpCvP1729192980.jpg'; // Your image link here
    floatingImage.alt = 'Floating Widget';
    floatingImage.classList.add('floating-image');
    floatingImage.onclick = togglePopup;

    // Create the popup modal
    const popupModal = document.createElement('div');
    popupModal.id = 'popupModal';
    popupModal.classList.add('popup-modal');

    // Create the content inside the popup
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = togglePopup;

    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = 'https://solar-studios-chatbot.netlify.app/';  
    iframe.width = '100%';
    iframe.height = '500px';
    iframe.style.border = 'none';

    // Append everything together
    popupContent.appendChild(closeButton);
    popupContent.appendChild(iframe);
    popupModal.appendChild(popupContent);
    document.body.appendChild(floatingImage);
    document.body.appendChild(popupModal);
  }

  // Function to toggle the popup visibility
  function togglePopup() {
    const popup = document.getElementById('popupModal');
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  }

  // Inject widget styles
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .floating-image {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        z-index: 1000;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .popup-modal {
        display: none;
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 400px;
        height: 500px;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        z-index: 1000;
      }

      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 18px;
        cursor: pointer;
        color: #999;
      }

      .popup-content {
        padding: 0;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize widget and inject styles on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    injectStyles();
    injectWidget();
  });
})();
