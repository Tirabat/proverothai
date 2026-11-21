const title = document.getElementById("title")
const room = document.getElementById("room")
const category = document.getElementById("category")
const message = document.getElementById("message")
const complete = document.getElementById("complete")
const ticketList = document.getElementById("ticketList")

const tickets = [
    { title: 'Проектор не включается', room: '203', category: 'Оборудование', done: false },
    { title: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false },
    { title: 'В коридоре не горит свет', room: 'Коридор, 2-й этаж', category: 'Другое', done: true }
]

complete.addEventListener('click', () => {
    const titl = title.value.trim()
    const roo = room.value.trim()

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

    tickets.forEach((ticket, index) => {
        const li = document.createElement('li')

        const info = document.createElement('span')
        info.textContent = ticket.title + ' в ' + ticket.room
            + ' (' + ticket.category + '). '
        li.append(info)

        const status = document.createElement('span')
        status.textContent = ticket.done ? 'Выполнена' : 'Открыта'
        status.className = ticket.done ? 'status-done' : 'status-open'
        li.append(status)

        if (!ticket.done) {
            const doneBtn = document.createElement('button')
            doneBtn.textContent = 'Выполнить'
            doneBtn.addEventListener('click', () => {
                tickets[index].done = true
                render()
            })
            li.append(doneBtn)
        }

        const delBtn = document.createElement('button')
        delBtn.textContent = 'Удалить'
        delBtn.addEventListener('click', () => {
            tickets.splice(index, 1)
            render()
        })
        li.append(delBtn)

        ticketList.append(li)
    })
}

render()