import React from "react";
import Banner from "../../components/banner/Banner";
import Quality from "../../components/quality/Quality";

const Contact = () => {
	return (
		<section>
			<Banner title={"Contact"} text={"Contact"} />
			{/* Code hare */}
			<Quality />
		</section>
	);
};

export default React.memo(Contact);
