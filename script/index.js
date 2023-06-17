const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById('images')

function navigationMember(direction) {
  activeMember += direction
  const member = members[activeMember]

  images.style.transform = `translateY(${-100 * activeMember}vh)`
}

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

btnPrev.addEventListener('click', () => navigationMember(-1))
btnNext.addEventListener('click', () => navigationMember(1))
