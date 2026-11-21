const title      = document.getElementById("title")
const room       = document.getElementById("room")
const category   = document.getElementById("category")
const message    = document.getElementById("message")
const complete   = document.getElementById("complete")
const ticketList = document.getElementById("ticketList")

const tickets = [
    { title: 'Проектор не включается', room: '203', category: 'Оборудование', done: false },
    { title: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false },
    { title: 'В коридоре не горит свет', room: 'Коридор, 2-й этаж', category: 'Другое', done: false }
]

complete.addEventListener('click', () => {
    const titl = title.value.trim()
    const roo  = room.value.trim()

    if (titl === '') {
        message.textContent = 'Введите что случилось'
        return
    }
    if (roo === '') {
        message.textContent = 'Введите где это находится'
        return
    }
    if (category.value === '') {
        message.textContent = 'Сначала выберите категорию'
        return
    }

    const categoryText = category.options[category.selectedIndex].text

    tickets.push({
        title: titl,
        room: roo,
        category: categoryText,
        done: false
    })

    title.value = ''
    room.value = ''
    category.value = ''
    message.textContent = 'Заявка подана'
    render()
})

function render() {
    ticketList.textContent = ''

    tickets.forEach((ticket) => {
        const li = document.createElement('li')
        const status = ticket.done ? 'Выполнена' : 'Невыполнена'
        li.textContent = ticket.title + ' — ' + ticket.room
            + ' (' + ticket.category + '). ' + status
        ticketList.append(li)
    })
}

render()