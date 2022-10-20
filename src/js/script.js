redirectToContectPage = () => {
  const contactButton = document.getElementById('contact');
  contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
}

redirectToContectPage();

redirectSocialMenia = () => {
  console.log('Cheguei!')
  const socialLink = document.querySelectorAll('.socialLink');
  socialLink.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('id');
      if (id === 'site') {
        window.location.href = 'https://ideia2001.com.br';
      } else if (id === 'facebook') {
        window.location.href = 'https://www.facebook.com/Ideia2001';
      } else if (id === 'instagram') {
        window.location.href = 'https://www.instagram.com/ideia2001';
      }
    });
  });
}

redirectSocialMenia();
