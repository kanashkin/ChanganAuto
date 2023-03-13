const hamburger = (hamburgerSelector, closeSelector, blockSelector) => {
    const hamburgerBtn = document.querySelector(hamburgerSelector),
        closeBtn = document.querySelector(closeSelector),
        headerBlock = document.querySelector(blockSelector)

    hamburgerBtn.addEventListener('click', () => {
        headerBlock.classList.add('header__block_active')
    });
    
    closeBtn.addEventListener('click', () => {
        headerBlock.classList.remove('header__block_active')
    });
}

export default hamburger