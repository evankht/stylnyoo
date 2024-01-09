<script lang="ts">
	import { ProgressBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let rent = 0;
	let other = 0;
	let fees = 0;
	let adjust = 0;
	let monday = true;
	let tuesday = false;
	let wednesday = false;
	let thursday = false;
	let friday = false;
	let saturday = false;
	$: days = [monday, tuesday, wednesday, thursday, friday, saturday];
	$: monthlyRent = rent * 4;
	$: tips = fees * adjust;
	$: income = fees + tips;
	$: expenses = monthlyRent + other;
	$: status =
		expenses > income
			? `$ -${expenses - income}.00`
			: 'Everything earned from here on out goes into your pocket :)';
	$: percentage = expenses ? Math.floor((income / expenses) * 100) : 0;
	$: message = () => {
		if (percentage > 0) {
			if (percentage < 25) {
				return "You're on your way! <3";
			}
			if (percentage < 50) {
				return 'Whaddaya know? 25% already came and went! ;)';
			}
			if (percentage < 75) {
				return "Woohoo! You're over halfway there!";
			}
			if (percentage < 100) {
				return 'MAAA-DDIE! MAAA-DDIE!';
			} else {
				return 'You did it! Great job, sweetheart! <3';
			}
		} else {
			return "Madelyn's journey to profit";
		}
	};

	income = income;
</script>

<div class="container pt-10 px-10 space-y-10 mx-auto">
	<div class="grid grid-cols 1 divide-y card variant-soft p-10 gap-5">
		<div class="grid grid-cols-2 gap-5">
			<h1 class="col-span-full text-2xl">Expenses</h1>
			<div>
				<label for="rent" class="label mb-3">
					<span class="ml-4">Rent (weekly)</span>
				</label>
				<input id="rent" type="number" step="25" class="input" bind:value={rent} />
			</div>
			<div>
				<label for="other" class="label mb-3">
					<span class="ml-4">Other expenses (monthly)</span>
				</label>
				<input
					id="other"
					type="number"
					step="25"
					class="input input-primary input-lg"
					bind:value={other}
				/>
			</div>
		</div>
		<div class="grid grid-cols-8 pt-5 gap-5">
			<h1 class="col-span-full text-2xl">Nails</h1>
			<button
				on:click={() => (fees += 75)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Full set of Gel Nails<br />$ 75</button
			>
			<button
				on:click={() => (fees += 55)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Hard Gel Overlay<br />$ 55</button
			>
			<button
				on:click={() => (fees += 45)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Gel Fill<br />$ 45</button
			>
			<button
				on:click={() => (fees += 40)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Mani + Gel Polish<br />$ 40</button
			>
			<button
				on:click={() => (fees += 10)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Nail Repair<br />$ 10</button
			>
			<button
				on:click={() => (fees += 10)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Chrome<br />$ 10</button
			>
			<button
				on:click={() => (fees += 55)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Pedicure<br />$ 55</button
			>
			<button
				on:click={() => (fees += 120)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Pedicure + Gel Polish<br />$ 120</button
			>
		</div>
		<div class="grid grid-cols-8 pt-5 gap-5">
			<h1 class="col-span-full text-2xl">Hair</h1>

			<button
				on:click={() => (fees += 75)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Women's Cut + Style<br />$ 75</button
			>
			<button
				on:click={() => (fees += 95)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Wash + Cut + Style<br />$95</button
			>
			<button
				on:click={() => (fees += 60)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Devacurl Dry Cut<br />$60</button
			>
			<button
				on:click={() => (fees += 90)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Rezo Cut<br />$90</button
			>
			<button
				on:click={() => (fees += 25)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Men's Cut + Style<br />$25</button
			>
			<button
				on:click={() => (fees += 15)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Beard Trim<br />$15</button
			>
			<button
				on:click={() => (fees += 40)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Deep Conditioning<br />$40</button
			>
			<button
				on:click={() => (fees += 300)}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary rounded-xl"
				>Brazilian Blowout<br />$300</button
			>
		</div>
		<div class="pt-5">
			<h1 class="col-span-full text-2xl mb-5">{message()}</h1>
			<ProgressBar label="Progress Bar" value={income} max={expenses} />
			<div class="grid grid-cols-3 mt-4 px-4">
				<p>$ {income} earned</p>
				<p class="text-center">{percentage}% of target</p>
				<p class="text-right">{expenses ? status : '$ 0'}</p>
			</div>
		</div>
		<div class="grid grid-cols-10 items-center">
			<h1 class="text-2xl mt-5 col-span-full mb-5">Variables</h1>
			<div class="text-right inline-block mr-5 align-baseline">Tips</div>
			<div class="col-span-3 pb-1">
				<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
					<RadioItem bind:group={adjust} name="justify" value={0}>0%</RadioItem>
					<RadioItem bind:group={adjust} name="justify" value={0.1}>10%</RadioItem>
					<RadioItem bind:group={adjust} name="justify" value={0.15}>15%</RadioItem>
					<RadioItem bind:group={adjust} name="justify" value={0.2}>20%</RadioItem>
					<RadioItem bind:group={adjust} name="justify" value={0.25}>25%</RadioItem>
				</RadioGroup>
			</div>
			<div class="col-start-5 col-span-2">
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" checked />
						<p>Monday</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Tuesday</p>
					</label>
				</div>
			</div>
			<div class="col-start-7 col-span-2">
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Wednesday</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Thursday</p>
					</label>
				</div>
			</div>
			<div class="col-start-9 col-span-2">
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Friday</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Saturday</p>
					</label>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-4 pt-4">
			<h1 class="text-2xl col-span-full mb-5">Summary</h1>
			<p class="text-center">Total expenses: $ {expenses}</p>
			<p class="text-center">Total income: $ {income}</p>
			<p class="text-center">Total tips: $ {tips}</p>
			<p class="text-center">Profit: $ {income - expenses}</p>
			<!-- <button
				on:click={() => {
					expenses = 0;
					rent = 0;
					other = 0;
					income = 0;
				}}
				class="btn btn-sm variant-ringed hover:variant-ringed-tertiary-secondary hover:variant-ringed hover:variant-ringed-tertiary-primary w-fit mt-3"
				>Clear</button
			> -->
		</div>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply px-4;
	}
</style>
