import Image from "next/image";
import { site } from "@/lib/site";

const initials = site.founder
  .split(" ")
  .map((part) => part[0])
  .join("");

// The founder's face, or their initials until a photo is set in `site.founderPhoto`.
// Decorative by default because the name is always written right next to it.
// Callers set the size, font size (for the initials), and any ring.
export function FounderAvatar({
  className = "",
  sizes = "64px",
  alt = "",
}: {
  className?: string;
  sizes?: string;
  alt?: string;
}) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-navy-700 ${className}`}
    >
      {site.founderPhoto ? (
        <Image src={site.founderPhoto} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <span aria-hidden className="font-display font-extrabold tracking-wide text-teal-300">
          {initials}
        </span>
      )}
    </span>
  );
}
