const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)
 
  if(dayExist){
    alert('Dia já incluso ⛔')
    return
  }
  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today)
})

form.addEventListener('change', function save(){
  localStorage.setItem('NLWSetupHabits', JSON.stringify(nlwSetup.data))
})

//const data = {
// run: ["01-20", "01-22", "01-25"],
// outdoorWalk: ['01-15'],
// toStudy: ['01-16']
//}

const data = JSON.parse(localStorage.getItem('NLWSetupHabits')) || {}

nlwSetup.setData(data)
nlwSetup.load()
