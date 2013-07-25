#define CURVE (0.0)
#define SPEED (5.0)
#define DENSITY (2.0)

uniform float uTime;
uniform float uBeat;
uniform float uBeatTime;
uniform float uPlayer;
uniform float timeOrig; // milliseconds since 1970
varying vec2 vUv;

void main() {
  float ang = atan(vUv.y, vUv.x);
  float dist = length(vUv);
  float t = ang * DENSITY + uTime * SPEED;
  gl_FragColor = vec4(abs(uPlayer), abs(abs(uPlayer)-1.0), 0.0, 1.0);
}