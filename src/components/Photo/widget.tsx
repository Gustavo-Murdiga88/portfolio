import { ComponentProps } from "react";

interface IPhotoProps extends ComponentProps<"section"> {
	url: string;
	nameOfProject: string;
	details: string;
	labels: string[];
}

export function Photo({
	url,
	nameOfProject,
	details,
	labels,
	...props
}: IPhotoProps) {
	return (
		<section
			data-aos="fade-up"
			data-aos-delay="200"
			{...props}
			className="mx-auto mb-10 max-w-page lg:mb-20"
		>
			<div
				draggable={false}
				className={`relative h-[350px] w-full rounded-md p-4 shadow-card lg:h-[530px] lg:w-[1245px] ${props.className}`}
				style={{
					backgroundImage: `url(${url})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="absolute left-5 top-4 flex w-[326px] flex-wrap gap-5 md:w-auto">
					{labels.map((label) => (
						<span
							key={label}
							className="whitespace-nowrap rounded-[999px] bg-neutral-100 px-4 py-1 text-xs font-normal text-neutral-600 dark:bg-neutral-dark-100 dark:text-neutral-dark-600 lg:text-[20px]"
						>
							{label}
						</span>
					))}
				</div>
			</div>
			<div className="mt-6">
				<span className="text-sm uppercase text-neutral-600 dark:text-neutral-dark-600 lg:text-xl">
					{nameOfProject} - {details}
				</span>
			</div>
		</section>
	);
}
