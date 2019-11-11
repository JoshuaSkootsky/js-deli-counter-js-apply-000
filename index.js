var dayCount = 0;

function takeANumber(line, name) {
  var realLength = line.length + 1;
  line.push(name);
  dayCount++;
  return "Welcome, " + name + ". You are number " + realLength + " in line.";
}

function dayGenerator(init) {
  let counter = init || 0;
    function dayNumber(line, name) {
      var realLength = line.length + 1;
      line.push(name);
      counter++;
      return "Welcome, " + name + ". You are number " + realLength + " in line.";
    }
  return dayNumber;
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  var first = line.shift();
  return `Currently serving ${first}.`;
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  }
  
  var intro = "The line is currently:";
  
  for (var i = 0; i < line.length; i++) {
    intro += " " + (i+1) + ". " + line[i]; // i+1 gives "real world" position in line
    if (i < line.length - 1) {
      intro += ",";
    }
  }
  
  return intro;
}