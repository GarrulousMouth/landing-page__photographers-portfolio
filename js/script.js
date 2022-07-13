document.querySelector('.hamburger').onclick = function(e) {
    document.querySelector('.hamburger').classList.toggle('hamburger-active')
    document.querySelector('.header').classList.toggle('header-active')
}

let arr = document.querySelectorAll('.form__input-box')

for (let i of arr) {
    i.onclick = function() {
        let input = i.querySelector('.form__input')
        input.style.display = 'block'
        i.querySelector('.placeholder').style.display = 'none'
        input.focus()
        input.onblur = function() {
            if (input.value.length == 0) {
            i.querySelector('.form__input').style.display = 'none'
            i.querySelector('.placeholder').style.display = 'inline'
        }
        }
        }
    }


let options = {
    threshold: [0.5]
}
function callback(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('icons-animated')
        }
    })

}
let observer = new IntersectionObserver(callback, options)
let icons = document.querySelectorAll('.icons_footer')

let time = 0.2;
for (let icon of icons) {
    observer.observe(icon, time)
    icon.style.animationDelay = time + 's'
    time += 0.2
}

let smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            document.querySelector('.hamburger').classList.remove('hamburger-active')
            document.querySelector('.header').classList.remove('header-active')
            e.preventDefault();
            let id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    };