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
        <span>Encyclopedia of Wonders</span>
      </a>
    )
  }

  EowLink.css = `
    .eow-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.4rem 0 0.8rem 0;
      font-weight: 600;
      color: var(--dark);
      text-decoration: none;
      transition: opacity 0.15s ease;
    }

    .eow-link:hover {
      opacity: 0.7;
    }

    .eow-link-icon {
      color: #ff9d00;
      font-size: 1.2rem;
      line-height: 1;
    }
  `

  return EowLink
}) satisfies QuartzComponentConstructor