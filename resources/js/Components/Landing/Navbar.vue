<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import { Link } from '@inertiajs/vue3';
    import { NButton } from 'naive-ui';

    import LogoNavbar from '@/Components/Landing/LogoNavbar.vue';
    // nav Scroll
    const handleScroll = () => {
        const nav = document.getElementsByTagName('nav')[0];

        if(nav) {
            if(window.pageYOffset > 0){
                nav.classList.add('drop-shadow-md');
            } else {
                nav.classList.remove('drop-shadow-md');
            }
        }
    }
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
        window.addEventListener('scroll', handleScroll);
    });
    // nav Scroll

    // hamburger
    const isMenuActive = ref(false);

    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
    }
    // hamburger
</script>

<template>
    <nav class="bg-white w-full h-[75px] leading-[75px] fixed top-0 left-0 z-50">
        <div class="h-full w-full px-5 flex justify-between items-center m-auto overflow-hidden">
            <div class="logo min-w-fit h-[50px] mx-5">
                <Link class="flex h-[100%] justify-center items-center" :href="route('home')">
                    <LogoNavbar/>
                    <h1 class="text-primary font-black ml-3">
                        PONPES AR-RASYID
                    </h1>
                </Link>
            </div>
            <div class="nav-links w-full hidden justify-between lg:flex">
                <Link class="nav-link" :class="{active: route().current('home')}" :href="route('home')">
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
            <div class="register min-w-fit hidden mx-5 lg:flex">
                <NButton type="primary" round>
                    Pendaftaran
                </NButton>
            </div>
            <div class="hamburger min-w-fit relative block mr-5 lg:hidden">
                <input type="checkbox" id="checkbox" @click="toggleMenu()">
                <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>
            </div>
            <div class="responsive-nav absolute top-full right-0 bg-white max-w-[500px] w-full shadow-inner-shadow-sm lg:hidden" :class="{nonActive: !isMenuActive}">
                <div class="nav-links-responsive grid gap-1">
                    <Link class="nav-link" :href="route('home')">
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
        </div>
    </nav>
</template>

<style scoped lang="scss">
    $primaryColor : #02544d;
    nav{
        transition: all .3s ease-in-out;

        h1{
        font-size: calc(.8rem + .2vw);
        }
        p{
            font-size: calc(.8rem + .2vw);
        }
        .nav-links{
            .nav-link{
                position: relative;
                height: 75px;
                width: 100%;
                min-width: 65px;
                margin: 0 5px;

                p{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: .3s all;
                }

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    border-bottom: 5px $primaryColor solid;
                    transition: .3s all;
                }
            }
            .active{
                p{
                    font-weight: bold;
                }

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom: 5px $primaryColor solid;
                    transition: all .3s;
                }
            }
            .nav-link:hover{
                p{
                    font-weight: bold;
                }

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom: 5px $primaryColor solid;
                }
            }   
        }
        .register{
            .n-button{
                font-size: 1rem;
                font-weight: bold;
                padding: 0 30px 2.5px 30px;
            }
        }
        .hamburger{
            /* From Uiverse.io by vinodjangid07 */ 
            #checkbox {
            display: none;
            }

            .toggle {
                position: relative;
                width: 40px;
                height: 40px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 5px;
                transition-duration: .5s;
            }

            .bars {
                width: 100%;
                height: 4px;
                background-color: $primaryColor;
                border-radius: 4px;
            }

            #bar2 {
                transition-duration: .8s;
            }

            #bar1,#bar3 {
                width: 70%;
            }

            #checkbox:checked + .toggle .bars {
                position: absolute;
                transition-duration: .5s;
            }

            #checkbox:checked + .toggle #bar2 {
                transform: scaleX(0);
                transition-duration: .5s;
            }

            #checkbox:checked + .toggle #bar1 {
                width: 100%;
                transform: rotate(45deg);
                transition-duration: .5s;
            }

            #checkbox:checked + .toggle #bar3 {
                width: 100%;
                transform: rotate(-45deg);
                transition-duration: .5s;
            }

            #checkbox:checked + .toggle {
                transition-duration: .5s;
                transform: rotate(180deg);
            }
        }
        .responsive-nav{
            height: fit-content;
            transform: translateY(0);
            opacity: 1;
            transition: opacity .3s ease-in-out, transform .3s ease-in-out .3s, height .3s ease-in-out .6s, display .3s ease-in-out .9s;

            .nav-links-responsive{
                border-bottom: rgba(128, 128, 128, 0.5) 1px solid;
                padding-bottom: 5px;
                opacity: 1;
                transition: opacity .3s ease-in-out .6s;
                
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
                opacity: 1;
                transition: opacity .3s ease-in-out .6s;

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
        }
        .nonActive{
            height: 0;
            opacity: 0;
            transform: translateY(-100%);

            .nav-links-responsive{
                border-bottom: rgba(128, 128, 128, 0.5) 1px solid;
                padding-bottom: 5px;
                opacity: 0;
                
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
                opacity: 0;
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
        }
    }
</style>
