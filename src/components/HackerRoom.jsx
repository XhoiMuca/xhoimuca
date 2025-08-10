
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
export function HackerRoom(props) {
const { nodes, materials } = useGLTF('/models/scene.gltf')

const logo = useTexture('/textures/desk/fulllogo-w.png')
const screenTexture = useTexture('/textures/desk/code.png')
  const monitortxt = useTexture('textures/desk/chatgpt.png');

  return (
    <group {...props} dispose={null}>
      <group position={[-361.779, 865.499, -278.228]} rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-11.421, 0, 17.307]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.981}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -9.081]}
          />
        </group>
        <group
          position={[-10.199, 0, 17.307]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.815, 0.815, 6.061]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -9.081]}
          />
        </group>
        <group
          position={[-29.135, 10.318, 17.324]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-1.155, 1.155, 1.155]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -4.214]}
          />
        </group>
        <group
          position={[-9.8, 0, 17.307]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-1.155, 1.155, 1.155]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_metal_0.geometry}
            material={materials.metal}
            position={[8.935, 0.014, 19.9]}
          />
        </group>
        <group
          position={[-25.222, 10.318, 17.324]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-1.367, 1.367, 0.191]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -4.214]}
          />
        </group>
        <group
          position={[-29.135, -10.318, 17.324]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={1.155}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -4.214]}
          />
        </group>
        <group position={[-9.8, 0, 17.307]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={1.155}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_metal_0.geometry}
            material={materials.metal}
            position={[8.935, 0.014, 19.9]}
          />
        </group>
        <group
          position={[-25.222, -10.318, 17.324]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.367, 1.367, 0.191]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -4.214]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GeoSphere001_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[16.592, -0.221, -19.649]}
          rotation={[0, 0, Math.PI / 2]}
          scale={1.058}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_green_plastic_0.geometry}
          material={materials.green_plastic}
          position={[16.608, -0.279, -5.433]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_green_plastic_0.geometry}
          material={materials.green_plastic}
          position={[16.592, 0, 17.307]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box002_green_plastic_0.geometry}
          material={materials.green_plastic}
          position={[14.591, -0.125, 26.581]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box003_green_plastic_0.geometry}
          material={materials.green_plastic}
          position={[14.591, -0.125, 9.551]}
          rotation={[Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_white_plastic_0.geometry}
          material={materials.white_plastic}
          position={[16.608, -0.279, 7.472]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[16.608, -0.279, -8.285]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004_white_plastic_0.geometry}
          material={materials.white_plastic}
          position={[-9.8, 0, 17.307]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1, 1.092, 1]}
        />
      </group>
      <group position={[612.417, 1063.801, 165.427]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-59.372, 1.381, 176.083]} rotation={[Math.PI / 2, 0, 0.698]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box018_black_metall_0.geometry}
            material={materials.black_metall}
            position={[2.185, -14.083, -6.383]}
          />
        </group>
        <group position={[-59.372, 7.515, 176.083]} rotation={[Math.PI / 2, 0, 0.698]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box019_black_metall_0.geometry}
            material={materials.black_metall}
            position={[2.185, -14.083, -6.383]}
          />
        </group>
        <group position={[-92.454, 8.009, 199.813]} rotation={[Math.PI / 2, 0, -0.611]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box020_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -7.315]}
          />
        </group>
        <group position={[-153.34, 7.764, 207.044]} rotation={[0, -0.96, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[87.361, 0, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_black_metall_0.geometry}
            material={materials.black_metall}
            position={[75.968, 0, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_black_metall_0.geometry}
            material={materials.black_metall}
            position={[69.36, 0, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_mic_head_0.geometry}
            material={materials.mic_head}
            position={[4.092, 0, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={1.894}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_metal_0.geometry}
            material={materials.metal}
            position={[90.385, 0, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={0.711}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box006_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[181.029, 3.913, -232.645]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box007_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[181.029, 3.913, -267.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box008_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[192.537, 7.764, -248.438]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box009_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[193.969, 4.383, -267.492]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_black_metall_0.geometry}
          material={materials.black_metall}
          position={[196.371, 4.397, -272.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box010_black_metall_0.geometry}
          material={materials.black_metall}
          position={[196.277, 4.832, -228.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box011_black_metall_0.geometry}
          material={materials.black_metall}
          position={[184.59, 4.832, -228.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box012_black_metall_0.geometry}
          material={materials.black_metall}
          position={[190.497, 1.708, -215.662]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box013_black_metall_0.geometry}
          material={materials.black_metall}
          position={[190.497, 7.973, -215.662]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box014_black_metall_0.geometry}
          material={materials.black_metall}
          position={[171.179, 7.764, 25.789]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box015_black_metall_0.geometry}
          material={materials.black_metall}
          position={[173.517, 4.832, 42.976]}
          rotation={[0, -0.967, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box016_black_metall_0.geometry}
          material={materials.black_metall}
          position={[164.956, 4.832, 35.361]}
          rotation={[0, -0.967, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box017_black_metall_0.geometry}
          material={materials.black_metall}
          position={[171.179, 14.002, 25.789]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-59.316, 7.764, 176.6]}
          rotation={[0, -0.96, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_metal_0.geometry}
          material={materials.metal}
          position={[-66.982, 7.764, 181.964]}
          rotation={[0, -0.96, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-81.297, 7.764, 191.987]}
          rotation={[0, -0.96, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-81.856, 7.764, 192.378]}
          rotation={[0, -0.96, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-138.41, 8.009, 231.807]}
          rotation={[0, 0.611, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-129.1, 8.009, 242.063]}
          rotation={[0, 0.611, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_metal_0.geometry}
          material={materials.metal}
          position={[184.097, 1.039, -225.721]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_metal_0.geometry}
          material={materials.metal}
          position={[196.014, 1.039, -218.699]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_metal_0.geometry}
          material={materials.metal}
          position={[165.783, 1.039, 28.567]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_metal_0.geometry}
          material={materials.metal}
          position={[177.648, 1.039, 35.444]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_metal_0.geometry}
          material={materials.metal}
          position={[169.618, 1.039, 44.384]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_metal_0.geometry}
          material={materials.metal}
          position={[-60.985, 1.039, 168.584]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_metal_0.geometry}
          material={materials.metal}
          position={[-53.063, 1.039, 177.114]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_metal_0.geometry}
          material={materials.metal}
          position={[184.097, 9.51, -225.721]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_metal_0.geometry}
          material={materials.metal}
          position={[196.014, 9.51, -218.699]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_metal_0.geometry}
          material={materials.metal}
          position={[165.783, 9.51, 28.567]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_metal_0.geometry}
          material={materials.metal}
          position={[177.648, 9.51, 35.444]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_metal_0.geometry}
          material={materials.metal}
          position={[169.618, 9.51, 44.384]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_metal_0.geometry}
          material={materials.metal}
          position={[-60.985, 9.51, 168.584]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_metal_0.geometry}
          material={materials.metal}
          position={[-53.063, 9.51, 177.114]}
          rotation={[Math.PI / 2, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038_black_metall_0.geometry}
          material={materials.black_metall}
          position={[71.548, 1.898, 90.503]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_black_metall_0.geometry}
          material={materials.black_metall}
          position={[76.32, -1.26, 87.935]}
          rotation={[-Math.PI, 1.134, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus003_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-143.755, 8.009, 221.133]}
          rotation={[0, 0.611, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line001_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[81.759, 7.764, 54.21]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[164.919, 823.965, -179.231]} rotation={[-Math.PI / 2, 0, 0.175]}>
        <group position={[-167.757, -186.297, 32.673]} rotation={[0.087, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box041_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-2.575, 0, -4.059]}
          />
        </group>
        <group position={[-56.434, -186.297, 32.673]} rotation={[0.087, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box046_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-2.575, 0, -4.059]}
          />
        </group>
        <group position={[-141.542, -186.297, 32.673]} rotation={[0.087, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box059_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-2.575, 0, -4.059]}
          />
        </group>
        <group position={[-115.326, -186.297, 32.673]} rotation={[0.087, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box061_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-2.575, 0, -4.059]}
          />
        </group>
        <group position={[-156.806, -165.488, 34.494]} rotation={[0.087, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box063_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-12.997, 0, -4.059]}
          />
        </group>
        <group
          position={[-134.814, -188.146, 10.516]}
          rotation={[-3.054, 0, 0]}
          scale={[1, 1, 0.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box231_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -0.53]}
          />
        </group>
        <group position={[97.26, -188.146, 10.516]} rotation={[-3.054, 0, 0]} scale={[1, 1, 0.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box230_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -0.53]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box130_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-150.62, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_white_plastic_0.geometry}
          material={materials.white_plastic}
          position={[-162.343, -47.927, 29.697]}
          rotation={[1.658, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box021_metal_light_0.geometry}
          material={materials.metal_light}
          position={[-3.403, -136.34, 15.506]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box022_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box023_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box040_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-167.757, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box047_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-33.068, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box048_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[115.192, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box049_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[115.192, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box050_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[95.069, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box051_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[95.069, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box052_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[74.947, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box053_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[74.947, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box054_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[54.824, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box055_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[54.824, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box056_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[34.701, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box057_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[34.701, -185.943, 28.629]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box058_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-141.542, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box060_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-115.326, -185.515, 23.733]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box064_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -164.284, 25.59]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box065_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -164.712, 30.487]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box066_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -143.429, 27.415]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box067_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -143.857, 32.311]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box068_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -122.573, 29.239]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box069_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -123.002, 34.136]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box070_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -101.718, 31.064]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box071_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -102.146, 35.961]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box072_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[135.314, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box073_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[135.314, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box074_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[114.89, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box075_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[114.89, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box076_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[94.466, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box077_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[94.466, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box078_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[74.042, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box079_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[74.042, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box080_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[53.619, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box081_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[53.619, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box082_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[33.195, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box083_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[33.195, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box084_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[12.771, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box085_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[12.771, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box086_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-7.653, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box087_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-7.653, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box088_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-28.077, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box089_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-28.077, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box090_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-48.501, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box091_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-48.501, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box092_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-68.925, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box093_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-68.925, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box094_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-89.349, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box095_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-89.349, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box096_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-109.773, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box097_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-109.773, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box098_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-130.197, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box099_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-130.197, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box100_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-150.62, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box101_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-150.621, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box102_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-171.044, -80.863, 32.888]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box103_red_plastic_0.geometry}
          material={materials.red_plastic}
          position={[-171.044, -81.291, 37.785]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box104_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[104.793, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box108_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[74.042, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box109_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[74.042, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box110_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[53.619, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box111_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[53.619, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box112_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[33.195, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box113_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[33.195, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box114_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[12.771, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box115_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[12.771, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box116_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-7.653, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box117_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-7.653, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box118_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-28.077, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box119_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-28.077, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box120_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-48.501, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box121_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-48.501, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box122_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-68.925, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box123_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-68.925, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box124_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-89.349, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box125_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-89.349, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box126_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-109.773, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box127_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-109.773, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box128_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-130.197, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box129_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-130.197, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box131_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-150.621, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box132_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-171.044, -101.83, 31.054]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box133_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-171.044, -102.258, 35.951]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box134_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[108.125, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box138_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[83.956, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box139_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[83.956, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box140_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[63.532, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box141_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[63.532, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box142_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[43.108, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box143_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[43.108, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box144_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[22.684, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box145_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[22.684, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box146_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[2.26, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box147_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[2.26, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box148_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-18.164, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box149_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-18.164, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box150_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-38.588, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box151_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-38.588, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box152_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-59.012, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box153_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-59.012, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box154_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-79.436, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box155_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-79.436, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box156_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-99.86, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box157_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-99.86, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box158_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-120.284, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box159_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-120.284, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box160_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-140.707, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box161_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-140.707, -123.225, 34.117]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box162_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-167.086, -122.796, 29.22]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box168_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[68.158, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box169_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[68.158, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box170_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[47.734, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box171_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[47.734, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box172_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[27.31, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box173_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[27.31, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box174_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[6.887, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box175_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[6.887, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box176_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-13.537, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box177_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-13.537, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box178_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-33.961, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box179_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-33.961, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box180_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-54.385, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box181_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-54.385, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box182_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-74.809, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box183_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-74.809, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box184_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-95.233, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box185_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-95.233, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box186_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-115.657, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box187_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-115.657, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box188_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-136.081, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box189_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-136.081, -144.191, 32.282]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box192_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-161.093, -143.763, 27.385]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box194_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[114.89, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box195_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[114.89, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box198_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[61.018, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box199_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[61.018, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box200_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[40.594, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box201_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[40.594, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box202_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[20.171, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box203_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[20.171, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box204_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-0.253, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box205_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-0.253, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box206_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-20.677, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box207_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-20.677, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box208_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-41.101, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box209_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-41.101, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box210_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-61.525, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box211_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-61.525, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box212_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-81.949, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box213_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-81.949, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box214_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-102.373, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box215_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-102.373, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box216_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-122.797, -164.73, 25.551]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box217_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-122.797, -165.158, 30.448]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box220_trans_plastic_0.geometry}
          material={materials.trans_plastic}
          position={[-150.621, -165.368, 25.495]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box221_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[95.069, -165.19, 30.445]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box222_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-156.853, -144.158, 32.285]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box223_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[102.77, -144.2, 32.281]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box225_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-156.856, -123.194, 34.119]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box226_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[119.343, -123.194, 34.119]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box227_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[115.071, -102.267, 35.95]}
          rotation={[0.087, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box228_white_plastic_0.geometry}
          material={materials.white_plastic}
          position={[-162.107, -63.894, 25.522]}
          rotation={[0.087, 0, 0]}
          scale={[1, 1, 1.066]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box229_metal_light_0.geometry}
          material={materials.metal_light}
          position={[-3.403, -136.34, 16.768]}
          rotation={[0.087, 0, 0]}
          scale={0.972}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-167.273, -85.357, 19.884]}
          rotation={[-3.054, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[132.942, -85.357, 19.884]}
          rotation={[-3.054, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line002_white_plastic_0.geometry}
          material={materials.white_plastic}
          position={[12.528, 19.553, 5.454]}
        />
      </group>
      <group position={[699.806, 812.962, 309.734]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.187, 5.552, 20.491]} scale={1.15}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder073_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, 1.545]}
          />
        </group>
        <group position={[-0.187, 5.552, 19.938]} scale={1.551}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, 1.963]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box237_black_metall_0.geometry}
          material={materials.black_metall}
          position={[0.01, -2.341, -11.017]}
          scale={[1.435, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-0.187, 5.552, -16.653]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box238_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-0.02, -20.292, -14.488]}
          scale={[1.435, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box236_black_metall_0.geometry}
          material={materials.black_metall}
          position={[0.01, 0.654, -11.517]}
          scale={[1.435, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box239_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-0.104, 5.913, -15.283]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box234_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-0.02, 15.212, 17.807]}
          scale={[1.435, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box235_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-0.02, 15.212, -13.679]}
          scale={[1.435, 1, 1]}
        />
      </group>
      <group position={[53.034, 415.457, -77.099]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[684.297, -325.072, 384.614]} rotation={[-Math.PI, 0, 1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, 315.911, 384.614]} rotation={[Math.PI, 0, 2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, -325.072, 384.614]} rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, -325.072, 384.614]} rotation={[-Math.PI, 0, -1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder060_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, -325.072, 384.614]} rotation={[Math.PI, 0, -2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, -325.072, 384.614]} rotation={[Math.PI, 0, 2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, 315.911, 384.614]} rotation={[-Math.PI, 0, 1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, 315.911, 384.614]} rotation={[Math.PI, 0, -2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder068_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, 315.911, 384.614]} rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[684.297, 315.911, 384.614]} rotation={[-Math.PI, 0, -1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder067_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[0, 0, 385.445]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box232_yellow_table_0.geometry}
            material={materials.yellow_table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box232_black_plastic_0.geometry}
            material={materials.black_plastic_0}
          />
        </group>
        <group position={[-700.488, -325.072, 384.614]} rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, -325.072, 384.614]} rotation={[-Math.PI, 0, -1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, -325.072, 384.614]} rotation={[Math.PI, 0, -2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, -325.072, 384.614]} rotation={[Math.PI, 0, 2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, -325.072, 384.614]} rotation={[-Math.PI, 0, 1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, 315.911, 384.614]} rotation={[-Math.PI, 0, 1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, 315.911, 384.614]} rotation={[Math.PI, 0, 2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, 315.911, 384.614]} rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, 315.911, 384.614]} rotation={[-Math.PI, 0, -1.257]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <group position={[-700.488, 315.911, 384.614]} rotation={[Math.PI, 0, -2.513]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_metal_0.geometry}
            material={materials.metal}
            position={[19.04, 15.318, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058_metal_0.geometry}
          material={materials.metal}
          position={[684.297, -325.072, 385.579]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_metal_0.geometry}
          material={materials.metal}
          position={[684.297, 315.911, 385.579]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057_black_metall_0.geometry}
          material={materials.black_metall}
          position={[684.297, -325.072, 384.555]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_black_metall_0.geometry}
          material={materials.black_metall}
          position={[684.297, 315.911, 384.555]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051_metal_0.geometry}
          material={materials.metal}
          position={[-700.488, 315.911, 385.579]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_metal_0.geometry}
          material={materials.metal}
          position={[-700.488, -325.072, 385.579]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-700.488, 315.911, 384.555]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_black_metall_0.geometry}
          material={materials.black_metall}
          position={[-700.488, -325.072, 384.555]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </group>
      {/* montor 1 */}
      <group position={[-546.845, 1040.74, -267.888]} rotation={[-Math.PI / 2, 0, 0.175]}>
        <group position={[122.162, 11.106, -41.589]} rotation={[0, 0, 0.262]} scale={1.616}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder076_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -0.72]}
            >
            </mesh>
        
        </group>
        <group
          position={[122.161, 11.103, -17.505]}
          rotation={[-Math.PI / 2, -0.262, Math.PI]}
          scale={1.135}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box246_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group position={[-17.075, -26.203, -36.396]} rotation={[0, 0, 0.262]} scale={1.423}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -3.36]}
          />
        </group>
        <group position={[-17.076, -26.205, -18.942]} rotation={[-Math.PI / 2, -0.262, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box247_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group
          position={[-11.455, -3.163, 127.483]}
          rotation={[Math.PI / 2, -1.309, 0]}
          scale={[0.726, 0.726, 2.334]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -14.397]}
          />
        </group>
        <group position={[-9.25, -10.987, 127.366]} rotation={[Math.PI / 2, -1.309, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box243_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, 24.553]}
          />
        </group>
        <group
          position={[-15.796, 13.079, -21.512]}
          rotation={[0, 0, 0.262]}
          scale={[0.876, 0.902, 1]}>
          <group position={[0, -3.179, -174.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box241_grey_plastic_0.geometry}
              material={materials.grey_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box241_black_plastic_0.geometry}
              material={materials.black_plastic_1}
            />
          </group>
        </group>
        <group position={[-15.101, 10.372, -198.958]} rotation={[0, 0, 0.262]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_grey_plastic_0.geometry}
            material={materials.grey_plastic}
            position={[0, 0, -1.042]}
          />
        </group>
        <group
          position={[10.083, -45.886, 90.092]}
          rotation={[Math.PI / 2, 0.262, 0]}
          scale={[0.804, 1, 1]}>
          <group position={[0, 0, -9.109]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box242_grey_plastic_0.geometry}
              material={materials.grey_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box242_black_plastic_0.geometry}
              material={materials.black_plastic_1}
              
              >
              <meshMatcapMaterial  map={logo}   />
              </mesh>
            
          </group>
        </group>
        <group position={[-38.016, 60.197, -152.586]} rotation={[Math.PI / 2, -1.309, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line003_black_metall_0.geometry}
            material={materials.black_metall}
            position={[44.232, 59.68, -53.257]}
          />
        </group>
        <group
          position={[4.534, -25.179, 90.092]}
          rotation={[Math.PI / 2, 0.262, 0]}
          scale={[0.804, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box244_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -13.02]}
          />
        </group>
        <group
          position={[13.92, -60.209, 90.092]}
          rotation={[Math.PI / 2, 0.262, 0]}
          scale={[0.804, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box245_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -6.883]}
          />
        </group>
        <group position={[37.581, 72.587, -151.396]} rotation={[Math.PI / 2, -1.309, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line004_black_metall_0.geometry}
            material={materials.black_metall}
            position={[36.634, 58.753, -153.72]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box240_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-14.976, -23.524, -208.492]}
          rotation={[0, 0, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_metal_light_0.geometry}
          material={materials.metal_light}
          position={[5.253, -69.856, -94.551]}
          rotation={[Math.PI / 2, 0.262, 0]}
        />
      </group>
      {/* montor 2 */}
      <group position={[71.022, 1042.952, -403.783]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-4.568, -7.323, 107.804]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box251_metal_0.geometry}
            material={materials.metal}
            position={[-2.123, 0, -13.059]}
          />
        </group>
        <group position={[-4.568, -14.627, 107.804]} scale={[1.243, 1, 0.715]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box252_metal_0.geometry}
            material={materials.metal}
            position={[-2.123, 0, -13.059]}
          />
        </group>
        <group position={[-4.568, -32.561, 107.804]} scale={[1.941, 0.304, 1.562]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box253_metal_0.geometry}
            material={materials.metal}
            position={[-2.123, 0, -13.059]}
          />
        </group>
        <group
          position={[-8.187, -75.054, 93.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.876, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box254_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -7.5]}>
            <meshMatcapMaterial map={screenTexture} />
            </mesh>
          
        </group>
        <group
          position={[-8.187, -51.624, 93.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.876, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box255_grey_plastic_0.geometry}
            material={materials.grey_plastic}
            position={[0, 0, 11.112]}
          />
        </group>
        <group
          position={[-8.187, -68.141, -102.123]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.473, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box256_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-7.012, -3.528, -5]}
          />
        </group>
        <group
          position={[-8.187, -83.109, 93.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.876, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box257_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -0.575]}
          />
        </group>
        <group position={[-125.707, -45.957, -38.608]} scale={1.146}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -3.36]}
          />
        </group>
        <group
          position={[-125.709, -45.959, -21.154]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[0.555, 0.555, 0.918]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box261_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group position={[-17.204, 35.321, -153.608]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line006_black_metall_0.geometry}
            material={materials.black_metall}
            position={[36.634, 58.753, -153.72]}
          />
        </group>
        <group position={[-95.567, -45.957, -38.608]} scale={1.423}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder081_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -3.36]}
          />
        </group>
        <group position={[48.582, -45.957, -43.801]} scale={1.616}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder080_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -0.72]}
          />
        </group>
        <group position={[-95.568, -45.959, -21.154]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box260_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group
          position={[48.58, -45.959, -19.717]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={1.135}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box259_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group position={[-17.204, 23.957, -153.608]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line007_black_metall_0.geometry}
            material={materials.black_metall}
            position={[36.634, 58.753, -153.72]}
          />
        </group>
        <group position={[-17.204, 27.758, -153.608]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line008_black_metall_0.geometry}
            material={materials.black_metall}
            position={[36.634, 58.753, -153.72]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box248_metal_0.geometry}
          material={materials.metal}
          position={[-13.151, 12.351, -211.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_metal_0.geometry}
          material={materials.metal}
          position={[-12.415, 19.786, -194.075]}
          scale={0.912}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box249_metal_0.geometry}
          material={materials.metal}
          position={[-117.617, 32.051, -25.255]}
          rotation={[Math.PI / 2, 0, -0.436]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_metal_0.geometry}
          material={materials.metal}
          position={[-223.089, 19.786, 26.494]}
          scale={0.852}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box258_metal_0.geometry}
          material={materials.metal}
          position={[-117.617, 32.051, 107.267]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_black_plastic_matte_0.geometry}
          material={materials.black_plastic_matte}
          position={[-153.373, 20.129, 107.07]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.175, 1.798, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_black_plastic_matte_0.geometry}
          material={materials.black_plastic_matte}
          position={[-49.77, 20.129, 107.07]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.175, 1.798, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_black_plastic_matte_0.geometry}
          material={materials.black_plastic_matte}
          position={[-159.601, 20.129, -6.282]}
          rotation={[0, -1.134, -Math.PI / 2]}
          scale={[1.175, 1.798, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086_black_plastic_matte_0.geometry}
          material={materials.black_plastic_matte}
          position={[-65.705, 20.129, -50.067]}
          rotation={[0, -1.134, -Math.PI / 2]}
          scale={[1.175, 1.798, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box262_metal_0.geometry}
          material={materials.metal}
          position={[-14.011, 48.542, -230.908]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box263_metal_0.geometry}
          material={materials.metal}
          position={[-14.011, 32.104, -242.226]}
          rotation={[Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box264_metal_light_0.geometry}
          material={materials.metal_light}
          position={[-11.141, -3.946, -212.412]}
          scale={[0.838, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-12.415, 19.786, -165.243]}
          scale={[0.974, 0.974, 0.026]}
        />
      </group>
     {/* montor 3 */}
      <group position={[651.782, 983.959, -363.246]} rotation={[-Math.PI / 2, 0, -0.262]}>
        <group position={[-8.135, -31.577, 33.404]} rotation={[Math.PI / 2, 0, 0]} scale={1.447}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder090_black_metall_0.geometry}
            material={materials.black_metall}
            position={[0, 0, -0.72]}
          />
        </group>
        <group
          position={[0, -74.664, -142.23]}
          rotation={[0, 0, 2.356]}
          scale={[3.134, 1.68, 1.68]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box266_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[25.128, 0, -51.97]}
          />
        </group>
        <group position={[0, -47.296, -134.792]} scale={[0.494, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box267_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -9.14]}
          />
        </group>
        <group position={[-109.122, -56.752, 18.216]} rotation={[Math.PI / 2, 0, 0]} scale={0.785}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -3.36]}
          />
        </group>
        <group
          position={[-88.142, -45.082, 18.97]}
          rotation={[0, 0, Math.PI]}
          scale={[1.581, 0.85, 0.904]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box276_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group
          position={[-8.146, -52.55, 33.257]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          scale={[1.189, 1, 1.232]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box277_black_metall_0.geometry}
            material={materials.black_metall}
            position={[-1.482, 0, -4.792]}
          />
        </group>
        <group position={[-67.418, -56.752, 18.216]} rotation={[Math.PI / 2, 0, 0]} scale={0.785}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder093_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -3.36]}
          />
        </group>
        <group position={[-88.141, -30.252, 18.579]} rotation={[Math.PI / 2, 0, 0]} scale={1.242}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -3.36]}
          />
        </group>
        <group position={[-85.882, 101.025, -96.283]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line009_black_metall_0.geometry}
            material={materials.black_metall}
            position={[44.232, 59.68, -53.257]}
          />
        </group>
        <group position={[14.081, 83.102, -95.093]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line010_black_metall_0.geometry}
            material={materials.black_metall}
            position={[36.634, 58.753, -153.72]}
          />
        </group>
        <group position={[0, -66.681, 72.616]} scale={[0.68, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box268_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[144.581, -3.679, -173.027]}
          />
        </group>
        <group position={[0, -75.56, 72.616]} scale={[0.902, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box265_black_plastic_matte_0.geometry}
            material={materials.w}
            position={[144.581, -3.679, -173.027]}
            >
            <meshMatcapMaterial map={monitortxt} />

            </mesh>
        </group>
        <group position={[0, -84.525, 72.616]} scale={[0.902, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box269_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[144.581, -3.679, -173.027]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_metal_light_0.geometry}
          material={materials.metal_light}
          position={[0.707, -81.574, -86.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.42, 1.338, 1]}
        />
      </group>
      <group position={[474.124, 862.106, -36.451]} rotation={[-Math.PI / 2, 0, -Math.PI / 9]}>
        <group position={[1.047, 12.889, -26.694]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder094_black_plastic_matte_0.geometry}
            material={materials.black_plastic_matte}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder094_grey_plastic_0.geometry}
            material={materials.grey_plastic_0}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box279_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[17.097, 44.429, -9.041]}
          rotation={[-0.314, 1.295, 0.326]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box280_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[10.123, 44.429, 12.709]}
          rotation={[-0.25, 1.211, 0.235]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[13.523, 42.421, 4.468]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box281_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-24.076, 44.429, 8.59]}
          rotation={[-2.354, -1.447, -2.358]}
          scale={[-0.164, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box282_black_plastic_0.geometry}
          material={materials.black_plastic}
          position={[-29.908, 44.429, -8.328]}
          rotation={[-0.787, -1.447, -0.783]}
          scale={[0.164, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096_black_plastic_matte_0.geometry}
          material={materials.black_plastic_matte}
          position={[4.008, -35.656, -29.961]}
        />
      </group>
      <group position={[410.839, 832.503, 28.923]} rotation={[-Math.PI / 2, 0, -0.087]}>
        <group position={[-136.284, -182.326, 2.391]} scale={0.621}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box284_blue_plastic_0.geometry}
            material={materials.blue_plastic}
            position={[-0.404, -4.273, 38.369]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box283_linen_black_0.geometry}
          material={materials.linen_black}
          position={[0, 0, -1.329]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box285_linen_black_light_0.geometry}
          material={materials.linen_black_light}
          position={[0, 0, -0.557]}
        />
      </group>
      <group position={[751.528, 997.373, -3.261]} rotation={[-Math.PI / 2, 0, 0.087]}>
        <group position={[82.507, 35.483, -10.626]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box301_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[79.282, 29.129, 16.884]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box302_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[79.306, 22.776, -13.256]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box303_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[72.465, 16.422, -9.747]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box304_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[85.125, 17.375, -13.765]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box305_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[88.229, 17.375, -9.976]} rotation={[0, -1.484, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box306_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group
          position={[59.719, 15.543, -71.99]}
          rotation={[0, -1.484, -Math.PI / 2]}
          scale={0.607}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box307_paper_white_0.geometry}
            material={materials.paper_white}
            position={[0, 0, -0.911]}
          />
        </group>
        <group
          position={[54.895, 19.542, -71.568]}
          rotation={[0, -1.484, -Math.PI / 2]}
          scale={0.607}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box308_paper_yellow_0.geometry}
            material={materials.paper_yellow}
            position={[0, 0, -0.911]}
          />
        </group>
        <group position={[41.01, 28.423, -78.611]} rotation={[0, 0.087, 0]}>
          <group
            position={[-5.422, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box310_paper_yellow_0.geometry}
              material={materials.paper_yellow}
              position={[0, 0, -0.911]}
            />
          </group>
          <group
            position={[2.594, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box311_paper_yellow_0.geometry}
              material={materials.paper_yellow}
              position={[0, 0, -0.911]}
            />
          </group>
          <group
            position={[6.268, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box312_paper_yellow_0.geometry}
              material={materials.paper_yellow}
              position={[0, 0, -0.911]}
            />
          </group>
          <group
            position={[-7.203, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box313_paper_yellow_0.geometry}
              material={materials.paper_yellow}
              position={[0, 0, -0.911]}
            />
          </group>
          <group
            position={[-0.644, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box314_linen_black_0.geometry}
              material={materials.linen_black}
              position={[0, 0, -0.911]}
            />
          </group>
          <group
            position={[1.201, -9.451, -0.088]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box309_linen_black_0.geometry}
              material={materials.linen_black}
              position={[0, 0, -0.911]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder115_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, 36.433]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder116_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, 14.98]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder117_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, -6.472]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder118_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, -27.925]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, -49.377]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder120_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, -70.83]}
            scale={1.727}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder114_metal_0.geometry}
            material={materials.metal}
            position={[0, -36.638, 57.885]}
            scale={1.727}
          />
        </group>
        <group position={[-44.077, 80.679, -111.578]} rotation={[-1.222, 0, 0]}>
          <group position={[0, -3.763, 5.698]} rotation={[-Math.PI, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box295_red_plastic_0.geometry}
              material={materials.red_plastic}
              position={[-4.387, 0, -42.564]}
            />
          </group>
          <group position={[0, -3.763, -4.994]} rotation={[-Math.PI, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box296_red_plastic_0.geometry}
              material={materials.red_plastic}
              position={[-4.387, 0, -42.564]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box291_paper_white_0.geometry}
            material={materials.paper_white}
            position={[42.564, -3.763, 1.148]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box292_paper_white_0.geometry}
            material={materials.paper_white}
            position={[42.564, -3.763, 8.15]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box293_paper_white_0.geometry}
            material={materials.paper_white}
            position={[42.564, -3.763, 9.026]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box294_paper_white_0.geometry}
            material={materials.paper_white}
            position={[42.564, -3.763, 9.687]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder102_metal_0.geometry}
            material={materials.metal}
            position={[-22.052, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder097_metal_0.geometry}
            material={materials.metal}
            position={[31.712, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder098_metal_0.geometry}
            material={materials.metal}
            position={[20.959, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_metal_0.geometry}
            material={materials.metal}
            position={[10.206, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder100_metal_0.geometry}
            material={materials.metal}
            position={[-0.547, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder101_metal_0.geometry}
            material={materials.metal}
            position={[-11.299, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder103_metal_0.geometry}
            material={materials.metal}
            position={[-32.805, 42.886, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1.29}
          />
        </group>
        <group position={[-24.787, -0.722, -104.126]} rotation={[0.416, 0.327, 0.628]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder105_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[1.868, -0.011, -54.52]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box297_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[-3.415, 0.026, 30.451]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[1.868, -0.011, -54.52]}
          />
        </group>
        <group position={[-23.92, -50.194, -111.141]} rotation={[-0.305, 0.172, -0.497]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder110_paper_yellow_0.geometry}
            material={materials.paper_yellow}
            position={[0.791, 0, -54.52]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0.791, 0, -54.52]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box298_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[-4.492, 0.037, 20.279]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.724, 1, 1]}
          />
        </group>
        <group position={[-23.116, -7.24, -116.908]} rotation={[0.416, 0.327, 0.628]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder107_green_plastic_0.geometry}
            material={materials.green_plastic}
            position={[0, 0, -44.617]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder121_black_plastic_0.geometry}
            material={materials.black_plastic}
            position={[0, 0, -44.617]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder106_trans_plastic_0.geometry}
            material={materials.trans_plastic}
            position={[0, 0, -53.786]}
          />
        </group>
        <group position={[-12.342, -48.263, -118.325]} rotation={[-0.305, 0.172, -0.497]}>
          <group position={[-0.095, -0.039, 46.569]} scale={1.184}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder109_dblue_plastic_0.geometry}
              material={materials.dblue_plastic}
              position={[0.095, 0.039, -87.651]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder108_white_plastic_0.geometry}
            material={materials.white_plastic}
            position={[0, 0, -50.252]}
          />
        </group>
        <group position={[-13.398, -55.622, -97.857]} rotation={[-0.305, 0.172, -0.497]}>
          <group position={[0, -0.014, -49.251]} rotation={[Math.PI, 0, -Math.PI]} scale={1.194}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder113_black_plastic_0.geometry}
              material={materials.black_plastic}
              position={[0.095, 0.039, -92.319]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder112_yellow_plastic_0.geometry}
            material={materials.yellow_plastic}
            position={[-0.095, 0.025, 52.238]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[0.956, 1, 1]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box299_metal_0.geometry}
          material={materials.metal}
          position={[62.987, -111.775, -13.278]}
          rotation={[Math.PI / 2, -Math.PI / 3, -0.262]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object013_paper_black_0.geometry}
          material={materials.paper_black}
          position={[45.52, -75.831, -169.323]}
          rotation={[0, 0, Math.PI]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box233_black_plastic_matte_0.geometry}
        material={materials.black_plastic_matte}
        position={[-38.588, 831.434, 4.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/scene.gltf')
