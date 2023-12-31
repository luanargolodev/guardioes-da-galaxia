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
const memberName = document.getElementById('member__name')

function changeMember(memberId) {
  activeMember = memberId
  const member = members[activeMember]

  images.style.transform = `translateY(${-100 * activeMember}vh)`

  memberName.classList = member.id

  changeStatusButtons()
  changeName(member.name)
}

function navigationMember(direction) {
  changeMember((activeMember += direction))
}

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

btnPrev.addEventListener('click', () => navigationMember(-1))
btnNext.addEventListener('click', () => navigationMember(1))

function changeStatusButtons() {
  btnPrev.disabled = activeMember === 0
  btnNext.disabled = activeMember === members.length - 1
}

const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
menu.addEventListener('click', changeMenu)

function changeMenu() {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId) {
  changeMember(memberId)
  changeMenu()
}
