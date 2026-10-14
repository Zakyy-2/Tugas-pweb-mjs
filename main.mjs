import { getJadwalPelajaran, getEskulSekolah } from './config.mjs';

// 1. Memanggil fungsi array (Jadwal Pelajaran)
const jadwal = getJadwalPelajaran();

console.log("=== JADWAL PELAJARAN (ARRAY) ===");
console.log(jadwal[0]());
console.log(jadwal[1]());
console.log(jadwal[2]());
console.log(jadwal[3]());
console.log(jadwal[4]());

// 2. Memanggil fungsi object (Kegiatan Ekstrakurikuler)
const eskul = getEskulSekolah();

console.log("\n=== KEGIATAN ESKUL (OBJECT) ===");
console.log(eskul.pramuka());
console.log(eskul.futsal());
console.log(eskul.paskibra());
console.log(eskul.pmr());
console.log(eskul.paskibraSeni());
