import drag from "@/assets/dragindrop.png";
import flutter from "@/assets/flutter.png";
import home from "@/assets/home.png";
import nest from "@/assets/nestjs.png";
import pokemons from "@/assets/pokemons.png";
import { Photo } from "@/components/Photo/widget";

export function ShowCase() {
	return (
		<section
			data-main
			id="show_case"
			className="flex min-h-content-height flex-col items-center justify-center"
		>
			<header
				data-aos="fade-up"
				data-aos-delay="50"
				className="mx-auto mb-16 flex w-full max-w-page justify-start border-b border-b-neutral-300 bg-neutral-100 px-5 py-4 pr-4 pt-20 dark:bg-neutral-dark-100"
			>
				<strong className="uppercase text-blue-200 transition-colors hover:text-blue-dark-700 dark:text-blue-dark-200 dark:hover:text-blue-dark-700">
					Projetos
				</strong>
			</header>
			<Photo
				repo="https://github.com/Gustavo-Murdiga88/CoffeDelivery"
				labels={["React", "Styled components", "Vite"]}
				details="Peça seu café a qual quer momento do dia"
				url={home.src}
				nameOfProject="Coffee delivery"
			/>

			<div
				data-aos="fade-up"
				data-aos-delay="50"
				className="mx-auto flex max-w-page flex-col gap-6 md:flex-row"
			>
				<Photo
					repo="https://github.com/Gustavo-Murdiga88/ig-class-05"
					labels={["NestJS", "Vitest", "SOLID", "DDD", "TDD"]}
					details="API-DDD uma api voltada a criação de um fórum de perguntas e respostas"
					url={nest.src}
					className="lg:w-[622.5px]"
					nameOfProject="Fórum"
					style={{
						flexBasis: "50%",
					}}
				/>

				<Photo
					repo="https://github.com/Gustavo-Murdiga88/dropzone"
					labels={["React"]}
					details="Aplicação para uploads de arquivos"
					url={drag.src}
					className="lg:w-[622.5px]"
					style={{
						flexBasis: "50%",
					}}
					nameOfProject="Drop zone"
				/>
			</div>

			<Photo
				repo="https://github.com/Gustavo-Murdiga88/pokedex"
				labels={["React", "Tailwind", "Next", "zustang"]}
				details="App Pókedex criado para que novos desenvolvedores possam entender de uma forma visual teste com a api poke.co"
				url={pokemons.src}
				nameOfProject="Pokédex"
			/>

			<Photo
				repo="https://github.com/Gustavo-Murdiga88/flutter-app"
				labels={["Flutter", "Clean dart", "Modular"]}
				details="Um app criado em flutter com o intuito de exercer os conhecimentos adquiridos"
				url={flutter.src}
				nameOfProject="Pókedex App"
			/>
		</section>
	);
}
