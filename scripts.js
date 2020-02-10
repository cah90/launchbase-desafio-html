const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener("click", function() {
    const videoId = card.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
  })
}

document.querySelector(".close-modal").addEventListener(
  "click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
  }
  )
  
  document.querySelector(".maximize-modal").addEventListener(
    "click", () => {
      console.log(modal.classList.contains('maximize'))

    if(modal.classList.contains('maximize')) {
      modal.classList.remove('active')

      //console.log("active will be removed")
    } else {
      modal.classList.add('active')

      //console.log("active will be added")
    }
  })