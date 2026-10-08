<div class="drawing-examples" aria-label="Drawing analysis example">
	<figure>
		<a
			href="/drawing-analysis/assets/source-drawing.png"
			rel="external"
			aria-label="View the source drawing full size"
		>
			<img
				src="/drawing-analysis/assets/source-drawing.png"
				alt="Herbertsdale foundation drawing with its original plan, section, dimensions and title block."
				width="990"
				height="1400"
				loading="lazy"
				decoding="async"
			/>
		</a>
		<figcaption>
			<strong>Source drawing.</strong> Plan, section and printed dimensions retained from the PDF.
		</figcaption>
	</figure>
	<figure>
		<a
			href="/drawing-analysis/assets/working-estimate.png"
			rel="external"
			aria-label="View the annotated working estimate full size"
		>
			<img
				src="/drawing-analysis/assets/working-estimate.png"
				alt="Drawing-analysis working estimate with green native section geometry, blue supporting dimensions, orange unresolved shapes and explicit estimate assumptions."
				width="1039"
				height="1400"
				loading="lazy"
				decoding="async"
			/>
		</a>
		<figcaption>
			<strong>Annotated working estimate.</strong> Geometry, dimensions and unresolved shapes stay tied
			to the drawing. The estimate remains conditional; physical completeness and engineer approval are
			unresolved.
		</figcaption>
	</figure>
</div>
<p class="example-note">
	Actual drawing-analysis output. Click either image to inspect it full size. Source drawing: CSM,
	Herbertsdale foundation layout, November 2015.
</p>

<style>
	.drawing-examples {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		margin: 28px 0 16px;
	}
	figure {
		margin: 0;
		min-width: 0;
	}
	img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		box-sizing: border-box;
	}
	figcaption {
		margin-top: 12px;
		font-size: 0.95rem;
		line-height: 1.6;
	}
	.example-note {
		font-size: 0.85rem;
		color: #666;
	}
	@media (max-width: 650px) {
		.drawing-examples {
			grid-template-columns: 1fr;
		}
	}
</style>
