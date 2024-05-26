<script setup lang="ts">
import CardsContainerComponent from '@/components/CardsContainerComponent.vue';
import CharacterService from '@/services/CharacterService';
import { onMounted } from 'vue';
onMounted(async () => {
  console.warn('HomePage: onMounted');
  const characters = await CharacterService.getCharacters();
  console.log(characters);
});
</script>

<template><CardsContainerComponent /></template>
