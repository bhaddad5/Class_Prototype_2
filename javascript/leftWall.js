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
      new THREE.PlaneGeometry(500, 500),
      this.myMaterial);
	  
  this.leftWallMesh.rotation.x = 0.5;
  this.leftWallMesh.rotation.y = 1.5;
  this.leftWallMesh.rotation.z = 0.3;
  this.leftWallMesh.translateZ(-200);
  this.leftWallMesh.translateX(-150);
  this.leftWallMesh.translateY(200);


};

LeftWall.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};