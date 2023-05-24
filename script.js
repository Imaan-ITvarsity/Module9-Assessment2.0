function updateClocks() {
  const now = new Date();

  const londonOffset = 0;
  const tokyoOffset = 9;
  const beijingOffset = 8;
  const capeTownOffset = 2;
  const dhakaOffset = 6;
  const istanbulOffset = 3;
  const jakartaOffset = 7;
  const bridgetownOffset = -4;
  const lagosOffset = 1;
  const moscowOffset = 3;
  const nairobiOffset = 3;
  const sydneyOffset = 10;
  const vancouverOffset = -7;

  const londonTime = (now.getUTCHours() + londonOffset + 24) % 24;
  const tokyoTime = (now.getUTCHours() + tokyoOffset + 24) % 24;
  const beijingTime = (now.getUTCHours() + beijingOffset + 24) % 24;
  const capeTownTime = (now.getUTCHours() + capeTownOffset + 24) % 24;
  const dhakaTime = (now.getUTCHours() + dhakaOffset + 24) % 24;
  const istanbulTime = (now.getUTCHours() + istanbulOffset + 24) % 24;
  const jakartaTime = (now.getUTCHours() + jakartaOffset + 24) % 24;
  const bridgetownTime = (now.getUTCHours() + bridgetownOffset + 24) % 24;
  const lagosTime = (now.getUTCHours() + lagosOffset + 24) % 24;
  const moscowTime = (now.getUTCHours() + moscowOffset + 24) % 24;
  const nairobiTime = (now.getUTCHours() + nairobiOffset + 24) % 24;
  const sydneyTime = (now.getUTCHours() + sydneyOffset + 24) % 24;
  const vancouverTime = (now.getUTCHours() + vancouverOffset + 24) % 24;

  setInterval(() => document.getElementById('london-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('tokyo-time').textContent =new Date ().toISOString().slice(11, 19), 1000);
  setInterval(() =>document.getElementById('beijing-time').textContent=new Date().toISOString().slice(11, 19),1000);
  setInterval(() =>document.getElementById('cape-town-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('dhaka-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('istanbul-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('jakarta-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('bridgetown-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() =>  document.getElementById('lagos-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('moscow-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('nairobi-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('sydney-time').textContent=new Date().toISOString().slice(11, 19), 1000);
  setInterval(() => document.getElementById('vancouver-time').textContent=new Date().toISOString().slice(11, 19), 1000);
}

updateClocks(); // Update the clocks immediately

setInterval(updateClocks, 1000); // Update the clocks every second