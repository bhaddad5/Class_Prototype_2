var Beat = function(b) {
  
  this.bpm = b;
  
  this.uBeat = 0;
  this.uBeatTime = 0;

};

Beat.prototype.updateTime = function(obj , t){
  this.uBeatTime = t * this.bpm / 60;
  
  this.uBeat = 1.0 - Math.abs(Math.sin(this.uBeatTime * 3.14159));
  
  obj.myMaterial.uniforms['uTime'].value = t;
  obj.myMaterial.uniforms['uBeat'].value = this.uBeat;
  obj.myMaterial.uniforms['uBeatTime'].value = this.uBeatTime;
};