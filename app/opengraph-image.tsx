import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Alpaca Digital: Be the first call when Rochester searches.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [display, text, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/BigShoulders-Display-ExtraBold.ttf")),
    readFile(join(process.cwd(), "assets/Overpass-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/alpaca-ink.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#e6ebe2",
          backgroundImage:
            "linear-gradient(#ffffff 3px, transparent 3px), linear-gradient(90deg, #ffffff 3px, transparent 3px)",
          backgroundSize: "60px 48px",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 32,
            padding: "52px 60px",
            boxShadow: "0 18px 40px -16px rgba(19,32,27,0.35)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={34} height={54} alt="" />
            <div style={{ fontFamily: "Display", fontSize: 40, letterSpacing: 2, color: "#13201b" }}>ALPACA DIGITAL</div>
          </div>
          <div style={{ display: "flex", fontFamily: "Display", fontSize: 96, lineHeight: 0.92, color: "#13201b", maxWidth: 1000 }}>
            BE THE FIRST CALL WHEN ROCHESTER SEARCHES.
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "Text", fontSize: 28, color: "#45544d" }}>Websites, local SEO, Google Business Profile</div>
            <div
              style={{
                display: "flex",
                fontFamily: "Text",
                fontSize: 28,
                color: "#ffffff",
                backgroundColor: "#3b2ef0",
                borderRadius: 999,
                padding: "14px 30px",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              Free visibility audit
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Display", data: display, weight: 800, style: "normal" },
        { name: "Text", data: text, weight: 600, style: "normal" },
      ],
    },
  );
}
