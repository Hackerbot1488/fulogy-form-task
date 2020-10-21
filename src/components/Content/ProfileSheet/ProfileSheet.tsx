import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { AccountCircle, Create, Close } from "@material-ui/icons";
import { useStyles } from "./styles";

export interface ProfileSheetProps {
	opened: boolean;
	closeEdit: () => void;
	openEdit: () => void;
}
export const ProfileSheet: React.FC<ProfileSheetProps> = ({
	opened,
	openEdit,
	closeEdit,
}) => {
	const styles = useStyles();
	return (
		<>
			<Card className={styles.profile}>
				<AccountCircle className={styles.profile__icon_user} />
				<Typography className={styles.profile__username}>
					Иванова Анна Михайловна
				</Typography>
				<Button
					className={styles.profile__button}
					onClick={() => (opened ? closeEdit() : openEdit())}
				>
					<span className={styles.profile__button_text}>
						{opened ? "закрыть" : "редактировать"}
					</span>
					{opened ? (
						<Close className={styles.profile__button_icon} />
					) : (
						<Create className={styles.profile__button_icon} />
					)}
				</Button>
			</Card>
		</>
	);
};
