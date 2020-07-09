function Branch(begin, end) {
    this.begin = begin
    this.end = end
    this.finished = false

    this.sway = () => {
        this.end.x += random(-1, 1)
        this.end.y += random(-1, 1)
    }

    this.sparkle = () => {
        this.end.x += noise()
        this.end.y += noise()
    }

    this.show = () => {
        stroke(0)
        line(this.begin.x, this.begin.y, this.end.x, this.end.y)
    }

    this.branchL = () => {
        var direction = p5.Vector.sub(this.end, this.begin)
        direction.rotate(random(-2*Math.PI, 2*Math.PI))
        direction.mult(.7)
        var newEnd = p5.Vector.add(this.end, direction)
        var left = new Branch(this.end, newEnd)
        
        if(!this.finished){
            return left
        }
    }

    this.branchR = () => {
        var direction = p5.Vector.sub(this.end, this.begin)
        direction.rotate(random(-2*Math.PI, 2*Math.PI))
        direction.mult(.7)
        var newEnd = p5.Vector.add(this.end, direction)
        var right = new Branch(this.end, newEnd)
        
        if(!this.finished){
            return right
        }
        
    }
}