let data = {
    photo: 'images/nz_01.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  
  $('#photo').attr('src', data.photo);

let currentPhoto = 0;
let imagesData = ["nz_01.jpg", "nz_02.jpg", "nz_03.jpg", "nz_04.jpg", "nz_05.jpg", "nz_06.jpg", "nz_07.jpg", "nz_08.jpg"];
$('#photo').attr('src', imagesData[currentPhoto].photo);

