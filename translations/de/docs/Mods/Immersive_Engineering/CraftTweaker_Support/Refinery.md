# Raffinerie

Das Raffinerie-Paket kann verwendet werden, um Rezepte der Immersive Engineering Raffinerie hinzufügen/zu entfernen.

## Hinzufügen des Packages

Sie können das Refinery Paket mit `mods.immersiveengineering.Refinery` aufrufen.

## Rezept hinzufügen

| Benötigt | Type    | Datentyp                                     |
| -------- | ------- | -------------------------------------------- |
| Benötigt | Output  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Energie | Integer                                      |

### Beispiel

```zenscript
//Beispiel
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Rezept entfernen

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```