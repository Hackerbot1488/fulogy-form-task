import React, { useState } from "react";
import {
	Breadcrumbs,
	Container,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { ProfileSheet } from "./ProfileSheet";
import { ProfileData } from "./ProfileData";
import { ProfileForm } from "./ProfileForm";

const useStyles = makeStyles((theme) => ({
	contentValue: {
		display: "flex",
		flexDirection: "column",
		padding: "0px 23px 0px 34px",
		color: "#fff",
		margin: 0,
		flex: 1,
		maxWidth: "none",
	},
	content__header: {
		textAlign: "left",
		fontSize: "18px",
		lineHeight: "25px",
		textTransform: "uppercase",
		fontWeight: 600,
		width: "100%",
		marginTop: 0,
		marginBottom: 0,
	},
	breadcrumbs: {
		marginTop: "10px",
		color: "#fff",
	},
	breadcrumbs__crumb: {
		fontSize: "14px",
		lineHeight: "19px",
	},
	breadcrumbs__separator: {
		margin: 0,
	},
	["@media (max-width: 684px)"]: {
		contentValue: {
			padding: "0px 10px",
		},
	},
	["@media (max-width: 414px)"]: {
		content__header: {
			textAlign: "left",
			fontSize: "14px",
			lineHeight: "19px",
			textTransform: "uppercase",
			fontWeight: 600,
			width: "100%",
		},
		breadcrumbs: {
			marginTop: "10px",
			color: "#fff",
		},
		breadcrumbs__crumb: {
			fontSize: "12px",
			lineHeight: "16px",
		},
	},
}));

export const Content: React.FC<{}> = () => {
	const styles = useStyles();
	const [editing, setEditing] = useState(false);
	function openEdit() {
		setEditing(true);
	}
	function closeEdit() {
		setEditing(false);
	}
	return (
		<>
			<Container className={styles.contentValue}>
				<Typography className={styles.content__header} variant="h1">
					Личный кабинет
				</Typography>
				<Breadcrumbs
					className={styles.breadcrumbs}
					aria-label="breadcrumb"
					classes={{ separator: styles.breadcrumbs__separator }}
				>
					<Typography className={styles.breadcrumbs__crumb}>Главная</Typography>
					<Typography className={styles.breadcrumbs__crumb}>
						Личный кабинет
					</Typography>
				</Breadcrumbs>
				<ProfileSheet
					openEdit={openEdit}
					opened={editing}
					closeEdit={closeEdit}
				/>
				{!editing && <ProfileData />}
				{editing && <ProfileForm />}
			</Container>
		</>
	);
};
