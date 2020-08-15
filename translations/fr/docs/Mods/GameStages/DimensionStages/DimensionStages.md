# Étapes de dimension

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Dimension Stages permet d'accéder à des dimensions à recouvrir derrière des systèmes de progression personnalisés qui sont mis en place par le créateur du modpack. Si un joueur n'a pas accès à une étape, il ne pourra pas entrer dans cette dimension. Leurs animaux de compagnie et leurs projectiles, montures et objets lâchés seront également empêchés d'entrer dans une dimension restreinte. Vous pouvez trouver plus d'informations sur les Étapes de Dimension [ici](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```