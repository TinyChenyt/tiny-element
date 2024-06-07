<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    required: true
  }
});

const router = useRouter();

function push() {
  router.push(props.to).catch((err) => {
    console.log(err);
  });
}
</script>

<template>
  <a v-if="to" :href="to" rel="noopener">
    <slot />
  </a>

  <div v-else @click="push">
    <slot />
  </div>
</template>

<style scoped></style>