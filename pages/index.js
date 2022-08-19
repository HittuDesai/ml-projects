import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>ML Projects</title>
				<meta
					name="description"
					content="Portfolio for Team Machine Learning Projects"
				/>
			</Head>
			<Typography variant="h1" align="center">
				Machine Learning Projects
			</Typography>
		</>
	);
}
