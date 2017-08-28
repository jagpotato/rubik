// シーン
const scene = new THREE.Scene();
// カメラ
const width = 600;
const height = 400;
const fov = 60;
const aspect = width / height;
const near = 1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 50);
// OrbitControls
const controls = new THREE.OrbitControls(camera);
// レンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xefefef);
document.body.appendChild(renderer.domElement);
// ライト
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0, 0.7, 0.7);
scene.add(directionalLight);
// 環境光
const ambient = new THREE.AmbientLight(0x666666);
scene.add(ambient);

//- X軸
const lineXGeometry = new THREE.Geometry();
lineXGeometry.vertices.push(new THREE.Vector3(-100, 0, 0));
lineXGeometry.vertices.push(new THREE.Vector3(100, 0, 0));
const lineXMaterial = new THREE.LineBasicMaterial({color: 0xff0000});
const lineX = new THREE.Line(lineXGeometry, lineXMaterial);
scene.add(lineX);
//- Y軸
const lineYGeometry = new THREE.Geometry();
lineYGeometry.vertices.push(new THREE.Vector3(0, -100, 0));
lineYGeometry.vertices.push(new THREE.Vector3(0, 100, 0));
const lineYMaterial = new THREE.LineBasicMaterial({color: 0x00ff00});
const lineY = new THREE.Line(lineYGeometry, lineYMaterial);
scene.add(lineY);
//- Z軸
const lineZGeometry = new THREE.Geometry();
lineZGeometry.vertices.push(new THREE.Vector3(0, 0, -100));
lineZGeometry.vertices.push(new THREE.Vector3(0, 0, 100));
const lineZMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
const lineZ = new THREE.Line(lineZGeometry, lineZMaterial);
scene.add(lineZ);

// キューブ
// const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// プレーン
const PLANE_SIZE = 10;
const PLANE_INTERVAL = 1;
const VARIATION = PLANE_SIZE + PLANE_INTERVAL;

// const planeGeometry = new Array(54);
// for ( let i = 0; i < 54; i++ ) {
//   planeGeometry[i] = new THREE.PlaneGeometry(10, 10, 1, 1);
// }
const planeGeometry = [];
for ( let i = 0; i < 6; i++ ) {
  planeGeometry[i] = [];
  for ( let j = 0; j < 9; j++ ) {
    planeGeometry[i][j] = new THREE.PlaneGeometry(10, 10, 1, 1);
  }
}

const planeMaterial = new Array(6);
planeMaterial[0] = new THREE.MeshBasicMaterial({color: 0xff0000});
planeMaterial[1] = new THREE.MeshBasicMaterial({color: 0x008000});
planeMaterial[2] = new THREE.MeshBasicMaterial({color: 0xff8c00});
planeMaterial[3] = new THREE.MeshBasicMaterial({color: 0x0000ff});
planeMaterial[4] = new THREE.MeshBasicMaterial({color: 0xffff00});
planeMaterial[5] = new THREE.MeshBasicMaterial({color: 0xffffff});
for ( let i = 0; i < 6; i++ ) {
  planeMaterial[i].side = THREE.DoubleSide;
}
const plane = [];

for ( let i = 0; i < 6; i++ ) {
  plane[i] = [];
  let planes = new THREE.Group();
  for ( let j = 0; j < 9; j++ ) {
    plane[i][j] = new THREE.Mesh(planeGeometry[i][j], planeMaterial[i]);
    planes.add(plane[i][j]);
  }
  switch ( i ) {
    case 0: planes.rotation.set(0, 0, 0);
            planes.position.set(0, 0, 17);
            break;
    case 1: planes.rotation.set(0, Math.PI / 2, 0);
            planes.position.set(17, 0, 0);
            break;
    case 2: planes.rotation.set(0, 0, 0);
            planes.position.set(0, 0, -17);
            break;
    case 3: planes.rotation.set(0, Math.PI / 2, 0);
            planes.position.set(-17, 0, 0);
            break;
    case 4: planes.rotation.set(Math.PI / 2, 0, 0);
            planes.position.set(0, 17, 0);
            break;
    case 5: planes.rotation.set(Math.PI / 2, 0, 0);
            planes.position.set(0, -17, 0);
            break;
    default: break;
  }
  scene.add(planes);
}

// for ( let i = 0; i < 54; i++ ) {
//   if ( i == 8 ) {
//     let planesA = new THREE.Group();
//     for ( let i = 0; i < 9; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[0]);
//       planesA.add(plane[i]);
//     }
//     planesA.rotation.set(0, 0, 0);
//     planesA.position.set(0, 0, 17);
//     scene.add(planesA);
//   } else if ( i == 17 ) {
//     let planesB = new THREE.Group();
//     for ( let i = 9; i < 18; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[1]);
//       planesB.add(plane[i]);
//     }
//     planesB.rotation.set(0, Math.PI / 2, 0);
//     planesB.position.set(17, 0, 0);
//     scene.add(planesB);
//   } else if ( i == 26 ) {
//     let planesC = new THREE.Group();
//     for ( let i = 18; i < 27; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[2]);
//       planesC.add(plane[i]);
//     }
//     planesC.rotation.set(0, 0, 0);
//     planesC.position.set(0, 0, -17);
//     scene.add(planesC);
//   } else if ( i == 35 ) {
//     let planesD = new THREE.Group();
//     for ( let i = 27; i < 36; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[3]);
//       planesD.add(plane[i]);
//     }
//     planesD.rotation.set(0, Math.PI / 2, 0);
//     planesD.position.set(-17, 0, 0);
//     scene.add(planesD);
//   } else if ( i == 44 ) {
//     let planesE = new THREE.Group();
//     for ( let i = 36; i < 45; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[4]);
//       planesE.add(plane[i]);
//     }
//     planesE.rotation.set(Math.PI / 2, 0, 0);
//     planesE.position.set(0, 17, 0);
//     scene.add(planesE);
//   } else if ( i == 53 ) {
//     let planesF = new THREE.Group();
//     for ( let i = 45; i < 54; i++ ) {
//       plane[i] = new THREE.Mesh(planeGeometry[i], planeMaterial[5]);
//       planesF.add(plane[i]);
//     }
//     planesF.rotation.set(Math.PI / 2, 0, 0);
//     planesF.position.set(0, -17, 0);
//     scene.add(planesF);
//   }
// }
for ( let i = 0; i < 6; i++ ) {
  setPlane(plane, i);
}

function setPlane(plane, num) {
  let index = 0;
  for ( let i = 0; i < 3; i++ ) {
    for ( let j = 0; j < 3; j++ ) {
      plane[num][index].position.set(-VARIATION + j * VARIATION, VARIATION - i * VARIATION, 0);
      index++;
    }
  }
}

// レンダリング
render();
function render() {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}
