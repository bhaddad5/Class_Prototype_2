#define CURVE (0.0)
#define SPEED (-5.0)
#define DENSITY (2.0)

uniform float uTime;
uniform float uBeat;
uniform float uBeatTime;
uniform float timeOrig; // milliseconds since 1970
varying vec2 vUv;

void main() {
  float ang = atan(vUv.y, vUv.x);
  float dist = length(vUv);
  float t = ang * DENSITY + uTime * SPEED;
  if(60.0 <= uTime) {
    gl_FragColor = vec4(abs(sin(t + dist)) * abs(sin(uTime + 1.0 * (3.14/3.0))), 
                        abs(sin(t + dist)) * abs(sin(uTime + 2.0 * (3.14/3.0))),
					    abs(sin(t + dist)) * abs(sin(uTime + 3.0 * (3.14/3.0))), 1.0);
  }
  else gl_FragColor = vec4(0.0, 0.0, abs(sin(-t + dist)), 1.0);
}