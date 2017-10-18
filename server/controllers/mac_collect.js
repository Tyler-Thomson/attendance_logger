var child_process = require('child_process');

module.exports = {
  collect_mac: function(ip){
    let client_ip = ip;
    var child = child_process.spawnSync(`arp -a | grep ${client_ip} | grep -o -E "([[:xdigit:]]\{1,2\}:)\{5\}[[:xdigit:]]\{1,2\}"`, {
      shell: true
    });
    mac_address = child.stdout.toString().trim();
    return mac_address
  }
}
