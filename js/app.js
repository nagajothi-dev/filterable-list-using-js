var searchInput = document.querySelector('#search-input')
var contacts = document.querySelectorAll('.contact')

searchInput.addEventListener('keyup', function(){
    var searchInputValue = searchInput.value
    
    contacts.forEach(function(contact){
        if(contact.textContent.toUpperCase().includes(searchInputValue.toUpperCase())){
            contact.style.display = 'block'
        }else{
            contact.style.display = 'none'
        }
    })

})