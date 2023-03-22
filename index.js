const wol = require("wol");

function send_magic_packet(mac_address) {
  wol.wake(mac_address, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Pacote WoL enviado para ${mac_address}`);
    }
  });
}
// Chama a função "send_magic_packet()" com o endereço MAC do seu computador
send_magic_packet("64-32-A8-23-C6-D4");
