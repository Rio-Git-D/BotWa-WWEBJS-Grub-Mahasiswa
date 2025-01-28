import { Client, Message } from "whatsapp-web.js";

export const credit = (client: Client, message: Message): void => {
  const creditMessage = `
🤖 *Bot Info*:
- Dibuat oleh: riokentuahmi
- GitHub: https://github.com/username
- Teknologi: wweb.js
    `;
  client.sendMessage(message.from, creditMessage);
};
