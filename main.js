$(document).ready(function () {
    
//1. Show me how to calculate the average price of all items.
    //Steps. .reduceLoop, convert from object, return price, shorten decimels, 
   
    function getAvgPrice() {
        var totalPrice = items.reduce(function (a, b) {
            if (typeof a === "number") {
                return a + b.price;
            } else {
                return a.price + b.price;
            }
        });
        return (totalPrice/items.length).toFixed(2); 
    };
    var answer1el = document.getElementById("answer1");
    answer1el.innerHTML = answer1el.innerHTML + getAvgPrice();

   
    // -----------------------------------------------------------------------------
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD.
    //Filter from 14-18.
    
    function range() {
      var priceRange = items.filter(function (price[, items]) {
        return var listedRange = items.price <= 18 &&
        items.price >= 14;                                                                       })
        return (listedRange.length);
        $("#answer2 p").html();                                                                    }
    var answer2elem = document.getElementById("answer2");
    answer2elem.innerHTML = answer2elem.innerHTML + range();
    
    
    
    //-----------------------------------------------------------------------
    //3. Which item has a "GBP" currency code? Display it's name and price. Find &pound.
    // 
    var gbp = items.filter(function (items) {
        if (items.price == "&pound") {
         return true; 
         } else {
             return false;
         }
    })
    var answer3elem = document.getElementById("answer3");
    answer3elem.innerHTML = answer3elem.innerHTML + 
    
        
    //---------------------------------------------------------
    //4. Display a list of all items who are made of wood. Find wood from the materials properties.
    function findWood {
        function searchArray.filter(items[, ])
      if (items.materials === "wood")
          return true;
    } else {
        return false;
    };
    
    
    
    
    
        
    //-------------------------------------------------------------------------------------
    //5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of. Make a new array out of property-materials.
    function numOfMaterials() {
        
    }
    
    
    
    
    //------------------------------------------------
    //6. How many items were made by their sellers? Fine who_made = "i_did"
   
        


});//CLOSES DOCUMENT READY