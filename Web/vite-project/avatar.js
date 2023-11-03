const imageField = document.querySelector("#image-field");
const imagePreview = document.querySelector("#image-preview");

const loadImage = (e) => {
    const filePath = e.target || window.event.srcElement;

    const file = filePath.files;

    const fileReader = new FileReader();

    fileReader.onload = () => {
        imagePreview.src = fileReader.result;
    };

    fileReader.readAsDataURL(file[0]);
};

imageField.addEventListener("change",loadImage);

document.addEventListener('DOMContentLoaded', function() {
    const imageField = document.getElementById('image-field');
    const imagePreview = document.getElementById('image-preview');
    const uploadIcon = document.querySelector('.bi-cloud-arrow-up');
  
    imageField.addEventListener('change', function() {
      const file = this.files[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        imagePreview.src = reader.result;
        uploadIcon.style.display = 'none';
      }
  
      reader.readAsDataURL(file);
    });
  });
  