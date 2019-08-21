import * as Phaser from 'phaser'

import RoomMap from "./map/RoomMap";
import RoomData from "./data/RoomData";

export default abstract class IRoom extends Phaser.Scene {
	public roomData: RoomData
	public map: RoomMap
}
