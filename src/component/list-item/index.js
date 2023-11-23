import "./index.css";

export default function List({ children, imgSrc, title }) {
	return (
		<li className="list-item">
			{imgSrc && <img src={imgSrc} alt="icon" height={24} width={24} />}
			<div class="list-item__block">
				{title && <strong className="list-item__title">{title}</strong>}
				<div className="list-item__content">{children}</div>
			</div>
		</li>
	);
}
