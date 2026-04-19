import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		setToken(storedToken);
	}, []);
	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
		setOpen(false);
		navigate("/login");
	};
	return (
		<div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
			<img
				onClick={() => navigate("/")}
				className="w-44 cursor-pointer"
				src={assets.logo}
				alt="logo"
			/>
			<ul className="hidden md:flex items-start gap-5 font-medium">
				<NavLink to="/">
					<li className="py-1">Home</li>
					<hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
				</NavLink>
				<NavLink to="/doctors">
					<li className="py-1">All Doctors</li>
					<hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
				</NavLink>
				<NavLink to="/about">
					<li className="py-1">About</li>
					<hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
				</NavLink>
				<NavLink to="/contact">
					<li className="py-1">Contact</li>
					<hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-4">
				{token ? (
					<div className="flex items-center gap-2 cursor-pointer group relative">
						<div
							onClick={() => setOpen(!open)}
							className="flex items-center gap-2 cursor-pointer">
							<img
								className="w-8 rounded-full"
								src={assets.profile_icon}
								alt="profile icon"
							/>
							<img
								className="w-2.5"
								src={assets.dropdown_icon}
								alt="dropdown icon"
							/>
						</div>
						{open && (
							<div className="absolute top-14 right-0 text-base font-medium text-gray-600 z-20">
								<div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
									<p
										onClick={() => {
											navigate("/my-profile");
											setOpen(false);
										}}
										className="hover:text-black cursor-pointer">
										My Profile
									</p>
									<p
										onClick={() => {
											navigate("/my-appointments");
											setOpen(false);
										}}
										className="hover:text-black cursor-pointer">
										My Appointment
									</p>
									<p
										onClick={logout}
										className="hover:text-red-600 cursor-pointer">
										Logout
									</p>
								</div>
							</div>
						)}
					</div>
				) : (
					<button
						onClick={() => navigate("/login")}
						className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block ">
						Create Account
					</button>
				)}
				<img
					onClick={() => setOpen(true)}
					className="w-6 md:hidden"
					src={assets.menu_icon}
					alt=""
				/>
				{/* ----mobile menu----- */}
				<div
					className={`${open ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
					<div className="flex items-center justify-between px-5 py-6">
						<img src={assets.logo} alt="" />
						<img
							className="w-7"
							onClick={() => setOpen(false)}
							src={assets.cross_icon}
							alt=""
						/>
					</div>
					<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
						<NavLink onClick={() => setOpen(false)} to="/">
							<p className="px-4 py-2 rounded inline-block">HOME</p>
						</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/doctors">
							<p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
						</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/about">
							<p className="px-4 py-2 rounded inline-block">ABOUT</p>
						</NavLink>
						<NavLink onClick={() => setOpen(false)} to="/contact">
							<p className="px-4 py-2 rounded inline-block">CONTACT</p>
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
