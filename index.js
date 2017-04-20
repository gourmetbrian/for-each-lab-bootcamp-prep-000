function iterativeLog(array){
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`)
  })
}



function iterate(callback){
  var arr = ["Candy", "Buffalo", "Water Ski"]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
