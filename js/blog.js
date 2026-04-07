const user = getUserData();
const name = user.name ? user.name : "Guest";
const email = user.email ? user.email : "Guest@gmail.com";
const poin = `${user.poin ?? 0}`;
const level = `${user.level ?? 1}`;
document.getElementById("level-1").textContent = `Level ${level}`;
document.getElementById("level-2").textContent = `Level ${level}`;
document.getElementById("poin-1").textContent = `${poin} poin`;
document.getElementById("poin-2").textContent = `${poin} poin`;
document.getElementById("username-1").textContent = name;
document.getElementById("username-2").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";

function articlePage() {
  return {
    search: "",
    activeCategory: "All",
    showPopup: false,
    selectedArticle: null,

    categories: ["All", "Tips & Tricks", "Education", "Impact", "Lifestyle"],

    articles: [
      {
        title: "10 Barang yang Tidak Anda Sadari Bisa Didaur Ulang",
        category: "Tips & Tricks",
        description:
          "Temukan barang-barang mengejutkan yang bisa didaur ulang dan jauhkan dari tempat pembuangan sampah.",
        longText: `♻️ 1. Sikat Gigi Bekas

                Sebagian besar sikat gigi terbuat dari plastik yang bisa didaur ulang. Anda bisa mengumpulkannya lalu mengirim ke program daur ulang khusus, atau mengubahnya menjadi alat pembersih kecil untuk sudut sulit.

                ♻️ 2. Bola Lampu (Lampu Bohlam)

                Beberapa jenis lampu seperti CFL atau LED bisa didaur ulang dengan memisahkan kaca, logam, dan komponennya. Banyak pusat daur ulang menyediakan drop box khusus lampu.

                ♻️ 3. Kaset CD / DVD

                CD dan DVD mengandung polikarbonat yang dapat diolah kembali. Selain itu, banyak orang kini mencarinya untuk kerajinan dekoratif.

                ♻️ 4. Pakaian yang Tidak Layak Pakai

                Baju yang sobek parah atau kusut tetap bisa didaur ulang menjadi serat tekstil baru, kain pel, hingga isian bantal.

                ♻️ 5. Ponsel dan Perangkat Elektronik Kecil

                Perangkat kecil seperti charger, earphone, atau handphone lama mengandung logam berharga seperti tembaga dan emas yang bisa diekstraksi kembali.

                ♻️ 6. Minyak Goreng Bekas

                Minyak jelantah bisa diolah menjadi biodiesel atau lilin. Di beberapa kota, sudah ada bank sampah minyak jelantah yang menerima penukaran poin.

                ♻️ 7. Kardus Telur

                Kardus telur dari bahan pulp kertas mudah dihancurkan dan diproduksi kembali menjadi kertas baru atau kompos organik.

                ♻️ 8. Sikat Botol / Spons Cuci Piring

                Meski terlihat kotor, sikat atau spons tertentu bisa didaur ulang menjadi plastik kualitas lebih rendah, atau digunakan ulang untuk membersihkan area luar rumah.

                ♻️ 9. Mainan Plastik Lama

                Jika bahan mainan berupa plastik PP atau HDPE, mainan tersebut dapat dihancurkan dan dilebur kembali. Banyak pengrajin daur ulang menerima mainan bekas sebagai bahan baku.

                ♻️ 10. Kertas Bungkus Kado

                Sebagian besar kertas kado dapat didaur ulang selama tidak mengandung glitter atau foil. Kertas polos atau bermotif biasa mudah diolah menjadi kertas baru.

                🌿 Kesimpulan

                Masih banyak barang sehari-hari yang sebenarnya dapat didaur ulang, tetapi sering tidak kita sadari. Dengan mengetahui jenis-jenisnya, kita bisa mengurangi sampah dan membantu menjaga lingkungan.s`,
        image: "Assets/Img-blog-4.png",
      },
      {
        title: "Panduan Lengkap Simbol Daur Ulang Plastik",
        category: "Education",
        description:
          "Memahami angka dan logo yang terdapat pada produk plastik dan artinya.",
        longText: `♻️ Pendahuluan

              Setiap kemasan plastik biasanya memiliki simbol segitiga dengan angka di tengahnya. Simbol tersebut bukan hiasan, melainkan kode penting untuk mengetahui jenis plastik, keamanan penggunaan, dan kemudahannya didaur ulang.
              Memahami kode ini membantu kita memilah sampah dengan benar dan mendukung proses daur ulang.

              Berikut panduan lengkapnya.

              1. PET / PETE (1) – Polyethylene Terephthalate

              Contoh: botol air mineral, botol minuman bersoda.
              Dapat didaur ulang: ✔ Sangat mudah
              Catatan: Idealnya hanya untuk sekali pakai karena dapat menyerap aroma dan bahan kimia.

              2. HDPE (2) – High-Density Polyethylene

              Contoh: galon air, botol deterjen, botol shampoo.
              Dapat didaur ulang: ✔ Mudah
              Catatan: Lebih kuat dari PET dan aman untuk dipakai berulang.

              3. PVC (3) – Polyvinyl Chloride

              Contoh: pipa air, plastik transparan makanan, beberapa mainan.
              Dapat didaur ulang: ❌ Sulit
              Catatan: Jarang didaur ulang karena mengandung zat kimia yang dapat berbahaya jika dibakar.

              4. LDPE (4) – Low-Density Polyethylene

              Contoh: plastik kresek, bungkus makanan, kantong belanja.
              Dapat didaur ulang: ✔ Bisa, tapi tidak semua fasilitas menerima
              Catatan: Kuat dan fleksibel, namun sering mencemari lingkungan karena penggunaan sekali pakai.

              5. PP (5) – Polypropylene

              Contoh: tutup botol, kotak makanan, sedotan, ember.
              Dapat didaur ulang: ✔ Bisa
              Catatan: Tahan panas, digunakan pada wadah makanan yang sering dipanaskan.

              6. PS (6) – Polystyrene

              Contoh: styrofoam, gelas plastik bening, tray daging.
              Dapat didaur ulang: ❌ Sangat sulit
              Catatan: Ringan tetapi rapuh dan dapat menghasilkan mikroplastik.

              7. Other (7) – Plastik Campuran

              Contoh: botol bayi, DVD, galon PC, barang campuran.
              Dapat didaur ulang: ❌ Sulit karena komposisinya bercampur
              Catatan: Tidak termasuk 1–6, sehingga proses daur ulangnya lebih kompleks.

              Tips Penting Saat Mengelola Plastik

              ✔ Cuci kemasan sebelum membuangnya agar tidak mencemari jenis plastik lain.
              ✔ Keringkan sebelum dimasukkan ke tempat daur ulang.
              ✔ Jangan mencampur plastik keras dengan plastik fleksibel.
              ✔ Gunakan botol atau kantong yang berlabel 1, 2, atau 5 jika ingin lebih ramah lingkungan.
              ✔ Kurangi penggunaan plastik sekali pakai.

              Kesimpulan

              Simbol daur ulang pada plastik memberikan petunjuk penting tentang jenis bahan, keamanan, dan potensi untuk didaur ulang. Dengan memahami kode ini, kita bisa membuat keputusan yang lebih bijaksana dalam memilih produk dan mengelola sampah, sehingga membantu mengurangi beban lingkungan.`,
        image: "Assets/Img-blog-1.png",
      },
      {
        title: "Bagaimana Upaya Daur Ulang Anda Melawan Perubahan Iklim",
        category: "Impact",
        description:
          "Pelajari hubungan langsung antara daur ulang dan pengurangan emisi karbon global.",
        longText: `Perubahan iklim adalah tantangan terbesar yang sedang dihadapi dunia saat ini. Suhu bumi terus meningkat, cuaca semakin ekstrem, dan berbagai ekosistem mulai terganggu. Namun, kabar baiknya: setiap orang sebenarnya bisa berkontribusi, dan salah satu cara termudah adalah dengan mendaur ulang.

              Walaupun terlihat sederhana, daur ulang memiliki dampak besar terhadap lingkungan dan membantu memperlambat perubahan iklim.

              1. Mengurangi Emisi Karbon dari Produksi Bahan Baru

              Setiap kali kita mendaur ulang plastik, kertas, atau logam, kita membantu mengurangi kebutuhan produksi bahan-bahan baru dari alam.
              Proses pembuatan material baru seperti plastik, aluminium, dan kaca membutuhkan:

              Energi besar

              Bahan bakar fosil

              Proses pemanasan yang mengeluarkan CO₂ dalam jumlah tinggi

              Sebagai contoh, mendaur ulang aluminium menghemat hingga 95% energi dibandingkan membuat aluminium baru. Semakin sedikit energi yang digunakan, semakin rendah emisi karbon yang dilepaskan ke atmosfer.

              2. Menekan Jumlah Sampah di Tempat Pembuangan Akhir (TPA)

              Sampah yang menumpuk di TPA tidak hanya memakan lahan, tetapi juga menghasilkan gas metana (CH₄) — gas rumah kaca yang 25 kali lebih kuat dibandingkan CO₂.
              Sampah organik seperti makanan, tisu, atau kayu akan membusuk tanpa oksigen dan memproduksi metana.

              Dengan mendaur ulang benda-benda seperti:

              botol plastik

              kaca

              kardus

              aluminium

              kertas

              … kita mengurangi volume sampah yang masuk ke TPA, sehingga emisi metana berkurang drastis.

              3. Mengurangi Eksploitasi Sumber Daya Alam

              Proses ekstraksi bahan mentah, seperti menambang logam atau menebang kayu, menghasilkan jejak karbon besar karena:

              penggunaan alat berat

              transportasi jarak jauh

              konsumsi listrik dan solar yang tinggi

              Dengan mendaur ulang, kita memperpanjang umur bahan sehingga permintaan terhadap bahan mentah berkurang. Dampaknya:

              hutan lebih terjaga

              ekosistem tetap stabil

              karbon yang diserap pohon tetap berada di atmosfer dalam jumlah lebih sedikit

              4. Mendorong Ekonomi Sirkular yang Ramah Lingkungan

              Daur ulang adalah bagian dari ekonomi sirkular, yaitu sistem yang memaksimalkan penggunaan kembali barang agar tidak langsung dibuang.
              Ekonomi sirkular membuat perusahaan lebih kreatif dalam menggunakan bahan ramah lingkungan dan mengurangi polusi dalam jangka panjang. Semakin banyak masyarakat yang mendaur ulang, semakin kuat dorongan ke industri untuk memproduksi barang yang mudah diolah kembali.

              5. Kebiasaan Masyarakat Bisa Memperbesar Dampak

              Satu orang yang mendaur ulang satu botol mungkin terdengar kecil.
              Namun, bayangkan:

              1 orang → 1 botol/hari = 365 botol/tahun

              1.000 orang → 365.000 botol/tahun

              1 juta orang → 365 juta botol/tahun

              Kebiasaan kecil ini, jika dilakukan bersama-sama, menghasilkan efek besar bagi lingkungan dan pengurangan emisi global.

              6. Dampak Langsung Daur Ulang Terhadap Iklim

              Berikut beberapa contoh nyata:

              Mendaur ulang 1 ton kertas dapat menghemat energi yang setara untuk menyalakan rumah selama 6 bulan.

              Mendaur ulang kaca dapat mengurangi emisi CO₂ hingga 30%.

              Mendaur ulang plastik dapat mengurangi gas rumah kaca dari pabrik petrokimia.

              Setiap tindakan sederhana berkontribusi terhadap perhitungan global.

              Kesimpulan: Daur Ulang = Aksi Kecil, Dampak Besar

              Daur ulang bukan hanya soal memilah sampah — ini adalah bagian penting dari cara kita melawan perubahan iklim.
              Dengan mendaur ulang, Anda membantu:

              ✨ Mengurangi emisi karbon
              ✨ Menekan gas metana dari TPA
              ✨ Menjaga sumber daya alam
              ✨ Mengurangi polusi
              ✨ Mendukung ekonomi yang lebih hijau

              Tidak perlu menunggu teknologi canggih atau kebijakan besar — perubahan bisa dimulai dari rumah Anda sendiri hari ini.`,
        image: "Assets/Img-blog-2.png",
      },
      {
        title: "Panduan Lengkap Daur Ulang Sampah Makanan",
        category: "Lifestyle",
        description:
          "Kurangi sampah dengan memahami metode daur ulang makanan yang tepat.",
        longText: `Sampah makanan adalah salah satu penyumbang terbesar limbah rumah tangga. Banyak orang tidak menyadari bahwa sisa makanan yang dibuang begitu saja bisa berdampak besar pada lingkungan — mulai dari meningkatnya gas metana di tempat pembuangan akhir hingga pemborosan energi dan air yang digunakan untuk memproduksi makanan tersebut.

              Namun, kabar baiknya: sampah makanan bisa didaur ulang dengan mudah dan malah bermanfaat bagi lingkungan maupun kehidupan sehari-hari. Panduan ini akan membantu Anda memahami cara mengolah sampah makanan agar tidak sia-sia.

              1. Apa Saja yang Termasuk Sampah Makanan?

              Sampah makanan adalah semua sisa bahan yang berasal dari proses makan atau memasak, seperti:

              Kulit buah dan sayur

              Sisa nasi atau roti

              Tulang hewan

              Cangkang telur

              Ampas kopi dan teh

              Daun teh celup

              Sisa sayuran

              Makanan basi yang tidak bisa dimakan lagi

              Sebagian besar dari ini bisa diolah kembali jika ditangani dengan benar.

              2. Mengapa Sampah Makanan Perlu Didaur Ulang?

              Ada beberapa alasan penting:

              ✓ Mengurangi emisi gas metana di TPA

              Sampah makanan yang membusuk di tempat pembuangan menghasilkan metana — salah satu gas rumah kaca paling berbahaya.

              ✓ Menghasilkan kompos organik

              Sampah makanan dapat berubah menjadi pupuk yang sangat baik untuk tanaman.

              ✓ Mengurangi penggunaan pupuk kimia

              Kompos membuat tanaman lebih sehat tanpa bahan kimia berbahaya.

              ✓ Menjaga lingkungan lebih bersih

              Jika sisa makanan dipisahkan dan diolah, jumlah sampah yang tidak bermanfaat akan menurun.

              3. Cara Paling Mudah Mendaur Ulang Sampah Makanan di Rumah
              1. Kompos (Composting)

              Cara paling populer dan ramah lingkungan.

              Bahan yang bisa dikomposkan:

              Kulit buah & sayur

              Daun, rumput kering

              Ampas kopi

              Teh celup (yang tanpa staples)

              Sisa sayur matang

              Nasi (sedikit)

              Cangkang telur (dihancurkan)

              Bahan yang sebaiknya dihindari:

              Daging & tulang besar

              Minyak & makanan berlemak

              Produk susu

              Makanan bersaus atau pedas

              Langkah sederhana membuat kompos:

              Siapkan wadah/bak kompos.

              Masukkan sampah makanan (bahan “basah”).

              Campurkan dengan daun kering atau kardus (bahan “kering”).

              Aduk seminggu sekali.

              Setelah 1–3 bulan, kompos siap digunakan.

              2. Membuat Eco-Enzyme

              Eco-enzyme adalah cairan serbaguna hasil fermentasi sampah makanan.

              Bahan:

              Kulit buah (jeruk, apel, nanas)

              Gula merah

              Air

              Manfaat:

              Pembersih lantai alami

              Pengusir serangga

              Pupuk cair untuk tanaman

              Deodoran alami

              Waktu fermentasi sekitar 3 bulan, tetapi hasilnya sangat bermanfaat.

              3. Pakan Ternak (Feeding)

              Beberapa jenis sampah makanan bisa dijadikan pakan hewan tertentu, seperti:

              Sisa sayuran → kelinci, kambing

              Nasi → ayam

              Buah-buahan → ikan lele atau unggas

              Pastikan tidak memberikan makanan basi atau berjamur.

              4. Menggunakan Mesin Pengolah Sampah Makanan

              Saat ini ada alat rumah tangga yang bisa mengubah sisa makanan menjadi pupuk dalam hitungan jam.
              Meskipun harganya cukup tinggi, metode ini sangat praktis.

              4. Cara Mengurangi Sampah Makanan Sejak Awal

              Daur ulang itu bagus, tapi mengurangi sampah dari awal lebih penting.

              Tips mengurangi sampah makanan:

              Belanja secukupnya

              Simpan makanan dengan benar

              Manfaatkan sisa makanan menjadi menu baru

              Gunakan freezer untuk mengawetkan makanan

              Pisahkan sampah makanan agar mudah diolah

              Kebiasaan kecil ini dapat mengurangi sisa makanan hingga 50%.

              5. Dampak Positif Daur Ulang Sampah Makanan

              Jika dilakukan secara konsisten, daur ulang sampah makanan memberikan:

              Tanah lebih subur dari kompos organik

              Pengurangan polusi dari gas metana

              Penghematan biaya rumah tangga (tidak perlu beli banyak pupuk)

              Lingkungan lebih sehat dan bersih

              Pemanfaatan kembali sumber daya yang sebelumnya terbuang sia-sia

              Kesimpulan

              Daur ulang sampah makanan bukan hanya soal mengolah sisa dapur, tetapi juga bagian dari gaya hidup berkelanjutan. Dengan memulainya di rumah, Anda membantu menjaga lingkungan, mengurangi emisi berbahaya, dan menciptakan manfaat baru dari sesuatu yang biasanya dianggap tidak berguna.`,
        image: "Assets/Img-blog-3.png",
      },
      {
        title: "Manfaat Jahe dan Manfaatnya bagi Kesehatan",
        category: "Education",
        description:
          "Memahami manfaat jahe bagi Kesehatan dan cara menggunakannya.",
        longText: `Jahe adalah salah satu tanaman herbal yang sudah digunakan selama ratusan tahun sebagai bumbu masak sekaligus bahan tradisional. Aromanya yang khas dan rasanya yang hangat membuat jahe sering dijadikan minuman, campuran makanan, hingga obat rumahan.

              Selain itu, jahe memiliki berbagai manfaat yang mendukung kesehatan tubuh secara alami.

              1. Membantu Menghangatkan Tubuh

              Jahe memiliki efek hangat di tubuh. Minuman jahe sering digunakan untuk membantu tubuh terasa lebih nyaman, terutama saat cuaca dingin atau ketika merasa kurang fit.

              2. Mendukung Kesehatan Pencernaan

              Jahe dikenal dapat membantu:

              Mengurangi rasa mual

              Menjaga kenyamanan perut

              Membantu tubuh mencerna makanan dengan lebih baik

              Karena itu, jahe sering dikonsumsi setelah makan atau digunakan sebagai campuran makanan berkuah.

              3. Membantu Meredakan Ketegangan Otot Ringan

              Beberapa orang menggunakan jahe untuk membantu meredakan ketegangan atau rasa tidak nyaman ringan pada tubuh, terutama setelah beraktivitas atau olahraga ringan. Efek hangatnya membantu membuat tubuh lebih rileks.

              4. Kaya Senyawa Antioksidan

              Jahe mengandung antioksidan alami yang dapat membantu melindungi sel-sel tubuh dari paparan radikal bebas. Antioksidan ini mendukung kesehatan tubuh secara keseluruhan.

              5. Mendukung Kesehatan Sistem Kekebalan Tubuh

              Banyak orang mengonsumsi jahe — terutama dalam bentuk teh hangat — untuk membantu menjaga kesehatan tubuh sehari-hari. Jahe sering dikombinasikan dengan madu atau lemon untuk menambah nutrisi.

              6. Membantu Meredakan Hidung Tersumbat

              Aroma jahe yang kuat dan sifat hangatnya dapat membantu tubuh terasa lebih lega saat sedang mengalami hidung tersumbat ringan. Minuman jahe hangat bisa membantu membuat pernapasan terasa sedikit lebih nyaman.

              7. Baik untuk Kesehatan Mulut

              Jahe memiliki sifat alami yang dapat membantu menjaga kebersihan area mulut dan memberikan sensasi segar. Beberapa produk herbal bahkan memasukkan jahe sebagai salah satu ingredient.

              Cara Mudah Mengonsumsi Jahe

              Anda bisa menikmati jahe dalam berbagai bentuk:

              Teh jahe

              Wedang jahe

              Jahe parut dalam masakan

              Serbuk jahe

              Jahe segar dalam infused water

              Permen jahe (secukupnya saja)

              Kesimpulan

              Jahe adalah bahan alami yang kaya manfaat dan sangat mudah ditemukan. Mulai dari membantu pencernaan, menghangatkan tubuh, hingga mendukung kesehatan sehari-hari, jahe menjadi pilihan herbal yang praktis dan serbaguna.

              Dengan mengonsumsi secara wajar dan sesuai kebutuhan, jahe dapat menjadi bagian dari gaya hidup sehat Anda.`,
        image: "Assets/Img-blog-7.png",
      },
      {
        title: "Dampak CO₂ terhadap Lingkungan dan Kesehatan",
        category: "Impact",
        description:
          "Memahami Peran Karbon Dioksida dalam Kesehatan Global dan Lingkungan",
        longText: `Karbon dioksida (CO₂) adalah gas alami yang dibutuhkan bumi dalam jumlah tertentu. Manusia, hewan, tumbuhan, dan bahkan proses geologi di bumi memproduksi CO₂. Namun, dalam beberapa dekade terakhir, kadar CO₂ meningkat sangat tinggi akibat aktivitas manusia — terutama dari kendaraan bermotor, industri, pembakaran hutan, dan penggunaan energi berbahan bakar fosil.

              Peningkatan CO₂ ini membawa dampak besar bagi lingkungan dan kesehatan manusia.

              1. Dampak CO₂ terhadap Lingkungan
              a. Mempercepat Pemanasan Global

              CO₂ adalah salah satu gas rumah kaca utama. Ketika jumlahnya berlebihan di atmosfer, ia menahan panas matahari sehingga suhu bumi meningkat. Dampaknya bisa dirasakan melalui:

              Cuaca ekstrem

              Gelombang panas lebih sering

              Peningkatan suhu laut

              Pola musim yang berubah tidak menentu

              b. Meningkatkan Risiko Perubahan Iklim

              Kenaikan CO₂ berperan besar dalam perubahan iklim global, seperti:

              Banjir lebih sering

              Kekeringan panjang

              Penurunan kualitas tanah

              Naiknya permukaan air laut karena mencairnya es kutub

              Perubahan iklim ini memengaruhi kehidupan manusia, hewan, sampai pertanian.

              c. Pengasaman Laut (Ocean Acidification)

              Sebagian CO₂ diserap oleh laut. Ketika terlalu banyak, air laut menjadi lebih asam. Hal ini dapat:

              Merusak terumbu karang

              Mengganggu kehidupan ikan dan makhluk laut

              Menurunkan hasil perikanan yang penting bagi manusia

              d. Kerusakan Habitat dan Ekosistem

              Suhu yang makin tinggi menyebabkan banyak hewan kesulitan beradaptasi. Beberapa spesies mulai menuju kepunahan karena perubahan lingkungan yang cepat.

              2. Dampak CO₂ terhadap Kesehatan Manusia

              CO₂ dalam kadar normal tidak berbahaya. Namun, jika konsentrasinya terlalu tinggi di udara atau ruang tertutup, ada beberapa dampak yang bisa dirasakan.

              a. Kualitas Udara Menurun

              CO₂ berlebihan di kota biasanya muncul dari:

              Kendaraan

              Pabrik

              Pembakaran sampah

              Aktivitas manusia dalam ruangan tanpa ventilasi

              Kualitas udara buruk dapat memperburuk kondisi kesehatan, terutama bagi anak-anak dan lansia.

              b. Gangguan Pernafasan Ringan

              CO₂ bukan gas beracun, tapi angka yang tinggi dapat membuat udara terasa lebih pengap. Ini dapat menyebabkan:

              Sesak ringan

              Rasa tidak nyaman saat bernapas

              Kepala terasa berat

              Hal ini biasanya terjadi di ruangan tertutup dengan ventilasi buruk.

              c. Menurunkan Konsentrasi dan Produktivitas

              Di ruang kelas atau kantor dengan ventilasi kurang baik, CO₂ bisa meningkat dengan cepat. Ini menyebabkan:

              Sulit fokus

              Cepat mengantuk

              Pusing ringan

              Kinerja belajar atau kerja menurun

              Itulah sebabnya ventilasi yang baik sangat penting.

              d. Memperparah Efek Polusi Lain

              Kadar CO₂ tinggi biasanya sejalan dengan polusi lain seperti PM2.5, asap kendaraan, dan debu. Kombinasi ini dapat memperburuk masalah pernapasan bagi sebagian orang.

              3. Bagaimana Cara Mengurangi Emisi CO₂?

              Setiap orang dapat membantu mengurangi CO₂, misalnya dengan:

              Menggunakan transportasi umum atau bersepeda

              Menanam pohon

              Mengurangi penggunaan listrik

              Mengurangi sampah makanan

              Menggunakan barang yang bisa didaur ulang

              Menghemat energi di rumah

              Langkah kecil ini, bila dilakukan banyak orang, dapat memberikan dampak besar bagi lingkungan.

              Kesimpulan

              CO₂ adalah bagian alami dari bumi, tetapi jumlahnya yang berlebihan menjadi penyebab utama pemanasan global dan perubahan iklim. Dampaknya tidak hanya merusak lingkungan, tetapi juga mempengaruhi kesehatan manusia secara tidak langsung. Dengan memahami bahaya CO₂ dan melakukan langkah pencegahan sederhana, kita bisa membantu menjaga bumi tetap sehat dan nyaman untuk generasi berikutnya.`,
        image: "Assets/Img-blog-5.png",
      },
      {
        title: "Dampak Penggunaan Plastik terhadap Lingkungan",
        category: "Impact",
        description:
          "Memahami Dampak, Tantangan, dan Solusi Pengurangan Plastik",
        longText: `Plastik adalah bahan yang sangat praktis — ringan, kuat, murah, dan mudah digunakan dalam kehidupan sehari-hari. Namun, di balik kepraktisannya, penggunaan plastik yang berlebihan memberikan dampak besar terhadap lingkungan. Setiap tahun, jutaan ton plastik berakhir menjadi sampah yang mencemari bumi, laut, dan udara.

              Artikel ini akan membahas dampak penggunaan plastik terhadap lingkungan secara lengkap dan mudah dipahami.

              1. Plastik Sulit Terurai di Alam

              Plastik membutuhkan ratusan tahun untuk terurai secara alami. Bahkan beberapa jenis plastik hampir tidak bisa hancur secara penuh. Akibatnya:

              Sampah plastik menumpuk dari generasi ke generasi

              Banyak lahan tertutup oleh sampah plastik

              Volume TPA terus meningkat

              Ini menjadi masalah besar karena bumi tidak bisa memproses sampah plastik secepat manusia menghasilkannya.

              2. Pencemaran Laut

              Salah satu dampak terbesar penggunaan plastik adalah pencemaran laut. Diperkirakan lebih dari 8 juta ton plastik masuk ke laut setiap tahun.

              Dampaknya:

              Hewan laut seperti penyu, ikan, dan burung bisa menelan plastik karena mengira itu makanan

              Jaring plastik dapat melilit hewan dan menyebabkan luka

              Mikroplastik menyebar ke seluruh rantai makanan laut

              Bahkan garam laut, air minum, dan ikan yang dikonsumsi manusia kini terdeteksi mengandung mikroplastik.

              3. Mikroplastik Masuk ke Rantai Makanan

              Saat plastik pecah menjadi potongan sangat kecil (mikroplastik), partikel ini:

              Tersebar di air

              Termakan plankton

              Masuk ke tubuh ikan

              Hingga akhirnya dapat dikonsumsi manusia

              Meskipun efek jangka panjangnya masih diteliti, keberadaan mikroplastik di tubuh manusia menjadi perhatian besar para ahli.

              4. Merusak Ekosistem dan Kehidupan Satwa

              Sampah plastik mengancam banyak ekosistem, terutama hutan dan pantai.

              Contohnya:

              Hewan darat seperti sapi, kambing, dan burung sering memakan kantong plastik

              Banyak spesies mengalami cedera karena terjebak dalam sampah plastik

              Ekosistem terumbu karang rusak akibat kontak dengan plastik

              Kerusakan ini mengganggu keseimbangan alam.

              5. Menyumbang Gas Rumah Kaca

              Tidak banyak yang tahu bahwa plastik dapat menghasilkan emisi gas rumah kaca.

              Produksi plastik membutuhkan minyak bumi dan gas alam

              Pembakarannya menghasilkan CO₂ dan polutan lain

              Plastik yang terpapar sinar matahari bisa melepaskan gas metana dan etilen

              Ini mempercepat perubahan iklim dan pemanasan global.

              6. Pencemaran Tanah dan Air Tanah

              Plastik yang dibuang sembarangan atau tertimbun di tanah dapat:

              Menghalangi penyerapan air oleh tanah

              Mencemari air tanah dengan bahan kimia

              Mengganggu pertumbuhan tanaman

              Plastik yang mengandung bahan kimia berbahaya dapat meresap ke tanah dan masuk ke aliran air.

              7. Menurunkan Kebersihan dan Keindahan Lingkungan

              Tumpukan sampah plastik di jalan, sungai, dan pantai:

              Merusak pemandangan

              Mengurangi kualitas wisata

              Mengundang hama seperti tikus dan nyamuk

              Hal ini berdampak pada kesehatan masyarakat dan ekonomi lokal.

              8. Limbah Plastik Menambah Beban TPA

              Sebagian besar TPA di kota besar sudah hampir penuh. Plastik yang tidak terurai memperparah kondisi ini. Hasilnya:

              TPA menjadi sumber bau dan polusi

              Ekspansi TPA mengurangi lahan hijau

              Risiko kebakaran TPA meningkat

              9. Cara Mengurangi Dampak Plastik

              Setiap orang bisa berkontribusi melalui langkah kecil:

              Menggunakan tas belanja kain

              Membawa botol minum sendiri

              Menghindari sedotan plastik sekali pakai

              Memilih produk dengan kemasan ramah lingkungan

              Mendaur ulang plastik yang bisa didaur ulang

              Mengurangi penggunaan plastik sekali pakai

              Perubahan kecil ini dapat memberi dampak besar jika dilakukan bersama-sama.

              Kesimpulan

              Plastik memang bermanfaat, tetapi jika digunakan berlebihan dan dibuang sembarangan, dampaknya sangat merusak lingkungan. Dari pencemaran laut hingga peningkatan gas rumah kaca, plastik menjadi salah satu ancaman terbesar bagi bumi saat ini.

              Solusi terbaik adalah mengurangi penggunaan plastik, memilih alternatif yang ramah lingkungan, dan mendaur ulang sebanyak mungkin. Dengan kesadaran dan tindakan kecil setiap hari, kita bisa membantu melindungi bumi untuk generasi mendatang.`,
        image: "Assets/Img-blog-6.png",
      },
    ],

    filteredArticles() {
      return this.articles.filter((a) => {
        const matchesSearch =
          a.title.toLowerCase().includes(this.search.toLowerCase()) ||
          a.description.toLowerCase().includes(this.search.toLowerCase());

        const matchesCategory =
          this.activeCategory === "All" || a.category === this.activeCategory;

        return matchesSearch && matchesCategory;
      });
    },
    addPoints() {
      const user = getUserData(); // baca data terbaru
      const Poin = (user.poin ?? 0) + 25; // tambah 10

      addPoints(20);

      updateUserData({ poin: Poin }); // simpan
      document.getElementById("poin-1").textContent = `${Poin} poin`;
      document.getElementById("poin-2").textContent = `${Poin} poin`;
    },

    openArticle(article) {
      this.selectedArticle = article;
      this.showPopup = true;

      this.$nextTick(() => {
        const popup = document.getElementById("popupScroll");
        if (popup) popup.scrollTop = 0;
      });
    },
  };
}
const MAX_POINTS = 300;
let currentPoints = parseInt(localStorage.getItem("userPoints")) || 0;

function addPoints(amount) {
  currentPoints = Math.min(currentPoints + amount, MAX_POINTS);
  savePoints();
}

function savePoints() {
  localStorage.setItem("userPoints", currentPoints);
}
