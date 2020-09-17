# Horno de arco

El paquete de horno de arco se puede usar para añadir/quitar recetas para/desde el horno de arco de Inmersiva.

## Llamar al paquete

Puedes llamar al paquete ArcFurnace usando `mods.immersiveengineering.ArcFurnace`.

## Añadir Receta

| Requerido | Tipo                    | Tipo de Datos                                                                          |
| --------- | ----------------------- | -------------------------------------------------------------------------------------- |
| Requerido | Salida                  | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Requerido | Input                   | [IIngredientes](/Vanilla/Variable_Types/IIngredient/)                                  |
| Requerido | Slag                    | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Requerido | Hora                    | Entero                                                                                 |
| Requerido | Energía por Tick        | Entero                                                                                 |
| Opcional  | Aditivos                | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) Array[]                           |
| Opcional  | Tipo de receta especial | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.ArcFurnace.addRecipe(Salida ItemStack, entrada IIngredient, IItemStack slag, tiempo de intención, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Aleación");
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.ArcFurnace.removeRecipe(Itemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```