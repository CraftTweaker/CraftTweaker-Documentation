# Fermenter
The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Calling The Package
You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Add Recipe

| Required | Тип    | Data Type                                           |
| -------- | ------ | --------------------------------------------------- |
| Required | Output | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Required | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Energy | Integer                                             |

### Пример
```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## Remove Fluid Recipe
| Тип    | Data Type                                    |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример
```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```



## Remove Item Recipe

| Тип    | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример
```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```



## Remove By Input

| Тип    | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример
```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```