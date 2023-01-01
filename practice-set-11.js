// problem 1--5
class complex{
      constructor(real, imaginary){
            this.real =real
            this.imaginary =imaginary
      }
      add(num){
           this.real = this.real + num.real
           this.imaginary = this.imaginary + num.imaginary
      }

      get real(){
            return this._real
      }
      get imaginary(){
            return this._imaginary
      }

      set real(newReal){
            this._real =newReal
      }
      set imaginary(newImaginary){
            this._imaginary =newImaginary
      }
}
let a  = new complex(2, 4)
a.real =10
a.imaginary =10
let b = new complex(6, 2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)



// problem 2--3--4

class human{
      constructor(name, food){
            this.name = name
            this.food = food
      }

      walk(){
            console.log(this.name + " :human is walking")
      }
}


class students extends human {
      walk(){
            console.log(this.name + " :student is walking")
      }
}

let ola  = new students("soha")
ola.walk()
console.log(ola instanceof human)