goHomeByLogo = () => {
  const contactButton = document.querySelector('.logo-header');
  contactButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
goHomeByLogo();

goHomeByArrow = () => {
  const contactButton = document.querySelector('.icone-header-voltar');
  contactButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
goHomeByArrow();

redirectSocialMenia = () => {
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
      } else if (id === 'whatsapp') {
        window.location.href = 'https://api.whatsapp.com/send?phone=551129175277';
      } else if (id === 'linkedin') {
        window.location.href = 'https://www.linkedin.com/company/ideia2001';
      } else if (id === 'linkedin') {
        window.location.href = 'https://www.linkedin.com/company/ideia2001';
      } else if (id === 'youtube') {
        window.location.href = 'http://3.bp.blogspot.com/-sbRzWXGOtUg/VKyLqYyurJI/AAAAAAAAAAM/wGbmdFErwz4/s1600/site_em_construcao.jpg';
      }
    });
  });
}

redirectSocialMenia();
