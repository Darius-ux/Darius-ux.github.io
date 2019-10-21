class t_eq2_model{
a;
b;
c;
x1_re;
x2_re;
x1_im;
x2_im; 

constructor()
{
a=1;
b=1;
c=1;
x1_re=0;
x2_re=0;
x1_im=0;
x2_im=0; 
}
set coefficients (a,b,c)
{
	this.a=a;
	this.b=b;
	this.c=c;
}

solve()
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
}

get_solutions()
{
	var solutions={};
	solutions.x1_re=x1_re;
	solutions.x2_re=x2_re;
	solutions.x1_im=x1_im;
	solutions.x2_im=x1_im;
	return solutions;
}

}