//function that opens a flap/dropdown for extra information about a song
function show(element) {
    if(element.nextElementSibling.classList.contains('wrapper-hidden')){
        element.nextElementSibling.classList.remove('wrapper-hidden')
    } else {
        element.nextElementSibling.classList.add('wrapper-hidden')
    }
}


//function show() {
//   const elementArray = document.querySelectorAll("#wrapper")
//   for(let i = 0; i < elementArray.length; i++){
//       if(elementArray[i].classList.contains('wrapper-hidden')){
//           elementArray[i].classList.remove('wrapper-hidden')
//       } else {
//           elementArray[i].classList.add('wrapper-hidden')
//       }
//   }
//}
//

//function show() {
//    const elementArray = document.querySelectorAll("#wrapper")
//    for(let i = 0; i < elementArray.length; i++){
//        if(elementArray[i].classList.contains('wrapper-hidden')){
//            elementArray[i].classList.remove('wrapper-hidden')
//        } else {
//            elementArray[i].classList.add('wrapper-hidden')
//        }
//    }
//}



//function show() {
//    const element = document.getElementById('wrapper')
//    if(element.classList.contains('wrapper-hidden')){
//        element.classList.remove('wrapper-hidden')
//    } else {
//        element.classList.add('wrapper-hidden')
//    }
//}