var BackWall = function() {

  var vertexShaderText = loadFile('backWall.vert');
  var fragmentShaderText = loadFile('backWall.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
	  'uBeat': { type: 'f', value: 0.0 },
	  'uBeatTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.backWallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(550, 550),
      this.myMaterial);
	  
  this.backWallMesh.rotation.x = 0.5;
  this.backWallMesh.translateY(300);
  this.backWallMesh.translateZ(-300);


};

BackWall.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};