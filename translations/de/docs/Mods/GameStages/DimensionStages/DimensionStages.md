# Dimensionsphasen

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Dimensionsphasen ermöglichen den Zugriff auf Dimensionen, die hinter benutzerdefinierten Verlaufssystemen, die durch den Modpack-Ersteller festgelegt werden, abgetrennt werden. Wenn ein Spieler keinen Zugang zu einer Bühne hat, kann er diese Dimension nicht betreten. Auch ihre Haustiere und Projektilien, Reittiere und Gegenstände werden daran gehindert, eine eingeschränkte Dimension zu betreten. Weitere Informationen zu Dimensionsphasen [finden Sie hier](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String-Bühne, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```