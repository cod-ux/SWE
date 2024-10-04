interface AlertProps {
	text: string;
}

const Alert = ({ text }: AlertProps) => {
	return <div className="alert alert-primary">Alert</div>;
};

export default Alert;
