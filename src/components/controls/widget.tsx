import { Mail, User } from "lucide-react";

import { File } from "@/icons/file";
import { House } from "@/icons/house";
import { Square } from "@/icons/square";
import { Union } from "@/icons/union";

import Link from "next/link";

export function Controls() {
	return (
		<div className="fixed right-controls top-1/2 flex -translate-y-1/2 flex-col gap-7 rounded-[9999px] border border-neutral-600 px-4 py-[40px] dark:border-neutral-dark-600">
			<Link href="/">
				<House />
			</Link>
			<Link href="/">
				<Union />
			</Link>
			<Link href="/">
				<File />
			</Link>
			<Link href="/">
				<User />
			</Link>
			<Link href="/">
				<Square />
			</Link>
			<Link href="/">
				<Mail />
			</Link>
		</div>
	);
}
