<template>
  <b-card class="shadow pt-3 px-3" no-body>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <template v-if="menu == 0">
          <li class="breadcrumb-item active" aria-current="page">Languages</li>
        </template>
        <template v-else-if="menu == 1">
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(0)">Languages</a>
          </li>
          <li class="breadcrumb-item active">Channels</li>
        </template>
        <template v-else-if="menu == 2">
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(0)">Languages</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(1)">Channels</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Episodes</li>
        </template>
        <template v-else-if="menu == 3">
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(0)">Languages</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(1)">Channels</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" @click="goBackToMenu(2)">Episodes</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Player</li>
        </template>
      </ol>
    </nav>
  </b-card>
</template>

<script>
export default {
  name: 'CurrentPageBreadcrumb',
  props: ['menu'],
  methods: {
    goBackToMenu(nr) {
      this.$emit('t_goBackToMenu', nr);
    },
  },
};
</script>
