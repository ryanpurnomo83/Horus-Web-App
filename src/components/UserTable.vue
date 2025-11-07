<template>
    <div class="overflow-x-auto"> <!-- Membungkus tabel dengan scroll horizontal -->
        <table class="mt-10 border-collapse border border-gray-400 w-full table-auto sm:table-fixed">
            <thead class="border-b border-gray-300">
                <tr>
                    <th class="p-4 text-xs sm:text-sm">ID</th>
                    <th class="p-4 text-xs sm:text-sm">Username</th>
                    <th class="p-4 text-xs sm:text-sm">Nama Lengkap</th>
                    <th class="p-4 text-xs sm:text-sm">Email</th>
                    <th class="p-4 text-xs sm:text-sm">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-4 text-xs sm:text-sm">1</td>
                    <td class="p-4 text-xs sm:text-sm">Ryan</td>
                    <td class="p-4 text-xs sm:text-sm break-words whitespace-normal">Ryan Purnomo</td>
                    <td class="p-4 text-xs sm:text-sm break-words sm:max-w-xs whitespace-normal">ryanpurnomo83@gmail.com</td>
                    <td class="p-4 flex flex-col gap-3 text-xs sm:text-sm w-full">
                        <button class="px-4 py-2 bg-blue-500 text-black text-xs sm:text-sm rounded" @click="$router.push('/update/user')">Update</button>
                        <button class="px-4 py-2 bg-red-500 text-black text-xs sm:text-sm rounded">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* Tambahkan padding dan margin agar tampilan lebih responsif pada perangkat kecil */
@media (max-width: 640px) {
    div{
        width: 100%; /* Menjaga lebar container tetap penuh */
    }
    
    table {
        font-size: 0.7rem; /* Menurunkan ukuran font untuk tampilan kecil */
    }
    
    th, td {
        padding: 0.5rem; /* Mengurangi padding */
    }

    .p-2 {
        padding: 0.2rem;
    }
    
    .break-words {
        word-wrap: break-word; /* Memastikan kata panjang bisa terputus dan tidak meluap */
    }

    td {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .w-full {
        width: 100%; /* Tombol-tombol akan mengikuti lebar kolom */
    }

    /* Menggunakan flex-wrap agar tombol dapat berpindah ke baris berikutnya saat ruang terbatas */
    .flex {
        display: flex;
        flex-direction: column; /* Menjadikan tombol dalam kolom di perangkat kecil */
        flex-wrap: wrap; /* Memungkinkan tombol berpindah ke baris berikutnya */
    }

    /* Tombol tetap di dalam kolom pada layar kecil */
    .sm:flex-row {
        flex-direction: row; /* Tombol diatur dalam baris pada layar besar */
    }
}
</style>
