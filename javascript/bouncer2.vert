varying vec2 vUv;
uniform float uTime;
uniform float uBeat;
uniform float uBeatTime;
uniform float uPlayer;

void main() {
  vUv = vec2(uv.x - 0.5, uv.y - 0.5); // center vUv
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4((0.9 + 0.1 * -(uBeat - 1.0)) * position, 1.0);
}