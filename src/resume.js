import header from "./sections/header";
import { resumeData } from "./data/resumeData";

function renderResume() {
  const app = document.getElementById("resume-app");

  if (!app) return;

  app.innerHTML = `
    ${header(false)}

    <section class="px-6 pt-32 pb-20">

      <div class="max-w-5xl mx-auto">

        <!-- HERO -->
        <div class="mb-16 text-center">
          <h1 class="text-4xl font-semibold mb-3">
            ${resumeData.name}
          </h1>

          <p class="text-blue-400 mb-4">
            ${resumeData.role}
          </p>

          <p class="text-gray-400 max-w-2xl mx-auto">
            ${resumeData.summary}
          </p>
        </div>

        <!-- EXPERIENCE -->
        <div class="mb-16">
          <h2 class="text-2xl mb-6">Experience</h2>

          ${resumeData.experience.map((job, i) => `
            <div class="border border-white/10 rounded-xl p-5 mb-4 cursor-pointer"
                 onclick="toggleExp(${i})">

              <div class="flex justify-between">
                <div>
                  <h3 class="font-medium">${job.role}</h3>
                  <p class="text-sm text-gray-400">
                    ${job.company} • ${job.duration}
                  </p>
                </div>

                <span class="material-symbols-outlined">expand_more</span>
              </div>

              <p id="exp-${i}" class="hidden mt-3 text-gray-400">
                ${job.details || ""}
              </p>

            </div>
          `).join("")}
        </div>

        <!-- EDUCATION -->
        <div class="mb-16">
          <h2 class="text-2xl mb-6">Education</h2>

          ${resumeData.education?.map(edu => `
            <div class="border border-white/10 rounded-xl p-5 mb-4">

              <h3 class="font-medium">${edu.degree}</h3>

              <p class="text-sm text-gray-400">
                ${edu.institute} • ${edu.duration}
              </p>

            </div>
          `).join("") || ""}
        </div>

        <!-- SKILLS -->
        <div class="mb-16">
          <h2 class="text-2xl mb-6">Skills</h2>

          <div class="flex flex-wrap gap-3">

            ${resumeData.skills.map(skill => `
              <div class="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition">

                <span class="material-symbols-outlined text-sm">
                  ${skill.icon}
                </span>

                ${skill.name}

              </div>
            `).join("")}

          </div>
        </div>

        <!-- CONTACT -->
        <div class="mb-16">
          <h2 class="text-2xl mb-6">Contact</h2>

          <div class="space-y-2 text-gray-400">
            <p>${resumeData.contact.email}</p>
            <p>${resumeData.contact.phone}</p>
            <p>${resumeData.contact.linkedin}</p>
          </div>
        </div>

      </div>

    </section>
  `;
}

/* Accordion Fix */
window.toggleExp = function(i) {
  const el = document.getElementById(`exp-${i}`);
  if (el) el.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", renderResume);