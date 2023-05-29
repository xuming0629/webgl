/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('webgl')
let ctx_gl = canvas.getContext('webgl')


// 
// vertexShader, fragmentShader

let vertexSource = `
    // glssl

void main()
{
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;

}

`

let fragmentSource = `
    void main()
    {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }

`

let vertexShader = ctx_gl.createShader(ctx_gl.VERTEX_SHADER)
let fragmentShader = ctx_gl.createShader(ctx_gl.FRAGMENT_SHADER)

ctx_gl.shaderSource(vertexShader, vertexSource)
ctx_gl.shaderSource(fragmentShader, fragmentSource)

ctx_gl.compileShader(vertexShader)
ctx_gl.compileShader(fragmentShader)

// program
let program = ctx_gl.createProgram()
ctx_gl.attachShader(program, vertexShader)
ctx_gl.attachShader(program, fragmentShader)

ctx_gl.linkProgram(program)
ctx_gl.useProgram(program)


// WEBGL 3D
ctx_gl.clearColor(0.5, 0.5, 0.5, 1.0)   // rgba()/
ctx_gl.clear(ctx_gl.COLOR_BUFFER_BIT)   //

// 画一个点
ctx_gl.drawArrays(ctx_gl.POINTS, 0, 1)




