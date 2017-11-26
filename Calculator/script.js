
function c(num)
{
	document.getElementById("display").value = num;
}


function math(num) {
	document.getElementById("display").value += num;

}


function e()
{
	try{
		c(eval(document.getElementById("display").value))
		
	}
	catch(e){
		c('Error')
	}
}
