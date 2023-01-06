export function HideDashboard() {
	const leftDashboard = document.querySelector('.left-dashboard');
	if (leftDashboard.style.display === 'none') {
		leftDashboard.style.display = 'block';
	} else {
		leftDashboard.style.display = 'none';
	}
}
