function Block(x,y){
	
	this.scale = 10;
	this.x = x * this.scale;
	this.y = y * this.scale;
	
	
	this.render = function(context){
		
		context.fillStyle = 'green';
		
		context.fillRect(this.x,this.y,this.scale,this.scale);
		
	}
	
	
	
}