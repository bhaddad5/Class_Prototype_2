var Stage = function() {

  var vertexShaderText = loadFile('stage.vert');
  var fragmentShaderText = loadFile('stage.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.stageMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 500),
      this.myMaterial);
	  
  this.stageMesh.rotation.x = -0.5;


};

Stage.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};