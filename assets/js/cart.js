cartContainer=document.getElementById('cart')
 
cartContainer.innerHTML= `    

            <div class="controls" > 
                <button onclick="showCart()"><i class="fa-solid fa-chevron-left"></i></button>
                <button onclick="showCart()"><i class="fa-solid fa-xmark"></i></button>

            </div> 

                                `;  


                                showCart=( )=>{ 
 
                                    cartContainer.classList.toggle("showCart");
                                    
                                  }
                                 