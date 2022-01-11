/* eslint-disable */
<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row v-if="loading">
        <b-col>
          <b-alert show>Loading...</b-alert>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <b-button disabled variant="primary" v-if="menu == 0"
            >Main Menu</b-button
          >

          <b-button variant="primary" v-if="menu == 1" @click="goBackToMenu(0)"
            >Back to language Selection</b-button
          >

          <b-button variant="primary" v-if="menu == 2" @click="goBackToMenu(1)"
            >Back to Channels</b-button
          >

          <b-button variant="primary" v-if="menu == 3" @click="goBackToMenu(2)"
            >Back to Episodes</b-button
          >
        </b-col>
      </b-row>

      <b-row v-if="menu == 0" class="mb-5">
        <b-col cols="12" md="6" offset-md="3">
          <b-card class="shadow">
            <template #header> Select Country </template>
            <b-list-group>
              <b-list-group-item
                button
                v-for="(i, e) in pokemonAPIMapping"
                :key="e"
                :disabled="loading"
                @click="downloadPokemonApi(e)"
              >
                {{ i.langText }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="menu == 1">
        <b-col
          v-for="channel in sortChannels"
          :key="channel.channel_id"
          cols="12"
          md="4"
          class="d-flex align-items-stretch"
        >
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4 shadow"
            no-body
            header-class="channelCard"
          >
            <template #header>
              {{ channel.channel_name }}
            </template>
            <b-card-img
              :src="channel.channel_images.dashboard_image_1125_1500"
              class="noBorderRadius"
            >
            </b-card-img>
            <b-card-body>
              <b-card-text v-if="channel.channel_description != ''">
                {{ channel.channel_description }}
              </b-card-text>
              <b-card-text v-else> No description provided. </b-card-text>
            </b-card-body>
            <template #footer class="pb-0">
              <b-button
                squared
                variant="primary"
                class="fullWidth"
                @click="setChannel(channel.channel_id)"
                >Watch</b-button
              >
            </template>
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="menu == 2">
        <b-col
          v-for="i in sortEpisodes"
          :key="i.id"
          cols="12"
          class="d-flex align-items-stretch"
        >
          <b-card no-body class="mb-3 shadow fullWidth">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="i.images.large"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="i.title">
                  <b-card-text>
                    {{ i.description }}
                  </b-card-text>
                  <b-button
                    squared
                    variant="primary"
                    class="fullWidth"
                    @click="setEpisode(i)"
                    >Watch</b-button
                  >
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <b-row v-if="menu == 3">
        <b-col cols="12">
          <iframe class="iframePlayer" :src="getPlayerUrl()"></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      pokemonAPI: false,
      pokemonAPIMapping: false,
      selectedLanguage: false,
      selectedChannel: false,
      selectedEpisode: false,
      menu: 0,
      loading: false,
      player: {
        offline_url: false,
        stream_url: false,
        playerId: false,
        playerUrl: false,
      },
    };
  },
  mounted() {
    this.downloadApiMappings();
  },
  computed: {
    sortChannels() {
      return this.pokemonAPI.slice().sort((a, b) => {
        return a.watch_now_order - b.watch_now_order;
      });
    },
    sortEpisodes() {
      for (let channel in this.pokemonAPI) {
        if (this.selectedChannel == this.pokemonAPI[channel]['channel_id']) {
          return this.pokemonAPI[channel]['media'];
        }
      }
      return [];
    },
  },
  methods: {
    downloadApiMappings() {
      console.log('downloadApiMappings');
      fetch(
        'https://raw.githubusercontent.com/Slluxx/pokemontv/api/mappings.json'
      )
        .then((response) => response.json())
        .then((data) => {
          this.pokemonAPIMapping = data;
          console.log('api downloaded');
        });
    },
    downloadPokemonApi(lang) {
      this.loading = true;
      console.log('downloadPokemonApi');
      this.selectedChannel = false;
      this.selectedEpisode = false;
      this.pokemonAPI = false;

      this.selectedLanguage = lang;
      fetch(
        'https://raw.githubusercontent.com/Slluxx/pokemontv/api/apiData/' +
          this.selectedLanguage +
          '.json'
      )
        .then((response) => response.json())
        .then((data) => {
          this.pokemonAPI = data;
          this.menu = 1;
          this.loading = false;
        });
    },

    goBackToMenu(menuNr) {
      console.log('goBackToMenu', menuNr);

      if (menuNr == 0) {
        this.selectedLanguage = false;
        this.selectedChannel = false;
        this.selectedEpisode = false;
        this.pokemonAPI = false;
        this.menu = menuNr;
      } else if (menuNr == 1) {
        this.selectedChannel = false;
        this.selectedEpisode = false;
        this.menu = menuNr;
      } else if (menuNr == 2) {
        this.selectedEpisode = false;
        this.menu = menuNr;
      } else if (menuNr == 3) {
        this.menu = menuNr;
      }
    },

    setChannel(channelId) {
      console.log('setChannel');
      this.selectedChannel = channelId;
      this.menu = 2;
      this.scrollToTop();
    },

    setEpisode(episode) {
      console.log('setEpisode');
      this.selectedEpisode = episode.id;
      this.player.offline_url = episode.offline_url;
      this.player.stream_url = episode.stream_url;
      this.player.playerId = episode.id;
      this.player.playerUrl =
        this.pokemonAPIMapping[this.selectedLanguage].playerUrl;
      this.menu = 3;
      this.scrollToTop();
    },
    getPlayerUrl() {
      console.log(this.player.playerUrl + this.player.playerId);
      this.scrollToTop();
      return this.player.playerUrl + this.player.playerId;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

.channelCard {
  min-height: 4rem;
}
.noBorderRadius {
  border-radius: 0px;
}
.fullWidth {
  width: 100%;
}
.iframePlayer {
  width: 100%;
  height: 450px;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.42) !important;
}
</style>
