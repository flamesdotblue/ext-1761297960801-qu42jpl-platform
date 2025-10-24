import { Download, Music, Settings, Shield, Zap, History } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Multi-platform Downloads',
    desc: 'Grab videos from YouTube, Instagram, Facebook, and more with embedded yt-dlp.'
  },
  {
    icon: Music,
    title: 'FFmpeg Conversion',
    desc: 'Convert to MP3, MP4, and merge DASH streams natively with bundled FFmpeg.'
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    desc: 'Lean background workers, real-time progress, and fast presets for quick results.'
  },
  {
    icon: History,
    title: 'Download History',
    desc: 'Keep track of your downloads organized by date with quick open or delete.'
  },
  {
    icon: Settings,
    title: 'Smart Preferences',
    desc: 'Set default quality, format, and output folders with theme-aware UI.'
  },
  {
    icon: Shield,
    title: 'Private by Design',
    desc: 'No account required. All processing happens on-device using native binaries.'
  }
];

export default function FeaturesGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">Powerful Features</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          A modern Material-inspired interface with native yt-dlp and FFmpeg under the hood.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300/10 border border-yellow-300/20">
                <Icon className="h-5 w-5 text-yellow-300" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
