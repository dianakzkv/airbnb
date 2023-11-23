import Header from "./component/header";
import Page from "./component/page";
import Title from "./component/title";
import Photo from "./component/photo";
import Price from "./component/price";
import RoomList from "./component/room-list";
import Description from "./component/description";
import Details from "./component/details";
import Amenities from "./component/amenities";
import Properties from "./component/additionalProperties";
import ContactInfo from "./component/contactInfo";
import Reviews from "./component/guest-reviews";
import Attractions from "./component/attractions";

function App() {
	const data = {
		listing_name: "Іст-Сайд Біл",
		reviews_summary: {
			average_rating: 4.9,
			total_reviews: 190,
		},
		location: {
			city: "Остін, Техас",
			country: "Сполучені Штати",
		},
		superhost: true,

		image: "https://picsum.photos/1000/1000",

		price: {
			original_price: 308,
			discounted_price: 218,
			currency: "$",
			cleaning_fee: 90,
			service_fee: 200,
		},
		availability: {
			checkin_date: "9/6/2023",
			checkout_date: "9/11/2023",
		},

		roomTypes: [
			{
				id: 5313,
				type: "Deluxe Room",
				pricePerNight: 300,
				currency: "$",
				capacity: 2,
			},
			{
				id: 6264,
				type: "Suite",
				pricePerNight: 500,
				currency: "$",
				capacity: 4,
			},
			{
				id: 7332,
				type: "Presidential",
				pricePerNight: 1000,
				currency: "$",
				capacity: 6,
			},
		],

		description:
			"Насолоджуйтеся цим чистим, сучасним котеджем, розташованим у затишному, але зручному районі Центрально-Східного Остіна. Натхненний японськими чайними будинками, цей котедж на задньому дворі забезпечує легкий доступ до місць проведення SXSW, фестивалю ACL, центру міста, чудових ресторанів та громадського транспорту, а також пропонує спокійний відпочинок для відпочинку та зарядки.",

		property_details: {
			guests: 2,
			bedrooms: 1,
			beds: 1,
			baths: 1,
		},

		neighborhood_info: "Район чарівний, веселий, безпечний і милий...",

		amenities: {
			hasPool: true,
			hasGym: false,
			hasFreeBreakfast: true,
			hasFreeWiFi: true,
			hasParking: false,
			hasPetsAllowed: false,
			hasAirportShuttle: true,
			hasConciergeService: true,
			hasRoomService: false,
			hasChildFriendly: true,
		},

		contact_info: {
			name: "Kerthy",
			image: "../public/owner.jpg",
			response_rate: 100,
			response_time: "within an hour",
			info: "I'm an Austin-Brooklyn filmmaker and television producer who can be found biking to the Farmer's Market...",
			phone: "+123-456-7890",
		},

		additional_properties: {
			house_rules:
				"No smoking or pets allowed. Quiet hours from 10:00 PM to 7:00 AM.",
			cancellation_policy:
				"Flexible cancellation policy with full refund if canceled 7 days before check-in.",
			local_transportation:
				"Public buses and taxis available within walking distance.",
			host_languages: ["English", "Spanish"],
			special_offers: "10% discount for bookings of 7 nights or more.",
			instructions:
				"Check-in time is 3:00 PM. Please contact us in advance with your estimated arrival time.",
		},

		guestReviews: [
			{
				id: 43454,
				guestName: "Alice Johnson",
				rating: 5,
				review: "Amazing experience! The staff was very friendly and the facilities were top-notch.",
			},
			{
				id: 75543,
				guestName: "Bob Smith",
				rating: 4,
				review: "Great location and beautiful views. However, the prices at the restaurant were a bit high.",
			},
			{
				id: 55431,
				guestName: "Eve Williams",
				rating: 5,
				review: "Absolutely loved the spa treatments. It was a relaxing and rejuvenating stay.",
			},
		],

		nearbyAttractions: [
			{
				id: 453,
				name: "Crystal Clear Beach",
				link: "www.test.com",
			},
			{
				id: 741,
				name: "Tropical Rainforest Hiking Trails",
				link: "www.test.com",
			},
			{
				id: 422,
				name: "Island Waterfalls",
				link: "www.test.com",
			},
			{
				id: 876,
				name: "Cultural Village Tours",
				link: "www.test.com",
			},
		],
	};

	return (
		<Page>
			<Header />

			<Title
				title={data.listing_name}
				rating={data.reviews_summary.average_rating}
				review={data.reviews_summary.total_reviews}
				city={data.location.city}
				country={data.location.country}
				superhost={data.superhost}
			/>
			<Photo src={data.image} name={data.listing_name} />
			<Price
				price={data.price.original_price}
				discount={data.price.discounted_price}
				currency={data.price.currency}
				cleaning={data.price.cleaning_fee}
				service={data.price.service_fee}
				checkin={data.availability.checkin_date}
				checkout={data.availability.checkout_date}
			/>
			<RoomList list={data.roomTypes} />
			<Description title="Опис" children={data.description} />
			<Details
				title="Деталі властивості:"
				guests={data.property_details.guests}
				bedrooms={data.property_details.bedrooms}
				beds={data.property_details.beds}
				baths={data.property_details.baths}
			/>

			<Description title="Про сусідів">
				{data.neighborhood_info}
			</Description>

			<Amenities
				title="Зручності"
				gym={data.amenities.hasGym}
				pool={data.amenities.hasPool}
				breakfast={data.amenities.hasFreeBreakfast}
				wifi={data.amenities.hasFreeWiFi}
				parking={data.amenities.hasParking}
				pets={data.amenities.hasPetsAllowed}
				airport={data.amenities.hasAirportShuttle}
				concierge={data.amenities.hasConciergeService}
				roomservice={data.amenities.hasRoomService}
				child={data.amenities.hasChildFriendly}
			></Amenities>
			<Properties
				title="Додаткові властивості"
				rules={data.additional_properties.house_rules}
				policy={data.additional_properties.cancellation_policy}
				transport={data.additional_properties.local_transportation}
				languages={data.additional_properties.host_languages}
				offer={data.additional_properties.special_offers}
				instruction={data.additional_properties.instructions}
			></Properties>
			<ContactInfo
				name={data.contact_info.name}
				image={data.contact_info.image}
				rate={data.contact_info.response_rate}
				time={data.contact_info.response_time}
				info={data.contact_info.info}
				phone={data.contact_info.phone}
			></ContactInfo>

			<Reviews
				title="Відгуки клієнтів"
				listReviews={data.guestReviews}
			></Reviews>

			<Attractions
				title="Пам'ятки поблизу"
				attractionslist={data.nearbyAttractions}
			></Attractions>
		</Page>
	);
}

export default App;
