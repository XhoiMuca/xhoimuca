import React, { useRef } from 'react'
import { useGLTF,Float ,useTexture} from '@react-three/drei'

const CSharp = (props) => {
  const { nodes, materials } = useGLTF('/models/CSharp.gltf')
  return (
    <Float floatIntensity={1}>  
    
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C#_C#_0'].geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.5}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/CSharp.gltf')

export default CSharp
