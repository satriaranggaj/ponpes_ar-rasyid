<script setup>
    import { Link } from '@inertiajs/vue3';
    
</script>
<template>
    <div class="responsive-nav absolute top-full right-0 bg-white max-w-[500px] w-full shadow-inner-shadow-sm">
        <div class="nav-links-responsive grid gap-1">
            <Link class="nav-link active" :href="route('home')">
                <p class="text-black">
                    Beranda
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Tentang
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Akademik
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Lembaga
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Alumni
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Berita
                </p>
            </Link>
            <Link class="nav-link" :href="route('home')">
                <p class="text-black">
                    Kontak
                </p>
            </Link>
        </div>
        <div class="register min-w-fit flex">
            <Link class="register-link">
                <p>
                    Pendaftaran
                    <i class="fa-solid fa-envelope-open-text"></i>
                </p>
            </Link>
        </div>
    </div>
</template>
<style scoped lang="scss">
    $primaryColor : #02544d;
    .nav-links-responsive{
        border-bottom: rgba(128, 128, 128, 0.5) 1px solid;
        padding-bottom: 5px;
        
        .nav-link{
            position: relative;
            height: 50px;
            line-height: 50px;

            p{
                margin: 0 25px;
                transition: all .3s;
            }
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                border-left: 5px $primaryColor solid;
                transition: height .3s ease-in-out, width .3s ease-in-out .3s;
            }
        }
        .active{

            p{
                font-weight: bold;
            }

            &::before{
                content: '';
                background-color: rgba(2, 84, 77, 0.2);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-left: 5px $primaryColor solid;
            }
        }
        .nav-link:hover{
            p{
                font-weight: bold;
            }

            &::before{
                content: '';
                background-color: rgba(2, 84, 77, 0.2);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-left: 5px $primaryColor solid;
            }
        } 
        .nav-link:focus{
            p{
                font-weight: bold;
            }

            &::before{
                content: '';
                background-color: rgba(2, 84, 77, 0.2);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-left: 5px $primaryColor solid;
            }
        }  
    }
    .register{
        .register-link{
            height: 100%;
            width: 100%;
            margin-top: 5px;
            background-color: #02544d;
            transition: all .3s;

            p{
                color: white;
                font-weight: bold;
                margin: 0 25px;

                i{
                    margin-left: 5px;
                }
            }
        }  
        .register-link:hover{
            background-color: #007f75;
        }      
    }
</style>