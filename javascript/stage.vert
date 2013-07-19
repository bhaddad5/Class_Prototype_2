varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = vec2(uv.x - 0.5, uv.y - 0.5); // center vUv
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4((0.9 + 0.1 * sin(uTime*12.0)) * position, 1.0);
}