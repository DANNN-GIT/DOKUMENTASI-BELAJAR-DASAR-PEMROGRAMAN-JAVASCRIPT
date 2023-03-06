const mahasiswa = {
   nim: 'E41201452',
   name: 'Ahmad Wildan',
   prodi: 'Teknik Informatika',
   jurusan: 'Teknologi Informasi',
   semester: 6,
   status: true,
   institut: 'Politeknik Negeri Jember',
   'alamat kampus': 'Jl. Mastrip, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember'
};

mahasiswa['dosen pembimbing'] = 'Bety Etikasari, S.Pd, M.Pd';
delete mahasiswa['dosen pembimbing'];

mahasiswa.status ? mahasiswa.status = 'aktif' : mahasiswa.status = 'tidak aktif';

console.log(`Hallo, saya ${mahasiswa.name}. Mahasiswa ${mahasiswa.status} ${mahasiswa.institut}, program studi ${mahasiswa.prodi}, jurusan ${mahasiswa.jurusan}.`);
console.log(`Saat ini sedang menempuh semester ${mahasiswa.semester}`);
console.log(`Dosen pembimbing : ${mahasiswa['dosen pembimbing']}`);
console.log(`Lokasi kampus : ${mahasiswa['alamat kampus']}`);