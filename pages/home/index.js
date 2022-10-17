function showButton(){
        const searchInput = document.getElementById('searchInput')
        const formBtn = document.getElementById
        ('formBtn').disabled = true

        searchInput.addEventListener('keyup', () => {if(searchInput.value != ''){
                const formBtn = document.getElementById('formBtn')
                const formBtnDisabled = document.getElementById('formBtn').disabled = false
                formBtn.classList.remove('deactivated')
                formBtn.classList.add('activated')
            }else{
                const formBtn = document.getElementById('formBtn').disabled = true
            }
        })
    }
showButton()


function findUser () {
    formBtn.addEventListener('click', event =>{
        async function getData () {
            await fetch(`https://api.github.com/users/${searchInput.value}`).then((response) => {
                console.log(response)
                if (response.ok) {
                    return (response.json()).then((response) => {
                        const profUrl = response.url
                        const profImg = response.avatar_url

                        console.log(profUrl)
                        localStorage.setItem('profUrl', profUrl)
                        localStorage.setItem('profImg', profImg)
                        document.getElementById('formBtn').remove()

                        function showLoadingBtn() {
                            const btn = document.getElementById('formBtnContainer')
                            const loadingBtn = document.createElement('button')
                            const loadingBtnSpan = document.createElement('span')
                            const loadingBtnImg = document.createElement('img')

                            loadingBtn.classList = 'button'
                            loadingBtnImg.classList = 'buttonImg'

                            loadingBtnImg.src = '../../assets/img/spinner.png'
                            loadingBtn.appendChild(loadingBtnImg)
                            loadingBtnSpan.appendChild(loadingBtn)
                            btn.appendChild(loadingBtnSpan)

                            return btn
                        }
                        showLoadingBtn()
                        setTimeout(() => {
                            window.location.href = 'pages/home/profile.html'
                        }, 1500);
                    })
                } else {
                    response.json().then(response => {
                        const showError = document.getElementById('error')
                        error.classList.add('red')
                        showError.innerText = 'Usuário não encontrado',

                        form.appendChild(showError)

                        return showError



                        // throw new Error(response.message)
                        // console.log('O usuário não foi encontrado')
                        // console.log(`Não foi possível encontrar o usuário. Erro: "${response.status}" "${response.message}"`)
                    })
                }
            })
        }
        return getData()
    })
    
}
findUser()



// function cardSugested(){
//     const li = document.createElement('li')
//     const cardContainer = document.createElement('div')
//     const cardText = document.createElement('span')
//     const cardContainerImg = document.createElement('span')
//     const cardImg = document.createElement('img')

//     cardText.innerText = 'Achados recentemente'
//     cardImg.src = IMAGEMOBTIDAPELOFETCH

//     cardContainer.append(cardText, cardContainerImg)
//     cardContainerImg.appendChild(cardImg)
//     li.append(cardContainer)

//     return li
// }

// function renderList (array) {
//     const ul = document.getElementById('ulRecentlyFound')
//     ul.innerHTML = ''

//     array.forEach(element => {
//         const li = cardSugested(element)
//         ul.append(li)
//     });
// }

