#define CURVE (0.0)
#define SPEED (-5.0)
#define DENSITY (2.0)

uniform float uTime;
uniform float timeOrig; // milliseconds since 1970
varying vec2 vUv;

void main() {
  float ang = atan(vUv.y, vUv.x);
  float dist = length(vUv);
  float t = ang * DENSITY + uTime * SPEED;
  gl_FragColor = vec4(0.0, 0.0, abs(sin(t + dist)), 1.0);
}