function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(150, 50, 20, 80);

  translate(width / 2, height / 2)
  
  noFill()
  
  stroke(255)
  
  beginShape()
  
  for (var i = 0; i < 360; i++){
    var rad = map(sin(i * 3), -1, 1, 100, 300)
    var x = rad * cos(i)
    var y = rad * sin(i)
    vertex(x, y)
  }
  endShape(CLOSE)
}
