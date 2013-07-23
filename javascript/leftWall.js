var LeftWall = function() {

  var vertexShaderText = loadFile('leftWall.vert');
  var fragmentShaderText = loadFile('leftWall.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.leftWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      this.myMaterial);
	  
  this.leftWallMesh.rotation.x = 0.6;
  this.leftWallMesh.rotation.y = 1.6;
  this.leftWallMesh.rotation.z = 0.4;
  this.leftWallMesh.translateZ(-240);
  this.leftWallMesh.translateX(-50);
  this.leftWallMesh.translateY(200);


};

LeftWall.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};