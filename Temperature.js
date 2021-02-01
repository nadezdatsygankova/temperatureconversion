
//fucus in onload  
function fonload()
{
  document.getElementById('textar').value="";
    document.getElementById('f').value="";
    document.getElementById('c').value="";
  document.getElementById('f').focus();

  document.getElementById('average').disabled=true;

}

//Valid values ranges from -9999 to 9999
function f(x) {
  var firstValue = x.dataset.value || "";
  var nextValue = x.value;
  var num = Number(nextValue);
  
  if (nextValue == '-' || (!isNaN(num) && num <= 9999 && num >= -9999 && num%1==0 )) 
  {
    
  x.dataset.value= nextValue;

  buttonConvert();
  
  return true;
}
else {
    x.value = "";
    document.getElementById('covert').disabled=true;
    return false;
  }
  
}


//disable function
function buttonConvert()
{
  var far = document.getElementById('f').value;
  console.log(far);
if (far)
{
  
  document.getElementById('covert').disabled=false;
  document.getElementById('average').disabled=true;
}
var input = document.getElementById('f');
input.addEventListener("keyup", function(event)
{
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("covert").click();
  }
});
}

//display function in textarea
function display()
{
  
    var far = Number(document.getElementById('f').value);
    var cel = document.getElementById('c').value;
    var textArea=document.getElementById('textar').value;
    textArea= textArea+"\n"+"                  " +far+"                  "+cel+"\n";
    document.getElementById('textar').value=textArea;
    document.getElementById('covert').disabled=true;

}


var floatArrayF=new Array(); //array for number fahrenheit
var i=0;
var floatArrayC=new Array();//array for number celsius
var count =10;


//array push
function fLoadArray()
	{
   
      var f=document.getElementById('f').value;
      console.log(f);
      floatArrayF.push(parseFloat(f));
      floatArrayC.push(parseFloat(c.value));
   
	
  }
  
  //convert F->C
  function convert() {
    
    var x;

     
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value =x.toFixed(2);
      console.log(x);
      
        fLoadArray();
        display();
        document.getElementById("f").value = "";
        document.getElementById("average").disabled=false;
        
     count --;
     console.log(count);
     document.getElementById('f').focus();
     if(count ==0)
     {
      average();
      return;

     }
   
   }


   
//button for average
function buttonAverage()
{
 
  document.getElementById('covert').disabled=true;
  document.getElementById('average').disabled=true;
  appearReset();
  document.getElementById('f').disabled=true;

}

  //calculate average
   function average()
	{
		var textArea=document.getElementById('textar').value;
    var sumF=0;
    var sumC=0;
    var averageF=0;
    var averageC=0;
    for (var k = 0; k < floatArrayF.length; k++)
    {
      console.log(floatArrayF.length);
            sumF=sumF+floatArrayF[k];
            console.log(floatArrayF[0]);
            sumC=sumC+floatArrayC[k];
            console.log(sumC);
    }
          averageF=sumF/floatArrayF.length;
          console.log(averageF);
          averageC=sumC/floatArrayC.length;
          console.log(averageC);

      textArea= textArea +"================================================"+"\n"+ "                "+averageF.toFixed(2)+"                 "+averageC.toFixed(2)+"\n";
    console.log(textArea);
    document.getElementById('textar').value=textArea;
    console.log(textArea);
    buttonAverage();
   

  }




//button reset appears
function appearReset()
{
  var parent=document.querySelector('#section');
  var newBtn = document.createElement('button');
    newBtn.innerText = 'Reset';
    parent.appendChild(newBtn);
    newBtn.id="reset";
    newBtn.setAttribute('onclick',"reset()")
}


  
//reset function
  function reset()
  {
    document.getElementById('textar').value="";
    document.getElementById('f').value="";
    document.getElementById('c').value="";

    var parent=document.querySelector('#section');
    var elem=document.querySelector('#reset');
    parent.removeChild(elem);
    document.getElementById('f').disabled=false;
    document.getElementById('f').focus();
    floatArrayF.length=0;
    floatArrayC.length=0;
    count =10;
  }


