export default function hero() {
  return `
  <section class="min-h-[80vh] flex items-center px-6">

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

      <!-- LEFT -->
      <div class="text-center md:text-left">

        <h1 class="text-4xl md:text-5xl font-semibold">
          Sakib Salim
        </h1>

        <p class="text-blue-400 mt-4 text-lg">
          Video Editor & Visualizer
        </p>

        <!-- ABOUT TEXT -->
        <p class="text-gray-400 mt-6 max-w-md mx-auto md:mx-0">
          Video Editor & Visualizer with 50+ completed projects, specializing in storytelling, motion design, and high-performance social media content.
        </p>

        <div class="mt-8 flex justify-center md:justify-start gap-4">
          <a href="https://wa.me/8801793810096"
            class="px-6 py-3 bg-blue-500 rounded-full hover:scale-105 transition">
            Hire Me
          </a>

          <a href="#video"
            class="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
            Portfolio
          </a>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="flex justify-center relative">

        <div class="absolute w-[250px] h-[250px] bg-blue-500/20 blur-[80px] rounded-full"></div>

        <img src="/hero-profile.png"
          class="relative w-[260px] sm:w-[320px] rounded-2xl border border-white/10 shadow-xl object-cover"/>
      </div>

    </div>

  </section>
  `;
}