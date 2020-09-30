# Refinery

The Refinery package can be used to add/remove recipes to/from the Immersive Engineering Refinery.

## Hinzufügen des Packages

You can call the Refinery package using `mods.immersiveengineering.Refinery`.

## Rezept hinzufügen

| Benötigt | Type    | Datentyp                                     |
| -------- | ------- | -------------------------------------------- |
| Benötigt | Output  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Energy  | Integer                                      |

### Beispiel

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Rezept entfernen

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```