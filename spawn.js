// Step 1.1 of process: ping the client's ip address so we can run the arp -a command
const { spawn } = require('child_process');

const ping = spawnSync('ping', [session.client_ip]);

ping.stdout.on('data', (data) => {
  var client_ip = 'client_ip';
});
ping.stderr.on('err', (err) => {
  return res.json(err);
});

//Step 1.2 of process: execute arp -a command to get mac address
const arp = spawnSync('arp', ['-a']);

ping.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
ping.stderr.on('err', (err) => {
  console.log(`stderr: ${err}`)
});
 
