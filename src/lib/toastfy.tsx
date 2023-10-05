"use client";

import { ToastContainer as Toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function ToastContainer() {
	return (
		<Toast
			draggable
			position="top-right"
			theme="dark"
			closeOnClick
			progressClassName="bg-blue-900"
			autoClose={8000}
		/>
	);
}
