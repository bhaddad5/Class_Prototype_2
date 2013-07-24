var RightSpeaker = function() {

  var vertexShaderText = loadFile('rightSpeaker.vert');
  var fragmentShaderText = loadFile('rightSpeaker.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
	  'uBeat': { type: 'f', value: 0.0 },
	  'uBeatTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.rightSpeakerMesh = new THREE.Mesh(
      new THREE.CubeGeometry(200, 200, 200),
      this.myMaterial);
	  
  this.rightSpeakerMesh.rotation.x = 0.8;
  this.rightSpeakerMesh.rotation.y = -0.4;
  this.rightSpeakerMesh.translateY(150);
  this.rightSpeakerMesh.translateZ(-250);
  this.rightSpeakerMesh.translateX(50);


};
