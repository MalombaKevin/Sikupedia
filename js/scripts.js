// function dates(){
//     dateToday= new Date()
//     todayDate = dateToday.getDate()
//     todayDay = dateToday.getDay()
//     todayMonth = dateToday.getMonth()
//     todayYear = dateToday.getFullYear()
   function leo(){

    document.getElementById('dates').innerHTML = 

    dateToday= new Date()
    todayDate = dateToday.getDate()
    todayDay = dateToday.getDay()
    todayMonth = dateToday.getMonth()
    todayYear = dateToday.getFullYear()
    
    daysEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    daysFrench =['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']

    daysSwahili = ['Jumapili', 'Jumatatu', 'Jumanne', 'Alhamisi', 'Ijumaa', 'Jumamosi']

    daysGerman = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

    daysSpanish = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ]

    monthEnglish=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    monthFrench=['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'julliet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

    monthSwahili=['Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni', 'Julai', 'Agosyi', 'Septemba', 'Oktoba', 'Novemba', 'Desemba']

    monthGerman=['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', ' September', 'Oktober', 'November', 'Dezember' ]


    monthSpanish=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']



    document.getElementById('dates').innerHTML = `${daysEnglish[todayDay]}  ${todayDate}  ${monthEnglish[todayMonth]} ${todayYear}`
    var form = document.getElementById('form')



    form.addEventListener('submit' ,function(event){
      event.preventDefault()
      // var lugha = document.querySelector("input[type='radio']:checked").value  

      var lughal = document.getElementById('lugha')
      var lugha = lughal.options[lughal.selectedIndex].value

      if (lugha == 'Swahili'){
        document.getElementById('dates').innerHTML = `${daysSwahili[todayDay]}  ${todayDate} ${monthSwahili[todayMonth]}  ${todayYear} `        
      }

      else if (lugha == 'English'){
        document.getElementById('dates').innerHTML = `${daysEnglish[todayDay]}  ${todayDate}  ${monthEnglish[todayMonth]} ${todayYear}`
      }

      else if (lugha == 'French'){
        document.getElementById('dates').innerHTML = `${daysFrench[todayDay]}  ${todayDate}  ${monthFrench[todayMonth]} ${todayYear}`
      }

      else if (lugha == 'German'){
        document.getElementById('dates').innerHTML = `${daysGerman[todayDay]}  ${todayDate}  ${monthGerman[todayMonth]} ${todayYear}`
      }

      else if (lugha == 'Spanish'){
        document.getElementById('dates').innerHTML = `${daysSpanish[todayDay]}  ${todayDate}  ${monthSpanish[todayMonth]} ${todayYear}`
      }


      var o = document.getElementById('mal')
      var odata = o.options[o.selectedIndex].value

      alert(odata)

    })
   
}

// copy to clipboard

function copyPaste(){
  


  copyText = document.getElementById('dates')

  copyText.select()
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value)

  alert(copyText.value)


}