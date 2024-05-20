const images = [
    "coding1.jpg",
    "coding8.jpg",
    "coding9.jpg",
    "coding10.jpg"
  ];

  let currentIndex = 0;
  const displayedImage = document.getElementById("displayed-image");
  
  function displayImage(index) {
    if (index < 0) {
      index = 0;
      alert("Gambar sudah di awal!");
    } else if (index >= images.length) {
      index = images.length - 1;
      alert("Gambar sudah di akhir!");
    }
    displayedImage.src = "./image/" + images[index];
    currentIndex = index;
  }
  
  displayImage(currentIndex);
  
  function next_image() {
    displayImage(currentIndex + 1);
  }
  
  function prev_image() {
    displayImage(currentIndex - 1);
  }
  