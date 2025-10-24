export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white/80 font-medium">BotCraftCentral</p>
            <p className="text-xs text-white/60">Powered by RITU RAJ PRINCE</p>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} BotCraftCentral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
