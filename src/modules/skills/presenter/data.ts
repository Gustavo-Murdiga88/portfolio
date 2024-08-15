import bun from "@/assets/bun.svg";
import docker from "@/assets/docker.svg";
import expo from "@/assets/expo.svg";
import fastify from "@/assets/fastify.svg";
import flutter from "@/assets/flutter-lg.svg";
import nest from "@/assets/nest-lg.svg";
import next from "@/assets/nextjs-lg.svg";
import node from "@/assets/node.svg";
import prisma from "@/assets/prisma.svg";
import react from "@/assets/react.svg";
import typescript from "@/assets/typescript.svg";
import vitejs from "@/assets/vitejs-lg.svg";

type FrameworksProps = {
	id: string;
	imageUrl: string;
	title: string;
	urlDoc: string;
};

export const frameworks: FrameworksProps[] = [
	{
		id: "1",
		imageUrl: react,
		title: "React",
		urlDoc: "https://react.dev/",
	},
	{
		id: "2",
		urlDoc: "https://nodejs.org/en",
		imageUrl: node,
		title: "Node JS",
	},
	{
		id: "3",
		urlDoc: "https://expo.dev/",
		imageUrl: expo,
		title: "Expo",
	},
	{
		id: "4",
		urlDoc: "https://nextjs.org/",
		imageUrl: next,
		title: "Next",
	},
	{
		id: "5",
		urlDoc: "https://devblogs.microsoft.com/typescript/",
		imageUrl: typescript,
		title: "Typescript",
	},
	{
		id: "6",
		urlDoc: "https://vitest.dev/",
		imageUrl: vitejs,
		title: "Vitest",
	},
	{
		id: "7",
		urlDoc: "https://www.flutter.com/",
		imageUrl: flutter,
		title: "Flutter",
	},
	{
		id: "8",
		urlDoc: "https://www.docker.com/",
		imageUrl: docker,
		title: "Docker",
	},
	{
		id: "9",
		urlDoc: "https://nestjs.com/",
		imageUrl: nest,
		title: "NestJS",
	},
	{
		id: "10",
		urlDoc: "https://www.prisma.io/",
		imageUrl: prisma,
		title: "Prisma ORM",
	},
	{
		id: "11",
		urlDoc: "https://fastify.dev/",
		imageUrl: fastify,
		title: "Fastify",
	},
	{
		id: "12",
		urlDoc: "https://bun.sh/",
		imageUrl: bun,
		title: "Bun JS",
	},
];
