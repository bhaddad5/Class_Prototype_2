var Beat = function(b) {
  
  this.bpm = b;
  
  this.uBeat = 0;
  this.uBeatTime = 0;

};

Beat.prototype.updateTime = function(obj , t){
  obj.myMaterial.uniforms['uTime'].value = t;
  obj.myMaterial.uniforms['uBeat'].value = this.uBeat;
  obj.myMaterial.uniforms['uBeatTime'].value = this.uBeatTime;
};