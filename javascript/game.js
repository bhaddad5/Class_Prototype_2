/**
 * Game object
 * The highest level object representing entire game
 */
var Game = function() {
};

//CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE CHANGE
//This creates the keyboard
var keyboard = new THREEx.KeyboardState();

//This tracks whether the spacebar is down
var keyDown = false;

/**
 * Initialize game state
 */
Game.prototype.init = function() {

  this.song = $('#song')[0];
  this.song.play();
  
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
  
  //Creates the right wall  
  this.rightWall = new RightWall();
  this.scene.add(this.rightWall.rightWallMesh);
  
  //Creates the left speaker  
  this.leftSpeaker = new LeftSpeaker();
  this.scene.add(this.leftSpeaker.leftSpeakerMesh);
  
  //Creates the right speaker  
  this.rightSpeaker = new RightSpeaker();
  this.scene.add(this.rightSpeaker.rightSpeakerMesh);

  //Creates the background
  this.background = new Background();
  this.scene.add(this.background.myMesh);
  
  //Creates the bouncer
  this.bouncer = new Bouncer();
  this.scene.add(this.bouncer.body);
  this.scene.add(this.bouncer.head);
  
  //Creates the text
  this.text = new Text();
  this.scene.add(this.text.textMesh);

  //Renders the scene
  this.renderer = new THREE.WebGLRenderer({antialias: true});
  this.renderer.setSize(800, 600);
  this.renderer.setClearColor(0xeeeeee, 1.0);
  document.body.appendChild(this.renderer.domElement);
  
  //This creates and adds the light
  this.light2 = new THREE.PointLight(0xffcccc, 1, 10000);
  this.light2.position.set(0, 300, 600);
  this.scene.add(this.light2);

};

/**
 * Handles keyboard input
 */
Game.prototype.handleInput = function() {

  //This detects that the key has been pressed
  if(keyboard.pressed("space") && keyDown == false) {
    console.log("space");
	keyDown = true;
  }
  
  //This detects that the key has no longer been pressed
  if(!keyboard.pressed("space") && keyDown == true) {
	keyDown = false;
  }

}

/**
 * Render game view for time t
 */
Game.prototype.render = function(t) {
  this.stage.updateTime(t);
  this.background.updateTime(t);
  this.backWall.updateTime(t);
  this.leftWall.updateTime(t);
  this.rightWall.updateTime(t);
  this.leftSpeaker.updateTime(t);
  this.rightSpeaker.updateTime(t);
  this.bouncer.updateTime(t);
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
	that.handleInput();
    that.render((time - time0) * 0.001);
    requestAnimationFrame(loop, that.renderer.domElement);
  };
  loop();  
};