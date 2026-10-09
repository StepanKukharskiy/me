<script lang="ts">
	let { project }: { project: 'relay' | 'spellshape' | 'drawing' } = $props();
</script>

{#if project === 'relay'}
	<div class="paired relay" aria-label="Selected ChatGPT text and Relay’s Turn into Skill button">
		<div>
			<p>Select useful text</p>
			<div class="crop text-crop">
				<img
					src="/relay/assets/relay-chrome-selected-text.png"
					alt="Selected ChatGPT instructions for an origami-like pavilion."
					width="1589"
					height="990"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<div>
			<p>Turn into Skill →</p>
			<div class="crop skill-crop">
				<img
					src="/relay/assets/relay-chrome-selected-text.png"
					alt="Relay’s Make a Skill panel with the Turn into Skill button."
					width="1589"
					height="990"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</div>
{:else if project === 'spellshape'}
	<div
		class="paired spellshape"
		aria-label="Live OBJ geometry in Rhino and editable parameters in Grasshopper"
	>
		<div>
			<p>Geometry in Rhino</p>
			<div class="crop geometry-crop">
				<img
					src="/spellshape/assets/spellshape-live-obj-controls.jpg"
					alt="Faceted Live OBJ tower and plaza in Rhino."
					width="1280"
					height="720"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<div>
			<p>Named controls</p>
			<div class="crop controls-crop">
				<img
					src="/spellshape/assets/spellshape-live-obj-controls.jpg"
					alt="Grasshopper sliders for Spellshape tower height, base width and plaza dimensions."
					width="1280"
					height="720"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</div>
{:else}
	<div class="drawing">
		<p>Annotated drawing evidence</p>
		<div class="crop drawing-crop">
			<img
				src="/drawing-analysis/assets/annotated-section.png"
				alt="Foundation section with native geometry marked green, supporting dimensions blue and unresolved shapes orange."
				width="780"
				height="420"
				loading="lazy"
				decoding="async"
			/>
		</div>
		<ul aria-label="Annotation legend">
			<li><span class="green"></span>Geometry</li>
			<li><span class="blue"></span>Dimensions</li>
			<li><span class="orange"></span>Unresolved</li>
		</ul>
	</div>
{/if}

<style>
	.paired {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.paired,
	.drawing {
		padding: 20px 18px 24px;
		border-radius: 12px;
		background: #f5f3ef;
	}
	.paired > div {
		min-width: 0;
	}
	p {
		margin: 0 0 10px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #555;
	}
	.crop {
		position: relative;
		overflow: hidden;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		background: #fff;
		transform: rotate(-1.8deg);
		box-shadow:
			0 2px 4px rgb(31 41 55 / 8%),
			0 12px 22px -10px rgb(31 41 55 / 28%);
	}
	.paired > div:nth-child(2) .crop {
		transform: translateY(6px) rotate(1.4deg);
	}
	.paired .crop {
		aspect-ratio: 0.95;
	}
	img {
		position: absolute;
		display: block;
		max-width: none;
		height: auto;
	}
	.text-crop img {
		width: 390%;
		left: -36%;
		top: -67%;
	}
	.skill-crop img {
		width: 350%;
		left: -242%;
		top: -28%;
	}
	.geometry-crop img {
		width: 250%;
		left: -30%;
		top: -14%;
	}
	.controls-crop img {
		width: 390%;
		left: -256%;
		top: -100%;
	}
	.drawing-crop {
		aspect-ratio: 2.2;
		transform: rotate(-1deg);
	}
	.drawing-crop img {
		width: 120%;
		left: -9%;
		top: -6%;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 16px;
		list-style: none;
		padding: 0;
		margin: 20px 0 0;
		font-size: 0.75rem;
		color: #555;
	}
	li {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	li span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}
	.green {
		background: #149246;
	}
	.blue {
		background: #235fe8;
	}
	.orange {
		background: #f58a00;
	}
	@media (max-width: 480px) {
		.crop {
			transform: rotate(-0.8deg);
		}
		.paired > div:nth-child(2) .crop {
			transform: rotate(0.8deg);
		}
		.drawing-crop {
			transform: rotate(-0.6deg);
		}
		.paired {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		.relay .crop {
			aspect-ratio: 1.4;
		}
		.text-crop img {
			width: 210%;
			left: -18%;
			top: -52%;
		}
		.skill-crop img {
			top: -40%;
		}
		.spellshape .controls-crop {
			aspect-ratio: 1.55;
		}
		.controls-crop img {
			width: 350%;
			left: -230%;
			top: -150%;
		}
	}
</style>
