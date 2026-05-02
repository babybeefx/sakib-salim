export default function experience(data) {
  return `
  <section id="experience" class="px-6 py-24 text-center">

    <div class="max-w-7xl mx-auto">

      <h2 class="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">
        Experience
      </h2>

      <div class="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-4
      ">

        ${data.experience.map(job => `
          <div class="
            aspect-[4/5]
            rounded-xl p-5
            border border-white/10
            bg-white/[0.03] backdrop-blur-xl
            hover:bg-white/[0.06]
            transition duration-300
            hover:-translate-y-1
            flex flex-col justify-between text-center
          ">

            <!-- TOP -->
            <div>

              <!-- 🔥 ICON (FIXED) -->
              <div class="flex justify-center mb-4">
                ${
                  job.logo
                    ? `<img src="${job.logo}" class="w-10 h-10 object-contain opacity-90"/>`
                    : ""
                }
              </div>

              <!-- ROLE -->
              <h3 class="text-sm font-semibold leading-snug">
                ${job.role}
              </h3>

              <!-- COMPANY -->
              <p class="text-xs text-gray-400 mt-1">
                ${job.company}
              </p>

            </div>

            <!-- BOTTOM -->
            <div class="text-[10px] text-gray-500">
              ${job.duration}
            </div>

          </div>
        `).join("")}

      </div>

    </div>

  </section>
  `;
}