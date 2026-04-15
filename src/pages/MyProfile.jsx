import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
	const [userData, setUserData] = useState({
		name: "PSK",
		image: assets.profile_icon,
		email: "myemail@email.com",
		phone: "+91 9876543451",
		address: {
			line1: "jitsagar, RgahunathBari",
			line2: "Purba Medinipur, 721634",
		},
		gender: "Male",
		dob: "2000-01-01",
	});
	const [isEdit, setIsEdit] = useState(false);
	return (
		<div>
			<img src={userData.image} alt="" />
			{isEdit ? (
				<input
					type="text"
					value={userData.name}
					onChange={(e) => setUserData(prev=>({ ...prev, name: e.target.value }))}
				/>
			) : (
				<p>{userData.name}</p>
			)}
		</div>
	);
};

export default MyProfile;
