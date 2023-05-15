import Button from '@/components/parts/Button';

const Hero = () => {
	return (
		<section id="hero" className="bg-slate-100 flex justify-center items-center p-8">
			<div id="container" className="max-w-screen-lg text-center flex flex-col items-center gap-6">
				<h1 className="text-2xl font-semibold max-w-[720px]">Lorem ipsum dolor sit amet</h1>
				<p className="max-w-[720px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Button text="Get Started" href="/about" />
			</div>
		</section>
	);
};

export default Hero;
