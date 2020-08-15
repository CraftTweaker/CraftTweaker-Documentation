# Etapas de dimensión

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Dimension Stages permite el acceso a las dimensiones para ser compuestos detrás de sistemas de progresión personalizados que son establecidos por el creador de modpack. Si un jugador no tiene acceso a una etapa, no podrá entrar en esa dimensión. También se impedirá que sus mascotas, proyectiles, monturas y objetos soltados introduzcan una dimensión restringida. Puedes encontrar más información sobre las etapas de la dimensión [aquí](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```