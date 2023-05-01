var container = document.createElement("div");
 container.className = "container";
 var row = document.createElement("div");
 row.classList.add("row", "m-3");
 container.append(row);

 // Function to get a random card from the deck
async function phoneValidation() {
    try {
      var response = await fetch("https://phonevalidation.abstractapi.com/v1/?api_key=5c55327fc279459f83cbf16a29e488cb&phone=14152007986");
      var data = await response.json();
      var { phone, valid, format, country, location} = data;

      //console.log(data); // or do something else with phone code
        // for loop is not used because it is an single object    
      row.innerHTML +=`<div class="col-md-3">
      <div class="card border-primary mb-1 " style="width: 18rem;">
      <h4 align = center color = blue class="card-title1">Country code:${country.code}</h4>
      <h4 align = center color = blue class="card-title1">PhoneNo:${phone}</h4>
      <h4 align = center color = blue class="card-title1">Valid:${valid}</h4>
      <h4 align = center color = blue class="card-title1">Local format:${format.local}</h4>
      <h4 align = center color = blue class="card-title1">Location:${location}</h4>
      <h4 align = center color = blue class="card-title1">International format: ${format.international}</h4>
      <h4 align = center color = blue class="card-title1">prefix:${country.prefix}</h4>
      <h4 align = center color = blue class="card-title1">country Name:${country.name}</h4>
  </div>
  </div>`
  document.body.append(container);
     
    } catch (error) {
      console.error("Error:", error);
      alert("Reload the page and try again");
    }
  }
  
  // Call the function to get a PhoneValidation

  
phoneValidation();
