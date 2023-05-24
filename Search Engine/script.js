
var searchResults=document.getElementById("searchresults")
var searchBox=document.getElementById("search-input")
var spinnerElement=document.getElementById("spinner")


function creatSearchResults(result){


    searchResults.style.textAlign="left"
    let {title,link,description}  = result
    //title element
    //searchResults.removeChild(resultElement)
    resultElement=document.createElement("div")

    searchResults.appendChild(resultElement)
    resultElement.classList.add("result-container")

    let titleElement=document.createElement("a")
    titleElement.textContent=title
    titleElement.href=link
    titleElement.target="_blank"
    resultElement.appendChild(titleElement)
    titleElement.classList.add("title")

    let breakElement=document.createElement("br")
    searchResults.appendChild(breakElement)

    //link element
    let linkElement=document.createElement("a")
    linkElement.textContent=link
    linkElement.href=link
    linkElement.target="_blank"
    resultElement.appendChild(linkElement)
    linkElement.classList.add("link")



    //description element
    let descriptionElement=document.createElement("p")
    descriptionElement.textContent=description
    resultElement.appendChild(descriptionElement)
    descriptionElement.classList.add("description")
    
    searchResults.appendChild(breakElement)

}

function displayResults(search_results){
  spinnerElement.classList.add("d-none")
    if (search_results.length===0){
      searchResults.textContent="No results are Found"
      searchResults.style.textAlign="center"
    }
    for (result of search_results){
        /*let {title,link,description}  = result
        console.log(title)
        console.log(link)
        console.log(description)*/
        creatSearchResults(result)
    }

}
    


function gettingSearchInput(event){
    
  if (event.key==="Enter"){

    spinnerElement.classList.remove("d-none")


    searchResults.textContent=""

    let inputValue=searchBox.value

    let url = "https://apis.ccbp.in/wiki-search?search="+inputValue;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
        console.log(search_results.length)

      });
    
    }
}
searchBox.addEventListener("keypress", gettingSearchInput)



