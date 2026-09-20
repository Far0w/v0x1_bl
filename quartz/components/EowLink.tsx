import { QuartzComponent, QuartzComponentConstructor } from "./types"

export default (() => {
  const EowLink: QuartzComponent = () => {
    return (
      <a
        href="https://eow.voximachina.xyz/"
        class="eow-link"
        aria-label="Encyclopedia of Wonders"
      >
        <span class="eow-link-icon">✦</span>
        <h2>Encyclopedia of Wonders</h2>
      </a>
    )
  }

  EowLink.css = `
    .eow-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: var(--dark);
  }

  .eow-link h2 {
    margin: 0;
  }

  .eow-link-icon {
    color: #e4dda1;
  }
  `

  return EowLink
}) satisfies QuartzComponentConstructor