import React from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";

const About = () => {
	return (
		<section>
			<Banner title={"About"} text={"About"} />
			{/* Code hare */}
			<Quality />
		</section>
	);
};

export default React.memo(About);
