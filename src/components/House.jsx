/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 house.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function House(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/house.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="7e3ea3961971410d9438a7b059f62e2efbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Bird" position={[-288.44, 253.05, -280.86]} rotation={[-1.58, -0.02, 0.11]} scale={100}>
                <mesh name="Bird_Animals_0" geometry={nodes.Bird_Animals_0.geometry} material={materials['Animals.001']} />
              </group>
              <group name="Bird001" position={[-528.89, 813.78, -51.38]} rotation={[-1.52, -0.02, -0.21]} scale={100}>
                <mesh name="Bird001_Animals_0" geometry={nodes.Bird001_Animals_0.geometry} material={materials['Animals.001']} />
              </group>
              <group name="Bird002" position={[-349.93, 975.4, -386.84]} rotation={[-1.56, -0.02, 0.51]} scale={100}>
                <mesh name="Bird002_Animals_0" geometry={nodes.Bird002_Animals_0.geometry} material={materials['Animals.001']} />
              </group>
              <group name="BTree" position={[-248.65, 380.85, 155.39]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BTree_BrichTree_0" geometry={nodes.BTree_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="BTree001" position={[-206.56, 534.74, -287.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BTree001_BrichTree_0" geometry={nodes.BTree001_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="BTree002" position={[-289.38, 414.46, -310.24]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BTree002_BrichTree_0" geometry={nodes.BTree002_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="Chimney" position={[-9.02, 511.9, 16.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Chimney_RoofMoss_0" geometry={nodes.Chimney_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="DoorRoof" position={[-201.53, 278.94, -23.1]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="DoorRoof_RoofMoss_0" geometry={nodes.DoorRoof_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="FenceLeft" position={[-389.18, 98.81, -264.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="FenceLeft_WoodFence_0" geometry={nodes.FenceLeft_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="FenceRight" position={[-353.62, 93.43, 93.86]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="FenceRight_WoodFence_0" geometry={nodes.FenceRight_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="FenceRight003" position={[-349.68, 89.41, 101.41]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="FenceRight003_WoodFence_0" geometry={nodes.FenceRight003_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="FenceRight015" position={[-383.26, 94.92, -275.52]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="FenceRight015_WoodFence_0" geometry={nodes.FenceRight015_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="GrassGround" position={[-244.99, 103.42, -133.91]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="GrassGround_GrassALPHA_0" geometry={nodes.GrassGround_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="GrassOrange" position={[-124.51, 299.66, -165.87]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="GrassOrange_GrassALPHA_0" geometry={nodes.GrassOrange_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="GrassRoof" position={[-100.39, 330.23, -133.4]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="GrassRoof_GrassALPHA_0" geometry={nodes.GrassRoof_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="GrassRoof001" position={[-76.65, 524.21, -58.86]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="GrassRoof001_GrassALPHA_0" geometry={nodes.GrassRoof001_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Ground" position={[-235.19, 93.31, -97.73]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Ground_Ground_0" geometry={nodes.Ground_Ground_0.geometry} material={materials['Ground.001']} />
              </group>
              <group name="GroundPlane" position={[-220.83, 59.32, -82.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="GroundPlane_Plane_0" geometry={nodes.GroundPlane_Plane_0.geometry} material={materials['Plane.002']} />
              </group>
              <group name="House" position={[-123.98, 269.22, -49.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="House_House_0" geometry={nodes.House_House_0.geometry} material={materials['House.001']} />
              </group>
              <group name="HouseFence" position={[-242.3, 149.2, -75.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="HouseFence_WoodPlanks_0" geometry={nodes.HouseFence_WoodPlanks_0.geometry} material={materials['WoodPlanks.001']} />
              </group>
              <group name="HouseSupportBeams" position={[-199.34, 114.96, -78.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="HouseSupportBeams_WoodPlanks_0" geometry={nodes.HouseSupportBeams_WoodPlanks_0.geometry} material={materials['WoodPlanks.001']} />
              </group>
              <group name="HouseWoodFloor" position={[-144.55, 131.33, -86.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="HouseWoodFloor_WoodPlanks_0" geometry={nodes.HouseWoodFloor_WoodPlanks_0.geometry} material={materials['WoodPlanks.001']} />
              </group>
              <group name="Moss" position={[-201.25, 158.93, -135.53]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Moss_WoodPlanks_0" geometry={nodes.Moss_WoodPlanks_0.geometry} material={materials['WoodPlanks.001']} />
              </group>
              <group name="Plane001" position={[-248.74, 102.91, -291.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane001_GrassALPHA_0" geometry={nodes.Plane001_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane002" position={[-258.47, 103.09, -284.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane002_GrassALPHA_0" geometry={nodes.Plane002_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane005" position={[-249.01, 83.65, 147.94]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane005_GrassALPHA_0" geometry={nodes.Plane005_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane006" position={[-235.19, 81.35, 143]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane006_GrassALPHA_0" geometry={nodes.Plane006_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane007" position={[-99.99, 337.48, -177.37]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane007_GrassALPHA_0" geometry={nodes.Plane007_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane008" position={[-588, 76.93, -128.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane008_GrassALPHA_0" geometry={nodes.Plane008_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane009" position={[-484.16, 62.48, -122]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane009_GrassALPHA_0" geometry={nodes.Plane009_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Plane010" position={[-477.78, 66.67, -109.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane010_GrassALPHA_0" geometry={nodes.Plane010_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Powerlines" position={[-442.47, 851.42, -74.76]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Powerlines_WoodFence_0" geometry={nodes.Powerlines_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="Powerlines001" position={[-443.43, 870.03, -75.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Powerlines001_GrassALPHA_0" geometry={nodes.Powerlines001_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Racoon" position={[-288.98, 129.29, -295.17]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Racoon_Animals_0" geometry={nodes.Racoon_Animals_0.geometry} material={materials['Animals.001']} />
              </group>
              <group name="Redwood" position={[-78.68, 344.71, -68.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Redwood_BrichTree_0" geometry={nodes.Redwood_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="RedwoodAlpha" position={[-90.09, 598.72, -98.59]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="RedwoodAlpha_TreeLeafs_0" geometry={nodes.RedwoodAlpha_TreeLeafs_0.geometry} material={materials['TreeLeafs.001']} />
              </group>
              <group name="RedwoodChopped" position={[-189.72, 107.18, 84.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="RedwoodChopped_BrichTree_0" geometry={nodes.RedwoodChopped_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="RedwoodMoss" position={[-326, 85, -64.99]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="RedwoodMoss_BrichTree_0" geometry={nodes.RedwoodMoss_BrichTree_0.geometry} material={materials['BrichTree.001']} />
              </group>
              <group name="Rocks" position={[19.77, 143.79, -172.87]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Rocks_BigRock_0" geometry={nodes.Rocks_BigRock_0.geometry} material={materials['BigRock.001']} />
              </group>
              <group name="Roof009" position={[-94.71, 404.74, -53.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Roof009_RoofMoss_0" geometry={nodes.Roof009_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="RoofBase001" position={[-79.65, 389.72, -64.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="RoofBase001_RoofMoss_0" geometry={nodes.RoofBase001_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="RoofMoss" position={[-84.56, 400.35, -46.87]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="RoofMoss_RoofMoss_0" geometry={nodes.RoofMoss_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="SideRoofBase" position={[-94.24, 237.15, -218.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="SideRoofBase_RoofMoss_0" geometry={nodes.SideRoofBase_RoofMoss_0.geometry} material={materials['RoofMoss.001']} />
              </group>
              <group name="SmallRocks" position={[4.02, 131.41, -227.81]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="SmallRocks_BigRock_0" geometry={nodes.SmallRocks_BigRock_0.geometry} material={materials['BigRock.001']} />
              </group>
              <group name="Stairs" position={[-287.11, 99.57, -139.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Stairs_WoodPlanks_0" geometry={nodes.Stairs_WoodPlanks_0.geometry} material={materials['WoodPlanks.001']} />
              </group>
              <group name="Stump" position={[-575.72, 89.22, -23.81]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Stump_WoodFence_0" geometry={nodes.Stump_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="Stump001" position={[-381.08, 93.12, -193.85]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Stump001_WoodFence_0" geometry={nodes.Stump001_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="Stump002" position={[-563.26, 83.96, -253.34]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Stump002_WoodFence_0" geometry={nodes.Stump002_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="Stump003" position={[-565.75, 84.05, -61.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Stump003_WoodFence_0" geometry={nodes.Stump003_WoodFence_0.geometry} material={materials['WoodFence.001']} />
              </group>
              <group name="SupportBeams" position={[-77.06, 201.39, -235.66]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="SupportBeams_Window_0" geometry={nodes.SupportBeams_Window_0.geometry} material={materials['Window.001']} />
              </group>
              <group name="TallGrass" position={[-235.48, 129.6, -16.82]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="TallGrass_GrassALPHA_0" geometry={nodes.TallGrass_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines" position={[-74.45, 241.76, -224.94]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines_GrassALPHA_0" geometry={nodes.Vines_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines001" position={[-262.53, 118.89, -198.82]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines001_GrassALPHA_0" geometry={nodes.Vines001_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines002" position={[-221.35, 257.52, -17.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines002_GrassALPHA_0" geometry={nodes.Vines002_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines003" position={[-75.13, 260.82, 69.65]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines003_GrassALPHA_0" geometry={nodes.Vines003_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines004" position={[35.94, 470.14, -54.29]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines004_GrassALPHA_0" geometry={nodes.Vines004_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Vines005" position={[34.41, 290.92, -120.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Vines005_GrassALPHA_0" geometry={nodes.Vines005_GrassALPHA_0.geometry} material={materials['GrassALPHA.001']} />
              </group>
              <group name="Windows" position={[-163.4, 264.29, -120.46]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Windows_Window_0" geometry={nodes.Windows_Window_0.geometry} material={materials['Window.001']} />
              </group>
              <group name="Windows001" position={[-29.37, 190.52, -176.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Windows001_Window_0" geometry={nodes.Windows001_Window_0.geometry} material={materials['Window.001']} />
              </group>
              <group name="Windows002" position={[-32.37, 214.07, 45.68]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Windows002_Window_0" geometry={nodes.Windows002_Window_0.geometry} material={materials['Window.001']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.glb')