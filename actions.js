const electron = require('electron');
const { ipcRenderer } = electron;
window.onload = () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!document.getElementById('video').files[0]) {
      document.getElementById('message').innerHTML = 'You must select a video first!';
    } else {
      const { path } = document.getElementById('video').files[0];
      console.log(path);
      ipcRenderer.send('video:submit', path);
    }
  });
}

ipcRenderer.on('video:duration', (event, duration) => {
  document.getElementById('message').innerHTML = 'Video duration: ' + duration;
});
