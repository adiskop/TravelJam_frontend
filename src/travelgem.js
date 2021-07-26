class Travelgem {
    constructor(travelgem, travelgemAttributes) {
       
      this.id = travelgem.id
      this.title = travelgemAttributes.title
      this.description = travelgemAttributes.description
      this.image_url = travelgemAttributes.image_url
      this.destination = travelgemAttributes.destination
    Travelgem.all.push(this)
    } 


    renderTravelgemCard() {
        //check how it is nested in the browser 
        return `<div data-id=${this.id}>
          <img src=${this.image_url} height="200" width="250">
          <h3>${this.title}</h3>
          <p>${this.destination.name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;

      }

}


Travelgem.all = [];


