import Head from "next/head";
import { MediaInput } from "../components/MediaInput";

export default function Template() {
	return (
		<>
			<Head>
				<title>ML Projects</title>
				<meta
					name="description"
					content="Portfolio for Team Machine Learning Projects"
				/>
			</Head>
			<MediaInput />
		</>
	);
}
