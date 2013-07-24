varying vec2 vUv;
uniform float uTime;
uniform float uBeat;
uniform float uBeatTime;

void main() {
  vUv = vec2(uv.x - 0.5, uv.y - 0.5); // center vUv
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4((0.9 + 0.2 * sin(uBeat)) * position, 1.0);
}