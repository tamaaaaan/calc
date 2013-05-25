function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	
	this.expression=""; //現在の計算式を表すプロパティ
	
	this.getExpression=function(){
		return this.expression;
	};
	
	this.append=function(ch){
		return this.expression+=ch;
	}
	
	this.clearEntry=function(ch){
		return this.expression=this.expression.substring(0,this.expression.length-1);
	}
	
	this.clear=function(){
		return this.expression="";
	}
	
	this.calculate=function(){
		this.expression=this.expression.replace("×", "*");
		this.expression=this.expression.replace("÷", "/");
		return this.expression=eval(this.expression);
	}
}
