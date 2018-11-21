# Item Stages

This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Item Stages allows access for items and blocks to be placed into a custom progression system set by the modpack creator. If a player does not have the required stage, the player will have trouble using the item. To learn more about how it does this, check out the mod page [here](https://minecraft.curseforge.com/projects/item-stages)

```java
//mods.ItemStages.addItemStage(String stage, IIngredient ingredient);
mods.ItemStages.addItemStage("one", <minecraft:stone>); // Item ID
mods.ItemStages.addItemStage("two", <ore:record>); // Ore Dict
```