// alert('ok')
let user = document.getElementById('name');
const countDown = document.getElementById('count');
const btn = document.getElementById('btn');
const end = document.getElementById('end');
let interval;

const getTime = () => {
const timeSet = document.getElementById('time').value;
    // console.log('timeSet',timeSet)
    const date = new Date()
    // if(time == ""){

    
    //     let wrong = 'Please Enter Time';
    //     countDown.innerText = wrong;
    //     countDown.style.color = "red";
    //     } 
if(timeSet >= 1){
    date.setMinutes(Number(timeSet))
    date.setSeconds(0)
}else if(timeSet > 0 ){
    date.setMinutes(Number(0))
    const convert = parseInt(timeSet * 10)
    date.setSeconds(convert)
}
return date;
}


const arr = [];
const funCount = (date) => {
    
        const sec = date.getSeconds()
        const mins = date.getMinutes()
        date.setSeconds(sec -1)
        const secval = `sec`
        // secval.style.color = 'red'
        
        // console.log(date, 'sec: '+sec + ' mins: ' + mins)
        countDown.innerHTML = `${mins}  : ${sec} <span style='font-size:10px'>${secval}</span>`;
        // document.getElementById('time').value = `${min}  : ${sec}`
        if(sec.toString() === '0'){
            if(mins.toString() === '0'){
                
                //your code here
                if(sec.toString()== '0'){
                   
                    var userName = document.getElementById('name').value;
                     userName= userName.charAt(0).toUpperCase() + userName.substring(1);
                    arr.push(userName)
                end.innerHTML = `${userName} your time has expired`;
                end.style.color = 'yellow';
                setTimeout(() => {
                    end.innerHTML = '';
                    start.innerHTML = '';
                }, 3000);
               
               
            const clear = ()=>{
                countDown.innerHTML = `${userName} Start Again`;
            }
            setTimeout(clear,3000);
            }
            
                clearInterval(interval)
                document.getElementById('time').value = ''
                document.getElementById('name').value = ''
                return
            }
            // timer--
        }
    }
    



btn.addEventListener('click', function(){
    const inputTime = document.getElementById('time').value;
    const inputName = document.getElementById('name').value;
    if(inputTime == "" || inputName =="" ) {
        // let userName = document.getElementById('name').value;
        //  userName= userName.charAt(0).toUpperCase() + userName.substring(1);
                    
        countDown.innerHTML = `${arr.length?arr[arr.length -1]:''} Please input TWO values! `
        countDown.style.color = "red";
        setTimeout(() => {
            countDown.innerHTML = `Enter Time First`
            countDown.style.color = "white";
        }, 4000);
    }else{
        start.innerHTML = `Count Down Time ${inputTime}  `
       
        clearInterval(interval)
        const dd = getTime()
        interval = setInterval(funCount, 1000, dd);
        // if(mins.toString() === '0'){
                
            //your code here
            // if(sec.toString()== '0'){
            // }
        // }
        const btnpause = document.getElementById('btnpause');
        btnpause.addEventListener('click',()=>{
            clearInterval(interval)

        })
    }
});


