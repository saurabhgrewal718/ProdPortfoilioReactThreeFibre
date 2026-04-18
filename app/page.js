"use client"

import * as THREE from 'three'
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { ScrollControls, Scroll, Environment, Lightformer, PositionalAudio, Sparkles, Caustics, Float, useCursor, Loader, Html, Billboard } from '@react-three/drei'
import baffle from 'baffle'
import dynamic from "next/dynamic"

// Wrap EVERY component from src/components/ with ssr: false and handle named exports
const Backgr = dynamic(() => import("../src/components/Backgr").then(mod => mod.Backgr), { ssr: false })
const Bag = dynamic(() => import("../src/components/Bag").then(mod => mod.Bag), { ssr: false })
const Comp = dynamic(() => import("../src/components/Comp").then(mod => mod.Comp), { ssr: false })
const Head = dynamic(() => import("../src/components/Head").then(mod => mod.Head), { ssr: false })
const Headphone = dynamic(() => import("../src/components/Headphone").then(mod => mod.Headphone), { ssr: false })
const Key = dynamic(() => import("../src/components/Key").then(mod => mod.Key), { ssr: false })
const Laptop = dynamic(() => import("../src/components/Laptop").then(mod => mod.Laptop), { ssr: false })
const Notebook = dynamic(() => import("../src/components/Notebook").then(mod => mod.Notebook), { ssr: false })
const Plane = dynamic(() => import("../src/components/Plane").then(mod => mod.Plane), { ssr: false })
const Robot = dynamic(() => import("../src/components/Saura").then(mod => mod.Robot), { ssr: false })
const Saubm = dynamic(() => import("../src/components/Saurabhbm").then(mod => mod.Saubm), { ssr: false })
const Tree = dynamic(() => import("../src/components/Tree").then(mod => mod.Tree), { ssr: false })

const SKILLS_DATA = [
  { name: "TypeScript", slug: "typescript", level: "Expert", description: "Primary language for scalable backend and frontend development." },
  { name: "Node.js", slug: "nodejs", level: "Expert", description: "Expertise in event-driven architecture and high-performance APIs." },
  { name: "Nest.js", slug: "nestjs", level: "Expert", description: "Building enterprise-grade microservices with modular design." },
  { name: "PostgreSQL", slug: "postgresql", level: "Expert", description: "Design and optimization of complex relational schemas." },
  { name: "Java", slug: "java", level: "Proficient", description: "Strong foundation in OOP and enterprise Spring ecosystem." },
  { name: "Spring Boot", slug: "spring", level: "Proficient", description: "Building robust enterprise microservices and REST APIs." },
  { name: "AWS", slug: "amazonwebservices", level: "Certified", description: "Cloud practitioner specializing in Lambda, SQS, and ECS." },
  { name: "Go", slug: "go", level: "Proficient", description: "Building high-performance systems and concurrent workflows." },
  { name: "Python", slug: "python", level: "Proficient", description: "Scripting, data processing, and backend automation." },
  { name: "MongoDB", slug: "mongodb", level: "Expert", description: "NoSQL document storage for flexible data modeling." },
  { name: "Docker", slug: "docker", level: "Proficient", description: "Containerization for consistent deployment environments." },
  { name: "Redis", slug: "redis", level: "Specialty", description: "Distributed caching and real-time state management." },
  { name: "Kafka", slug: "apachekafka", level: "Specialty", description: "High-throughput event streaming and pub/sub messaging." },
  { name: "Angular", slug: "angularjs", level: "Proficient", description: "Frontend development for complex enterprise dashboards." },
  { name: "React", slug: "react", level: "Proficient", description: "Building dynamic and responsive user interfaces." },
  { name: "Firebase", slug: "firebase", level: "Proficient", description: "Auth, notifications, and rapid cloud deployment." },
];

const MyProject = ({ img }) => {
  const sphereRef = useRef();
  const base = useLoader(THREE.TextureLoader, img);
  base.wrapS = base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(1, 1);

  return (
    <mesh ref={sphereRef} >
      <boxGeometry args={[1.5, 1, 0.1]} />
      <meshPhysicalMaterial map={base} />
    </mesh>
  );
};

const SkillIcon = ({ slug, name, description, level }) => {
  const [hovered, setHovered] = useState(false);

  const suffix = slug === 'amazonwebservices' ? 'plain-wordmark' : 'original';
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${suffix}.svg`;

  return (
    <Html center distanceFactor={10} position={[0, 0, 0]}>
      <div
        className="skill-badge-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="skill-badge-logo">
          <img src={iconUrl} alt={name} />
        </div>

        {hovered && (
          <div className="skill-tooltip-inline">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="skill-level-tag">{level}</div>
          </div>
        )}
      </div>
    </Html>
  );
};

const MySphere = ({ img, children }) => {
  const sphereRef = useRef();
  const base = useLoader(THREE.TextureLoader, img);
  const dummy = "https://blenderartists.org/uploads/default/original/4X/4/e/3/4e31caa0f5acc386e4a504eab2269ebdb47f0307.jpg";
  const bump = useLoader(THREE.TextureLoader, dummy);

  useFrame(() => {
    if (sphereRef.current) sphereRef.current.rotation.x -= 0.01;
  });

  return (
    <mesh ref={sphereRef} >
      <boxGeometry args={[1.5, 1.5, 0.5]} />
      <meshPhysicalMaterial map={base} bumpMap={bump} />
      {children}
    </mesh>
  );
};

function ProjectScene({ playing, togglePlay }) {
  const [hovered, set] = useState()
  useCursor(hovered)

  return (
    <Suspense fallback={null}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />
      <Environment resolution={512}>
        <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={50} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[10, 1, 1]} />
      </Environment>

      <ScrollControls pages={10}>
        <Suspense fallback={null}>
          <Saubm scale={0.35} rotation-x={-0.2} rotation-y={0.5} position={[0, -20, 0]} />
        </Suspense>

        <mesh position={[-6.5, -1, -1.5]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
          onClick={(e) => (e.stopPropagation(), window.open("https://github.com/saurabhgrewal718", "_blank"))}>
          <MySphere img='./gitt.png' />
        </mesh>

        <mesh position={[-6.5, -2, -1.15]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
          onClick={(e) => (e.stopPropagation(), window.open("https://www.linkedin.com/in/saurabhgrewal/", "_blank"))}>
          <MySphere img='https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png' />
        </mesh>

        <mesh position={[-5.9, -2.7, -0.5]} scale={0.3} onPointerOver={() => set(true)} onPointerOut={() => set(false)}
          onClick={(e) => (e.stopPropagation(), window.open("mailto:saurabhgrewal718@gmail.com?subject=Important!&body=Hi Saurabh...", "_blank"))}>
          <MySphere img='https://cdn-icons-png.flaticon.com/512/281/281769.png' />
        </mesh>

        <Scroll html style={{ width: '100%' }}>
          <div style={{ color: '#cdcbca', position: 'fixed', left: '2%', top: '5%', fontSize: '30px' }}>
            <img src='./sau.jpeg' style={{ width: '80px', height: '80px', borderRadius: '50%', marginTop: '15px' }} alt="Saurabh Grewal" />
          </div>
          <div style={{ color: '#cdcbca', position: 'fixed', right: '0%', top: '5vh' }}>
            <button className='btn' onClick={togglePlay}> {playing ? 'Pause Sound' : 'Play Sound'}</button>
            <button className='btn-green' onClick={() => window.open("https://drive.google.com/file/d/108q16mqnieM-YyDc5coRFMQCUa7XjMOb/view", "_blank")}> Resume </button>
          </div>

          <lottie-player style={{ width: '90px', height: '90px', position: 'absolute', top: `60vh`, left: '50%' }} src="https://assets10.lottiefiles.com/packages/lf20_euvytx7n.json" background="transparent" speed="1" loop autoplay></lottie-player>
          <lottie-player style={{ width: '90px', height: '90px', position: 'absolute', top: `115vh`, left: '50%' }} src="https://assets1.lottiefiles.com/packages/lf20_o87tttfh.json" background="transparent" speed="0.5" loop autoplay></lottie-player>

          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `85vh`, left: '50%', fontSize: '60px', transform: `translate(-50%,-50%)` }}>SAURABH GREWAL</h1>
          <h2 style={{ color: '#cdcbca', position: 'absolute', top: `95vh`, left: '50%', fontSize: '30px', transform: `translate(-50%,-50%)` }}>FULL STACK (Backend) DEVELOPER</h2>

          <p style={{ color: '#cdcbca', position: 'absolute', top: `150vh`, left: '50%', fontSize: '20px', textAlign: 'center', transform: `translate(-50%,-50%)` }}>
            I'm a fullstack developer(backend heavy these days) who's passionate about crafting beautiful and Blazing Fast interfaces and webapps that make people go "wow"!
          </p>

          <h2 style={{ position: 'absolute', top: '230vh', left: '50%', transform: `translate(-50%,-50%)` }}>Tools and Frameworks</h2>
          <p style={{ color: '#cdcbca', position: 'absolute', top: `250vh`, left: '50%', fontSize: '20px', textAlign: 'center', transform: `translate(-50%,-50%)` }}>
            I gained hands on experience in TypeScript, Lambda, SQS, DynamoDB, Redis, JavaScript, Angular, Node.js, Firebase, MySQL, GitHub, Python, Java, Springboot, MongoDB, AWS EC2, and Flutter.
          </p>

          <h2 style={{ position: 'absolute', top: '400vh', left: '50%', transform: `translate(-50%,-50%)` }}>Experience</h2>
          <p style={{ color: '#cdcbca', position: 'absolute', top: `420vh`, left: '50%', fontSize: '20px', textAlign: 'center', transform: `translate(-50%,-50%)` }}>
            I have Been working for 5 years now and so far i have worked with the following companies, its been a wonderful journey so far :)
          </p>

          <h2 style={{ position: 'absolute', top: '665vh', left: '50%', transform: `translate(-50%,-50%)` }}>My Projects</h2>

          <div className='row' style={{ position: 'absolute', top: `920vh`, width: '100%' }}>
            <div className='col' style={{ position: 'absolute', right: `5%`, width: "740px" }}>
              <h2 style={{ maxWidth: "640px" }}>Say Hiii...</h2>
              <button style={{ margin: '10px' }} onClick={() => window.open("https://github.com/saurabhgrewal718", "_blank")}>GitHub</button>
              <button style={{ margin: '10px' }} onClick={() => window.open("https://www.linkedin.com/in/saurabhgrewal/", "_blank")}>Linkedin</button>
            </div>
          </div>
        </Scroll>

        <Scroll>
          <Sparkles count={500} scale={4} size={1} speed={0.5} />
          <group position={[0, -1.5, 0]}>
            <Suspense fallback={null}>
              <Robot scale={0.30} rotation-x={-0.2} />
            </Suspense>
          </group>
          <Suspense fallback={null}>
            <Backgr scale={1.4} rotation-y={1.9} rotation-x={0.1} rotation-z={-0.4} position={[0, -4, -5]} />
            <Tree position={[-0.7, -9, -2.5]} scale={0.15} rotation-x={0} />
          </Suspense>

          {/* Laptop restored to original position */}
          <Suspense fallback={null}>
            <Laptop position={[2.8, -1.8, -2]} scale={4} />
          </Suspense>

          {/* Skill icons: left/right from camera POV — rotation-y compensates for scene angle */}
          <group rotation-y={0.40}>
            {SKILLS_DATA.map((skill, i) => {
              const half = Math.floor(SKILLS_DATA.length / 2);
              const isLeft = i < half;
              const sideIndex = isLeft ? i : i - half;
              const col = sideIndex % 2;
              const row = Math.floor(sideIndex / 2);
              const xBase = isLeft ? -1.5 : 1.5;
              const xOffset = col * (isLeft ? -1.2 : 1.2);
              const x = xBase + xOffset;
              const y = -0.5 - row * 1.3;
              const z = -2.0 - (col * 0.5);
              const speed = 0.4 + (i % 5) * 0.2;
              return (
                <Float key={i} speed={speed} rotationIntensity={0.2} floatIntensity={0.8} floatingRange={[-0.15, 0.15]}>
                  <group position={[x, y, z]}>
                    <SkillIcon {...skill} />
                  </group>
                </Float>
              );
            })}
          </group>
        </Scroll>

        <Scroll>
          <mesh position={[1.2, -11.5, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img='./pw.png' />
          </mesh>
          <mesh position={[1.2, -13, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img='./sportsbaazi.png' />
          </mesh>
          <mesh position={[1.2, -14.5, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img='./fin.png' />
          </mesh>
          <mesh position={[1.1, -16, 0]} rotation-y={0.1} rotation-x={-0.2}>
            <MyProject img='./info.png' />
          </mesh>
        </Scroll>

        <Scroll>
          <Comp position={[0, -10, 0]} scale={0.5} />
        </Scroll>

        <Scroll>
          <Suspense fallback={null}>
            <mesh position={[0, -18.5, 0.6]} rotation-y={1} rotation-x={-0.1}><MyProject img='./Delhi.jpg' /></mesh>
            <mesh position={[0, -20, 1]} rotation-y={1} rotation-x={-0.1}><MyProject img='./caffto.png' /></mesh>
            <mesh position={[0, -21.5, 1]} rotation-y={1} rotation-x={-0.1}><MyProject img='./finan1.png' /></mesh>
            <mesh position={[0, -23, 1]} rotation-y={1} rotation-x={-0.1}><MyProject img='./fin2.jpeg' /></mesh>
          </Suspense>
        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}

export default function Home() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // We need to wait a bit for the DOM to be ready as Scroll html injects it
    const timer = setTimeout(() => {
      const target = baffle('.title')
      target.set({
        characters: '░S░A░U░R░A░B░H░',
        speed: 100
      })
      target.start()
      target.reveal(1000, 1000)
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <main className="seo-content">
        <h1>Saurabh Grewal</h1>
        <h2>SDE II — Backend Developer | Distributed Systems | High-Scale Architecture</h2>
        <p>Backend Engineer with 4+ years building high-scale distributed systems. Currently at Physics Wallah, Noida.</p>

        <h2>Skills</h2>
        <p>TypeScript, Go, Node.js, Nest.js, Java, Spring Boot, Python, React, Angular, MySQL, PostgreSQL, MongoDB, Redis, Microservices, AWS Lambda, AWS SQS, AWS DynamoDB, AWS RDS, AWS EC2, Kafka, BullMQ, Hibernate/JPA</p>

        <h2>Experience</h2>
        <h3>Physics Wallah — SDE II Backend (May 2024 – Present)</h3>
        <p>Scaled EzPay architecture in Nest.js supporting 5M+ monthly fee transactions with 99.9% uptime across 100+ clients. Built complete RBAC and Multi-Tenant system. Integrated Paytm and Juspay payment gateways enabling 500cr+ in loans. Engineered Zoom integrations with Redis, BullMQ and Kafka improving performance by 40% for 50,000+ daily session interactions.</p>

        <h3>SportsBaazi — SDE II Backend (Jun 2023 – Mar 2024)</h3>
        <p>Built TypeScript/Node.js backend for Player Stocks scaling on AWS. Engineered real-time matching engine reducing bid matching from 3 minutes to 2 seconds. Developed affiliate panel using SQS, Lambda and DynamoDB.</p>

        <h3>Finanshels — Full Stack Developer (Nov 2022 – Apr 2023)</h3>
        <p>Built custom financial dashboard integrating Xero/Codat using Angular, Node.js, Spring Boot, Firebase and MongoDB.</p>

        <h3>Infosys — System Engineer (Sep 2021 – Nov 2022)</h3>
        <p>Built web applications using Angular and Spring Boot microservices. Deployed prototypes on AWS EC2 for clients including Morgan Stanley.</p>

        <h2>Education</h2>
        <p>Master of Computer Science — Maharishi Dayanand University (2019–2021), CGPA 8.2/10</p>
        <p>Bachelor of Science — Pt. N.R.S Govt College (2015–2018)</p>

        <h2>Achievements</h2>
        <p>AWS Certified Cloud Practitioner (CLF-C02). Certified in Spring Boot and Node.js.</p>

        <h2>Contact</h2>
        <a href="https://github.com/saurabhgrewal718">GitHub</a>
        <a href="https://linkedin.com/in/saurabhgrewal">LinkedIn</a>
        <a href="mailto:saurabhgrewal718@gmail.com">saurabhgrewal718@gmail.com</a>
      </main>

      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <ProjectScene playing={playing} togglePlay={() => setPlaying(!playing)} />
      </Canvas>
      <Loader
        dataStyles={{ fontSize: '5em', fontFamily: 'Abril Fatface' }}
        dataInterpolation={(p) => `${p.toFixed(0)}%`}
        initialState={(active) => active}
      />
    </div>
  );
}
