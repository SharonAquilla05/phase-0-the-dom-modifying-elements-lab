// Write your code here!
// const element = document.createElement('div')

// document.body.appendChild(element)

// const ul = document.createElement("ul")

// for(let i = 0; i < 5; i++){
//     const li = document.createElement('li')
//     li.id = i
//     li.textContent = i + 1
//     ul.appendChild(li)
// }

// ul.innerHTML = "<li>1</li><li>2</li><li>3</li><script>console.log('malicious')</script>"

// document.body.appendChild(ul)


// QUERY SELECTOR EXAMPLE
// main.appendChild(ul)

// const liSelected = document.querySelector("main#main ul li:nth-child(1)")
// console.log(liSelected)

// const main = document.getElementById("main")
// main.style.height = "640px"
// main.style.backgroundColor = "aqua"
// main.innerHTML = "<p>Hello World from JS Land</p>"

// const [p] = main.getElementsByTagName("p")
// main.removeChild(p)
// main.remove()
const main = document.querySelector("main#main")
main.remove()
// document.body.removeChild(main)


let newHeader = document.createElement("h1")
newHeader.id = 'victory'

newHeader.textContent = "Aquilla is the champion"


