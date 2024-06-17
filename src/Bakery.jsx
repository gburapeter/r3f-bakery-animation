/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/gogo.glb -k -K -j -m -T 
Files: public/gogo.glb [1.33KB] > /Users/peterskills/Desktop/react-three-fiber/my-app/gogo-transformed.glb [1KB] (25%)
*/

import { useGLTF, useTexture } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

export function Bakery(props) {
	const { nodes } = useGLTF("/bakerybake2.glb");

	const bakedTexture = useTexture("/newbake2.jpg");

	bakedTexture.flipY = false;

	return (
		<group position-y={-1} {...props} dispose={null}>
			<e.mesh
				theatreKey="Kesztyu"
				geometry={nodes.Node.geometry}
				position={[0.169, 1.233, -1.532]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut1"
				geometry={nodes.donutSprinkles.geometry}
				position={[0.383, 1.161, 1.091]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut2"
				geometry={nodes.donutSprinkles001.geometry}
				position={[0.216, 1.161, 1.23]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut3"
				geometry={nodes.donutSprinkles002.geometry}
				position={[0.536, 1.161, 1.281]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut4"
				geometry={nodes.donutSprinkles003.geometry}
				position={[0.363, 1.161, 1.4]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut5"
				geometry={nodes.donutSprinkles004.geometry}
				position={[-0.458, 1.161, 1.131]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut6"
				geometry={nodes.donutSprinkles005.geometry}
				position={[-0.244, 1.161, 1.131]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut7"
				geometry={nodes.donutSprinkles006.geometry}
				position={[-0.244, 1.161, 1.413]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Donut8"
				geometry={nodes.donutSprinkles007.geometry}
				position={[-0.458, 1.161, 1.393]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey1"
				geometry={nodes.Honey.geometry}
				position={[-1.765, 2.675, -0.523]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="WallFrame"
				geometry={nodes.WallFrame.geometry}
				position={[-1.885, 2.387, 1.015]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey2"
				geometry={nodes.Honey001.geometry}
				position={[-1.288, 2.668, -1.798]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey3"
				geometry={nodes.Honey002.geometry}
				position={[-0.863, 2.668, -1.798]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey4"
				geometry={nodes.Honey003.geometry}
				position={[-0.863, 2.316, -1.798]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey5"
				geometry={nodes.Honey004.geometry}
				position={[-1.307, 2.316, -1.798]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey6"
				geometry={nodes.Honey005.geometry}
				position={[-1.765, 2.675, -1.018]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey7"
				geometry={nodes.Honey006.geometry}
				position={[-1.765, 2.324, -1.018]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Honey8"
				geometry={nodes.Honey007.geometry}
				position={[-1.765, 2.324, -0.571]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="BreadShelf"
				geometry={nodes.BreadShelf.geometry}
				position={[-1.672, 1.351, 0.368]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf1"
				geometry={nodes.loafBaguette002.geometry}
				position={[-1.614, 1.509, 0.172]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf2"
				geometry={nodes.Loaf2001.geometry}
				position={[-1.645, 1.904, 0.478]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf3"
				geometry={nodes.Loaf2002.geometry}
				position={[-1.645, 1.904, 0.227]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf4"
				geometry={nodes.Loaf2003.geometry}
				position={[-1.585, 1.166, 0.544]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf5"
				geometry={nodes.Loaf2004.geometry}
				position={[-1.585, 1.166, 0.333]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf6"
				geometry={nodes.Loaf2005.geometry}
				position={[-1.585, 1.166, 0.142]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf7"
				geometry={nodes.loafBaguette001.geometry}
				position={[-1.614, 1.509, 0.351]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Loaf8"
				geometry={nodes.loafBaguette003.geometry}
				position={[-1.614, 1.509, 0.572]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Cake1"
				geometry={nodes.Cake1.geometry}
				position={[1.122, 1.233, 1.27]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Cake2"
				geometry={nodes.Cake1001.geometry}
				position={[1.122, 1.233, 0.609]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Cabinet_Front"
				geometry={nodes.Cabinet_FrontA006_Material_0002.geometry}
				position={[-0.19, 1.14, -1.552]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Oven"
				geometry={nodes.Oven.geometry}
				position={[0.737, 1.125, -1.32]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Plate1"
				geometry={nodes.Plate.geometry}
				position={[-1.468, 1.252, -0.615]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="RollingPin"
				geometry={nodes.Rolling_Pin_Q.geometry}
				position={[-1.248, 1.272, -1.529]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="CookingEdeny"
				geometry={nodes.CookingEdeny.geometry}
				position={[-1.607, 1.372, -1.397]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Plate2"
				geometry={nodes.Plate001.geometry}
				position={[0.379, 1.138, 1.269]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Plate3"
				geometry={nodes.Plate002.geometry}
				position={[-0.351, 1.135, 1.269]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Chair"
				geometry={nodes.chair.geometry}
				position={[3.507, 0.306, 1.844]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Chair2"
				geometry={nodes.chair001.geometry}
				position={[3.507, 0.306, -0.163]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Terrain"
				castShadow
				receiveShadow
				geometry={nodes.Terrain.geometry}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile1"
				geometry={nodes.EntranceTile1.geometry}
				position={[1.308, 0.037, 1.95]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile2"
				geometry={nodes.EntranceTile2.geometry}
				position={[1.823, 0.037, 1.95]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile3"
				geometry={nodes.EntranceTile3.geometry}
				position={[1.308, 0.037, 2.457]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile4"
				geometry={nodes.EntranceTile4.geometry}
				position={[1.854, 0.037, 2.457]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile5"
				geometry={nodes.EntranceTile5.geometry}
				position={[1.284, 0.037, 2.974]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile6"
				geometry={nodes.EntranceTile6.geometry}
				position={[1.854, 0.037, 2.974]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile7"
				geometry={nodes.EntranceTile7.geometry}
				position={[1.271, 0.037, 3.487]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="EntranceTile8"
				geometry={nodes.EntranceTile8.geometry}
				position={[1.832, 0.037, 3.487]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HouseWall1"
				geometry={nodes.HouseWall1.geometry}
				position={[-0.347, 1.653, -2.045]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HouseWall2"
				geometry={nodes.HouseWall2.geometry}
				position={[-2, 1.653, -0.135]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="WallTeteje2"
				geometry={nodes.Wall_teteje2.geometry}
				position={[-2.006, 3.164, -0.087]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HazElsoResze"
				geometry={nodes.WallAlso.geometry}
				position={[-0.264, 0.106, -0.137]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HazElsoResze2"
				geometry={nodes.WallJobbAlsoAlso.geometry}
				position={[-0.264, 0.106, -2.044]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HazElsoResze3"
				geometry={nodes.WallJobbAlsoAlso001.geometry}
				position={[-2.001, 0.106, -0.22]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="WallTeteje1"
				geometry={nodes.WallTeteje1.geometry}
				position={[-0.309, 3.164, -2.045]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="HouseFloor"
				geometry={nodes.HouseFloor.geometry}
				position={[-0.263, 0.27, -0.137]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles01.geometry}
				position={[1.303, 1.4, -1.955]}
				theatreKey="WallTiles01"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles02.geometry}
				position={[1.303, 1.205, -1.955]}
				theatreKey="WallTiles02"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles03.geometry}
				position={[1.303, 1.01, -1.955]}
				theatreKey="WallTiles03"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles04.geometry}
				position={[1.303, 0.815, -1.955]}
				theatreKey="WallTiles04"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles05.geometry}
				position={[1.303, 0.621, -1.955]}
				theatreKey="WallTiles05"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles06.geometry}
				position={[1.303, 0.426, -1.955]}
				theatreKey="WallTiles06"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0007.geometry}
				position={[-1.904, 1.4, 1.637]}
				theatreKey="WallTiles0007"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0008.geometry}
				position={[-1.904, 1.205, 1.637]}
				theatreKey="WallTiles0008"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0009.geometry}
				position={[-1.904, 1.01, 1.637]}
				theatreKey="WallTiles0009"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0010.geometry}
				position={[-1.904, 0.815, 1.637]}
				theatreKey="WallTiles0010"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0011.geometry}
				position={[-1.904, 0.621, 1.637]}
				theatreKey="WallTiles0011"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles0012.geometry}
				position={[-1.904, 0.426, 1.637]}
				theatreKey="WallTiles0012"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1.geometry}
				position={[-1.909, 1.4, 1.379]}
				theatreKey="WallTiles1"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1001.geometry}
				position={[-1.909, 1.4, 0.987]}
				theatreKey="WallTiles1001"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1002.geometry}
				position={[-1.909, 1.4, 0.595]}
				theatreKey="WallTiles1002"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1003.geometry}
				position={[-1.909, 1.4, 0.204]}
				theatreKey="WallTiles1003"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1004.geometry}
				position={[-1.909, 1.4, -0.188]}
				theatreKey="WallTiles1004"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1005.geometry}
				position={[-1.909, 1.4, -0.58]}
				theatreKey="WallTiles1005"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1006.geometry}
				position={[-1.909, 1.4, -0.972]}
				theatreKey="WallTiles1006"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1007.geometry}
				position={[-1.909, 1.4, -1.364]}
				theatreKey="WallTiles1007"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1008.geometry}
				position={[-1.909, 1.4, -1.756]}
				theatreKey="WallTiles1008"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1009.geometry}
				position={[-1.909, 1.205, 1.379]}
				theatreKey="WallTiles1009"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1010.geometry}
				position={[-1.909, 1.205, 0.987]}
				theatreKey="WallTiles1010"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1011.geometry}
				position={[-1.909, 1.205, 0.595]}
				theatreKey="WallTiles1011"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1012.geometry}
				position={[-1.909, 1.205, 0.204]}
				theatreKey="WallTiles1012"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1013.geometry}
				position={[-1.909, 1.205, -0.188]}
				theatreKey="WallTiles1013"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1014.geometry}
				position={[-1.909, 1.205, -0.58]}
				theatreKey="WallTiles1014"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1015.geometry}
				position={[-1.909, 1.205, -0.972]}
				theatreKey="WallTiles1015"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1016.geometry}
				position={[-1.909, 1.205, -1.364]}
				theatreKey="WallTiles1016"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1017.geometry}
				position={[-1.909, 1.205, -1.756]}
				theatreKey="WallTiles1017"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1018.geometry}
				position={[-1.909, 1.01, 1.379]}
				theatreKey="WallTiles1018"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1019.geometry}
				position={[-1.909, 1.01, 0.987]}
				theatreKey="WallTiles1019"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1020.geometry}
				position={[-1.909, 1.01, 0.595]}
				theatreKey="WallTiles1020"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1021.geometry}
				position={[-1.909, 1.01, 0.204]}
				theatreKey="WallTiles1021"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1022.geometry}
				position={[-1.909, 1.01, -0.188]}
				theatreKey="WallTiles1022"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1023.geometry}
				position={[-1.909, 1.01, -0.58]}
				theatreKey="WallTiles1023"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1024.geometry}
				position={[-1.909, 1.01, -0.972]}
				theatreKey="WallTiles1024"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1025.geometry}
				position={[-1.909, 1.01, -1.364]}
				theatreKey="WallTiles1025"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1026.geometry}
				position={[-1.909, 1.01, -1.756]}
				theatreKey="WallTiles1026"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1027.geometry}
				position={[-1.909, 0.815, 1.379]}
				theatreKey="WallTiles1027"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1028.geometry}
				position={[-1.909, 0.815, 0.987]}
				theatreKey="WallTiles1028"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1029.geometry}
				position={[-1.909, 0.815, 0.595]}
				theatreKey="WallTiles1029"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1030.geometry}
				position={[-1.909, 0.815, 0.204]}
				theatreKey="WallTiles1030"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1031.geometry}
				position={[-1.909, 0.815, -0.188]}
				theatreKey="WallTiles1031"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1032.geometry}
				position={[-1.909, 0.815, -0.58]}
				theatreKey="WallTiles1032"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1033.geometry}
				position={[-1.909, 0.815, -0.972]}
				theatreKey="WallTiles1033"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1034.geometry}
				position={[-1.909, 0.815, -1.364]}
				theatreKey="WallTiles1034"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1035.geometry}
				position={[-1.909, 0.815, -1.756]}
				theatreKey="WallTiles1035"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1036.geometry}
				position={[-1.909, 0.621, 1.379]}
				theatreKey="WallTiles1036"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1037.geometry}
				position={[-1.909, 0.621, 0.987]}
				theatreKey="WallTiles1037"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1038.geometry}
				position={[-1.909, 0.621, 0.595]}
				theatreKey="WallTiles1038"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1039.geometry}
				position={[-1.909, 0.621, 0.204]}
				theatreKey="WallTiles1039"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1040.geometry}
				position={[-1.909, 0.621, -0.188]}
				theatreKey="WallTiles1040"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1041.geometry}
				position={[-1.909, 0.621, -0.58]}
				theatreKey="WallTiles1041"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1042.geometry}
				position={[-1.909, 0.621, -0.972]}
				theatreKey="WallTiles1042"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1043.geometry}
				position={[-1.909, 0.621, -1.364]}
				theatreKey="WallTiles1043"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1044.geometry}
				position={[-1.909, 0.621, -1.756]}
				theatreKey="WallTiles1044"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1045.geometry}
				position={[-1.909, 0.426, 1.379]}
				theatreKey="WallTiles1045"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1046.geometry}
				position={[-1.909, 0.426, 0.987]}
				theatreKey="WallTiles1046"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1047.geometry}
				position={[-1.909, 0.426, 0.595]}
				theatreKey="WallTiles1047"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1048.geometry}
				position={[-1.909, 0.426, 0.204]}
				theatreKey="WallTiles1048"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1049.geometry}
				position={[-1.909, 0.426, -0.188]}
				theatreKey="WallTiles1049"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1050.geometry}
				position={[-1.909, 0.426, -0.58]}
				theatreKey="WallTiles1050"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1051.geometry}
				position={[-1.909, 0.426, -0.972]}
				theatreKey="WallTiles1051"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1052.geometry}
				position={[-1.909, 0.426, -1.364]}
				theatreKey="WallTiles1052"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles1053.geometry}
				position={[-1.909, 0.426, -1.756]}
				theatreKey="WallTiles1053"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2.geometry}
				position={[-1.759, 1.4, -1.961]}
				theatreKey="WallTiles2"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2001.geometry}
				position={[-1.446, 1.4, -1.961]}
				theatreKey="WallTiles2001"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2002.geometry}
				position={[-1.132, 1.4, -1.961]}
				theatreKey="WallTiles2002"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2003.geometry}
				position={[-0.819, 1.4, -1.961]}
				theatreKey="WallTiles2003"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2004.geometry}
				position={[-0.505, 1.4, -1.961]}
				theatreKey="WallTiles2004"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2005.geometry}
				position={[-0.192, 1.4, -1.961]}
				theatreKey="WallTiles2005"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2006.geometry}
				position={[0.122, 1.4, -1.961]}
				theatreKey="WallTiles2006"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2007.geometry}
				position={[0.436, 1.4, -1.961]}
				theatreKey="WallTiles2007"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2008.geometry}
				position={[0.749, 1.4, -1.961]}
				theatreKey="WallTiles2008"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2009.geometry}
				position={[-1.759, 1.205, -1.961]}
				theatreKey="WallTiles2009"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2010.geometry}
				position={[-1.446, 1.205, -1.961]}
				theatreKey="WallTiles2010"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2011.geometry}
				position={[-1.132, 1.205, -1.961]}
				theatreKey="WallTiles2011"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2012.geometry}
				position={[-0.819, 1.205, -1.961]}
				theatreKey="WallTiles2012"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2013.geometry}
				position={[-0.505, 1.205, -1.961]}
				theatreKey="WallTiles2013"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2014.geometry}
				position={[-0.192, 1.205, -1.961]}
				theatreKey="WallTiles2014"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2015.geometry}
				position={[0.122, 1.205, -1.961]}
				theatreKey="WallTiles2015"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2016.geometry}
				position={[0.436, 1.205, -1.961]}
				theatreKey="WallTiles2016"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2017.geometry}
				position={[0.749, 1.205, -1.961]}
				theatreKey="WallTiles2017"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2018.geometry}
				position={[-1.759, 1.01, -1.961]}
				theatreKey="WallTiles2018"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2019.geometry}
				position={[-1.446, 1.01, -1.961]}
				theatreKey="WallTiles2019"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2020.geometry}
				position={[-1.132, 1.01, -1.961]}
				theatreKey="WallTiles2020"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2021.geometry}
				position={[-0.819, 1.01, -1.961]}
				theatreKey="WallTiles2021"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2022.geometry}
				position={[-0.505, 1.01, -1.961]}
				theatreKey="WallTiles2022"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2023.geometry}
				position={[-0.192, 1.01, -1.961]}
				theatreKey="WallTiles2023"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2024.geometry}
				position={[0.122, 1.01, -1.961]}
				theatreKey="WallTiles2024"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2025.geometry}
				position={[0.436, 1.01, -1.961]}
				theatreKey="WallTiles2025"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2026.geometry}
				position={[0.749, 1.01, -1.961]}
				theatreKey="WallTiles2026"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2027.geometry}
				position={[-1.759, 0.815, -1.961]}
				theatreKey="WallTiles2027"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2028.geometry}
				position={[-1.446, 0.815, -1.961]}
				theatreKey="WallTiles2028"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2029.geometry}
				position={[-1.132, 0.815, -1.961]}
				theatreKey="WallTiles2029"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2030.geometry}
				position={[-0.819, 0.815, -1.961]}
				theatreKey="WallTiles2030"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2031.geometry}
				position={[-0.505, 0.815, -1.961]}
				theatreKey="WallTiles2031"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2032.geometry}
				position={[-0.192, 0.815, -1.961]}
				theatreKey="WallTiles2032"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2033.geometry}
				position={[0.122, 0.815, -1.961]}
				theatreKey="WallTiles2033"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2034.geometry}
				position={[0.436, 0.815, -1.961]}
				theatreKey="WallTiles2034"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2035.geometry}
				position={[0.749, 0.815, -1.961]}
				theatreKey="WallTiles2035"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2036.geometry}
				position={[-1.759, 0.621, -1.961]}
				theatreKey="WallTiles2036"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2037.geometry}
				position={[-1.446, 0.621, -1.961]}
				theatreKey="WallTiles2037"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2038.geometry}
				position={[-1.132, 0.621, -1.961]}
				theatreKey="WallTiles2038"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2039.geometry}
				position={[-0.819, 0.621, -1.961]}
				theatreKey="WallTiles2039"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2040.geometry}
				position={[-0.505, 0.621, -1.961]}
				theatreKey="WallTiles2040"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2041.geometry}
				position={[-0.192, 0.621, -1.961]}
				theatreKey="WallTiles2041"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2042.geometry}
				position={[0.122, 0.621, -1.961]}
				theatreKey="WallTiles2042"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2043.geometry}
				position={[0.436, 0.621, -1.961]}
				theatreKey="WallTiles2043"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2044.geometry}
				position={[0.749, 0.621, -1.961]}
				theatreKey="WallTiles2044"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2045.geometry}
				position={[-1.759, 0.426, -1.961]}
				theatreKey="WallTiles2045"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2046.geometry}
				position={[-1.446, 0.426, -1.961]}
				theatreKey="WallTiles2046"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2047.geometry}
				position={[-1.132, 0.426, -1.961]}
				theatreKey="WallTiles2047"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2048.geometry}
				position={[-0.819, 0.426, -1.961]}
				theatreKey="WallTiles2048"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2049.geometry}
				position={[-0.505, 0.426, -1.961]}
				theatreKey="WallTiles2049"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2050.geometry}
				position={[-0.192, 0.426, -1.961]}
				theatreKey="WallTiles2050"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2051.geometry}
				position={[0.122, 0.426, -1.961]}
				theatreKey="WallTiles2051"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2052.geometry}
				position={[0.436, 0.426, -1.961]}
				theatreKey="WallTiles2052"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2053.geometry}
				position={[0.749, 0.426, -1.961]}
				theatreKey="WallTiles2053"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2054.geometry}
				position={[1.062, 1.4, -1.955]}
				theatreKey="WallTiles2054"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2055.geometry}
				position={[1.062, 1.205, -1.955]}
				theatreKey="WallTiles2055"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2056.geometry}
				position={[1.062, 1.01, -1.955]}
				theatreKey="WallTiles2056"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2057.geometry}
				position={[1.062, 0.815, -1.955]}
				theatreKey="WallTiles2057"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2058.geometry}
				position={[1.062, 0.621, -1.955]}
				theatreKey="WallTiles2058"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				geometry={nodes.WallTiles2059.geometry}
				position={[1.062, 0.426, -1.955]}
				theatreKey="WallTiles2059"
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="ModernKitchenTable1"
				geometry={nodes.ModernKitchenTable1.geometry}
				position={[-0.092, 0.894, 1.246]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="ModernKitchenTable2"
				geometry={nodes.ModernKitchenTable1001.geometry}
				position={[1.042, 0.889, 0.905]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Cabinet_new"
				geometry={nodes.Cabinet_new.geometry}
				position={[-1.12, 2.28, -1.821]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Cabinet_shelf"
				geometry={nodes.Cabinet_Shelf_B007_Material_0.geometry}
				position={[-1.773, 2.28, -0.815]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="CabinetTable"
				geometry={nodes.CabinetTable_B002_Material_0001.geometry}
				position={[-1.389, 0.865, -1.008]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Botmixer"
				geometry={nodes["38_Kitche1001"].geometry}
				position={[-0.809, 1.429, -1.653]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="FlowerPot"
				geometry={nodes.FlowerPot4.geometry}
				position={[-1.4, 1.086, 1.47]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="Window"
				geometry={nodes.Window.geometry}
				position={[0.211, 2.105, -1.901]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
			<e.mesh
				theatreKey="OutsideTable"
				geometry={nodes.Table.geometry}
				position={[3.586, 0.097, 0.799]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</e.mesh>
		</group>
	);
}

useGLTF.preload("/baking.glb");
