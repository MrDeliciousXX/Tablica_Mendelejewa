document.querySelectorAll('.element').forEach(item => {
    item.addEventListener('click', function() {
      let element = item.getAttribute('data-element');
      let gifPath = `gifs/${element}.gif`; // Zakładając, że GIFy są w folderze 'gifs'
      document.getElementById('element-animation').src = gifPath;
    });
  });

// Pobieramy wszystkie komórki tabeli
const cells = document.querySelectorAll('#periodic-table td');

// Funkcja obsługująca kliknięcie
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Usuwamy klasę "selected" z wszystkich komórek
    cells.forEach(c => c.classList.remove('selected'));
    
    // Dodajemy klasę "selected" do klikniętej komórki
    cell.classList.add('selected');
  });
});

// Pobranie elementów
const modal = document.getElementById("myModal");
const img = document.getElementById("element-animation");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

// Po kliknięciu na miniaturkę, obrazek zostaje wyświetlony w modalnym oknie
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src; // Ustawiamy źródło powiększonego obrazu
}

// Po kliknięciu w "X", zamknięcie modala
span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modal.style.display = "none";
  }
});