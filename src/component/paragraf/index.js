import "./index.css";

export default function Paragraf({ title, text }) {
	return (
		<div className="text__block">
			<h1 className="text__title">{title}</h1>
			<p className="text__text">{text}</p>
		</div>
	);
}
