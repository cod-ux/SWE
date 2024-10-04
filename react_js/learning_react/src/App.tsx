import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
	const [showAlert, setShowAlert] = useState(false);

	const onClick = () => {
		setShowAlert(true);
	};

	const onClose = () => {
		setShowAlert(false);
	};

	return (
		<>
			{showAlert && (
				<Alert onClick={onClose}>
					<strong>Holy guacamole!</strong> You just clicked a button.
				</Alert>
			)}
			<Button color="danger" onClick={onClick}>
				My Button
			</Button>
		</>
	);
}

export default App;
