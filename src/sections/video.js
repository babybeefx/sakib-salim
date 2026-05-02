export default function video() {
  const longVideos = [
    "bTGq2Cyqj2I","n6A7Han77tA","15O71WFhkaU","tOMnGOtHpAw","yOGK7BWRlNw",
    "xOWMZ1lFOts","TSfiiBuBYbs","NC8llF9c9x8","Mivy-V-REaI","ozbBiuh5Nzk",
    "EMYGkNmYhv8","eDFHErCYxto","8mEr92Flwm8","k52XCGJTNis","NneXhXgD40I"
  ];

  const shortVideos = [
    "w_UwaIsEgZU","pjN_Eo2lDOI","btLZ-RiXS8w","nS8pCWJJZdQ","hVZXml2_vpA",
    "fH0qe7HxvRU","td4XuikIs-4","sD8TK_PDvR4","-93UdvcMQrk","dCjqQuuSl1E"
  ];

  return `
  <section id="video" class="px-6 py-20 text-center">

    <div class="max-w-7xl mx-auto">

      <h2 class="text-3xl md:text-4xl font-semibold tracking-tight mb-8">PORTFOLIO</h2>

      <!-- Pills -->
      <div class="flex justify-center mb-10">
        <div class="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-lg">
          <button id="pill-long" class="px-4 py-1.5 text-sm rounded-full nav-pill active-pill">
            Long Form
          </button>
          <button id="pill-short" class="px-4 py-1.5 text-sm rounded-full nav-pill">
            Short Form
          </button>
        </div>
      </div>

      <!-- LONG -->
      <div id="long-form"
        class="video-group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        ${longVideos.map(id => `
          <div onclick="openVideo('${id}')" class="cursor-pointer group">
            <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg"
              class="rounded-xl border border-white/10 group-hover:scale-105 transition"/>
          </div>
        `).join("")}

      </div>

      <!-- SHORT -->
      <div id="short-form"
        class="video-group hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8">

        ${shortVideos.map(id => `
          <div onclick="openVideo('${id}')" class="cursor-pointer group">
            <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg"
              class="aspect-[9/16] object-cover rounded-xl border border-white/10 group-hover:scale-105 transition"/>
          </div>
        `).join("")}

      </div>

    </div>

    <!-- MODAL -->
    <div id="video-modal"
      class="fixed inset-0 bg-black/80 backdrop-blur-lg hidden items-center justify-center z-50">

      <div class="relative w-[90%] max-w-4xl">

        <button onclick="closeVideo()"
          class="absolute -top-10 right-0 text-white text-xl">
          ✕
        </button>

        <iframe id="video-frame"
          class="w-full aspect-video rounded-xl"
          allowfullscreen>
        </iframe>

      </div>

    </div>

  </section>
  `;
}