import './modules/isWebp.js';
import hamburger from './modules/hamburger.js';
import modals from './modules/modals.js';
import scroll from './modules/scroll.js';

window.addEventListener('DOMContentLoaded', () => {
    hamburger('.hamburger', '.header__close', '.header__block')
    modals('button[data-modal="consultation"]', '.modal__close', '.overlay')
    scroll('a[href*="#"]')
})
