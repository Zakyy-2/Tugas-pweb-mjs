
import config from './config.mjs';

// 1. Memanggil function pertama (Array)
const jadwal = config.getJadwalPelajaran();

console.log("=== JADWAL PELAJARAN (ARRAY) ===");
console.log(jadwal[0]());
console.log(jadwal[1]());
console.log(jadwal[2]());
console.log(jadwal[3]());
console.log(jadwal[4]());

// 2. Memanggil function kedua (Object)
const eskul = config.getEskulSekolah();

console.log("=== KEGIATAN ESKUL ===");
console.log(eskul.tahfiz());
console.log(eskul.futsal());
console.log(eskul.volli());
console.log(eskul.sisplana());
console.log(eskul.grafiqis());

