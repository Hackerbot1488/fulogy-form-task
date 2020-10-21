import React, { useState } from "react";
import { Header } from "./Header/Header";
import { Content } from "./Content/Main";
import { UserContext } from "../helpers/context";
export interface User {
	name: string;
	email: string;
	phone: string;
}

export const Profile: React.FC<{}> = () => {
	const [userProfile, setUserProfile] = useState<User>({
		name: "Иванова Анна Михайловна",
		email: "Ivanova@mail.ru",
		phone: "Укажите номер телефона",
	});
	function updateData(user: User) {
		setUserProfile(user);
		fetch("/api/sendUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
	}
	return (
		<>
			<UserContext.Provider value={{ updateData }}>
				<Header user={userProfile} />
				<Content user={userProfile} />
			</UserContext.Provider>
		</>
	);
};
