import { MeshBasicMaterial } from 'three'

export class VoronoiMaterial extends MeshBasicMaterial {
  constructor(params = {}) {
    super(params)

    this.uniforms = {
    }

    this.defines = {
      USE_UV: '',
    }

    this.speed = 0.0005
  }

  onBeforeCompile = (shader) => {
    console.log(`WebGL: compiling: ${this.constructor.name}`)
    shader.uniforms = {
      ...shader.uniforms,
      ...this.uniforms,
    }

    shader.defines = {
      ...shader.defines,
      ...this.defines,
    }

    shader.fragmentShader = shader.fragmentShader.replace(
      /* glsl */ `vec4 diffuseColor = vec4( diffuse, opacity );`,
      /* glsl */ `vec4 diffuseColor = vec4( vec3(0.,1.,0.), opacity );`
    )

    // console.log(shader.fragmentShader)
  }
}
