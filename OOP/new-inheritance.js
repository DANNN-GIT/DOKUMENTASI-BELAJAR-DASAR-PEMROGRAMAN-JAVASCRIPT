class MailService {
   constructor(sender) {
      this.sender = sender;
   }
 
   sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
   }
}

class WhatsAppService extends MailService {
   sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
         this.sendMessage(message, receiver);
      }
   }
}

class EmailService extends MailService {
   sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
         this.sendMessage(message, receiver);
      }, delay);
   }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error, is not a function 

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 2000);
// email.sendBroadcastMessage(); // Error, is not a function

console.log(whatsapp instanceof WhatsAppService);
console.log(whatsapp instanceof EmailService);
console.log(whatsapp instanceof MailService);

console.log(email instanceof WhatsAppService);
console.log(email instanceof EmailService);
console.log(email instanceof MailService);