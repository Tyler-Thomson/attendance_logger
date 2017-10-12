////////////////////// Code snippets I'm keeping to possibly reuse later






//Spawn child process for ping command//////////////////////////
const ping = spawnSync('ping', ['-c', '5', session.client_ip]);
ping.stdout.on('data', (data) => {
  var client_ip = data.toString();
  console.log(`stdout: ${data}`);
});
ping.stderr.on('err', (err) => {
  // return res.json(err);
  console.log(`stderr: ${error}`);
});
///////////////////////////////////////////////////////////////
//By-the-book child process spawning
}else{
  session.client_ip = req.connection.localAddress
  var client_ip = session.client_ip
  const arp = spawnSync('arp', ['-a']);

  arp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  arp.stderr.on('err', (err) => {
    console.log(`stderr: ${err}`)
  });
  return res.json(user);
}
///////////////////////////////////////////////////////////////
