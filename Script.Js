document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menuIcon');
  var closeMenuIcon = document.getElementById('CloseMenu');
  var mobileNav = document.getElementById('MobileNav');

  menuIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    console.log('BarMenu')
  });
  closeMenuIcon.addEventListener('click', function() {
    mobileNav.classList.remove('active');
  });
  
});


document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoDemo = document.querySelector('.VideoDemo');
  const closeButton = document.querySelector('.close');

  if (playButton) {
    playButton.addEventListener('click', handlePlayButtonClick);
    playButton.addEventListener('click', handlePlayButtonClick);
  }

  if (closeButton) {
    closeButton.addEventListener('click', handleCloseButtonClick);
  }

  if (videoPlayer) {
    videoPlayer.addEventListener('ended', handleVideoEnd);
    videoPlayer.addEventListener('timeupdate', handleVideoTimeUpdate);
  }

  document.addEventListener('keydown', handleDocumentKeyDown);

  function handlePlayButtonClick(event) {
    event.preventDefault();
    console.log('El botón de reproducción ha sido clicado.');
    showVideoDemo();
    playVideo();
  }

  function handleVideoTimeUpdate() {
    if (videoPlayer.ended) {
      handleVideoEnd();      
    }
  }

  function handleDocumentKeyDown(event) {
    if (event.key === 'Escape') {
      handleVideoEnd();
    }
  }

  function showVideoDemo() {
    if (videoDemo) {
      videoDemo.style.visibility = 'visible';
      videoDemo.style.opacity = '1';
      videoDemo.style.top = '0px';
    }
  }

  function playVideo() {
    if (videoPlayer) {
      videoPlayer.play();
    }
  }

  function handleVideoEnd() {
    pauseVideo();
    hideVideoDemo();
    console.log('Video Pausado');
  }

  function pauseVideo() {
    if (videoPlayer) {
      videoPlayer.pause();
    }
  }

  function hideVideoDemo() {
    if (videoDemo) {
      videoDemo.style.opacity = '0';
      videoDemo.style.visibility = 'hidden';
      console.log('fin video');
    }
  }

  function handleCloseButtonClick(event) {
    event.preventDefault();
    handleVideoEnd();
  }
});


const flecha = document.querySelector('.Flecha');
const header = document.querySelector('header');
const headerHeight = header ? header.offsetHeight : 0;

if (flecha) {
  flecha.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Flecha Abajo');
    const sobreMiSection = document.getElementById('SobreMi');
    sobreMiSection.scrollIntoView({ behavior: 'smooth'}); 
    const scrollToPosition = sobreMiSection.offsetTop - headerHeight;
    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
  });
}


$(document).ready(function() {
  // Asigna el evento de clic a los artículos
  $('article').click(function() {
    var clickedArticle = $(this);

    // Si el artículo ya tiene la clase "active", se remueve esa clase y los estilos correspondientes
    if (clickedArticle.hasClass('active')) {
      clickedArticle.removeClass('active').find('.ECont, .VCont, .FCont, .HCont, .MACont, .WCont').slideUp();
    } else {
      // Cierra todos los demás divs internos excepto el del artículo clickeado
      $('article').not(clickedArticle).removeClass('active').find('.ECont, .VCont, .FCont, .HCont, .MACont, .WCont').slideUp();

      // Abre el div interno del artículo clickeado y agrega la clase "active"
      clickedArticle.addClass('active').find('.ECont, .VCont, .FCont, .HCont, .MACont, .WCont').slideDown();
    }

    // Muestra la clase del div interno del artículo clickeado en la consola
    console.log("Click en artículo:", clickedArticle.find('.ECont, .VCont, .FCont, .HCont, .MACont, .WCont').attr('class'));
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar'); // Reemplaza 'navbar' con el ID de tu barra de navegación
  const links = document.querySelectorAll('header a');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');

      // Verifica si el enlace es interno (comienza con '#')
      if (href.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(href);

        // Calcula la altura de la barra de navegación
        const navbarHeight = navbar.offsetHeight;

        // Obtiene la posición de desplazamiento del objetivo restando la altura de la barra de navegación
        const scrollToPosition = target.offsetTop - navbarHeight;

        // Desplaza la página suavemente hasta la posición de desplazamiento
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    });
  });



  document.getElementById('email').addEventListener('click', function() {
    const emailText = this.innerText;
  
    navigator.clipboard.writeText(emailText)
      .then(function() {
        // Agregar una clase de CSS al elemento para resaltarlo
      document.getElementById('email').classList.add('copied');
        alert('Texto copiado al portapapeles: ' + emailText);
        // Dentro de la función "then" del evento de clic del correo electrónico
setTimeout(function() {
  document.getElementById('email').classList.remove('copied');
}, 2000); // Elimina la clase después de 2 segundos (ajusta el tiempo según tus necesidades)

      })
      .catch(function(err) {
        console.error('Error al copiar al portapapeles:', err);
      });
  });
  
  
});

/* document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll(".lazy");

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
        entry.target.removeAttribute("data-src");
        entry.target.classList.remove("lazy");
        observer.unobserve(entry.target);
      }
    });
  });

  images.forEach(function(image) {
    observer.observe(image);
  });

  // Ocultar la pantalla de carga cuando todas las imágenes se hayan cargado
  const loader = document.getElementById("loader");
  const numImages = images.length;
  let loadedImages = 0;

  images.forEach(function(image) {
    image.addEventListener("load", function() {
      loadedImages++;

      if (loadedImages === numImages) {
        loader.style.display = "none";
      }
    });
  });
}); */






  
  