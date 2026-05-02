export default function header() {
  return `
  <header class="fixed top-4 left-0 w-full z-50 px-6">

    <div class="max-w-6xl mx-auto flex justify-between items-center
      bg-white/5 backdrop-blur-xl border border-white/10
      rounded-full px-6 py-3">

      <!-- LEFT -->
      <div class="flex items-center gap-3">
        <img src="/header-avatar.png"
          class="w-8 h-8 rounded-full object-cover"/>

        <span class="text-sm font-medium">Sakib Salim</span>
      </div>

      <!-- RIGHT NAV -->
      <div class="flex gap-6 text-sm text-gray-400">

        <a href="/#video" id="nav-portfolio" class="nav-link">
          Portfolio
        </a>

        <a href="/#experience" id="nav-experience" class="nav-link">
          Experience
        </a>

        <a href="/#education" id="nav-education" class="nav-link">
          Education
        </a>

        <a href="/#contact" id="nav-contact" class="nav-link">
          Contact
        </a>

      </div>

    </div>

  </header>
  `;
}