/**
 * Game object
 * The highest level object representing entire game
 */
var Game = function() {
};

/**
 * Initialize game state
 */
Game.prototype.init = function() {
  
  //Creates the scene
  this.scene = new THREE.Scene();
  
  //Creates the camera
  this.camera = new THREE.PerspectiveCamera(75, 4.0/3.0, 1, 10000);
  this.camera.position.y = -200;
  this.camera.position.z = 500;

  //Creates the stage  
  this.stage = new Stage();
  this.scene.add(this.stage.stageMesh);
  
  //Creates the back wall  
  this.backWall = new BackWall();
  this.scene.add(this.backWall.backWallMesh);
  
  //Creates the left wall  
  this.leftWall = new LeftWall();
  this.scene.add(this.leftWall.leftWallMesh);

  //Creates the background
  this.background = new Background();
  this.scene.add(this.background.myMesh);

  //Renders the scene
  this.renderer = new THREE.WebGLRenderer({antialias: true});
  this.renderer.setSize(800, 600);
  this.renderer.setClearColor(0xeeeeee, 1.0);
  document.body.appendChild(this.renderer.domElement);

};

/**
 * Render game view for time t
 */
Game.prototype.render = function(t) {
  this.stage.updateTime(t);
  this.background.updateTime(t);
  this.backWall.updateTime(t);
  this.leftWall.updateTime(t);
  this.camera.lookAt(this.scene.position);
  this.renderer.render(this.scene, this.camera);
};

/**
 * Start main game loop
 */
Game.prototype.start = function() {
  var that = this;
  var time0 = new Date().getTime(); // milliseconds since 1970
  var loop = function() {
    var time = new Date().getTime();
    that.render((time - time0) * 0.001);
    requestAnimationFrame(loop, that.renderer.domElement);
  };
  loop();  
};