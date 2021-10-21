const endPoint = "http://localhost:3000/api/v1/travelgems";
//this is a string representing our data source 

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is loaded")
  //fetch and load travel gems
    getTravelGems()

    const createTravelgemForm = document.querySelector("#create-travelgem-form")
    createTravelgemForm.addEventListener("submit", (e) => createFormHandler(e))



// LIVE CODE - WITH TAO - PART - 
    document.querySelector("#user-comments")
    const createCommentForm = document.querySelector("#user-comments-form")
    
    
      
    createCommentForm.addEventListener("submit", (e) => {
      e.preventDefault()
      let comment = e.target.comments.value;
      document.querySelector("#user-comments").innerHTML += comment;
    })



//ENDS HERE 


  })   
     
    


     
     
  







function getTravelGems() {
    fetch(endPoint)
      .then(res => res.json())
      // Use this data inside of `json` to do DOM manipulation -name this whatever
      .then(travelgems => {
        // remember our JSON data is a bit nested due to our serializer- 
        // our data is in an Array - inside there's a 'data' key
        travelgems.data.forEach(travelgem => {
          //debugger
          //this is how i create a new instance of my travelgem class (backend)
          const newTravelgem = new Travelgem(travelgem, travelgem.attributes)
          
          


          document.querySelector('#travelgem-container').innerHTML += 
          newTravelgem.renderTravelgemCard()
         // render(travelgem)
        })
      })
    }


    
          
   function createFormHandler(e) {
     e.preventDefault()
      const titleInput = document.querySelector('#input-title').value
      const descriptionInput = document.querySelector('#input-description').value
      const imageInput = document.querySelector('#input-url').value
      const destinationId = parseInt(document.querySelector('#destinations').value)
      postFetch(titleInput, descriptionInput, imageInput, destinationId)
   }       
          
          
   function postFetch(title, description, image_url, destination_id) {
    // build my body object outside of my fetch
    const bodyData = {title, description, image_url, destination_id}
  
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(travelgem => {
      console.log(travelgem);
      const travelgemData = travelgem.data
      // render JSON response
      let newTravelgem = new Travelgem(travelgemData, travelgemData.attributes)
          
          document.querySelector('#travelgem-container').innerHTML += 
          newTravelgem.renderTravelgemCard()
    })
  }
  
