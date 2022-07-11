import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import modal, { openModal } from './modules/modal';
import tabs from './modules/tabs';
import cards from './modules/cards';
import calc from './modules/calc';


window.addEventListener('DOMContentLoaded', function() {
const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000);

tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
modal('[data-modal]', '.modal', modalTimerId);
timer('.timer', '2022-07-11');
cards();
calc();
forms('form', modalTimerId);
slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner' 

});

});