var client_ip = req.connection.localAddress

// Need to figure out escapes for grep expression
var child = spawn('arp -a | grep client_ip | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'', {
  shell: true
});
child.stdout.on('data', (data) => {
  console.log("stdout:", data.toString());
  var mac_address = data.toString();
});
child.stderr.on('data', (data) => {
console.error("stderr:", data.toString());
});

module.exports = {
  collect_mac: function(ip){
    console.log(ip)
    }
  }
