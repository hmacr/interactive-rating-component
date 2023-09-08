<script lang="ts">
  import Rating from "./components/Rating.svelte";
  import Thankyou from "./components/Thankyou.svelte";

  let rating: String;
</script>

<!-- Container -->
<div class="h-screen max-w-screen-xl flex justify-center items-center mx-auto">
  {#if rating === undefined}
    <Rating bind:rating={rating} />
  {:else}
    <Thankyou rating={rating}/>
  {/if}
</div>