uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

attribute vec3 position;
attribute vec2 uv;


varying vec2 vUv;




void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
   
    vUv = uv;
    float PI = 3.1415925;
  


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}