var divTag = document.createElement("div")
divTag.setAttribute("id", "mouseoverEventListener")
divTag.innerHTML = "This is Div Tag"
divTag.addEventListener("mouseover", function mouseoverFunction(){
    var getById = document.getElementById("mouseoverEventListener")
    getById.style = "background-color: red; height: 250px;"
})
document.body.append(divTag)