var Beat = function(b) {
  
  this.bpm = b;
  
  this.uBeat = 0;
  this.uBeatTime = 0;
  this.uPlayer = 0;
  
  this.beatsHit = 0;
  
  //Creates the text
  this.text = new Text(this.beatsHit);
};

Beat.prototype.updateTime = function(obj , t){
  this.uBeatTime = t * this.bpm / 60;
  this.uBeat = 1.0 - Math.abs(Math.sin(this.uBeatTime * 3.14159));
  
  obj.myMaterial.uniforms['uTime'].value = t;
  obj.myMaterial.uniforms['uBeat'].value = this.uBeat;
  obj.myMaterial.uniforms['uBeatTime'].value = this.uBeatTime;
};

Beat.prototype.updateBouncer = function(obj , t){
  this.uBeatTime = t * this.bpm / 60;
  this.uBeat = 1.0 - Math.abs(Math.sin(this.uBeatTime * 3.14159));
  
  obj.body.translateY((this.uBeat - 0.365) * -20);
  obj.myMaterial.uniforms['uTime'].value = t;
  obj.myMaterial.uniforms['uBeat'].value = this.uBeat;
  obj.myMaterial.uniforms['uBeatTime'].value = this.uBeatTime;
  obj.myMaterial.uniforms['uPlayer'].value = this.uPlayer;
}

Beat.prototype.checkBeat = function(t){
  this.uBeatTime = t * this.bpm / 60;
  this.uBeat = 1.0 - Math.abs(Math.sin(this.uBeatTime * 3.14159));
  
  if(this.uBeat<.5) {
    this.uPlayer = this.uBeat * 2;
  }
  if(this.uBeat>=.5) {
    this.uPlayer = (this.uBeat * 2) - 2;
  }
  
  console.log(this.uPlayer);
  
  
  if(this.uPlayer>=-.4 && this.uPlayer<=.4) {
    return true;
  }
  else return false;
}

Beat.prototype.updateText = function(t){
  this.beatsHit++;
  this.text = new Text(this.beatsHit);
}