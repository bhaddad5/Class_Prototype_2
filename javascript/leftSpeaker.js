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
      new THREE.CubeGeometry(200, 200, 200),
      this.myMaterial);
	  
  this.leftSpeakerMesh.rotation.x = 0.8;
  this.leftSpeakerMesh.rotation.y = 0.4;
  this.leftSpeakerMesh.translateY(150);
  this.leftSpeakerMesh.translateZ(-250);
  this.leftSpeakerMesh.translateX(-50);


};

LeftSpeaker.prototype.updateTime = function(t){
  this.myMaterial.uniforms['uTime'].value = t;
};