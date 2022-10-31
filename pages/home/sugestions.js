const sugest = document.getElementById('recentlyFound')

function createList (array) {
    const arrSugested = JSON.parse(localStorage.getItem('arrSugestions'))
    const arrToShow = arrSugested.slice(0, 3)
    console.log(arrToShow)
    arrToShow.forEach(element => {
        const imgContainer = document.createElement('div')
        const img = document.createElement('img')
        const spanContainer = document.createElement('span')
        const spanText = document.createElement('p')


        spanContainer.classList = 'span_container text1'
        spanText.innerText = 'Acessar este perfil'
        imgContainer.classList = 'acess'
        spanContainer.id = `${element.login}`
        img.classList = 'sugested_img'
        img.addEventListener('mouseover', event => {
            document.getElementById(`${element.login}`).style.visibility='visible'
        })
        img.addEventListener('mouseout', event => {
            document.getElementById(`${element.login}`).style.visibility='hidden'
        })
        img.addEventListener('click', event => {
            localStorage.setItem('profUrl', element.url)
            window.location.href = 'pages/home/profile.html'
        })

        img.src = element.avatar_url

        spanContainer.appendChild(spanText)
        imgContainer.append(img, spanContainer)
        sugest.appendChild(imgContainer)
    });


}
createList()