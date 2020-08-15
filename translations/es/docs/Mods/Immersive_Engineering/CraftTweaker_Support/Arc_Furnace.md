# Arc Furnace

The Arc Furnace package can be used to add/remove recipes to/from the Immersive Engineering Arc Furnace.

## Calling The Package

You can call the ArcFurnace package using `mods.immersiveengineering.ArcFurnace`.

## Añadir Receta

| Requerido | Tipo                | Tipo de Datos                                                                          |
| --------- | ------------------- | -------------------------------------------------------------------------------------- |
| Requerido | Salida              | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Requerido | Input               | [IIngredientes](/Vanilla/Variable_Types/IIngredient/)                                  |
| Requerido | Slag                | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Requerido | Time                | Entero                                                                                 |
| Requerido | Energy Per Tick     | Entero                                                                                 |
| Opcional  | Additives           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array[]                            |
| Opcional  | Special Recipe Type | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## Remove Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```