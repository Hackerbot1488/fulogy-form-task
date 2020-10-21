import Head from "next/head";
import { Profile } from "../src/components/Profile";

export default function Main() {
	return (
		<>
			<Head>
				<title>Profile</title>
			</Head>
			<Profile />
		</>
	);
}
