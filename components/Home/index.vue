<template>
  <div class="min-h-screen ">

    <img src="/pixel2.gif" alt="" class="fixed top-0 left-0 w-full h-full object-cover -z-10" />


    <nav class="w-full  bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div class="text-center sm:text-left flex items-center gap-3">
          <img src="/game-controller.png" alt="Logo" class="w-12 h-12 mx-auto sm:mx-0 mt-2" />

          <h1 class="text-3xl font-black text-[#7700FF] Pixel-Bold">
            Game Library
          </h1>
        </div>

        <div class="flex w-full sm:w-auto gap-2 items-center">
          <input v-model="searchTerm" @keyup.enter="searchGames" type="text" placeholder="ค้นหาเกม..." class="flex-1 sm:w-64 rounded-full border border-slate-300 px-4 py-2 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#7700FF] bg-white" />

          <button @click="searchGames" class="px-5 py-2 rounded-full bg-[#7700FF] text-white text-sm font-semibold
               hover:bg-[#5a00c5] transition active:scale-95">
            ค้นหา
          </button>
        </div>
      </div>
    </nav>

    <div class=" max-w-4xl mx-auto px-5 py-10">
      <div v-if="loading" class="text-center py-10 text-white text-lg">
        กำลังโหลดข้อมูลเกม...
      </div>

      <div v-else-if="error" class="text-center py-10 text-red-600 font-medium text-lg">
        {{ error }}
      </div>

      <div v-else-if="!games.length" class="text-center py-10 text-white font-medium text-lg">
        ไม่พบข้อมูลเกม
      </div>


      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="game in games" :key="game.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
          <div class="relative">
            <img :src="game.thumbnail" class="w-full h-40 object-cover" />

            <span class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              {{ game.category }}
            </span>
          </div>

          <div class="p-4 flex flex-col gap-2">
            <h2 class="font-semibold text-slate-900 line-clamp-2">
              {{ game.title }}
            </h2>

            <p class="text-sm text-amber-500 font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
                viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg> {{ game.rating }}
            </p>

            <button
              class="mt-auto bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-50"
              @click="viewDetail(game)">
              ดูรายละเอียด
            </button>
          </div>
        </div>
      </div>


    </div>

    <div v-if="selected" class="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
        <button @click="selected = null" class="absolute right-2 top-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
            <path
              d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
              opacity=".35"></path>'
            '<path
              d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z">
            </path>
            <path
              d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z">
            </path>
          </svg>
        </button>

        <img :src="selected.thumbnail" class="rounded-lg mb-4 w-full h-56 object-cover" />

        <h2 class="text-2xl font-bold text-slate-800 mb-2">
          {{ selected.title }}
        </h2>

        <p class="text-slate-600 mb-1">
          หมวดหมู่: {{ selected.category }}
        </p>

        <p class="flex items-center gap-2 text-amber-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg> คะแนน: {{ selected.rating }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const games = ref([]);
const loading = ref(true);
const error = ref(null);

const selected = ref(null);

const searchTerm = ref("");

const loadGames = async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await fetch("https://fe-test-api.midassoft.dev/api/games", {
      method: "POST",
    });

    if (!res.ok) throw new Error();

    const data = await res.json();
    games.value = data.result || [];
  } catch (err) {
    error.value = "โหลดข้อมูลเกมไม่สำเร็จ";
  } finally {
    loading.value = false;
  }
};

const searchGames = async () => {
  const q = searchTerm.value.trim();

  if (!q) return loadGames();

  loading.value = true;
  error.value = null;

  try {
    const res = await fetch(
      `https://fe-test-api.midassoft.dev/api/search?query=${encodeURIComponent(
        q
      )}`,
      { method: "POST" }
    );

    if (!res.ok) throw new Error();

    const data = await res.json();
    games.value = data.result || [];
  } catch (err) {
    error.value = "ค้นหาเกมไม่สำเร็จ";
  } finally {
    loading.value = false;
  }
};

const viewDetail = (game) => {
  selected.value = game;
};

onMounted(loadGames);
</script>

<style scoped>
.bg-game {
  background: url('/pixel.jpg') no-repeat center center fixed;
  background-size: cover;
  /* background: #a312e6;
  background: linear-gradient(0deg, rgba(163, 18, 230, 1) 0%, rgba(243, 253, 45, 1) 100%); */
}

.Pixel-Bold {
  font-family: Pixel-Bold, sans-serif;
}
</style>