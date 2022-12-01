const alert=require('alert');
function init() //function1-outer/parent
{
    var name = 'Chrome'; // name is a local variable created by init
    var num = 55;
    var float = 25.29;
    function displayName() { // displayName() is the inner function, a closure
      // alert(name) // use variable declared in the parent function,body of the child functionn
      return name;
    }
    function displayNum(){
      return num;
    }
    function displayFloat(){
      return float;
    }
    // console.log("Im here"); inner functions are of no use until called
     console.log(displayName());// inner/closure/child function
     console.log(displayNum());
     console.log(displayFloat());
  }
  init();
  //displayName();-- outer function call will not achieve the purpose of closure
  //purpose of closure is to call multiple inner functions by just one outer function call
