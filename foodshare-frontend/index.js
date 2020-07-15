const BASE_URL = 'http://localhost:3000'
//import { deleteVisit } from "./src/visit.js";

window.addEventListener('load', () => {
    getVisits()
    
})

function clickableLinks(){
    let visits = document.querySelectorAll('.visit-li')
    visits.forEach(visit =>{
        visit.addEventListener('click', showVisit)
    })
    document.getElementById('newVisit').addEventListener('click', createVisitForm)
    document.getElementById('visits').addEventListener('click', getVisits)  
    document.getElementById('items').addEventListener('click', displayItems)
    let visitLinks = document.querySelectorAll('#itemsOl li ul li a')
    visitLinks.forEach(link => link.addEventListener('click', showVisit))
     
    
    let edits = document.getElementsByClassName('edit-visit-link')
    for (const element of edits) {
        element.addEventListener('click', editVisit)                            //define this functions
    }
      
    let deletes = document.getElementsByClassName('delete-visit-link')
    for (const element of deletes) {
        element.addEventListener('click', deleteVisit)                           //define this functions
    }
    
}


function clearPlaceHolderOnClick(textField){
    event.target.value = ""
}


function clearForm(){
    let createVisitForm = document.getElementById('createVisitForm')
    createVisitForm.innerHTML = ""
}


//--------------------------------------------------------------ITEMS FUNCTIONS-------------------------//

function displayItems(){        //items index page
    let main = document.querySelector('#main')
    main.innerHTML = ""

    fetch(BASE_URL+"/items")
	.then(response => response.json())
    .then(main.innerHTML += `<h2> Here's a List of Items to Donate</h2> <ol id="itemsOl"></ol>`)
    .then(items => {
        items.forEach(item => {
            let li = `
                <li id="itemLi-${item.id}">               
                
                <a href="#" class="item-li" data-item-id="${item.id}">${item.name}</a> 
                    <a href="#" class='edit-item-link' data-edit-item-id="${item.id}">  Edit</a> 
                    <a href="#" class='delete-item-link' data-delete-item-id="${item.id}">  Delete</a>
                    <ul>
                        <li> Quantity: ${item.quantity} </li>
                        <li id="itemVisit"> Going to: <a href="#" data-visit-id="${item.visit.id}">${item.visit.food_pantry}</a></li>
                    </ul>
                </li>
            `
            document.querySelector("#itemsOl").innerHTML += li
        })
        
        clickableLinks()
    })
}

