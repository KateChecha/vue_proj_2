<template>
    <div class="w-100">
        <div  class="brdr">
            <div class="contacts">
                <div class="d-flex text-roboto">
                    <img class="pe-4" src="./../assets/map-pin.svg" alt="">
                    <span>125009, г. Москва, Бол. Кисловский пер., д. 1, стр. 2, оф. 303</span>
                </div>
                <div class="d-flex py-4 text-roboto">
                    <img class="pe-4" src="./../assets/phone.svg" alt="">
                    <div>
                        <span>+7 (499) 460-09-09</span>
                        <br>
                        <span>+7 (495) 690-63-12</span>
                    </div>
                </div>
                <div class="d-flex text-roboto">
                    <img class="pe-4" src="./../assets/mail-red.svg" alt="">
                    <span>info@zpmoscow.com</span>
                </div>
            </div>
            <div class="map">
                <YandexMap :coordinates="coordinates" :zoom="17">
                    <YandexMarker :coordinates="coordinates" :marker-id="123" :options="icon">
                    
                    </YandexMarker>
                </YandexMap>
            </div>
        </div>
    </div>
</template>

<script>
import { YandexMap, YandexMarker } from "vue-yandex-maps";
export default {
    components: { YandexMap, YandexMarker },
    data(){
        return {
            coordinates: [55.753615, 37.605562],
            icon: {
                iconLayout: 'default#imageWithContent',
                iconImageHref: './pin.png',
                iconImageSize: [55, 77],
                iconImageOffset: [-24, -50],
                iconContentOffset: [0, 0],
            }
        }
    },
}
</script>

<style>
.yandex-container {
  height: 100%;
  width: 100%;
}

</style>
<style scoped>
    .brdr{
        border: 1px var(--grey-legal) solid;
    }
    .contacts{
        padding: 50px;
    }
    .map{
        height: 500px;
        width: 100%;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>