import ListGroup from "./components/ListGroup";

function App() {
	let items = ["New York", "San Fransisco", "Mumbai"];

	const handleSelection = (item: string) => {
		console.log(item);
	};

	return (
		<>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelection}
			/>
		</>
	);
}

export default App;
