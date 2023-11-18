import { ITimeLineProps, TimeBox } from "@/components/time_line/widget";

const time_line: ITimeLineProps[] = [
	{
		company: "Guarani sistemas",
		date: "Atualmente",
		title: "Desenvolvedor full-stack web/mobile",
	},
	{
		company: "STI3",
		date: "17/10/2021 à 17/10/2022",
		title: "Desenvolvedor front-end - React.JS",
	},
	{
		company: "Anhanguera",
		date: "01/01/2019 à 01/07/2023",
		title: "Formação técnica em arquitetura de dados",
	},
	{
		company: "ETEC - Joaquim ferreira do amaral",
		date: "01/01/2020 à 01/12/2022",
		title: "Formação técnica em desenvolvimento de sistemas",
	},
	{
		company: "ETEC - Joaquim ferreira do amaral",
		date: "01/01/2019 à 01/07/2021",
		title: "Formação técnica eletrotécnica",
	},
];

export function TimeLine() {
	return (
		<section data-main className="lg:min-h-content-height" id="time_line">
			<div
				data-aos="fade-up"
				className="min-h-[250px] rounded-sm bg-neutral-0 pb-8 pt-9 dark:bg-black md:ml-2"
			>
				<strong
					data-aos="fade-up"
					data-aos-delay="50"
					className="mx-auto block w-full max-w-page border-b border-b-neutral-300 px-5 py-4"
				>
					<span className="cursor-default uppercase text-neutral-600 transition-colors hover:text-blue-dark-700 dark:text-neutral-dark-600 dark:hover:text-blue-dark-700">
						Currículo
					</span>
				</strong>

				<h1
					data-aos="fade-up"
					data-aos-duration="1200"
					className="mx-auto my-10 flex flex-wrap justify-center gap-2 px-4 text-center md:mb-20 md:mt-[64px] md:max-w-page md:gap-10"
				>
					<span className=" text-xl font-normal text-neutral-600 dark:text-neutral-dark-600 md:text-[64px] ">
						Educação
					</span>
					<span className=" text-xl font-normal text-neutral-600 dark:text-neutral-dark-600 md:text-[64px]">
						e
					</span>
					<span className="text-xl font-normal text-blue-200 dark:text-blue-dark-200 md:text-[64px] ">
						Experiência
					</span>
				</h1>

				{time_line.map(({ company, date, title }) => (
					<TimeBox key={title} company={company} date={date} title={title} />
				))}
				<main />
			</div>
		</section>
	);
}
