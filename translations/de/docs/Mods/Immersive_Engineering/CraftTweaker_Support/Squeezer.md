# Squeezer

The Squeezer package can be used to add/remove recipes to/from the Immersive Engineering Squeezer.

## Hinzufügen des Packages

You can call the Squeezer package using `mods.immersiveengineering.Squeezer`.

## Rezept hinzufügen

| Benötigt | Type   | Datentyp                                            |
| -------- | ------ | --------------------------------------------------- |
| Benötigt | Output | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Benötigt | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energy | Integer                                             |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```