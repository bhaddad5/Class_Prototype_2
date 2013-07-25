var RoboBouncer = function(geometry) {
    this.roboMaterial = new THREE.MeshLambertMaterial({color: 0xbbbbbb});
	this.figure = new THREE.Mesh(geometry, this.roboMaterial);
    this.figure.scale.set(40, 40, 40);
	//this.figure.position.y = 10;
	//this.figure.position.x = 10;
	this.figure.rotateX(1);
	this.figure.rotateY(1.55);
};

