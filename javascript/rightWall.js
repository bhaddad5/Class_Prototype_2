var RightWall = function() {

  var vertexShaderText = loadFile('rightWall.vert');
  var fragmentShaderText = loadFile('rightWall.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
	  'uBeat': { type: 'f', value: 0.0 },
	  'uBeatTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.rightWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      this.myMaterial);
	  
  this.rightWallMesh.rotation.x = 0.6;
  this.rightWallMesh.rotation.y = -1.6;
  this.rightWallMesh.rotation.z = -0.4;
  this.rightWallMesh.translateZ(-240);
  this.rightWallMesh.translateX(50);
  this.rightWallMesh.translateY(200);


};

RightWall.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};