import { Play, Download, Settings } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Paste or Share URL',
    desc: 'Paste a video link or share it directly to BotCraftCentral from your browser or app.',
    icon: Play
  },
  {
    step: 2,
    title: 'Pick Quality & Format',
    desc: 'yt-dlp fetches available formats (e.g., 144p–1080p+, MP3). Choose what you need.',
    icon: Settings
  },
  {
    step: 3,
    title: 'Download & Convert',
    desc: 'Background worker shows progress and speed. FFmpeg merges or converts if required.',
    icon: Download
  }
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">How it works</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Clean Material design, dark and light modes, and a reliable background download engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(({ step, title, desc, icon: Icon }) => (
          <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300/10 border border-yellow-300/20">
                <Icon className="h-5 w-5 text-yellow-300" />
              </div>
              <div className="text-sm text-white/60">Step {step}</div>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
        <h4 className="text-lg font-semibold">Developer Notes</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc list-inside">
          <li>Bundle yt-dlp and FFmpeg as native binaries in assets and execute via ProcessBuilder.</li>
          <li>Use WorkManager or a Foreground Service for downloads with a persistent notification.</li>
          <li>Show format picker in a bottom sheet and maintain a Room-backed history.</li>
          <li>Apply fast presets in FFmpeg (e.g., -preset ultrafast, -movflags +faststart) where applicable.</li>
        </ul>
      </div>
    </section>
  );
}
