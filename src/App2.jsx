import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Unknown from './routes/404/Unknown';
import Authorize from './routes/Authenticate/Authenticate.jsx';
import Commands from './routes/Commands/Commands';
import Stable from './routes/Stable/Stable.jsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/" element={<Authorize />} />
		</Routes>
	);
}

export default App;
