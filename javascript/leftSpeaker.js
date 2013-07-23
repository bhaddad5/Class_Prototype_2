var LeftSpeaker = function() {

  var vertexShaderText = loadFile('leftSpeaker.vert');
  var fragmentShaderText = loadFile('leftSpeaker.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.leftSpeakerMesh = new THREE.Mesh(
      new THREE.CubeGeometry(250, 250, 250),
      this.myMaterial);
	  
  this.leftSpeakerMesh.rotation.x = 0.5;
  this.leftSpeakerMesh.translateY(300);
  this.leftSpeakerMesh.translateZ(-300);


};

LeftSpeaker.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};