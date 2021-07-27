class Travelgem {
    constructor(travelgem, travelgemAttributes) {
       
      this.id = travelgem.id
      this.title = travelgemAttributes.title
      this.description = travelgemAttributes.description
      this.image_url = travelgemAttributes.image_url
      this.destination = travelgemAttributes.destination
    Travelgem.all.push(this)
    //to help us know what this is - in the console
    console.log(this);
    } 


    renderTravelgemCard() {
        //check how it is nested in the browser 

        return `
        <div data-id="${this.id}" class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
          <div class="card text-center" >

            <div class="card-body" data-id="${this.id}">
            <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.description}</p>
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">Destination: ${this.destination.name}</small>
              </div>
            </div>
          </div>
        </div>
    
        `

      }

}


Travelgem.all = [];


