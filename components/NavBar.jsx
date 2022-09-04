// This is a temporary component for layout purposes. Will be edited by Lalith.
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export function NavBar() {
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="center"
			sx={{ width: "100%", height: "5rem", background: grey[600] }}
		>
			<Typography variant="h3">NavBar</Typography>
		</Grid>
	);
}
