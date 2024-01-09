import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle 10s 1'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'20%': {
						transform: 'rotate(0deg)'
					},
					'21%': {
						transform: 'rotate(1deg)'
					},
					'22%': {
						transform: 'rotate(-1deg)'
					},
					'23%': {
						transform: 'rotate(2deg)'
					},
					'24%': {
						transform: 'rotate(-2deg)'
					},
					'25%': {
						transform: 'rotate(1deg)'
					},
					'26%': {
						transform: 'rotate(-1deg)'
					},
					'27%': {
						transform: 'rotate(2deg)'
					},
					'28%': {
						transform: 'rotate(-2deg)'
					},
					'29%': {
						transform: 'rotate(1deg)'
					},
					'30%': {
						transform: 'rotate(-1deg)'
					},
					'31%': {
						transform: 'rotate(2deg)'
					},
					'32%': {
						transform: 'rotate(-2deg)'
					},
					'33%': {
						transform: 'rotate(1deg)'
					},
					'34%': {
						transform: 'rotate(-1deg)'
					},
					'35%': {
						transform: 'rotate(0deg) translate(0px)'
					},
					'38%': {
						transform: 'translate(-15px)'
					},
					'40%': {
						transform: 'translate(-15px)'
					},
					'44%': {
						transform: 'translate(1100px)'
					},
					'50%': {
						transform: 'translate(1100px, -300%)'
					},
					'51%': {
						transform: 'translate(20px, -300%) rotate(-35deg)'
					},
					'55%': {
						transform: 'translate(0px, -200%) rotate(-35deg)'
					},
					'63%': {
						transform: 'translate(0px, -200%) rotate(-35deg)'
					},
					'65%': {
						transform: 'translate(0px, -200%) rotate(-135deg)'
					},
					'70%': {
						transform: 'translate(0px, -200%) rotate(-135deg)'
					},
					'72%': {
						transform: 'translate(0px, -200%) rotate(-35deg)'
					},
					'75%': {
						transform: 'translate(0px, -200%) rotate(-35deg)'
					},
					'77%': {
						transform: 'translate(0px, -200%) rotate(-65deg)'
					},
					'85%': {
						transform: 'translate(0px, -200%) rotate(-65deg)'
					},
					'95%': {
						transform: 'translate(0px) rotate(0deg)'
					}
				}
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'modern',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
