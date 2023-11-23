import "./index.css";

import Heading from "../heading";
import Box from "../box";
import Paragraph from "../paragraf";
import React from "react";

export default function Reviews({ title, listReviews }) {
	return (
		<React.Fragment>
			<Heading>{title}</Heading>

			<div className="review__cards">
				{listReviews.map(review => (
					<Box className="review__card" key={review.id}>
						<span className="rate">Rating: {review.rating}</span>
						<Paragraph
							title={review.guestName}
							text={review.review}
						></Paragraph>
					</Box>
				))}
			</div>
		</React.Fragment>
	);
}
