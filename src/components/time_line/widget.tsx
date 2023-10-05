export interface ITimeLineProps {
	date: string;
	title: string;
	company: string;
}

export function TimeBox({ company, date, title }: ITimeLineProps) {
	return (
		<div
			data-aos="fade-up"
			data-aos-offset="200"
			className="relative mx-auto flex h-[200px] max-w-page flex-col items-start justify-start px-4 pl-10 before:absolute before:left-0 before:top-0 before:z-10 before:ml-4 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-blue-dark-200 before:content-[''] after:absolute after:inset-y-0 after:left-4 after:w-px after:bg-neutral-600 after:content-['']"
		>
			<header className="mb-6 -translate-y-1">
				<span className="text-base font-normal dark:text-neutral-dark-600">
					{date}
				</span>
			</header>
			<section className="mb-4">
				<h1 className="text-xl font-normal uppercase text-neutral-900 dark:text-neutral-dark-900">
					{title}
				</h1>
			</section>
			<footer>
				<span className=" text-base font-normal uppercase dark:text-neutral-dark-600">
					{company}
				</span>
			</footer>
		</div>
	);
}
