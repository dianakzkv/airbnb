import "./index.css";

export default function List({ name, href }) {
	return (
		<li className="list-item">
			<a href={href} class="list-item__link">
				{name}
			</a>
		</li>
	);
}
