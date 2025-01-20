import { GlobalLoader } from './GlobalLoader'
import { DashboardProfile } from './dashboard-profile/DashboardProfile'

export function DashboardHeader() {
	return (
		<header>
			<GlobalLoader />
			<DashboardProfile />
		</header>
	)
}
