import "./index.css";

export default function Heading({ children, border }) {
	return (
		<span className={`heading ${border ? "heading--border" : ""}`}>
			{children}
		</span>
	);
}
