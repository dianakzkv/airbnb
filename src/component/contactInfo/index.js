import "./index.css";
import "../title/index.css";

import Heading from "../heading";
import Description from "../description";

export default function ContactInfo({ name, image, rate, time, info, phone }) {
	return (
		<div className="contact__block">
			<div className="contact__block--header">
				<Heading>Господар – {name}</Heading>
				<div className="title__sub-block">
					<span className="title__sub-value">{phone}</span>
					<span className="title__sub-value">{time}</span>
					<span className="title__sub-value">
						{rate}% швидкості відгуку
					</span>
				</div>
			</div>
			<Description children={info}></Description>
		</div>
	);
}
