<script lang="ts">
	import Card from "./Card.svelte";
	import IllustrationThankYou from "../assets/illustration-thank-you.svg";

	export let rating: String;
</script>

<Card>
	<div class="flex flex-col items-center">
		<!-- Image -->
		<img src={IllustrationThankYou} alt="thank-you">
		<p class="text-orange py-3 px-6 mt-6 bg-s-dark-blue rounded-full text-sm">You selected {rating} out of 5</p>
		<h3 class="mt-4 text-2xl font-bold text-white text-center">Thank you!</h3>
		<p class="mt-3 text-medium-grey text-[15px] text-center">
			We appreciate you taking the time to give a rating. If you ever need more support, 
			don’t hesitate to get in touch!
		</p>
	</div>
</Card>