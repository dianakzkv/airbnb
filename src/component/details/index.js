import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import guestIcon from "./guests-icon.svg";
import bedroomsIcon from "./bedroom-icon.svg";
import bedIcon from "./bed-icon.svg";
import bathroomIcon from "./bathroom-icon.svg";

export default function Details({ title, guests, bedrooms, beds, baths }) {
	return (
		<Box shadow={true} className="details">
			<Heading border={true}>{title}</Heading>

			<ul className="details__list">
				<ListItem imgSrc={guestIcon}>{guests} гості</ListItem>
				<ListItem imgSrc={bedroomsIcon}>{bedrooms} спальня</ListItem>
				<ListItem imgSrc={bedIcon}>{beds} ліжко</ListItem>
				<ListItem imgSrc={bathroomIcon}>{baths} ванна кімната</ListItem>
			</ul>
		</Box>
	);
}
