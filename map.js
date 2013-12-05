function Map(height, width, blockSize, mapData) {
	this.height = height;
	this.width = width;
	this.blockSize = blockSize;
	this.mapData = mapData;
	this.mapFile;
	this.imageFile;
	
	this.getVisibleMap = function() {
		document.write('This is the visible function');
	}
	
	
}

function MapBlock() {
	this.imagePosition;
	this.terrainType;
	
	  
	
}