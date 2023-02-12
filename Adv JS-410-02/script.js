
console.log("hello")
 const word= document.getElementById("inputsearch")
 console.log(word.value)
 const shortdef = document.getElementById("shortdef")

 const result =document.getElementById("result")
 
 async function searchword(){

    console.log()
    var value=word.value
    
    const res= await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${value}?key=ccedbaac-fd35-4036-98b0-548da780b909`)
    console.log(res)
     const data = await res.json()
     console.log(data)
     
            // console.log(ele)
            console.log(data[0].shortdef)
            
            result.innerHTML=`
            <p>${data[0].shortdef[0]} </p>
            <audio controls>  
            <source src="koyal.mp3" type="audio/mpeg">    
          </audio> `
       
}