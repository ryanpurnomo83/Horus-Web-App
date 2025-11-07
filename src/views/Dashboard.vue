<script>
    import UserTable from '../components/UserTable.vue';
    export default {
        components: {
            UserTable
        }
    }    
</script>

<template>
    <div class="text-xs sm:text-sm">
        <nav class="mb-10">
            <h1>Dashboard Pengguna</h1>
        </nav>
        <label>Cari Pengguna: <input type="text"/></label>
        <br/>
        <UserTable/>
    </div>
</template>

<style scoped>
/* Tambahkan padding dan margin agar tampilan lebih responsif pada perangkat kecil */
@media (max-width: 640px) {
    div { 
        font-size: 0.6rem;
        width:200px;
    }
}
</style>