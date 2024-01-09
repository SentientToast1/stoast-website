
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1 , 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);
//end of header

const DirtTex = new THREE.TextureLoader().load('dirt.jpg');
const CubeGeom = new THREE.BoxGeometry(1,1,1);
const CubeMat = new THREE.MeshStandardMaterial({map: DirtTex});
const Cube = new THREE.Mesh(CubeGeom, CubeMat);
scene.add(Cube);
camera.position.z = 3;


const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


const controls = new OrbitControls( camera, renderer.domElement );
function animate() { 
    requestAnimationFrame( animate ); 
    renderer.render( scene, camera );
    Cube.rotation.y += 0.02;
    controls.Update();
 } 
 animate();