

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Python = (props) => {
  const { nodes, materials } = useGLTF('/models/python.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['.001']}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.901}
      />
    </group>
  )
}

useGLTF.preload('/models/python.gltf')
export default Python;
