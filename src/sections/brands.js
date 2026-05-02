export default function brands() {
  const logos = [
    "brand-1.svg","brand-2.svg","brand-3.svg","brand-4.svg",
    "brand-5.svg","brand-6.svg","brand-7.svg","brand-8.svg","brand-9.svg"
  ];

  return `
  <section class="px-6 py-20 text-center">

    <h2 class="text-3xl md:text-4xl font-semibold mb-10 tracking-tight">Brand Collaborations</h2>

    <div class="max-w-5xl mx-auto relative overflow-hidden">

      <!-- Fade LEFT -->
      <div class="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 opacity-80"></div>

      <!-- Fade RIGHT -->
      <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 opacity-80"></div>

      <div class="brands-track flex items-center gap-12 justify-center">

        ${[...logos, ...logos].map(logo => `
          <img src="/${logo}"
            class="h-10 sm:h-12 opacity-70 hover:opacity-100 transition"/>
        `).join("")}

      </div>

    </div>

  </section>
  `;
}