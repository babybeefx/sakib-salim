export default function contact() {
  return `
  <section id="contact" class="px-6 py-20 text-center">

    <h2 class="text-3xl mb-8">Contact</h2>

    <div class="flex flex-wrap justify-center gap-4">

      <a href="mailto:sakibsalim3004@gmail.com"
        class="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105">
        <span class="material-symbols-outlined text-blue-400">mail</span>
        Email
      </a>

      <a href="tel:+8801793810096"
        class="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105">
        <span class="material-symbols-outlined text-blue-400">call</span>
        Call
      </a>

      <a href="https://linkedin.com/in/sakibsalim99" target="_blank"
        class="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105">
        <span class="material-symbols-outlined text-blue-400">work</span>
        LinkedIn
      </a>

    </div>

  </section>
  `;
}