function calculate(){
  		var k,l,g,a,L,T,t,n,b;
  		L = Number(document.l1.l.value);
  		L = L/100
  		g = 9.81;
  		a = 0.0529;
  		l = 0.53;
  		n = Math.sqrt(3);
  		k = l/(2*n);
  		b = (g*a)/L;
  		b = Math.sqrt(b);
  		b = b*(7/44);
  		T = k/b
  		t = T*10
  		document.l1.tp.value = t;
  	}