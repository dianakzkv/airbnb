import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import Paragraph from "../paragraf";

export default function Properties({
	title,
	rules,
	policy,
	transport,
	languages,
	offer,
	instruction,
}) {
	return (
		<Box shadow={true} className="details">
			<Heading border={true}>{title}</Heading>

			<ul className="details__list">
				<ListItem>
					<Paragraph title="Правила дому" text={rules}></Paragraph>
				</ListItem>
				<ListItem>
					<Paragraph
						title="Політика скасування"
						text={policy}
					></Paragraph>
				</ListItem>
				<ListItem>
					<Paragraph
						title="Місцевий транспорт"
						text={transport}
					></Paragraph>
				</ListItem>
				<ListItem>
					<Paragraph
						title="Мови хоста"
						text={languages.map(lang => (
							<span className="languages">{lang}</span>
						))}
					></Paragraph>
				</ListItem>
				<ListItem>
					<Paragraph
						title="Спеціальні пропозиції:"
						text={offer}
					></Paragraph>
				</ListItem>
				<ListItem>
					<Paragraph
						title="Інструкції щодо реєстрації"
						text={instruction}
					></Paragraph>
				</ListItem>
			</ul>
		</Box>
	);
}
