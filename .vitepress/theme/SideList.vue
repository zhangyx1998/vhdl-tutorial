<script setup lang="ts">
import { VPDocAsideSponsors } from "vitepress/theme";
const ufl = {
	name: "University of Florida",
	url: "https://ufl.edu/",
	img: "/vhdl-tutorial/brands/ufl.png",
}
const data = [
	{
		tier: "Academic",
		size: "big",
		items: [ufl, ufl],
	},
	{
		tier: "Websites",
		size: "medium",
		items: [ufl, ufl, ufl, ufl],
	},
];

const sponsors = data.map((sponsor) => {
	return {
		size: sponsor.size === "big" ? "mini" : "xmini",
		items: sponsor.items,
	};
});
</script>

<template>
	<a
		class="banner"
		href="http://www.gstitt.ece.ufl.edu/courses/eel4720_5721/"
		target="_blank"
	>
		<img width="26" height="26" src="/logo.png" />
		<span>
			<p class="extra-info">EEL4720/5721 Fall 2022</p>
			<p class="heading">Course Homepage</p>
			<p class="extra-info">Reconfigurable Computing</p>
		</span>
	</a>
	<h3 style="font-weight: bold; margin: 0.3em">Related Websites</h3>
	<VPDocAsideSponsors :data="sponsors" />
</template>

<style scoped>
.banner {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-radius: 14px;
	padding-left: 2.5rem;
	padding-top: 0.4rem;
	padding-bottom: 0.4rem;
	position: relative;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.1rem;
	filter: grayscale(100%);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	background-color: var(--vp-c-bg-alt);
	border: 2px solid var(--vp-c-bg-alt);
	transition: border-color 0.5s;
}
.banner:hover {
	filter: grayscale(0%);
	border: 2px solid var(--vp-c-brand-light);
}
.banner img {
	position: absolute;
	left: 1.2rem;
	transition: transform 0.5s;
}
.banner:hover img {
	transform: scale(1.2);
}

.banner:hover .heading {
	background-image: linear-gradient(
		120deg,
		#bd34fe 16%,
		var(--vp-c-brand-light),
		var(--vp-c-brand-light)
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.banner .extra-info {
	color: var(--vp-c-text-1);
	opacity: 0;
	font-size: 0.7rem;
	padding-left: 0.1rem;
	transition: opacity 0.5s;
}
.banner:hover .extra-info {
	opacity: 0.9;
}
</style>
