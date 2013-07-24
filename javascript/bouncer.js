var Bouncer = function() {
  
	//This creates the blue circles
	this.geometryBody = new THREE.SphereGeometry(45, 20, 20);
	this.geometryHead = new THREE.SphereGeometry(30, 20, 20);
	this.material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
	this.body = new THREE.Mesh(this.geometryBody, this.material);
	this.head = new THREE.Mesh(this.geometryHead, this.material);
	
	this.body.translateY(115);
	this.head.translateY(180);

};

