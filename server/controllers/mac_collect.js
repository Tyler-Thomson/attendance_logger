var child_process = require('child_process');

module.exports = {
  collect_one_mac: function(ip){
    let client_ip = ip;
    var child = child_process.spawnSync(`arp -a | grep ${client_ip} | grep -o -E "([[:xdigit:]]\{1,2\}:)\{5\}[[:xdigit:]]\{1,2\}"`, {
      shell: true
    });
    mac_address = child.stdout.toString().trim();
    return mac_address
  },
  collect_all_macs: function(){
    var child = child_process.spawnSync(`arp -a | grep -o -E "([[:xdigit:]]\{1,2\}:)\{5\}[[:xdigit:]]\{1,2\}"`, {
      shell: true
    });
    all_macs = child.stdout.toString().trim();
    return all_macs
  },
}
