import './style.scss';
import $ from 'jquery';
// import axios from 'axios';
var cloneCount = 1;
$('body').css('background-image', "url('fond.jpg')");
$('#app').html($('<img>', { id: 'fish1', src: 'fish.png' }));
$('#app').append($('<img>', { id: 'fish2', src: 'clown-fish.png' }));
$('#fish1').clone().attr('id', `id${cloneCount++}`).insertAfter('#fish1');
$('#fish2').clone().attr('id', `id${cloneCount++}`).insertAfter('#fish2');
$('#app').append($('<img>', { id: 'fish3', src: 'fish1.png' }));
$('#app').append($('<img>', { id: 'fish4', src: 'fish2.png' }));
$('#app').append($('<img>', { id: 'alga', src: 'alga.png' }));
$('#alga').clone().attr('id', `id${cloneCount++}`).insertAfter('#alga');
$('#alga').clone().attr('id', `id${cloneCount++}`).insertAfter('#alga');
$('#fish1').on('click', function () {
  $('#app').append('<p>Je suis un poisson</p>');
});

$('#id1').animate({ 'margin-left': '200px' }, 4000);
$('#id2').animate({ 'margin-left': '2000px' }, 10000);
