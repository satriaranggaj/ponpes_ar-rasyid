<script setup>
    import { NButton } from 'naive-ui';
</script>

<template>
    <section id="statement" class="my-10 px-4 py-10">
        <div class="title">
            <h1 class="text-primary text-4xl text-center font-black sm:text-5xl">
                معاهد رباط الرشيد الإسلامية
            </h1>
        </div>
        <div class="container m-auto w-full flex flex-col justify-between items-center mt-10 md:flex-row md:items-start md:mt-20">
            <div class="regis md:w-1/2">
                <h3 class="title text-xl font-semibold">
                    Pesantren Sunnah
                </h3>
                <h1 class="name my-2 text-primary text-2xl font-black sm:text-3xl">
                    Pesantren Ar-Rasyid
                </h1>
                <p class="desc mb-5 sm:text-lg">
                    Bergerak Mengajarkan Penerapan Islam Dalam Kehidupan Sesuai Sunnah dan Al-Qur'an.
                </p>
                <NButton type="primary" round>
                    Daftar Sekarang
                </NButton>
            </div>
            <div class="data mt-12 md:w-1/2 md:mt-0">
                <h1 class="claim text-primary text-2xl font-black sm:text-3xl">
                    DiPercaya Oleh Lebih Dari 5 Ribu Santri Di Indonesia Sejak Tahun 2010.
                </h1>
                <div class="list-data rounded-lg m-auto mt-5 flex flex-wrap justify-around bg-gray-200">
                    <div class="list">
                        <h2 class="total">
                            3K+
                        </h2>
                        <p class="desc">
                            Santriwati
                        </p>
                    </div>
                    <div class="list">
                        <h2 class="total">
                            2K+
                        </h2>
                        <p class="desc">
                            Santri Putra
                        </p>
                    </div>
                    <div class="list">
                        <h2 class="total">
                            100
                        </h2>
                        <p class="desc">
                            Santri Pengajar
                        </p>
                    </div>
                    <div class="list">
                        <h2 class="total">
                            120
                        </h2>
                        <p class="desc">
                            Pengurus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    $primaryColor : #02544d;

    .n-button{
            font-size: 1rem;
            font-weight: bold;
            padding: 0 30px 2.5px 30px;
        }

    .data{
        .list-data{
            .list{
                min-width: fit-content;
                text-align: center;
                margin: 10px 10px;
                padding: 10px;

                .total{
                    font-weight: bolder;
                    font-size: calc(1rem + .5vw);
                    color: $primaryColor;
                }
                .desc{
                    font-size: calc(.8rem + .2vw);
                    color: $primaryColor;
                }
            }
        }
    }

    @media (max-width: 640px) {
    .n-button {
        font-size: .8rem;
        font-weight: bold;
        padding: 0 20px 1.5px 20px;
    }
}
</style>
