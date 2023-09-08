<script lang="ts">
	import Card from "./Card.svelte";
	import IconStar from "../assets/icon-star.svg";

	let selected: HTMLElement;
	
	export let rating: String;

	function handleRatingClick(e: Event) {
		const curr = e.target as HTMLElement;
		if (selected) {
			selected.classList.remove('active-rating');
			selected.classList.add('inactive-rating');
		}
		curr.classList.remove('inactive-rating');
		curr.classList.add('active-rating');
		selected = curr;
	}

	function handleSubmit(e: Event) {
		const chosen_rating = selected?.innerText;
		if (selected) {
			rating = chosen_rating;
		}
	}
</script>

<Card>
	<!-- Star -->
	<div class="flex justify-center items-center  w-10 h-10 bg-s-dark-blue rounded-full drop-shadow-lg">
		<img src={IconStar} alt="star">
	</div>
	<h3 class="mt-5 text-2xl font-bold text-white">How did we do?</h3>
	<p class="mt-3 text-medium-grey text-[15px]">
		Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
	</p>
	<div class="flex justify-between mt-5">
		{#each [1,2,3,4,5] as num}
		<button on:click={handleRatingClick} class="w-10 h-10 inactive-rating rounded-full drop-shadow-lg leading-10 text-center text-sm  hover:cursor-pointer transition-colors">
			{num}
		</button>
		{/each}
	</div>
	<div class="mt-6">
		<button on:click={handleSubmit} class="bg-orange text-white uppercase w-full py-3 rounded-full text-sm tracking-wider hover:text-orange hover:bg-white transition-colors">
			Submit
		</button>
	</div>
</Card>

<style lang="postcss">
	:global(.active-rating) {
		color: theme(colors.white);
		background-color: theme(colors.orange);
	}
	:global(.inactive-rating) {
		color: theme(colors.medium-grey);
		background-color: theme(colors.s-dark-blue);
	}
	:global(.inactive-rating:hover) {
		color: theme(colors.white);
		background-color: theme(colors.light-grey);
	}
</style>