import React from "react";

function items(props){
return(
  
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card" style="width: 18rem;">
  <img src={props.img} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-primary">Add</button>
  </div>
</div>

    </div>
);

}
export default items;