import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.locale(ptBr);
dayjs.extend(timezone);
dayjs.extend(utc);

export const formatDate = dayjs;
