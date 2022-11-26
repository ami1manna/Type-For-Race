//variable
let container,camera, renderer,scene,car;
function init(){
    container = document.querySelector('.scene');

    //create sence
    scene = new THREE.Scene();

const fov = 35;
const aspect = container.clientWidth/container.clientHeight;
const near = 0.1 ;
const far = 500;
//camera setup
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(-1,0.5,5);

//lighing 
const ambient = new THREE.AmbientLight(0x404040,2);
scene.add(ambient);

const light  = new THREE.DirectionalLight(0xffffff,2);
light.position.set(10,10,10);
scene.add(light);
//renderer setup
renderer =  new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize(container.clientWidth,container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);


// load modal
let loader =  new THREE.GLTFLoader();
loader.load('./3D/scene.gltf',function(gltf){
    scene.add(gltf.scene);
    car = gltf.scene.children[0];
    car.rotation.x += 850;
    animate();
    renderer.render(scene,camera);
    
});

function animate(){
    requestAnimationFrame(animate);
//    car.rotation.z += 0.006;
   car.rotation.y += 0.009;
//    car.rotation.x += 0.005;
    renderer.render(scene,camera);
}




}
init();