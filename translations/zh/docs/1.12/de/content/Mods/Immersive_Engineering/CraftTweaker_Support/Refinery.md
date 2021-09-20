# Refinery

The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Hinzufügen des Packages

You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## Rezept hinzufügen

| Benötigt | 类型     | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Benötigt | 输出     | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | 输入1    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | 输入2    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Energy | 整型                                           |

### Beispiel

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Rezept entfernen

| 类型 | Datentyp                                     |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```