/** Two offset T forms: Taiwo / Triumphant. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 10h34v10H28v30H18V20H6V10Z" fill="currentColor" />
      <path d="M34 24h24v10H46v20H36V34h-2V24Z" fill="currentColor" />
      <path d="M46 10h12v10H46z" fill="currentColor" />
    </svg>
  );
}
