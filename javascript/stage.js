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
      new THREE.PlaneGeometry(600, 600),
      this.myMaterial);


};

Stage.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};