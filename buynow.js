  //function that display value
  const items = []
  const prices = []
  function calc(item, price) {
      items.push(item);
      prices.push(price);
  }

  function checkout() {
      count = 0
      for(i=0; i<items.length; i++)
      {
          document.getElementById("disp").innerHTML += (i + 1) + ": " + items[i] + " - INR " + prices[i] + "<br />";
      
          count += prices[i]
      }
      document.getElementById("line").innerHTML = "The total cost is:"
       document.getElementById("fin").innerHTML = count
  }