<template>
    <div class="bg-h">
        <v-container class="c">
        <h2>История бюро</h2>
        <div>
            <div class="gh">
                <div class="pl-5">
                    <h3 class="text-h4">1980</h3>
                    <p class="text-roboto text-uppercase text-subtitle-1">Начало пути</p>
                    <div class="rl">
                        <div class="line"></div>
                        <div>
                            <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                        </div>
                    </div>
                </div>
                <div class="pl-5">
                    <h3 class="text-h4">1990</h3>
                    <p class="text-roboto text-uppercase text-subtitle-1">Основание фирмы «Юринг»</p>
                    <div class="rl">
                        <div class="line"></div>
                        <div>
                            <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                        </div>
                    </div>
                </div>
                <div class="pl-5">
                    <h3 class="text-h4">2003</h3>
                    <p class="text-roboto text-uppercase text-subtitle-1">Основание адвокатского бюро «Запольский и партнеры»</p>
                    <div class="rl">
                        <div class="line"></div>
                        <div>
                            <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gh rh">
                <div class="line">
                    <div class="rline"></div>
                </div>
                <div class="line">
                    <div class="rline"></div>
                </div>
                <div class="line"></div>
            </div>
            <div class="gh rh">
                <div class="pl-5">
                    <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                </div>
                <div class="pl-5">
                    <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                </div>
                <div class="pl-5">
                    <p class="text-roboto text-card">Корни нашего Адвокатского бюро происходят из конца 80-х годов, когда вследствие изменения в экономической политике возникла ощутимая потребность в юридической помощи создаваемым совместным предприятиям, участие юристов в международных коммерческих проектах, оказание правовой помощи российским предприятиям за рубежом и содействие в рассмотрении многообразных хозяйственных споров.</p>
                </div>
            </div>
        </div>
    </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    h2{
        color: var(--red-legal);
    }
    .gh{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    h3{
        color: var(--red-legal);
    }
    .line{
        border-top: 1px var(--red-legal) solid;
        margin: 20px 0;
        position: relative;
    }
    .r{
        height: 30px;
        position: absolute;
        right: 0;
        top: -15px;
        border-left: 1px var(--red-legal) solid;
    }
    .c{
        height: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .bg-h{
        background-color: var(--grey-light-legal);
        border-top: 1px var(--grey-legal) solid;
        display: flex;
        align-items: center;
        margin: 30px 0;
    }
    .rl{
        display: none;
    }
    h2{
        font-size: 40px;
        font-weight: 400;
        padding: 20px 0;
    }
    @media (max-width: 1100px) {
        .rl{
            display: block;
        }
        .rh{
            display: none;
        }
        .gh{
            grid-template-columns: 100%;
            grid-row-gap: 30px;
        }
        h2{
            font-size: 30px;
        }
        .c{
            height: auto;
            padding: 30px 0;
        }
    }
</style>