# Dimension Stages
This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Dimension Stages allows access to dimensions to be gated behind custom progression systems that are set in place by the modpack creator. If a player does not have access to a stage, they will not be able to enter that dimension. Their pets, and projectiles, mounts and dropped items will also be prevented from entering a restricted dimension. You can find more info about Dimension Stages [here](https://minecraft.curseforge.com/projects/dimension-stages)

```java
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```
