// Shows a photo when `src` is given, otherwise a labelled placeholder box.
export default function Placeholder({ label, shape = "", src }) {
  if (src) return <img className={`photo ${shape}`} src={src} alt={label} loading="lazy" />;
  return (
    <div className={`ph ${shape}`} role="img" aria-label={`Image placeholder: ${label}`}>
      {label}
    </div>
  );
}
