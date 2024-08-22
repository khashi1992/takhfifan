//mobile btn
const  phone=document.querySelector('#phone');
const  phonebtn=document.querySelector('#phonebtn');


phonebtn.addEventListener('click',(e)=>{
 
    let pattern = /[a-z0-9]/;
    let inp=phone.value;
    if(inp.length==''){
        swal({
            text: "شماره موبایل خود را وارد کنید",
            buttons:false,
            icon:'info'
          });
    
    }
    else if(inp.length==11 && pattern.test(inp)){
        
        swal({
            text: `شماره موبایل درست است`,
         
            buttons:false,
            icon:'success'
          });
          const data = {
            phone:inp
          };
          fetch('https://66c30ed7d057009ee9bee4b7.mockapi.io/user', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(data)
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(task => {
            // do something with the new task
          }).catch(error => {
            // handle error
          })
    }else{
        swal({
            text: "شماره موبایل خود را درست وارد کنید",
            buttons:false,
            icon:'error'
          });
         
    }
 
});
