const scroll = (linksSelector) => {
    const linksBtns = document.querySelectorAll(linksSelector)

    linksBtns.forEach( link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            let linkId = link.getAttribute('href')
            let blockId = document.querySelector('' + linkId)
            blockId.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    });

}

export default scroll