class MailService {
   constructor(sender) {
      this.sender = sender;
   }

   sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
   }
}

class WhatsAppService extends MailService {
   constructor(sender, isBusiness) {
      super(sender); // constructor overriding wajib menggunakan method super()
      this.isBusiness = isBusiness;
   }

   // Overriding method
   sendMessage(message, receiver) {
      // Memanggil method sendMessage pada superclass
      super.sendMessage(message, receiver);
      console.log('~ Message sent via WhatsApp');
   }
}

const mailService = new MailService('Some Sender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'Some Receiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');