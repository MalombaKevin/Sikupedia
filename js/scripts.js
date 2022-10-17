// function dates(){
//     dateToday= new Date()
//     todayDate = dateToday.getDate()
//     todayDay = dateToday.getDay()
//     todayMonth = dateToday.getMonth()
//     todayYear = dateToday.getFullYear()

    var form = document.getElementById('form')

    form.addEventListener('mouseover' ,function(event){
      event.preventDefault()
      var lugha = document.querySelector("input[type='radio']:checked").value 


      dateToday= new Date()
      todayDate = dateToday.getDate()
      todayDay = dateToday.getDay()
      todayMonth = dateToday.getMonth()
      todayYear = dateToday.getFullYear()

      daysEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      daysFrench = ['']
      daysSwahili = ['']
      daysGerman = ['']
      daysSpanish = ['']

      
      if (lugha == 'Swahili'){
        document.getElementById('dates').innerHTML = "Hi"
        
      }

      else if (lugha == 'English'){
        document.getElementById('dates').innerHTML = daysEnglish[todayDay]
      }

    })
   
// }