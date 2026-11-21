const title = document.getElementById("title")
const room = document.getElementById("room")
const category = document.getElementById("category")
const message = document.getElementById("message")
const complete = document.getElementById("complete")

const tickets = [

]

function render(){
    title.textContent = ''
    room.textContent = ''

    const index = category.value
    category.textContent = ''
    tickets.forEach((ticket, index) =>{
        const option = document.createElement("option")
        option.value = index
        option.textContent = ticket.title + ' в ' + ticket.room
        category.append(option)
    })
}