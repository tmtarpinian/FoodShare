const BASE_URL = 'http://localhost:3000'

window.addEventListener('load', () => {
    Visit.getVisits()
    
})

function clickableLinks(){
    let visits = document.querySelectorAll('.visit-li')
    visits.forEach(visit => visit.addEventListener('click', showVisit))
    let items = document.querySelectorAll('.item-li')
    items.forEach(item =>{
        item.addEventListener('click', showItem)
    })
    document.getElementById('newVisit').addEventListener('click', createVisitForm)
    document.getElementById('visits').addEventListener('click', Visit.getVisits)  
    document.getElementById('visits2').addEventListener('click', Visit.getVisits)  
    document.getElementById('items').addEventListener('click', Item.displayItems)
    document.getElementById('items2').addEventListener('click', Item.displayItems)
    let newItems = document.querySelectorAll('.new-item-link')
         newItems.forEach(item => item.addEventListener('click', createItemForm))


    let visitLinks = document.querySelectorAll('#itemsOl li ul li a')
    visitLinks.forEach(link => link.addEventListener('click', showVisit)) 
    
    let editVisits = document.getElementsByClassName('edit-visit-link')
    for (const element of editVisits) {
        element.addEventListener('click', editVisit)                            
    }
      
    let deleteVisits = document.getElementsByClassName('delete-visit-link')
    for (const element of deleteVisits) {
        element.addEventListener('click', deleteVisit)                           
    }

      
    let deleteItems = document.getElementsByClassName('delete-item-link')
    for (const element of deleteItems) {
        element.addEventListener('click', deleteItem)                           //define this functions
    }
    
}


function clearPlaceHolderOnClick(textField){
    event.target.value = ""
}


function clearForm(){
    let createVisitForm = document.getElementById('createVisitForm')
    createVisitForm.innerHTML = ""
}


function clearItemForm(){
    let form = document.getElementById('createItemForm')
    form.innerHTML = ""
}


function tempWarning(){
    let warning = document.getElementById("temp-warning")
    warning.remove()
}
