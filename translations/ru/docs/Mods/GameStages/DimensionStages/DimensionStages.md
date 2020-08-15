# Этапы измерения

Этот мод является аддоном для [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Этапы измерений позволяют получить доступ к размерам закрываться за пользовательскими системами прогрессирования, которые устанавливаются создателем модапаков. Если у игрока нет доступа к сцене, он не сможет ввести это измерение. Их домашние животные и снаряды, животные и сбрасываемые предметы также будут лишены возможности попасть в ограниченное пространство. Вы можете найти более подробную информацию о стадиях измерений [здесь](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```