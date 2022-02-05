(function(){
    const buttons = document.querySelectorAll('.btn')
    const customerImage = document.querySelector('.photo-container')
    let index = 0
    const car = []
    car[0] = "car-0"
    car[1] = "car-1"
    car[2] = "car-2"
    car[3] = "car-3"
    car[4] = "car-4"

    
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if (button.classList.contains('prevBtn')){
            index--
        if(index < 0){
          index = car.length -1
        } 
           customerImage.style.backgroundImage = `url('./img/${car[index]}.jpg')`
           
        }
        if (button.classList.contains('nextBtn')){
            index++
        if(index > car.length -1){
          index = 0
        }
            customerImage.style.backgroundImage = `url('./img/${car[index]}.jpg')`
        }
    })
})
})()
