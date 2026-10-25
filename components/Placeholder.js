// Swap for <img> once real images are supplied.
export default function Placeholder({ label, shape = "" }) {
  return (
    <div className={`ph ${shape}`} role="img" aria-label={`Image placeholder: ${label}`}>
      {label}
    </div>
  );
}
