# Alloy Smelter

The Alloy Smelter package can be used to add/remove recipes to/from the Immersive Engineering Alloy Smelter.

## Calling The Package

You can call the AlloySmelter package using `mods.immersiveengineering.AlloySmelter`

## Añadir Receta

| Requerido | Tipo    | Tipo de Datos                                         |
| --------- | ------- | ----------------------------------------------------- |
| Requerido | Salida  | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input 1 | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Input 2 | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Time    | Entero                                                |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Remove Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```