import dayjs from "dayjs";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function userCanSendEmail(cookies: ReadonlyRequestCookies) {
	const hasCookieDate = cookies.has("dateSendLastEmail");
	const cookieDateSendLastEmail = hasCookieDate
		? dayjs(cookies.get("dateSendLastEmail").value)
		: dayjs();

	const differenceInMinutes = dayjs().diff(
		dayjs(cookieDateSendLastEmail),
		"minutes",
	);

	const useCanSendEmail =
		(differenceInMinutes > 20 && hasCookieDate) || !hasCookieDate;

	return useCanSendEmail;
}
