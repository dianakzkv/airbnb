import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import poolIcon from "./pool-icon.svg";
import gymIcon from "./gym-icon.svg";
import breakfastIcon from "./breakfast-icon.svg";
import wifiIcon from "./wifi-icon.svg";
import parkingIcon from "./car-icon.svg";
import petsIcon from "./pet-icon.svg";
import airportIcon from "./airport-icon.svg";
import conciergeIcon from "./concierge-icon.svg";
import roomIcon from "./room-icon.svg";
import childIcon from "./baby-icon.svg";
import List from "../list-item";

export default function Фmenities({
	title,
	pool,
	gym,
	breakfast,
	wifi,
	parking,
	pets,
	airport,
	concierge,
	roomservice,
	child,
}) {
	return (
		<Box shadow={true} className="amenities">
			<Heading border={true}>{title}</Heading>

			<ul className="amenities__list">
				{pool && <ListItem imgSrc={poolIcon}>Басейн</ListItem>}
				{gym && <ListItem imgSrc={gymIcon}>Спортивний зал</ListItem>}
				{breakfast && (
					<ListItem imgSrc={breakfastIcon}>
						Безкоштовний сніданок
					</ListItem>
				)}
				{wifi && (
					<ListItem imgSrc={wifiIcon}>Безкоштовний Wi-Fi</ListItem>
				)}
				{parking && (
					<ListItem imgSrc={parkingIcon}>
						Безкоштовний вуличний паркінг
					</ListItem>
				)}
				{pets && (
					<ListItem imgSrc={petsIcon}>
						Дозволено розміщення з домашніми тваринами
					</ListItem>
				)}
				{airport && (
					<ListItem imgSrc={airportIcon}>
						Трансфер до/з аеропорту
					</ListItem>
				)}
				{concierge && (
					<ListItem imgSrc={conciergeIcon}>Консьєрж-сервіс</ListItem>
				)}
				{roomservice && (
					<ListItem imgSrc={roomIcon}>
						Обслуговування номерів
					</ListItem>
				)}
				{child && (
					<ListItem imgSrc={childIcon}>Підходить для дітей</ListItem>
				)}
			</ul>
		</Box>
	);
}
