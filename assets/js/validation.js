function validation(event){

     event.preventDefault()
     var select=document.getElementById('selectValidate')
     var selectValue=select.options[select.selectedIndex].value
     var validateView=document.getElementById('validation')
     var userView=document.getElementById('user')
     var inputUserName=document.getElementById('userName').value
   
     var text = select.options[select.selectedIndex].text;
     
 console.log(selectValue!=1)


    if(inputUserName.length>3 & selectValue!=1){
    
  
       userView.innerHTML= `  
                <div style="
                padding: 0 15px;
            "> 
                  <img src="assets/images/UserWhite.png" alt="" srcset="">

                    Olá <strong>`+inputUserName +`</strong> Seja Bem-vindo!
                </div>

                <div class="select" id="selectHome"style="display: none;">
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
            }else{
              alert('Preencha os Campos')

            }


}