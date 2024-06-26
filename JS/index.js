
const inputDate = document.querySelector(".inputCalculator")
const btn = document.querySelector(".btnCalculator")
let user = document.querySelector(".ShowUser_Age")


btn.addEventListener("click", (e)=>{
    e.preventDefault()
    let currentDate = new Date()
    let userdate = new Date(inputDate.value)

    let userYear = currentDate.getFullYear()-userdate.getFullYear()
    let userMonth = currentDate.getMonth()-userdate.getMonth()
    let userDay = currentDate.getDate()-userdate.getDate()

    if(currentDate > userdate)
        {
            if(userMonth < 0  || (userMonth === 0  && userDay < 0) )
                {
                    userYear--
                   
                    userMonth = 12 + userMonth
                   

                }
            if (userDay < 0)
                    {
                        userMonth--;  
                        userDay = 30 + userDay

                    }
            user.innerHTML = `Your Age is ${userYear} year(s) , ${userMonth} month(s) and ${userDay} day(s)`
        }
       
    else{
        user.innerHTML = `Enter A Right Date`
    }  
})