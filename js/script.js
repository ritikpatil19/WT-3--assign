let foodData = null;
let i;
let dropDown = document.getElementById('menu');
let option;


$(document).ready(function() {
   $.getJSON('https://davids-restaurant.herokuapp.com/menu_items.json', function(jd,success) {
      foodData = jd.menu_items;
      createList();
   });
});

function createList(e){
   for(i=0; i<foodData.length; i++){
            option = document.createElement('option');
            option.text = foodData[i].name;
            option.value = i;
            dropDown.appendChild(option);
         }
}


$('#menu').change(function(e){

   var selected = $(this).children("option:selected").val();
   console.log(selected);
   
   
   
   document.querySelector(".output").innerHTML=`<div class="panel panel-default" 
												style="font-family:Times New Roman;
												font-size:20px;
												color:white;
												width:500px;
												padding-right:30px;
												text-align:left;
												display:block;
												margin-top:50px;
												margin-left: 150px;
												border-radius:10px;
												background-color:#a55c1b;
												background-image: linear-gradient(125deg, #000000 40%, #a55c1b 64%);">
      <div class="panel-heading">
        <center> <h3 class="panel-title"><br>Your Menu Description !!</h3></center>
      </div>
      <div class="panel-body">
         <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-8">
               <ul class="list-group" style="list-style-type:none;color:wheat;">
                  <li><b>Id</b>: `+"  "+foodData[selected].id+`</li><br>
                  <li><b>Short name</b>: `+"  "+foodData[selected].short_name+`</li><br>
                  <li><b>Name</b>: `+"  "+foodData[selected].name+`</li><br>
                  <li><b>Description</b>: `+"  "+foodData[selected].description+`</li><br>
                  <li><b>Price small</b>: `+"  "+foodData[selected].price_small+`</li><br>
                  <li><b>Price large</b>: `+"  "+foodData[selected].price_large+`</li><br>
                  <li><b>Small Portion Name</b>: `+"  "+foodData[selected].small_portion_name+`</li><br>
                  <li><b>Large Portion Name</b>:`+"  "+foodData[selected].large_portion_name+` </li><br>
               </ul>
               
            </div>
            <div class="col-md-2">
            </div>
            </div>
            </div>
      </div>`;
      });
   
 