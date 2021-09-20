# Fermenter

The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Hinzufügen des Packages

You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Rezept hinzufügen

| Benötigt | 类型     | Datentyp                                                |
| -------- | ------ | ------------------------------------------------------- |
| Benötigt | 输出     | [IItemStack](/Vanilla/Items/IItemStack/)                |
| Benötigt | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |
| Benötigt | 输入     | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energy | 整型                                                      |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| 类型 | Datentyp                                     |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| 类型 | Datentyp                                      |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```