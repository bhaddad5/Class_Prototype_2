var Text = function() {
  
  //This adds the text.  I borrowed the template from Imari Heikkinen
  var c = document.createElement('canvas');
  c.getContext('2d').font = '50px Arial';
  c.getContext('2d').fillText(0 + '/234', 2, 100);
  
  var tex = new THREE.Texture(c);
  tex.needsUpdate = true;
      
  var mat = new THREE.MeshBasicMaterial({map: tex});
  mat.transparent = true;

  this.textMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 200),
    mat
  );
  this.textMesh.doubleSided = true;
  
  this.textMesh.translateY(-250);

};

Text.prototype.updateTime = function(t){
  
};
