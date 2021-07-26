const endPoint = "http://localhost:3000/api/v1/travelgems";

document.addEventListener('DOMContentLoaded', () => {
  //fetch and load travel gems
    getTravelGems()

    const createTravelgemsForm = document.querySelector("#create-travelgem-form")

    createTravelgemForm.addEventListener('submit', (e) =>
    createFormHandler(e))
})


function getTravelGems() {
    fetch(endPoint)
      .then(res => res.json())
      .then(travelgems => {
        // remember our JSON data is a bit nested due to our serializer
        travelgems.data.forEach(travelgem => {
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          render(travelgem)
        })
      })
    }


    function render(travelgem) {
      const travelgemMarkup = 
      `<div data-id=${travelgem.id}>
        <img src=${travelgem.attributes.image_url} height="200" width="250">
        <h3>${travelgem.attributes.title}</h3>
        <p>${travelgem.attributes.destination.name}</p>
        <button data-id=${travelgem.id}>edit</button>
      </div>
      <br><br>`;

      document.querySelector('#travelgem-container').innerHTML += travelgemMarkup
    }
          
   function createFormHandler(e) {
     e.preventDefault()
      const titleInput = document.querySelector('#input-title').value
      const descriptionInput = document.querySelector('#input-description').value
      const imageInput = document.querySelector('#input-url').value
      const destinationId = parseInt(document.querySelector('#categories').value)
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
      render(travelgemData)
    })
  }
  
