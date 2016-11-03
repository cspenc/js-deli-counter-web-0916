var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var numInLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${numInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var returnString = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      returnString += `${i+1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length-1){
        returnString += ", "
      }
    }
    return returnString
  }else{
    return "The line is currently empty."
  }
}
