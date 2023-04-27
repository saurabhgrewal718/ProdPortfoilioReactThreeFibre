import * as THREE from 'three'
import { useRef, useState,useEffect,Suspense } from 'react'
import { useFrame, useThree,useLoader } from '@react-three/fiber'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Caustics,Float,Sphere,
  MeshTransmissionMaterial,useIntersect, Image,useCursor} from '@react-three/drei'
import { Robot } from './components/Saura';
import baffle from 'baffle'
import { Bag } from './components/Bag';
import { Laptop } from './components/Laptop';
import { Tree } from './components/Tree';
import { Comp } from './components/Comp';
import { Saubm } from './components/Saurabhbm';
import { Backgr } from './components/Backgr';
import { Notebook } from './components/Notebook';
import { Keyboard } from './components/Keyboard';
import { Head } from './components/Head';

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 0 : 1, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}

const MySphere = (img) => {
  const sphereRef = useRef();
  const repeatX = 1;
  const repeatY = 1;
  console.log(img.img);
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
  });

  return (
    <mesh ref={sphereRef} >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
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

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/1.jpg" scale={[1.5,1.5,1]} position={[1.4, -12, 0]} rotation-y={-0.2} rotation-x={-0.3}/>
      <Item url="/1.jpg" scale={[1.5,1.5,1]} position={[1.4, -14, 0]} rotation-y={-0.2} rotation-x={-0.3}/>
      <Item url="/1.jpg" scale={[1.7,1.6,1]} position={[1.4, -16, 0]} rotation-y={-0.2} rotation-x={-0.3}/>
      {/* <Item url="/1.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -16, 0]} />
      <Item url="/1.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -18, 0]} />
      <Item url="/1.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -20, 0]} />
      <Item url="/1.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -22, 0]} /> */}
      {/* <Item url="/1.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/1.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/1.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} /> */}
    </Scroll>
  )
}

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
  const base1 = useLoader(THREE.TextureLoader, "./link.png");


  return (
    <Suspense fallback={null}>
    <>
    {/* <ambientLight intensity={0.5} />
    <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} /> */}
     {/* <color attach="background" args={['#333333']} /> */}
     <color attach="background" args={['black']} />
      <ambientLight intensity={0.1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />      

    <ScrollControls pages={10}>
    <Suspense fallback={null}>
        <Saubm scale={0.35} rotation-x={-0.2} rotation-y={0.5} position={[0, -20, 0]}/>
    </Suspense>
      <mesh position={[-7.5,-1,-1.5]}  scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            onClick={(e) => (e.stopPropagation(),   window.open(
              "https://github.com/saurabhgrewal718", "_blank"))}
            >  
        <MySphere img='./gitt.png'>
        </MySphere> 
      </mesh>
      <mesh position={[-7.5,-2,-1.15]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            onClick={(e) => (e.stopPropagation(),   window.open(
              "https://www.linkedin.com/in/saurabhgrewal/", "_blank"))}
            >
       <MySphere img='https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png'>
        </MySphere> 
      </mesh>
      <mesh  position={[-6.9,-2.7,-0.5]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
            onClick={(e) => (e.stopPropagation(),   window.open(
              "mailto:saurabhgrewal718@gmail.com?subject=Important!&body=Hi Saurabh...", "_blank"))}
      >
       <MySphere img='https://cdn-icons-png.flaticon.com/512/281/281769.png'>
        </MySphere> 
      </mesh>
      <Scroll html style={{width: '100%'}}>
           <div style={{ color: '#cdcbca',position: 'fixed',left: '2%',top:'5%', fontSize: '5em', transform: `translate(0%,0%)` }}><img src='./sau.jpeg' style={{width:'80px',height:'80px',borderRadius:'50%',marginTop:'15px' }}/></div>
       {/* <div style={{ color: '#cdcbca',position: 'fixed',right: '0%',top:'0%', fontSize: '5em', transform: `translate(0%,0%)` }}>manu</div> */}
              <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `85vh`,left: '50%', fontSize: '5em', transform: `translate(-50%,-50%)` }}>SAURABH GREWAL</h1>
              <div className='row' style={{ position: 'absolute', top: `132vh`}}>
                <h2>Be a Man of the Future.</h2>
                <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
                <button>Read more</button>
              </div>
    
              <div className='row' style={{ position: 'absolute', top: `230vh`}}>
                <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
                  <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
                  <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
                  <button>Read more</button>
                </div>
              </div>
              
              <h2 style={{ position: 'absolute', top: '400vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>              
              <h2 style={{ position: 'absolute', top: '660vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>   

               <div className='row' style={{ position: 'absolute', top: `920vh`}}>
                <div className='col' style={{ position: 'absolute', right: `40px`, width: "740px"}}>
                  <h2 style={{ maxWidth: "640px" }}>Tech-Savvy Side</h2>
                  <p style={{ maxWidth: '640px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
                  <button style={{ margin:'10px' }}>GitHub</button>
                  <button style={{ margin:'10px' }}>Linkedin</button>
                  <button style={{ margin:'10px' }}>Resume</button>
                </div>
              </div>                 
        </Scroll>
      <Scroll>
        <Sparkles count={500} scale={2 * 2} size={1} speed={0.5}/>
        <group position={[0, -1.5, 0]}>
          <Suspense fallback={null}>
              <Robot scale={0.35} rotation-x={-0.2}/>
          </Suspense>
        </group>
        <Suspense fallback={null}>
          <Backgr scale={1.4} rotation-y={1.9} rotation-x={0.1} rotation-z={-0.4} position={[0, -4, -5]}/>
          <Tree position={[0, -8, -1]} scale={0.15} rotation-x={0} />   
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
                 <Keyboard/>
              </Suspense>
            </Caustics></Float>
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
           <Suspense fallback={null}>
           <Bag scale={0.05} rotation-y={5} position={[-2,0,0]}/>
            </Suspense>
            
        </Float>
          
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Sphere
          position={[2.5, -8, -1]}
          scale={0.5}
        >
           <meshPhysicalMaterial 
            color="red"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </Sphere></Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.25,0.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Sphere
          position={[-1.5, -8, 0]}
          scale={0.5}
        >
           <meshPhysicalMaterial 
            color="red"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </Sphere>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Sphere
          position={[1, -8,-0.6]}
          scale={0.5}
        >
           <meshPhysicalMaterial 
            color="red"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </Sphere></Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.35} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.25,0.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Sphere
          position={[0, -8.3,0]}
          scale={0.5}
        >
           <meshPhysicalMaterial 
            color="red"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.5}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </Sphere>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2,0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Sphere
          position={[-3, -8,0]}
          scale={0.5}
        >
           <meshPhysicalMaterial 
            color="red"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </Sphere>
        </Float>

      </Scroll>
      <Items />
      <Scroll>
        <Comp position={[0, -10,0]} scale={0.5}/>
        {/* <Office position={[0, -10,0]} scale={0.01} rotation-y={0.5} rotation-x={-0.2} rotation-z={0.06}/> */}
      </Scroll>
      <Scroll>

        <RoundedBox
            position={[0, -19, 1]}
            rotation-y={0.1}
            rotation-x={-0.2}
            args={[1.5, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
            radius={0.05} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          >
          <meshPhongMaterial color="green" />
        </RoundedBox>
        <RoundedBox
          position={[0, -20.5, 1]}
          rotation-y={1}
          rotation-x={-0.1}
          args={[1.5, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshPhongMaterial color="orange" />
        </RoundedBox>
        <RoundedBox
          position={[0, -22, 1]}
          rotation-y={0.1}
          rotation-x={-0.2}
          args={[1.5, 1, 0.1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshPhongMaterial color="red" />
        </RoundedBox>
      </Scroll>
    </ScrollControls>
    </>
    </Suspense>
  );
}

export default App;




