import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import { MapPoint } from '../../types/MapPoint.types'

type GroupedMapPoints = {
	[color: string]: MapPoint[]
}

interface MapComponentProps {
	points: GroupedMapPoints
}
const MapComponent: React.FC<MapComponentProps> = ({ points }) => {
	const markers = Object.keys(points).map((color) => {
		const customIcon = new L.Icon({
			iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
			shadowUrl:
				'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41],
		})

		return points[color].map((point) => {
			return (
				<Marker
					key={point.id}
					position={[point.lat, point.lng]}
					icon={customIcon}
				>
					<Popup>
						<span>{point.name}</span>
					</Popup>
				</Marker>
			)
		})
	})

	// const customIcon = new L.Icon({
	// 	iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${markerColor}.png`,
	// 	shadowUrl:
	// 		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	// 	iconSize: [25, 41],
	// 	iconAnchor: [12, 41],
	// 	popupAnchor: [1, -34],
	// 	shadowSize: [41, 41],
	// })
	return (
		<MapContainer
			center={[-34.92145, -57.95453]}
			zoom={12}
			scrollWheelZoom={false}
			style={{ height: '100%', width: '100%', zIndex: 0 }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markers}
		</MapContainer>
	)
}

export default MapComponent
