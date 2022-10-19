redirectToContectPage = () => {
  const contactButton = document.getElementById('contact');
  contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
}

redirectToContectPage();