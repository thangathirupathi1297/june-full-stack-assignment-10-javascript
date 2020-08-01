
function calculator() {
   
    var a = document.getElementById("ain").value;
    var b = document.getElementById("bin").value;
    
    var c = document.getElementById("cin").value;
   
 switch(c)
   {
    case ("+") : 
    c= a+=b; 
    document.getElementById("enable").innerHTML= "Answer is "+ c;
    break;     
    case ("-") : 
    c=a-b;
    document.getElementById("enable").innerHTML= "Answer is "+ c;
     break;
    case ("*") :
         c=a*b; 
    document.getElementById("enable").innerHTML= "Answer is "+ c;
    break;
    case ("/") :
         c=a/b;
    document.getElementById("enable").innerHTML="Answer is " + c  ;
     break;
     case ("%") :
         c=a/b;
    document.getElementById("enable").innerHTML="Answer is " + c  ;
     break;
     default:
         
        document.getElementById("enable").innerHTML="" ;
       break;
   }
  } 
  


function factorial()
{
  var num=document.getElementById("facto").value;
  var f=1;
  var i=1;
  while(i <= num)
  {
       f=f*i;
       i++;
  }
document.getElementById("fact").innerHTML="factorial value is" +  f;
}


function fibonacci() 
{ 
	var n1 = 0;
	var n2 = 1;
	var n3;
     var num =document.getElementById("fabonacci-i").value;
    
		for(i=2; i<=num;i++)
		{  
               n3 = n1 + n2;
             document.getElementById("fabonacci-s").innerHTML="fabonacci value of " + num + "is"+ n3;
               n1 = n2
			n2 = n3;	
          }
          return n3;
     }

     function leap()
     {
          var year=document.getElementById("leapyear").value;
          if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
          {
               document.getElementById("year").innerHTML= "The entered year " + year + "is leap year" ; 
          }
          else
          {
               document.getElementById("year").innerHTML= "The enterd year " + year + "is not a leap year" ; 
          }
     }


