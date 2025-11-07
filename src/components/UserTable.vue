<template>
    <div class="overflow-x-auto">
        <!-- Membungkus tabel dengan scroll horizontal -->
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
                <!-- Loop data pengguna yang diambil dari API -->
                <tr v-for="user in users" :key="user.id">
                    <td class="p-4 text-xs sm:text-sm">{{ user.id }}</td>
                    <td class="p-4 text-xs sm:text-sm">{{ user.username }}</td>
                    <td class="p-4 text-xs sm:text-sm break-words whitespace-normal">{{ user.full_name }}</td>
                    <td class="p-4 text-xs sm:text-sm break-words sm:max-w-xs whitespace-normal">{{ user.email }}</td>
                    <td class="p-4 flex flex-col gap-3 text-xs sm:text-sm w-full">
                        <button class="px-4 py-2 bg-blue-500 text-black text-xs sm:text-sm rounded" @click="updateUser(user.id)">Update</button>
                        <button class="px-4 py-2 bg-red-500 text-black text-xs sm:text-sm rounded" @click="deleteUser(user.id)">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getUsers } from '../services/api.js'; // Import fungsi untuk mengambil data

export default {
    data() {
        return {
            users: [],  // Array untuk menyimpan data pengguna
        };
    },
    methods: {
        async fetchUsers() {
            try {   
                const data = await getUsers();
                console.log(data);
                this.users = data;  // Simpan data yang diterima ke dalam state users
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        updateUser(id) {
            // Lakukan sesuatu untuk update user
            this.$router.push(`/update/user/${id}`);
        },
        deleteUser(id) {
            // Lakukan sesuatu untuk delete user
            console.log(`User with id ${id} will be deleted`);
        }
    },
    mounted() {
        this.fetchUsers();  // Panggil fungsi fetchUsers saat komponen dipasang
    }
};
</script>

<style scoped>
/* Tambahkan padding dan margin agar tampilan lebih responsif pada perangkat kecil */
@media (max-width: 640px) {
    div {
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
