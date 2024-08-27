'use strict';
const course = document.querySelector('.lang');
const btnCloseModal = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const btnOpencourse = document.querySelectorAll('.courses');

const opencourse = function () {
  course.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closecourse = function () {
  course.classList.add('hidden');
  overlay.classList.add('hidden');
};
const btnOverLay = function () {
  course.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpencourse.length; i++) {
  btnOpencourse[i].addEventListener('click', opencourse);
}
btnCloseModal.addEventListener('click', closecourse);
overlay.addEventListener('click', btnOverLay);

document.addEventListener('keydown', function (e) {
  // console.log(e);
  // console.log(e.key);
  if (e.key === 'Escape') {
    course.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
