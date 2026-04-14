import React from "react";
import { assets } from "../assets/assets";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className="px-6 md:px-16 lg:px-24 pt-16 pb-6 mt-40">
			<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
				{/* ----left section---- */}
				<div>
					<img src={assets.logo} alt="logo" className="w-36 mb-4" />
					<p className="text-sm leading-6">
						Building a better healthcare experience with seamless doctor booking
						and patient management.
					</p>
					<div className="flex gap-4 mt-5 ">
						<FaFacebookF className="cursor-pointer hover:text-blue-600" />
						<FaTwitter className="cursor-pointer hover:text-black" />
						<FaInstagram className="cursor-pointer hover:text-red-500" />
						<FaLinkedinIn className="cursor-pointer hover:text-sky-500" />
					</div>
				</div>
				{/* ----center section---- */}
				<div>
					<h3 className=" text-lg font-semibold mb-4">Company</h3>
					<ul className="space-y-2 text-sm">
						<li onClick={() => {navigate("/"); scrollTo(0,0)}} className="cursor-pointer hover:text-black hover:underline block">
							Home
						</li>
						<li onClick={() => {navigate("/about"); scrollTo(0,0)}} className="cursor-pointer hover:text-black hover:underline block">
							About
						</li>
						<li
							onClick={() => {navigate("/doctors"); scrollTo(0,0)}}
							className="cursor-pointer hover:text-black hover:underline">
							Doctors
						</li>
						<li
							onClick={() => {navigate("/contact"); scrollTo(0,0)}}
							className="cursor-pointer hover:text-black hover:underline">
							Contact
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Services</h3>
					<ul className="space-y-2 text-sm">
						<li className="cursor-pointer">Doctor Booking</li>
						<li className="cursor-pointer">Health Checkup</li>
						<li className="cursor-pointer">Online Consultation</li>
						<li className="cursor-pointer">24/7 Support</li>
					</ul>
				</div>
				<div>
					<h3 className=" text-lg font-semibold mb-4">Get in Touch</h3>
					<ul className="space-y-2 text-sm">
						<li>+91 9876543261</li>
						<li>support@prescripto.com</li>
						<li>Kolkata, India</li>
					</ul>
				</div>
			</div>

			<hr className="my-8 border-gray-700" />

			{/* Bottom Section */}
			<div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
				<p>© 2026 Prescripto. All rights reserved.</p>

				<div className="flex gap-4">
					<span className="cursor-pointer ">Terms</span>
					<span className="cursor-pointer ">Privacy</span>
					<span className="cursor-pointer ">Cookies</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
