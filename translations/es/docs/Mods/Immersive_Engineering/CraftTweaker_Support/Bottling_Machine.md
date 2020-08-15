# Bottling Machine

## Calling The Package

You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Añadir Receta

| Requerido | Tipo   | Tipo de Datos                                         |
| --------- | ------ | ----------------------------------------------------- |
| Requerido | Salida | [IItemstack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input  | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Fluido | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Remove Recipe

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```