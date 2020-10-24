# Fermenter

The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Hinzufügen des Packages

You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Rezept hinzufügen

| Benötigt | Type   | Datentyp                                            |
| -------- | ------ | --------------------------------------------------- |
| Benötigt | Output | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Benötigt | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energy | Integer                                             |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```