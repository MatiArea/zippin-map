import { EmployeeComponent } from '../components/Employee/EmployeeComponent'
import { MapComponent } from '../components/Map/MapComponent'
import TableComponent from '../components/Table/TableComponent'

export const Home = () => (
	<div className="p-4">
		<div className="flex justify-between items-stretch w-full">
			<EmployeeComponent />
			<div className="h-96 w-4/5 ">
				<MapComponent />
			</div>
		</div>
		<div className="container mx-auto w-full py-4">
			<TableComponent />
		</div>
	</div>
)
