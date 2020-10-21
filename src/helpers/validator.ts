export const validator = {
	valid: true,
	nameError: "",
	phoneError: "",
	emailError: "",
	clear: function () {
		this.valid = true;
		this.nameError = this.phoneError = this.emailError = "";
	},
	checkName: function (name: string) {
		let nameParts: string[] = name.split(" ");
		nameParts = nameParts.filter((part) => part.trim().length > 1);
		switch (nameParts.length) {
			case 0:
				this.nameError = "Введите фамилию и имя";
				this.valid = false;
				return;
			case 1:
				this.nameError = "Введите имя";
				this.valid = false;
				return;
			case 2:
				this.nameError = "";
				break;
			default:
				this.nameError = "Неверный формат";
				return;
		}
		nameParts = nameParts.filter((part) => part.match(/^[а-яА-Я]+$/));
		nameParts.length !== 2 &&
			(this.nameError = "Неверный формат") &&
			(this.valid = false);
	},
	checkPhone: function (phone: string) {
		!phone.match(/^\+7[0-9]{10}$/) &&
			(this.phoneError = "Неверный формат номера") &&
			(this.valid = false);
	},
	checkEmail: function (email: string) {
		!email.match(/^[a-zA-Z0-9]+@mail.ru$/) &&
			(this.emailError = "Неверный формат email") &&
			(this.valid = false);
	},
};
export interface Error {
	error: boolean;
	text: string;
}
