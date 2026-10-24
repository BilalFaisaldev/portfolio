import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic dual-accent lights matching portfolio theme
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const keyLight = new THREE.DirectionalLight(0x00e5ff, 2.2);
    keyLight.position.set(4, 2, 3);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff2a5f, 2.6);
    rimLight.position.set(-4, 1, -3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
    fillLight.position.set(0, -3, 4);
    scene.add(fillLight);

    const spinGroup = new THREE.Group();
    scene.add(spinGroup);

    // Faceted material & Cyber wireframe overlay
    const facetMat = new THREE.MeshStandardMaterial({
      color: 0x14141f,
      flatShading: true,
      metalness: 0.35,
      roughness: 0.45,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    // Procedural organic faceted cyber sculpture
    const geo = new THREE.IcosahedronGeometry(1.4, 1);
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n = Math.sin(v.x * 3.1) * Math.cos(v.y * 2.7) * Math.sin(v.z * 3.7);
      v.multiplyScalar(1 + n * 0.15);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, facetMat);
    mesh.add(new THREE.Mesh(geo, wireMat));
    spinGroup.add(mesh);

    let targetTiltX = 0;
    let targetTiltY = 0;

    const handleMouseMove = (e) => {
      targetTiltX = (e.clientY / window.innerHeight - 0.5) * 0.4;
      targetTiltY = (e.clientX / window.innerWidth - 0.5) * 0.4;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w && h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const t = clock.getElapsedTime();
      spinGroup.rotation.y = t * 0.45 + targetTiltY;
      spinGroup.rotation.x += (targetTiltX - spinGroup.rotation.x) * 0.05;
      spinGroup.position.y = Math.sin(t * 0.8) * 0.08;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      facetMat.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div id="head-3d" ref={mountRef} aria-hidden="true" />;
}
