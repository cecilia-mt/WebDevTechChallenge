var url = window.location.href;
  var locale = url.split("/")[3];
  var onlineGreeting, offlineGreeting, department;

   window.$zopim||(function(d,s){var z=$zopim=function(c){
   z._.push(c)},$=z.s=
   d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
   _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
   $.src='//v2.zopim.com/?';z.t=+new Date;$.
   type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');

   switch(locale){

    case "es":
      onlineGreeting = 'Habla con nosotras';
      offlineGreeting = 'Nuestros consejeros no están disponibles en este momento, por favor deje un mensaje y nos pondremos en contacto con usted pronto';
      department = "spanish";
      break;

    case "pt-pt":
      onlineGreeting = 'Fale com a gente';
      offlineGreeting = 'Nossos conselheiros não estão disponíveis no momento, por favor deixe uma mensagem e entraremos em contato com você em breve';
      department = "portuguese";
      break;

    case "fr":
      onlineGreeting = 'Parlez-nous';
      offlineGreeting = 'Nos conseillers ne sont pas disponibles pour le moment, veuillez laisser un message et nous vous contacterons bientôt';
      department = "french";
      break;

    case "ch":
      onlineGreeting = '跟我們說話';
      offlineGreeting = '我們的顧問目前不可用，請留言，我們將盡快回复您';
      department = "chinese"
      break;

    case "rs":
      onlineGreeting = 'Поговорите с нами';
      offlineGreeting = 'Наши консультанты в настоящее время недоступны, пожалуйста, оставьте сообщение, и мы скоро свяжемся с вами';
      break;

    default 
      onlineGreeting = 'Chat with us';
      offlineGreeting = "Our counselors are not available at the moment, please leave a message and we will contact you soon";
      department = "english";  
      break;

   }

 $zopim(function() {
   $zopim.livechat.setGreetings({
   'online': onlineGreeting,
   'offline': offlineGreeting
   });
   $zopim.livechat.departments.filter(department);
 });