import { useEffect, useRef, useState } from "react";
import {
	Box,
	Button,
	Divider,
	Grid,
	Input,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export function MediaInput() {
	// const [recalculateMaxDimenstions, setRecalculateMaxDimensions] =
	// 	useState(0);
	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		setRecalculateMaxDimensions(previousValue => previousValue + 1);
	// 	});
	// }, []);

	const [mediaType, setMediaType] = useState("Image");
	const [file, setFile] = useState(null);
	const [imageObjectURL, setImageObjectURL] = useState("");
	useEffect(() => {
		if (!file) return;
		const currentImageObjectURL = URL.createObjectURL(file);
		setImageObjectURL(currentImageObjectURL);
	}, [file]);

	const enclosingPaperRef = useRef(null);
	const [maxImageDimensions, setMaxImageDimensions] = useState(null);
	useEffect(() => {
		const enclosingPaperElement = enclosingPaperRef.current;
		const width = enclosingPaperElement.offsetWidth;
		const height = enclosingPaperElement.offsetHeight;
		setMaxImageDimensions({ width, height });
	}, []);
	// Pass recalculateMaxDimenstions as dependency

	return (
		<Grid
			container
			flexDirection="row"
			justifyContent="center"
			sx={{ width: "100%", height: "100%" }}
			padding="1rem"
		>
			<Grid item flex={1} container flexDirection="column">
				<Typography variant="overline" fontSize="large" align="center">
					Set Your Parameters Here
				</Typography>
				<Divider
					sx={{
						width: "100%",
						marginBottom: "1rem",
					}}
				/>
				<Grid
					container
					flexDirection="row"
					alignItems="center"
					gap="1rem"
				>
					<Typography>What media type are you using?</Typography>
					<Select
						value={mediaType}
						onChange={event => setMediaType(event.target.value)}
					>
						<MenuItem value="Image">Image</MenuItem>
						<MenuItem value="Video">Video</MenuItem>
					</Select>
				</Grid>
			</Grid>
			<Grid item flex={1}>
				<Paper
					ref={enclosingPaperRef}
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{file ? (
						<Grid
							sx={{
								maxWidth: maxImageDimensions?.width,
								maxHeight: maxImageDimensions?.height,
								overflow: "scroll",
								position: "relative",
							}}
						>
							<img
								src={imageObjectURL}
								onLoad={() =>
									URL.revokeObjectURL(imageObjectURL)
								}
							/>
							<Button
								variant="contained"
								color="error"
								sx={{
									position: "absolute",
									top: "0",
									left: "0",
									margin: "0.25rem",
								}}
								onClick={() => setFile(null)}
							>
								Cancel
							</Button>
						</Grid>
					) : (
						<>
							<CloudUploadIcon fontSize="large" />
							<Typography
								variant="caption"
								fontSize="large"
								sx={{ marginBottom: "1rem" }}
							>
								Upload{" "}
								{mediaType === "Image" ? "an Image" : "a Video"}
							</Typography>
							<Input
								type="file"
								accept="image/*"
								style={{ display: "none" }}
								id="file-input"
								onChange={event => {
									setFile(event.target.files[0]);
								}}
							/>
							<InputLabel htmlFor="file-input">
								<Button
									variant="contained"
									component="span"
									sx={{ width: "100%" }}
								>
									Select {mediaType} from Computer
								</Button>
							</InputLabel>
						</>
					)}
				</Paper>
			</Grid>
		</Grid>
	);
}
