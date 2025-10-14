import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Objects
const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cone1 = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1, 32),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cone1.position.x = -1.5
group.add(cone1)

const cone2 = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1, 32),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cone2.position.x = 0
group.add(cone2)

const cone3 = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1, 32),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cone3.position.x = 1.5
group.add(cone3)


//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//const mesh = new THREE.Mesh(geometry, material)
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1

//mesh.rotation.x = Math.PI * 0.25
//mesh.rotation.y = Math.PI * 0.25

//mesh.scale.x = 2
//mesh.scale.y = 0.25
//mesh.scale.z = 0.5

//scene.add(mesh)

//Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
