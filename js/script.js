 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TK3Y65GNZT');



  (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('WgTpVebdXKvW5nVQU');
        })();


window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }



emailjs.init('WgTpVebdXKvW5nVQU');

  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_oq827xo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60519614067c2605c0b939c4/1f0vb4gdc';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('a.scroll-top').fadeIn('slow');
    } else {
        $('a.scroll-top').fadeOut('slow');
    }
});
$('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});