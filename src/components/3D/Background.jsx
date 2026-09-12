import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

function Core() {
  const ref = useRef();
  useFrame((state) => { ref.current.rotation.x = state.clock.elapsedTime * 0.08; ref.current.rotation.y = state.clock.elapsedTime * 0.12; });
  return <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}><mesh ref={ref}><icosahedronGeometry args={[1.3, 1]} /><meshBasicMaterial color="#c8f169" wireframe transparent opacity={0.22} /></mesh></Float>;
}

function Nodes() {
  const group = useRef();
  const nodes = Array.from({ length: 12 }, (_, index) => { const angle = (index / 12) * Math.PI * 2; return [Math.cos(angle) * 2.7, Math.sin(angle * 2) * 0.5, Math.sin(angle) * 2.7]; });
  useFrame((state) => { group.current.rotation.y = state.clock.elapsedTime * 0.035; group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.12; });
  return <group ref={group}>{nodes.map((position, index) => <mesh key={index} position={position}><sphereGeometry args={[0.045, 8, 8]} /><meshBasicMaterial color={index % 3 === 0 ? '#ff8066' : '#c8f169'} /></mesh>)}</group>;
}

export default function Background() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => { const query = window.matchMedia('(max-width: 768px)'); const update = () => setMobile(query.matches); update(); query.addEventListener('change', update); return () => query.removeEventListener('change', update); }, []);
  return <><color attach="background" args={['#080a0a']} /><fog attach="fog" args={['#080a0a', 7, 15]} /><ambientLight intensity={0.4} /><Core /><Nodes /><Sparkles count={mobile ? 24 : 70} scale={[12, 7, 8]} size={mobile ? 1 : 1.4} speed={0.15} color="#c8f169" opacity={0.35} /><Stars radius={12} depth={8} count={mobile ? 60 : 180} factor={1.2} saturation={0} fade speed={0.08} /></>;
}
