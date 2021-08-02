const ERROR_CODES = {
	EMAIL_NOT_FOUND: "Пользователь с таким Email не был найден",
	INVALID_PASSWORD: "Неверный пароль",
	EMAIL_EXISTS: "Адрес электронной почты уже используется другой учетной записью",
  auth: 'Пожалуйста авторизуйтесь в системе', 
};

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
