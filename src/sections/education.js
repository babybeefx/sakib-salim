export default function education(data) {
  return `
  <section id="education" class="px-6 py-28 text-center">

    <div class="max-w-4xl mx-auto">

      <!-- HEADER -->
      <h2 class="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
        Education
      </h2>

      <!-- 🔥 2 COLUMN GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center">

        ${data.education.map(edu => `
          <div class="
            group
            aspect-[4/5]
            w-full max-w-[220px]
            rounded-2xl
            p-6
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            hover:bg-white/[0.06]
            transition duration-300
            hover:-translate-y-1
            flex flex-col justify-between
          ">

            <div class="flex flex-col justify-between h-full">

              <!-- TOP -->
              <div>

                <h3 class="text-base font-semibold leading-tight">
                  ${edu.degree}
                </h3>

                <p class="text-sm text-gray-400 mt-2 leading-relaxed">
                  ${edu.institute}
                </p>

                ${
                  edu.result
                    ? `<p class="text-xs text-blue-400 mt-3 font-medium">
                        ${edu.result}
                      </p>`
                    : ""
                }

              </div>

              <!-- BOTTOM -->
              <div class="text-xs text-gray-500 mt-6">
                ${edu.duration}
              </div>

            </div>

          </div>
        `).join("")}

      </div>

    </div>

  </section>
  `;
}