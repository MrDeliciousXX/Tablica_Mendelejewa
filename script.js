document.querySelectorAll('.element').forEach(item => {
    item.addEventListener('click', function() {
      let element = item.getAttribute('data-element');
      let gifPath = `gifs/${element}.gif`; // Zakładając, że GIFy są w folderze 'gifs'
      document.getElementById('element-animation').src = gifPath;
    });
  });