import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function HeroSpline() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    // In a real app, trigger metadata fetch and quality selection modal
    alert('Fetching formats for: ' + url);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-yellow-300" />
          <span className="text-xs tracking-wide uppercase text-white/80">All-in-one Video Downloader</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
          BotCraftCentral
        </h1>
        <p className="mt-3 text-sm md:text-base text-white/70">Powered by RITU RAJ PRINCE</p>

        <p className="mt-6 max-w-3xl text-white/80">
          Download from YouTube, Instagram, Facebook, and more. Convert with embedded yt-dlp and FFmpeg — no Termux or Python required.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-2xl">
          <div className="flex items-center gap-2 rounded-xl bg-white/5 p-2 border border-white/10 backdrop-blur">
            <input
              type="url"
              inputMode="url"
              placeholder="Paste a video URL (YouTube, Instagram, Facebook, etc.)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-white/50 px-3 py-3"
              aria-label="Video URL"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-300 text-black font-medium px-4 py-3 hover:bg-yellow-200 transition"
            >
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>
          <p className="mt-3 text-xs text-white/60">Fast, secure, and private. Choose quality up to 1080p+ or extract MP3.</p>
        </form>
      </div>
    </section>
  );
}
