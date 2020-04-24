let data = {
    photo: 'images/nz_01.jpg',
    title: 'Rocks',
    description: 'This image was taken in New Zealand, 2020.'
  };

$('#photo').attr('src', data.photo);

let currentPhoto = 0;

let imagesData = ['images/nz_01.jpg', 'images/nz_02.jpg', 'images/nz_03.jpg', 'images/nz_04.jpg', 'nz_05.jpg', 'nz_06.jpg', 'nz_07.jpg', 'nz_08.jpg'];

$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
};

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
  if(currentPhoto++;
  loadPhoto(currentPhoto);
})

