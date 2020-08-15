# Arc Furnace

The Arc Furnace package can be used to add/remove recipes to/from the Immersive Engineering Arc Furnace.

## Calling The Package

You can call the ArcFurnace package using `mods.immersiveengineering.ArcFurnace`.

## Ajouter une recette

| Required  | Type de texte       | Type de données                                                                        |
| --------- | ------------------- | -------------------------------------------------------------------------------------- |
| Required  | Sortie              | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Required  | Input               | [Ingrédient](/Vanilla/Variable_Types/IIngredient/)                                     |
| Required  | Slag                | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Required  | Time                | Nombre entier                                                                          |
| Required  | Energy Per Tick     | Nombre entier                                                                          |
| Optionnel | Additives           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array[]                            |
| Optionnel | Special Recipe Type | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## Remove Recipe

| Type de texte | Type de données                          |
| ------------- | ---------------------------------------- |
| Sortie        | [IItemstack](/Vanilla/Items/IItemStack/) |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```