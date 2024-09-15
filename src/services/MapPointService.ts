import { MapPoint } from '../types/MapPoint.types'

class MapPointsService {
	private static readonly key = 'mapPoints'

	// Inicializa los puntos desde un archivo JSON y los guarda en localStorage
	static async loadInitialPointsFromFile(): Promise<void> {
		try {
			const response = await fetch('/data/mapPoints.json')
			const points: MapPoint[] = await response.json()
			localStorage.setItem(this.key, JSON.stringify(points))
		} catch (error) {
			console.error('Error cargando los puntos del archivo:', error)
		}
	}

	// Obtener los puntos del localStorage
	static getPoints(): MapPoint[] {
		const pointsString = localStorage.getItem(this.key)
		if (!pointsString) {
			return []
		}
		return JSON.parse(pointsString) as MapPoint[]
	}

	// Actualizar el estado de un punto
	static updatePoint(id: number, assignedDriverId: number): void {
		const points = this.getPoints()
		const pointIndex = points.findIndex((point) => point.id === id)
		if (pointIndex !== -1) {
			points[pointIndex].assignedDriverId = assignedDriverId
			localStorage.setItem(this.key, JSON.stringify(points))
		}
	}
}

export default MapPointsService
