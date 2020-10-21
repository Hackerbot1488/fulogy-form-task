import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { Create, Close } from "@material-ui/icons";
import { useStyles } from "./styles";
import { User } from "../../Profile";
import { ReactComponent as UserIcon } from "../../../assets/UserIcon.svg";
export interface ProfileSheetProps {
	opened: boolean;
	closeEdit: () => void;
	openEdit: () => void;
	user: User;
}
export const ProfileSheet: React.FC<ProfileSheetProps> = ({
	opened,
	openEdit,
	closeEdit,
	user,
}) => {
	const styles = useStyles();
	return (
		<>
			<Card className={styles.profile}>
				<UserIcon className={styles.profile__icon_user} />
				<Typography className={styles.profile__username}>
					{user.name}
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
