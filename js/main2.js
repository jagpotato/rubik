const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
camera.position.z = 500;

const object = new THREE.CSS3DObject(document.getElementById('panels'));
scene.add(object);

const renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'absolute';
document.getElementById('container').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);

animate();
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}
function render() {
  renderer.render(scene, camera);
}
