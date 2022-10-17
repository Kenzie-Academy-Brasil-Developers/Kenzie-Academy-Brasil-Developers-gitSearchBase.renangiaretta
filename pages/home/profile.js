(localStorage.getItem('profUrl'))

let profUrl = (localStorage.getItem('profUrl'))

function headerButtons () {
    const containerHeaderButtons = document.getElementById('containerHeaderButtons')
    const mailBtn = document.createElement('button')
    const changeUserBtn = document.createElement('button')

    mailBtn.innerText = 'E-mail'
    mailBtn.id = 'mailBtn'
    changeUserBtn.innerText = 'Trocar de usuário'
    changeUserBtn.id = 'changeUserBtn'

    containerHeaderButtons.append(mailBtn, changeUserBtn)

    headerButtonsInteractions()

    return containerHeaderButtons
}
headerButtons()


function headerButtonsInteractions(){
    document.getElementById('changeUserBtn')
    document.getElementById('mailBtn')
    fetch(profUrl).then((response) => {
        return response.json()}).then((response) => {
            changeUserBtn.addEventListener('click', event => {
                window.location.href = '../../index.html'        
        })
        
        mailBtn.addEventListener('click', event => {
            window.location.href = `mailto:${response.mail}`
        })
        })        
}


function requisicaoProfile() {
    fetch(profUrl).then((response) => {
        return response.json()})
        .then((response) => {
            cardProfile(response)
        })   
}
requisicaoProfile()


function cardProfile(profile){
    const ul = document.getElementById('ulProfile')
    const li = document.createElement('li')
    const containerProfileItems = document.createElement('div')
    const cardProfileSpan = document.createElement('span')
    const containerProfileTexts = document.createElement('div')
    const cardProfileImg = document.createElement('img')
    const cardProfileName = document.createElement('h2')
    const cardProfileStack = document.createElement('span')

    cardProfileImg.src = profile.avatar_url
    cardProfileName.innerText = profile.name
    cardProfileStack.innerText = profile.bio


    containerProfileItems.classList = 'container_header_profile'
    containerProfileTexts.classList = 'flex_column mwidth_50'
    cardProfileImg.classList = 'profile_img'
    cardProfileName.classList = 'profile_name'

    cardProfileSpan.append(cardProfileImg)
    containerProfileTexts.append(cardProfileName, cardProfileStack)
    containerProfileItems.append(cardProfileSpan, containerProfileTexts)
    li.append(containerProfileItems)    
    ul.append(li)
    return ul
}


function requisicaoRepos() {
    fetch(`${profUrl}/repos`).then((response) => {
    return response.json()}).then((response) => {
        percorrerArrayUsers(response)
    })
}
requisicaoRepos()


function percorrerArrayUsers(array){
    const ul = document.getElementById('ulCards')
    ul.innerHTML = ''

    array.forEach((repo) => {
        const li = cardRepo(repo)
        ul.append(li)
    });
}


function cardRepo(repo) {
    const li = document.createElement('li')
    const containerCardItems = document.createElement('div')
    const containerCardTexts = document.createElement('div')
    const textCardTitle = document.createElement('h1')
    const textCardDescription = document.createElement('p')
    const containerCardButtons = document.createElement('div')
    const btnRepo = document.createElement('button')
    const btnDemo = document.createElement('button')

    containerCardItems.id = 'containerCardItems'
    textCardTitle.innerText = repo.name
    textCardDescription.innerText = repo.description

    btnRepo.innerText = 'Repositório'
    btnRepo.id = 'btnRepo'
    document.getElementById('btnRepo')

    btnDemo.innerText = 'Demo'
    btnDemo.id = 'btnDemo'

    containerCardItems.classList = 'container_card_items'
    containerCardTexts.classList = 'container_card_texts'
    containerCardButtons.classList = 'container_card_buttons'

    containerCardTexts.append(textCardTitle, textCardDescription)
    containerCardButtons.append(btnRepo, btnDemo)
    containerCardItems.append(containerCardTexts, containerCardButtons)
    li.append(containerCardItems)


    function buttonsInteractions () {
        btnRepo.addEventListener('click', event => {
            window.open(repo.html_url)
        })

        btnDemo.addEventListener('click', event =>{
            if(repo.homepage == null){
                document.getElementById('containerCardItems')
                const depoLess = document.createElement('span')
                depoLess.innerText = 'Este repositório nao possui demo.'
                depoLess.classList.add('red')
                containerCardItems.append(depoLess)

            }else {
                window.open(repo.homepage)
            }
            

        })
    }
    buttonsInteractions()

    return li
}

function headerButtonsInteractions(){
    document.getElementById('changeUserBtn')
    document.getElementById('mailBtn')
    fetch(profUrl).then((response) => {
        return response.json()}).then((response) => {
            changeUserBtn.addEventListener('click', event => {
                window.location.href = '../../index.html'        
        })
        
        mailBtn.addEventListener('click', event => {
            window.location.href = `mailto:${response.mail}`
        })
        })        
}



async function createArrSugested(){
    
    await fetch(profUrl).then(async (response) => {
            const response1 = await (response.json())
        // console.log(response1.avatar_url)
        let arrSugested = []
        arrSugested.push(response1.url)
        arrSugested.push(response1.avatar_url)
        // console.log(arrSugested)
        localStorage.setItem('arrSugested', arrSugested)
    })
}
createArrSugested()


