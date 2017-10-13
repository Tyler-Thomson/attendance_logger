var child_process = require('child_process');
// Need to figure out escapes for grep expression
// var child = spawn('arp -a | grep client_ip | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'', {
//   shell: true
// });
// child.stdout.on('data', (data) => {
//   console.log("stdout:", data.toString());
//   var mac_address = data.toString();
// });
// child.stderr.on('data', (data) => {
// console.error("stderr:", data.toString());
// });

module.exports = {
  collect_mac: function(ip){
    var client_ip = ip
    var child = child_process.spawnSync(`arp -a | grep 192.168.1.21 | grep -o -E "([[:xdigit:]]\{1,2\}:)\{5\}[[:xdigit:]]\{1,2\}"`, {
      shell: true
    });
    console.dir(child.stdout);
    // child.stderr.on('data', (data) => {
    //   console.error("stderr:", data.toString());
    // });
    // child.stdout.on('data', (data) => {
    //   console.log("stdout:", data.toString());
    //   var mac_address = data.toString();
    // });
  }
}


// var child = child_process.execSync(`echo ${client_ip}`);
// console.log(child.toString());

//
//'([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'
