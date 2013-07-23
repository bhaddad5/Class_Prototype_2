var Text = function(beats) {
  
  //This adds the text.  I borrowed the template from Imari Heikkinen
  this.c = document.createElement('canvas');
  this.c.getContext('2d').font = '80px Arial';
  this.c.getContext('2d').fillText(beats + '/688', 2, 100);
  
  this.tex = new THREE.Texture(this.c);
  this.tex.needsUpdate = true;
      
  this.mat = new THREE.MeshBasicMaterial({map: this.tex});
  this.mat.transparent = true;

  this.textMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 200),
    this.mat
  );
  this.textMesh.doubleSided = true;
  
  this.textMesh.translateY(-290);
  this.textMesh.translateX(100);

};

Text.prototype.updateBeats = function(beats){
  console.log("update");
  this.c.getContext('2d').fillText(0 + '/688', 2, 100);
};
