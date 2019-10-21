document.getElementById("id_logic_version").innerHTML = "Logic version=2019.10.14.1";

document.getElementById("id_button").addEventListener("click", solve_eq2);

class t_eq2
{
	a;
	b;
	c;
	x1_re;
	x2_re;
	x1_im;
	x2_im;
read_coefficients()
{
	this.a = document.getElementById("id_a").value;
	this.b = document.getElementById("id_b").value;
	this.c = document.getElementById("id_c").value;
}

compute_solutions()
{
		var delta=this.b*this.b-4*this.a*this.c;
	var x1_re, x1_im, x2_re, x2_im;
	if (delta>=0)
	{
		x1_re=(-this.b-Math.sqrt(delta))/(2*this.a);
		x2_re=(-this.bb+Math.sqrt(delta))/(2*this.a);
		x1_im=0;
		x2_im=0;
		
	}
	else
	{
		x1_re=(-this.b)/(2*this.a);
		x2_re=(-this.b)/(2*this.a);
		x1_im=-Math.sqrt(-delta)/(2*this.a);
		x2_im=+Math.sqrt(-delta)/(2*this.a);
	}
	var solutions ={}
	solutions.x1_re=x1_re;
	solutions.x1_im=x1_im;
	solutions.x2_re=x2_re;
	solutions.x2_im=x2_im;
	
}

print_solutions()
{
document.getElementById("id_x1").innerHTML="x1= "+this.x1_re + "+" + this.x1_im + "i";
	document.getElementById("id_x2").innerHTML="x2= "+this.x2_re + "+" + this.x2_im + "i";
}
}
function solve_eq2()
{
	var ec2=new t_eq2();
	
	ec2.read_coefficients();
	ec2.compute_solutions();
	ec2.print_solutions();
}
