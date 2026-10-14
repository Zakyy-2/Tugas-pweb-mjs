// Function pertama: mengembalikan Array berisi 5 fungsi jadwal pelajaran
export const getJadwalPelajaran = () => [
  () => "Jam 1: Matematika",
    () => "Jam 2: Bahasa Indonesia",
      () => "Jam 3: Bahasa Inggris",
        () => "Jam 4: Ilmu Pengetahuan Alam",
          () => "Jam 5: Pendidikan Pancasila"
          ];

          // Function kedua: mengembalikan Object dengan 5 property fungsi kegiatan ekstrakurikuler
          export const getEskulSekolah = () => ({
            pramuka: () => "Ekstrakurikuler Pramuka: Latihan kepramukaan dan baris-berbaris",
              futsal: () => "Ekstrakurikuler Futsal: Latihan teknik dan pertandingan tim",
                paskibra: () => "Ekstrakurikuler Paskibra: Latihan pengibaran bendera",
                  pmr: () => "Ekstrakurikuler PMR: Pertolongan pertama dan kesehatan",
                    paskibraSeni: () => "Ekstrakurikuler Seni Musik: Latihan alat musik dan vokal"
                    });
                    