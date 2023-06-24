import * as THREE from 'three'
import { useRef, useState,useEffect,Suspense } from 'react'
import { useFrame,useLoader } from '@react-three/fiber'
import {ScrollControls, Scroll, Environment,Lightformer,PositionalAudio,Sparkles,Caustics,Float,Sphere,useIntersect, Image,useCursor} from '@react-three/drei'
import { Robot } from './components/Saura';
import baffle from 'baffle'
import { Bag } from './components/Bag';
import { Laptop } from './components/Laptop';
import { Tree } from './components/Tree';
import { Comp } from './components/Comp';
import { Saubm } from './components/Saurabhbm';
import { Backgr } from './components/Backgr';
import { Notebook } from './components/Notebook';
import { Head } from './components/Head';
import { Key } from './components/Key';

const MyProject = (img) => {
  const sphereRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let image = img.img

  const base = useLoader(THREE.TextureLoader,`${image}`);
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  useFrame(() => {
      // sphereRef.current.rotation.x += 0.01;
      // sphereRef.current.rotation.y += 0.01;
      // sphereRef.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={sphereRef} >
       <boxGeometry
          args={[1.5, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
          radius={1} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          
        </boxGeometry>
        <meshPhysicalMaterial
            map={base}
          />
      
    </mesh>
  );
};


const MySkills = (img) => {
  const sphereRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let image = img.img

  const base = useLoader(THREE.TextureLoader,`${image}`);
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  const bump = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(repeatX, repeatY);

  const normal = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(repeatX, repeatY);

  const ao = useLoader(
    THREE.TextureLoader,
    "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg"
  );
  ao.wrapS = THREE.RepeatWrapping;
  ao.wrapT = THREE.RepeatWrapping;
  ao.repeat.set(repeatX, repeatY);

  const metalness = useLoader(
    THREE.TextureLoader,
    "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg"
  );
  metalness.wrapS = THREE.RepeatWrapping;
  metalness.wrapT = THREE.RepeatWrapping;
  metalness.repeat.set(repeatX, repeatY);

  const rough = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  rough.wrapS = THREE.RepeatWrapping;
  rough.wrapT = THREE.RepeatWrapping;
  rough.repeat.set(repeatX, repeatY);

  useFrame(() => {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={sphereRef} >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial
        map={base}
        // metalnessMap={metalness}
        // bumpMap={bump}
        // aoMap={ao}
        // normalMap={normal}
        // roughnessMap={rough}
      />
    </mesh>
  );
};

const MySphere = (img) => {
  const sphereRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  let image = img.img

  const base = useLoader(THREE.TextureLoader,`${image}`);
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  const bump = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(repeatX, repeatY);

  const normal = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(repeatX, repeatY);

  const ao = useLoader(
    THREE.TextureLoader,
    "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg"
  );
  ao.wrapS = THREE.RepeatWrapping;
  ao.wrapT = THREE.RepeatWrapping;
  ao.repeat.set(repeatX, repeatY);

  const metalness = useLoader(
    THREE.TextureLoader,
    "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg"
  );
  metalness.wrapS = THREE.RepeatWrapping;
  metalness.wrapT = THREE.RepeatWrapping;
  metalness.repeat.set(repeatX, repeatY);

  const rough = useLoader(THREE.TextureLoader, "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg");
  rough.wrapS = THREE.RepeatWrapping;
  rough.wrapT = THREE.RepeatWrapping;
  rough.repeat.set(repeatX, repeatY);

  useFrame(() => {
     sphereRef.current.rotation.x -= 0.01;
    // sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef} >
      <boxGeometry args={[1.5, 1.5, 0.5]} />
      <meshPhysicalMaterial
        map={base}
        metalnessMap={metalness}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        roughnessMap={rough}
      />
    </mesh>
  );
};

function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░S░A░U░R░A░B░H░',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })

  const [hovered, set] = useState()
  useCursor(hovered, /*'pointer', 'auto'*/)

  const [playing, setPlaying] = useState(false);


  const togglePlay = () => {
    setPlaying(!playing);
  };


  return (
    <Suspense fallback={null}>
    <>
    {/* <ambientLight intensity={0.5} />
    <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} /> */}
     {/* <color attach="background" args={['#333333']} /> */}
     <color attach="background" args={['black']} />
      <ambientLight intensity={0.1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />
      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={50} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[10, 1, 1]} />
      </Environment>

    <ScrollControls pages={10}>
    <Suspense fallback={null}>
        <Saubm scale={0.35} rotation-x={-0.2} rotation-y={0.5} position={[0, -20, 0]}/>
    </Suspense>
      <mesh position={[-7.5,-1,-1.5]}  scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            // eslint-disable-next-line no-sequences
            onClick={(e) => (e.stopPropagation(),window.open(
              "https://github.com/saurabhgrewal718", "_blank"))}
            >  
        <MySphere img='./gitt.png'>
        </MySphere> 
      </mesh>
      <mesh position={[-7.5,-2,-1.15]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            // eslint-disable-next-line no-sequences
            onClick={(e) => (e.stopPropagation(),   window.open(
              "https://www.linkedin.com/in/saurabhgrewal/", "_blank"))}
            >
       <MySphere img='https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png'>
        </MySphere> 
      </mesh>
      <mesh  position={[-6.9,-2.7,-0.5]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            // eslint-disable-next-line no-sequences
            onClick={(e) => (e.stopPropagation(),   window.open(
              "mailto:saurabhgrewal718@gmail.com?subject=Important!&body=Hi Saurabh...", "_blank"))}
      >
       <MySphere img='https://cdn-icons-png.flaticon.com/512/281/281769.png'>
        </MySphere> 
      </mesh>
      <Scroll html style={{width: '100%'}}>
           <div style={{ color: '#cdcbca',position: 'fixed',left: '2%',top:'5%', fontSize: '30px', transform: `translate(0%,0%)` }}><img src='./sau.jpeg' style={{width:'80px',height:'80px',borderRadius:'50%',marginTop:'15px' }} alt="Saurabh Grewal"/></div>
           <div style={{ color: '#cdcbca',position: 'fixed',right: '0%',top:'5vh', transform: `translate(0%,0%)` }}>
           <button className='btn' onClick={togglePlay}> {playing ? 'Pause Sound' : 'Play Sound'}</button>  
           </div>
              <lottie-player  style={{width:'90px',height:'90px',position: 'absolute', top: `60vh`,left: '50%'}}  src="https://assets10.lottiefiles.com/packages/lf20_euvytx7n.json" background="transparent" speed="1" loop autoplay></lottie-player>
              <lottie-player  style={{width:'90px',height:'90px',position: 'absolute', top: `115vh`,left: '50%'}}  src="https://assets1.lottiefiles.com/packages/lf20_o87tttfh.json" background="transparent" speed="0.5" loop autoplay></lottie-player>
              <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `85vh`,left: '50%', fontSize: '60px', transform: `translate(-50%,-50%)` }}>SAURABH GREWAL</h1>
              <h2 style={{ color: '#cdcbca',position: 'absolute', top: `95vh`,left: '50%', fontSize: '30px', transform: `translate(-50%,-50%)` }}>FULL STACK DEVELOPER</h2>
              <div style={{display:'flex',alignItems:'center' }}>
              </div>
              <p style={{ color: '#cdcbca',position: 'absolute', top: `150vh`,left: '50%', fontSize: '20px', textAlign:'center',transform: `translate(-50%,-50%)` }}>I'm a fullstack developer who's passionate about crafting beautiful interfaces and webapps that make people go "wow"! I've got skills in Angular, Spring Boot, and Node.js, and I've already deployed three seriously impressive production-grade apps. Check out my Github for more juicy details! Let's create something that'll make your users say "holy cow, that's awesome"!</p>                
             
              <h2 style={{ position: 'absolute', top: '230vh', left: '50%', transform: `translate(-50%,-50%)` }}>Tools and Frameworks</h2>    
              <p style={{ color: '#cdcbca',position: 'absolute', top: `250vh`,left: '50%', fontSize: '20px',textAlign:'center', transform: `translate(-50%,-50%)` }}>I gained hands on experience in JavaScript, Angular, Node.js, Firebase, HTML, CSS, MySQL, GitHub, Python, Java, Springboot, MongoDB, AWS EC2, and Flutter. From front-end design and back-end development to database management and cloud computing</p>
      
              <h2 style={{ position: 'absolute', top: '400vh', left: '50%', transform: `translate(-50%,-50%)` }}>Experience</h2>    
              <p style={{ color: '#cdcbca',position: 'absolute', top: `420vh`,left: '50%', fontSize: '20px',textAlign:'center', transform: `translate(-50%,-50%)` }}>I have Been working for 2 years now and so far i have worked with the following companies, its been a wonderful journey so far :)</p>
          
              <h2 style={{ position: 'absolute', top: '665vh', left: '50%', transform: `translate(-50%,-50%)` }}>My Projects</h2>   

               <div className='row' style={{ position: 'absolute', top: `920vh`,width:'100%'}}>
                <div className='col' style={{ position: 'absolute', right: `5%`, width: "740px"}}>
                  <h2 style={{ maxWidth: "640px" }}>Say Hiii...</h2>
                  <p style={{ maxWidth: '640px',fontSize:'18px' }}>Hey there, thanks for visiting my website! If you've made it this far, I assume you're either impressed by my skills or just really bored. Either way, don't be shy to say hi! I promise I won't bite (unless you're a chocolate chip cookie, then all bets are off). You can either drop me a message or send me an animated GIF of your favorite meme! </p>                
                  <button style={{ margin:'10px' }}  onClick={(e) => (e.stopPropagation(),window.open(
                  "https://github.com/saurabhgrewal718", "_blank"))}
                      >GitHub</button>
                  <button style={{ margin:'10px' }} onClick={(e) => (e.stopPropagation(),window.open(
                  "https://www.linkedin.com/in/saurabhgrewal/", "_blank"))}>Linkedin</button>
                  <button style={{ margin:'10px' }} onClick={(e) => (e.stopPropagation(),window.open(
                  "https://drive.google.com/file/d/148QMhEcmsadiTGYWrp6au_wk047QRVCL/view", "_blank"))}>Resume</button>
                </div>
              </div>                 
        </Scroll>
      <Scroll>
        <Sparkles count={500} scale={2 * 2} size={1} speed={0.5}/>
        <group position={[0, -1.5, 0]}>
          <Suspense fallback={null}>
              <Robot scale={0.30} rotation-x={-0.2}/>
          </Suspense>
        </group>
        <Suspense fallback={null}>
          <Backgr scale={1.4} rotation-y={1.9} rotation-x={0.1} rotation-z={-0.4} position={[0, -4, -5]}/>
          <Tree position={[-0.7, -9, -2]} scale={0.15} rotation-x={0} />   
        </Suspense>
                    
        {/* <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Rig /> */}
      </Scroll>
      <Scroll>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1,0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            {/* <Headphone scale={0.7} position={[2.5,-1.5,-2]} rotation-y={2}/> */}
            <Suspense fallback={null}>
               <Head scale={0.2} position={[2,0.5,-3]} rotation-y={1}/>
            </Suspense>
        </Float>
        
        <Laptop position={[2.8,-1.8,-2]} scale={4} />

        
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={1.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0,-1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Caustics
              position={[-2.5,0,-2]}
              backfaces
              scale={6}
              color={[1, 0.8, 0.8]}
              focus={[0, -1.2, 0]}
              lightSource={[-2, 2.5, -2.5]}
              frustum={1.75}
              intensity={0.005}
              worldRadius={0.66 / 10}
              ior={0.6}
              backfaceIor={1.26}>
              {/* <Sphere>
                <MeshTransmissionMaterial resolution={1024} color={'pink'} distortion={0.5} thickness={0.2} anisotropy={1} />
              </Sphere> */}
              <Suspense fallback={null}>
                 <Notebook/>
              </Suspense>
            </Caustics>
          
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={1.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,-0.4]}>
        <Caustics
              position={[1,0,-2]}
              backfaces
              color={[1, 0.8, 0.8]}
              focus={[0, -1.2, 0]}
              lightSource={[-2, 2.5, -2.5]}
              frustum={1.75}
              scale={6}
              rotation-x={1}
              intensity={0.005}
              worldRadius={0.66 / 10}
              ior={0.6}
              backfaceIor={1.26}>
              {/* <Sphere>
                <MeshTransmissionMaterial resolution={1024} color={'pink'} distortion={0.5} thickness={0.2} anisotropy={1} />
              </Sphere> */}
              <Suspense fallback={null}>
                 <Key/>
              </Suspense>
            </Caustics></Float>
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
           <Suspense fallback={null}>
           {playing ? <PositionalAudio
                  autoplay
                  url="/nature.mp3"
                  distance={2}
                  loop
                /> : null }
           <Bag scale={0.05} rotation-y={5} position={[-2,0,0]}/>
            </Suspense>
            
        </Float>
          
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <mesh position={[2, -8, -1]}
            scale={0.40}>
              <MySkills img={'./angular.png'}>
              </MySkills>
          </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.25,0.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <mesh position={[-1, -8, 0.3]}
          scale={0.45}>
            <MySkills img={'./node.png'}>
            </MySkills>
        </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <mesh position={[1, -8,-0.6]}
          scale={0.45}>
            <MySkills img={'./docker.png'}>
            </MySkills>
        </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.35} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.25,0.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <mesh position={[0, -8.1,0]}
          scale={0.45}>
            <MySkills img={'./sql.png'}>
            </MySkills>
        </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <mesh  position={[-2, -7.8,0]} scale={0.5}>
            <MySkills img={'./spring.png'}>
            </MySkills>
          </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <mesh  position={[-1, -7,0]} scale={0.3}>
            <MySkills img={'./aws.png'}>
            </MySkills>
          </mesh>
          <mesh  position={[-2, -6.5,-0.5]} scale={0.3}>
            <MySkills img={'./flutter.png'}>
            </MySkills>
          </mesh>
          <mesh  position={[0.5, -6.5,0.5]} scale={0.3}>
            <MySkills img={'./mongo.png'}>
            </MySkills>
          </mesh>
          <mesh  position={[1.5, -6.8,-1]} scale={0.3}>
            <MySkills img={'./firebase.png'}>
            </MySkills>
          </mesh>
        </Float>
      </Scroll>
      <Scroll>
        <mesh position={[1.2, -12, 0]} rotation-y={0.1} rotation-x={-0.2}>
             <MyProject img={'./fin.png'}/>
          </mesh>
          <mesh  position={[1.1, -14, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img={'./info.png'}/>
        </mesh>
        <mesh  position={[1.2, -16, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img={'./moh.png'}/>
        </mesh>
      </Scroll>

      <Scroll>
        <Comp position={[0, -10,0]} scale={0.5}/>
      </Scroll>
      <Scroll>
        <Suspense fallback={null}>
          <mesh position={[0, -19, 1]} rotation-y={1} rotation-x={-0.1}>
             <MyProject img={'./caffto.png'}/>
          </mesh>
          <mesh  position={[0, -20.5, 1]} rotation-y={1} rotation-x={-0.1}>
            <MyProject img={'./finan1.png'}/>
        </mesh>
        <mesh position={[0, -22, 1]} rotation-y={1} rotation-x={-0.1}>
            <MyProject img={'./fin2.jpeg'}/>
        </mesh>
        </Suspense>
       
      </Scroll>
    </ScrollControls>
    </>
    </Suspense>
  );
}

export default App;




