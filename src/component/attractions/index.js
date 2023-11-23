import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item-link";
import { Fragment } from "react";

export default function Attractions({ title, attractionslist }) {
	return (
		<Box shadow={true} className="card">
			<Heading border={true}>{title}</Heading>

			{attractionslist.map(item => (
				<Fragment key={item.id}>
					<ListItem name={item.name} href={item.link}></ListItem>
				</Fragment>
			))}
		</Box>
	);
}
