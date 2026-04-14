import React from "react";
import { assets } from "../assets/assets";

const About = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-10 text-gray-500">
				<p className="">
					ABOUT <span className="text-hray-700 font-medium">US</span>
				</p>
			</div>
			<div className="mt-10 flex flex-col md:flex-row gap-12">
				<img
					className="w-full md:max-w-[360px]"
					src={assets.about_image}
					alt=""
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
						qui velit accusantium quisquam tempore, esse provident a nam dolores
						quis, vitae tenetur! Tenetur consequatur dolor placeat, sequi minus
						sapiente rerum!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ratione repellendus nam consequuntur modi explicabo vitae itaque,
						aliquid illo incidunt perferendis iste provident praesentium ab
						nesciunt. Excepturi ipsa pariatur corrupti.
					</p>
					<b className="text-gray-800">Our Vision</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
						laboriosam facilis quo saepe alias dolores doloremque accusantium
						soluta labore, totam eum voluptate similique libero, consectetur
						quam repellendus illo natus nobis.
					</p>
				</div>
			</div>
			<div className="text-xl my-4">
				<p>
					WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
				</p>
			</div>
			<div className="flex flex-col md:flex-row mb-20">
				<div className="border px-10 md:px-16 flex py-8 sm:py-16 flex-col gap-3 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Efficiency:</b>
					<p>
						Streamlined appointment scheduling that fits into your busy
						lifecycle.
					</p>
				</div>
				<div className="border px-10 md:px-16 flex py-8 sm:py-16 flex-col gap-3 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Convenience:</b>
					<p>
						Access to a network of trusted healthcare professionals in your
						area.
					</p>
				</div>
				<div className="border px-10 md:px-16 flex py-8 sm:py-16 flex-col gap-3 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Personalization:</b>
					<p>
						Tailored recommendations and reminders to help you stay on top of
						your health.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
