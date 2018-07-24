panel.plugin("wottpal/social", {
  fields: {
    social: {
      props: {
        value: String,
        service: String
      },
      data: function () {
        return {
          username: this.value.username,
          avatar: `https://avatars.io/${this.service}/`,
          link: `https://${this.service}.com`,
        };
      },
      mounted: function() {
        this.update()
      },
      methods: {
        update: function() {
          this.username = this.$refs.input.$refs.input.value
          this.avatar = `https://avatars.io/${this.service}/${this.username}/small`
          this.link = `https://${this.service}.com/${this.username}`
        },

        onInput: function () {
          this.update()

          this.$emit("input", {
            'username' : this.username,
            'avatar' : this.avatar.substring(0, this.avatar.length - 5),
            'link' : this.link
          });
        }
      },
      template: `
        <kirby-field v-bind="$attrs" >

        <kirby-input :icon="service" theme="field" type="text">

        <span slot="before">
          <a ref="avatarLink" :href="this.link" target="_blank"><img :src="this.avatar" ref="avatarImage"></a>
        </span>

        <span class="kirby-input-element">
          <kirby-text-input :value="this.username" @input="onInput()" ref="input" />
        </span>

        </kirby-field>
      `
    }
  }
});
