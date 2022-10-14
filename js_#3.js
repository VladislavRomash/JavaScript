const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (event) => console.dir(event)
const handler2 = () => alert('one')
const handler3 = (e) => {
    console.log(e.currentTarget.id)
}
const handler4 = (e) => {
    console.log(e.target.id)
}
const handler5 = (e) => {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        alert(e.target.id)
        console.log(e)
    } else console.log(e)
}
const handler6 = (e) => {
    e.stopPropagation()
    alert('medium')
    console.log(e)
}
const handler7 = (e) => {
    e.stopPropagation()
    alert('big')
    console.log(e)
}

sm.onclick = handler2
sm.onclick = null // old_School

sm.addEventListener('click', (e) => console.dir(e)) // #123
sm.removeEventListener('click', (e) => console.dir(e)) // #147

sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2)

sm.removeEventListener('click', handler1)
sm.removeEventListener('click', handler2)

// bubbling
sm.addEventListener('click', handler3) // 'small'
sm.addEventListener('click', handler4) // 'small'

md.addEventListener('click', handler3) // 'medium'
md.addEventListener('click', handler4) // 'small'

bg.addEventListener('click', handler3) // 'big'
bg.addEventListener('click', handler4) // 'small'

sm.addEventListener('click', handler5)
md.addEventListener('click', handler6)
bg.addEventListener('click', handler7)

const link = document.getElementById('a')

const handlerLink = (e) => {
    e.preventDefault()
    alert('Are you sure?')
}

link.addEventListener('click', handlerLink)

