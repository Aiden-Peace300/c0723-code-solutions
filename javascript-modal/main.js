const $clickButton = document.querySelector('.openButton');
const $popupWindow = document.querySelector('.surveryQuestionPopupWindow');
const $popup = document.querySelector('.popup');
const $okayButton = document.querySelector('.okay-button');

$clickButton.addEventListener('click', openModal);
$okayButton.addEventListener('click', closeModal);

function openModal() {
  $popupWindow.style.display = 'block';
  $popup.style.display = 'block';
}

function closeModal() {
  $popupWindow.style.display = 'none';
  $popup.style.display = 'none';
}
