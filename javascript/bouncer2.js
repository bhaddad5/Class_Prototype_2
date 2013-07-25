var Bouncer2 = function() {
  
  var vertexShaderText = loadFile('bouncer2.vert');
  var fragmentShaderText = loadFile('bouncer2.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
	  'uBeat': { type: 'f', value: 0.0 },
	  'uBeatTime': { type: 'f', value: 0.0 },
	  'uPlayer': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  
	this.geometryBody = new THREE.SphereGeometry(45, 20, 20);
	this.geometryHead = new THREE.SphereGeometry(30, 20, 20);
	//this.material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
	this.body = new THREE.Mesh(this.geometryBody, this.myMaterial);
	
	this.body.translateY(65);
	this.body.translateX(-150);
	this.body.translateZ(100);
	this.body.translateY(-100);
};

