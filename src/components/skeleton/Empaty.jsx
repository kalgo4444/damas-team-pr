import React from "react";
import { useNavigate } from "react-router-dom";

const Empaty = () => {
	const navigate = useNavigate();
	return (
		<section>
			<div className='container min-h-[50vh] flex flex-col items-center justify-center'>
				<h2 className='text-3xl md:text-5xl'>Savatingiz hozircha bo‘sh</h2>
				<p className='my-3 text-lg'>
					Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni
					ko‘rishingiz mumkin
				</p>
				<button
					className='border w-2/12 h-10 cursor-pointer rounded-border-radius hover:bg-black active:bg-black hover:text-white active:text-white duration-300 text-lg font-semibold'
					onClick={() => navigate("/")}
				>
					Home
				</button>
			</div>
		</section>
	);
};

export default React.memo(Empaty);
