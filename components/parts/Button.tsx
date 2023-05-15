import React from 'react';

interface Props {
	text: string;
	href: string;
}

const Button = ({ text, href }: Props) => {
	return (
		<a
			className="bg-blue-800 text-xl text-white rounded-md block py-6 px-8 w-fit transition-all hover:scale-95"
			href={href}
		>
			{text}
		</a>
	);
};

export default Button;
