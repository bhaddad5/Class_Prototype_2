var Background = function() {

  var vertexShaderText = loadFile('back.vert');
  var fragmentShaderText = loadFile('back.frag');
  
  this.myMaterial = new THREE.ShaderMaterial({
    uniforms: { 
      'uTime': { type: 'f', value: 0.0 },
	  'uBeat': { type: 'f', value: 0.0 },
	  'uBeatTime': { type: 'f', value: 0.0 },
    },
    vertexShader: vertexShaderText,
    fragmentShader: fragmentShaderText
  });
  this.myMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3200, 3200),
      this.myMaterial);
	  
  this.myMesh.translateZ(-500);

};
