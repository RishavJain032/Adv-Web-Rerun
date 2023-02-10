const quote = document.getElementById("quote")
const author = document.getElementById("author")
 async function next() {
    const response = await fetch("https://api.quotable.io/random")
    console.log(response);
    const data = await response.json()
    console.log(data);
    quote.innerText = data.content
    author.innerText = "~"+data.author

}
next()