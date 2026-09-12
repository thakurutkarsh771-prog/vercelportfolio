import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import Background from './Background';

function CameraRig() {
  const target = useRef({ x: 0, y: 0 });
  useFrame((state) => {
    target.current.x = state.pointer.x * 0.22;
    target.current.y = state.pointer.y * 0.12;
    const scrollDepth = Math.min(window.scrollY / 2600, 1.4);
    state.camera.position.z += (8 + scrollDepth - state.camera.position.z) * 0.02;
    state.camera.position.x += (target.current.x - state.camera.position.x) * 0.025;
    state.camera.position.y += (target.current.y - state.camera.position.y) * 0.025;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene() {
  const [webgl] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch { return false; }
  });
  if (!webgl) return <div className="scene-fallback" aria-hidden="true" />;

  return (
    <div className="scene-layer" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: false, alpha: true }}>
        <Suspense fallback={null}><CameraRig /><Background /></Suspense>
      </Canvas>
    </div>
  );
}