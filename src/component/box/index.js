import "./index.css";

export default function Box({ children, className, shadow }) {
	return (
		<div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
			{children}
		</div>
	);
}
