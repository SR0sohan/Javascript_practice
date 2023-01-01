// class railwayform {
//       constructor(givenname, trainno){
//             console.log("constrator called...." + givenname+" "+ trainno)
//             this.name = givenname;
//             this.trainno = trainno;
//       }
//       submit(){
//             alert(this.name + " your form is submitted for train " + this.trainno)
//       }
//       cancle(){
//             alert(this.name + ' your form is canclled for train ' + this.trainno)
//       }
// }

// let harry = new railwayform("harry" , 732)
// // harry.fill("harry" , 732)
// let sohan = new railwayform("sohan" , 747)
// // sohan.fill("sohan" , 747)

// let sohan1 = new railwayform("sohan" , 891)
// // sohan1.fill("sohan" , 891)

// harry.submit()
// sohan.submit()
// sohan1.submit()
// sohan1.cancle()




class railwayform {
      constructor(givenname, trainno, address){
            console.log("constrator called...." + givenname+" "+ trainno)
            this.name = givenname;
            this.trainno = trainno;
            this.address = address;
      }
      preview(){
            alert(this.name+ " : your train is for train number : "+this.trainno + " and your addres is "+ this.address)
      }
      submit(){
            alert(this.name + " your form is submitted for train " + this.trainno)
      }
      cancle(){
            alert(this.name + ' your form is canclled for train ' + this.trainno)
            this.trainno = 0;
      }
}

let sohanForm = new railwayform("sohan", 456, " Debiganj -5020")
sohanForm.preview()
sohanForm.submit()
sohanForm.cancle()
sohanForm.preview()
