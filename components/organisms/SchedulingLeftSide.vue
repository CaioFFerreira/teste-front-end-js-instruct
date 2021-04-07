<template>
  <div class="scheduling-left-side">
    <div class="scheduling-left-social-date">
      <CardScheduling title="Redes sociais">
        <div class="social">
          <label v-for="social in socialList" :key="social.id">
            <input
              v-model="checkedSocial"
              type="checkbox"
              :value="social.icon"
              :disabled="social.status === 'disabled'"
            />
            <i
              :class="[social.icon, { disabled: social.status === 'disabled' }]"
            >
            </i>
          </label>
        </div>
      </CardScheduling>
      <CardScheduling title="Data de publicação">
        <input type="text" />
      </CardScheduling>
    </div>
    <CardScheduling title="Texto do post" class="post-text">
      <textarea
        v-model="textPost"
        placeholder="Aqui vai o texto descritivo desse post"
      >
      </textarea>
    </CardScheduling>
    <CardScheduling title="Upload de imagem" class="upload-image">
      <input type="text" />
    </CardScheduling>
  </div>
</template>

<script>
import SocialNetworks from '@/domain/SocialNetworks/SocialNetworks'

export default {
  data() {
    return {
      socialList: '',
      checkedSocial: [],
      textPost: '',
    }
  },
  created() {
    this.getSocialIcons()
  },
  methods: {
    getSocialIcons() {
      SocialNetworks.get()
        .then(({ data }) => {
          this.socialList = data.sort((a, b) => {
            return a.status.length - b.status.length
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.scheduling-left-side {
  display: grid;
  height: min-content;
  grid-template-areas:
    'socialDate socialDate'
    'postText postText'
    'uploadImge uploadImge';
  grid-gap: 40px;
  .scheduling-left-social-date {
    display: flex;
    grid-gap: 40px;
    grid-area: socialDate;
    .social {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 5px;
      padding: 15px 5px;
      align-items: center;
      justify-content: center;
      label {
        i {
          height: 32px;
          width: 32px;
          display: flex;
          cursor: pointer;
          border-radius: 100%;
          align-items: center;
          justify-content: center;
          color: $black-2;
          transition: 0.5s ease-in-out;
          font-size: $font-size-16;
          border: 1px solid $gray-light-2;

          &:hover {
            color: $orange-2;
            border: 1px solid $orange-2;
            background-color: $orange-light;
          }
        }
        input {
          display: none;
        }
        input:checked + i {
          color: $white;
          border: 1px solid $orange-2;
          background: linear-gradient(135deg, $orange-2 25%, $red 105.56%);
        }

        .disabled {
          color: $gray-dark-2;
          background-color: $gray-light-4;
          border: 0.5px solid $gray-light-2;
          pointer-events: none;
        }
      }
    }
    .card-scheduling {
      width: 100%;
    }
  }
  .post-text {
    grid-area: postText;
    textarea {
      width: 100%;
      padding: 10px 10px 80px 10px;
    }
  }
  .upload-image {
    grid-area: uploadImge;
  }
}
</style>
