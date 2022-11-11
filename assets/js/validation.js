function validation(event){

     event.preventDefault()
     var select=document.getElementById('selectValidate')
     var validateView=document.getElementById('validation')
     var userView=document.getElementById('user')
     var inputUserName=document.getElementById('userName').value
   
     var text = select.options[select.selectedIndex].text;
     
 
  
     userView.innerHTML= ` 
               
      
     <div style="
     padding: 0 15px;
 "> 
        <i class="fa-regular fa-user"></i>
        Olá <strong>`+inputUserName +`</strong> Seja Bem-vindo!
    </div>

     <div class="select" id="selectHome">
         <select>
           <option value="0">`+text +`</option>
           <option value="1">Selecione a forma de retirada</option>
           <option value="2">RETIRE NO BALCÃO</option>
           <option value="3">MESA</option>
         </select>
       </div>
 `;
     

 setTimeout(function init(){
    validateView.style.display="none"
 }, 1000);
}