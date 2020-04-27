interface parent1{
  var1:number;
  myfun1:()=>void
  myfun:()=>void
}

class child implements parent1{
  myfun():void{
    console.log("It's child")
  }
}

var obj = new child()
//obj.myfun()
