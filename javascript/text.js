var Text = function(beats, tried) {
  
  //This adds the text.  I borrowed the template from Imari Heikkinen
  this.c = document.createElement('canvas');
  this.c.getContext('2d').font = '80px Arial';
  this.c.getContext('2d').fillText(beats + '/' + tried, 2, 100);
  
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
  this.textMesh.translateX(80);

};
