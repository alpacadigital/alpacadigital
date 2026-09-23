import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [mark, heavy, semibold] = await Promise.all([
  readFile(join(process.cwd(), "public/alpaca-mark.png"), "base64"),
  readFile(join(process.cwd(), "src/assets/Montserrat-800.ttf")),
  readFile(join(process.cwd(), "src/assets/Montserrat-600.ttf")),
]);

// The link preview people see when you text or share alpacadigital.co
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(ellipse at 25% 15%, #123a63 0%, #061e3a 60%)",
          fontFamily: "Montserrat",
          color: "white",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -260,
            width: 560,
            height: 560,
            borderRadius: 9999,
            border: "2px solid rgba(25,198,200,0.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -220,
            bottom: -320,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "rgba(10,42,77,0.7)",
            border: "2px solid rgba(25,198,200,0.3)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={`data:image/png;base64,${mark}`} height={78} width={49} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: 2 }}>ALPACA</div>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: 8, color: "#19c6c8" }}>
                DIGITAL
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5, display: "flex", flexWrap: "wrap" }}>
              <span>Websites that bring in&nbsp;</span>
              <span style={{ color: "#19c6c8" }}>more leads.</span>
            </div>
            <div style={{ marginTop: 28, fontSize: 28, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
              Web design · Local SEO · Google Business Profiles
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
            {`${site.city}, ${site.region}  ·  ${site.phone}  ·  alpacadigital.co`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: heavy, weight: 800, style: "normal" },
        { name: "Montserrat", data: semibold, weight: 600, style: "normal" },
      ],
    }
  );
}
