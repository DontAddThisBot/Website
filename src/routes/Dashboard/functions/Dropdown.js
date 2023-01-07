import { Link } from 'react-router-dom';
import { HideDashboard } from './HideDashboard';

const Dropdown = ({ className, Links }) => {
	return (
		<div className="sidenav">
			<button
				className="dropdown-btn"
				onClick={() => {
					const dropdown = document.querySelector(`.${className}`);
					if (dropdown.style.display === 'block') {
						dropdown.style.display = 'none';
					} else {
						dropdown.style.display = 'block';
					}
				}}
			>
				{className}
				<i className="fa fa-caret-down" />
			</button>
			<div className={`dropdown-container ${className}`}>
				{Links.map((link, index) => {
					return (
						<>
							<Link
								onClick={() => {
									if (window.innerWidth < 768) {
										HideDashboard();
									}
								}}
								key={index}
								to={link.href}
								className={className}
							>
								{link.name}
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Dropdown;
