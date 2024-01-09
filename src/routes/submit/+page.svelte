<script>
	import { Step, Stepper } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex flex-col">
	<h1 class="text-4xl text-center py-10">Submit a Challenge</h1>

	<div class="card p-4 variant-ghost-primary">
		<Stepper class="rounded-md p-3" badge="variant-filled-primary">
			<Step>
				<svelte:fragment slot="header">
					<h1 class="text-xl font-extralight text-center">Enter your contact information:</h1>
				</svelte:fragment>
				<input class="input w-1/2" placeholder="First name" />
			</Step>
			<Step>
				<svelte:fragment slot="header">
					<div class="flex justify-center items-center text-center">
						<h1 class="col-span-3 text-2xl font-bold">Enter your email</h1>
					</div>
				</svelte:fragment>
				<div class="flex justify-center items-center text-center">
					<input class="row-start-2 col-span-3 m-3" />
				</div>
			</Step>
			<Step>
				<svelte:fragment slot="header">
					<div class="flex justify-center items-center text-center">
						<h1 class="col-span-3 text-2xl font-bold">
							Click <u>Complete</u> to confirm your contact inquiry!
						</h1>
					</div>
				</svelte:fragment>
				<div class="flex justify-center items-center text-center">Thank you :D</div>
			</Step>
			<!-- ... -->
		</Stepper>
	</div>
</div>
