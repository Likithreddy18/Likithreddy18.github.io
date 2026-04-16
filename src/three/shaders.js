// Vertex and fragment shaders for the cosmic particle field.
// Extracted to keep the React component readable.

export const particleVertex = /* glsl */ `
  attribute float size;
  attribute float phase;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;

  void main() {
    vColor = color;
    vec3 p = position;

    // Gentle orbital drift
    float s = sin(uTime * 0.15 + phase);
    float c = cos(uTime * 0.15 + phase);
    p.x += s * 2.5;
    p.y += c * 2.5;
    p.z += sin(uTime * 0.1 + phase * 1.3) * 1.5;

    // Scroll-driven swirl — particles bloom outward as the user descends
    float scrollSwirl = uScroll * 0.15;
    float angle = scrollSwirl + phase;
    vec2 swirl = vec2(cos(angle), sin(angle)) * uScroll * 0.05;
    p.xy += swirl;

    // Mouse repulsion
    vec2 toMouse = p.xy - uMouse * 80.0;
    float d = length(toMouse);
    float repel = smoothstep(40.0, 0.0, d);
    p.xy += normalize(toMouse + vec2(0.0001)) * repel * 8.0;

    // Twinkle
    vAlpha = 0.5 + 0.5 * sin(uTime * 1.2 + phase * 3.0);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * (300.0 / -mv.z);
  }
`;

export const particleFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uAlpha;
  uniform sampler2D uSprite;

  void main() {
    vec4 tex = texture2D(uSprite, gl_PointCoord);
    float a = tex.a * uAlpha * (0.55 + 0.45 * vAlpha);
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;
