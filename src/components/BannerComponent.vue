<template>
    <div class="background">
        <v-container class="h-100 d-flex flex-column justify-center align-center">
            <h2 class="text title-text">Мы всегда на защите Ваших интересов.</h2>
        </v-container>
    </div>
</template>

<script>

</script>

<style scoped>
    .background{
        width: 100%;
        height: 400px;
        background-color: var(--red-legal);
        background-image: url(./../assets/group.svg);
        background-position-x: center;
        background-position-y: center;
    }
    .title-text{
        font-size: 40px;
        text-align: center;
    }
    @media (max-width: 450px) {
        .background{
            height: 500px;
        }
    }
</style>