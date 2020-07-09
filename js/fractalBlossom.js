const divCanvas = document.getElementById('canvas')
var canvasStyles = getComputedStyle(divCanvas)

var a = parseInt(canvasStyles.width)
var b = parseInt(canvasStyles.height)

var tree = []
var leaves = []
var count = 0

function setup() {
  var canvas = createCanvas(a, b)
  canvas.parent('canvas')
  var j = createVector(width/2, height)
  var k = createVector(width/2, height - 100)

  var root = new Branch(j, k)
  tree[0] =  root
  tree[1] = root.branchL()
  tree[2] = root.branchR()
}

function draw() {
  while(count<100){
    for(var i=tree.length-1; i>=0; i--) {
      if(!tree[i].finished){
        tree.push(tree[i].branchL())
        tree.push(tree[i].branchR())
      }

      console.log(count)

      tree[i].finished = true
      count++
      
    }
  }
  if(count === 5) {
    for(var i=0; i<tree.length; i++) {
      if(!tree[i].finished){
        var leaf = tree[i].end.copy()
        leaves.push(leaf)
      }
    }
  }

  var tree2 = [...tree]

  for(var i=0; i<tree.length; i++) {
    tree[i].show()
    tree[i].sway()
    
    //tree2[i].show()
    //tree2[i].sparkle()
  }

  for(var i=0; i<leaves.length; i++) {
    fill(255, 0, 100)
    ellipse(leaves[i].x, leaves[i].y, 8, 8)
  }
  
}

function windowResized() {
  resizeCanvas(a, b)
}
