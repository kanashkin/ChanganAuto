const modals = (openSelector, closeSelector, overlaySelector) => {
    const openBtn = document.querySelectorAll(openSelector),
        closeBtn = document.querySelector(closeSelector),
        overlay = document.querySelector(overlaySelector)

    const fadeIn = (el, timeout, display) => {
        el.style.opacity = 0
        el.style.display = display || 'block'
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1
        }, 10)
    }

    const fadeOut = (el, timeout) => {
        el.style.opacity = 1
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0
        setTimeout(() => {
            el.style.display = 'none'
        }, timeout)
    }

    openBtn.forEach( btn => {
        btn.addEventListener('click', () => {
            fadeIn(overlay, 700)
            const headerBlock = document.querySelector('.header__block')
            headerBlock.classList.remove('header__block_active')
        });
    })

    closeBtn.addEventListener('click', () => {
        fadeOut(overlay, 700)
    });
    

}

export default modals