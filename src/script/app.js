// nav scroll
const nav =document.querySelector('#nav');
const mobile =document.querySelector('.mobile');
window.addEventListener('scroll',(e)=>{
    console.log(window.scrollY);   
    if(window.innerWidth<768){
        if(window.scrollY>5){
            mobile.classList.add('hide');
        }else if(window.scrollY<5){
            mobile.classList.remove('hide');
        }
    }
});
//city box
const  btnReg=document.querySelector('#btnReg');
const  reg=document.querySelector('#reg');
const  cloose=document.querySelector('.close');
cloose.addEventListener('click',(e)=>{
    reg.classList.remove('show');
    document.body.style.overflow='auto';
})
btnReg.addEventListener('click',(e)=>{
    reg.classList.add('show');
    document.body.style.overflow='hidden';
});
//reg desktop 
const  btnRegs=document.querySelector('#regDesktop');
const  inp2=document.querySelector('#btnreg2desktop');
const  sec=document.querySelector('#secReg');
const  reg2desktop=document.querySelector('#reg2desktop');
const  btnclosedesktop=document.querySelector('#btnclosedesktop');
btnRegs.addEventListener('click',(e)=>{
    sec.classList.add('show2');
   
});
btnclosedesktop.addEventListener('click',(e)=>{
    sec.classList.remove('show2');
    
});
inp2.addEventListener('click',(e)=>{
 
    let pattern = /[a-z0-9]/;
    let inp=reg2desktop.value;
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
          }).then(data => {
            console.log(data);
            
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
    reg2desktop.value='';
});
