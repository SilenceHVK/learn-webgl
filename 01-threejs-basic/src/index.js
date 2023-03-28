import * as Three from 'three';

// 创建场景
const scene = new Three.Scene();

// 创建透明相机
const camare = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// 设置相机位置
camare.position.set(0, 0, 1);
scene.add(camare);

// 创建几何体
const cubeGeometry = new Three.BoxGeometry(1, 1, 1);
// 创建材质
const cubeMaterial = new Three.MeshBasicMaterial({ color: 0x0ff00 });
// 创建物体
const mesh = new Three.Mesh(cubeGeometry, cubeMaterial);
scene.add(mesh);

// 创建渲染器
const renderer = new Three.WebGLRenderer();
// 设置渲染尺寸
renderer.setSize(window.innerWidth, window.innerHeight);
// 将 WebGL 渲染的 canvas 添加到 body
document.body.appendChild(renderer.domElement);

// 使用渲染器通过相机将场景渲染
renderer.render(scene, camare);