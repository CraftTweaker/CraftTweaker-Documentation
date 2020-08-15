# Die Masse

## Paket

`importieren mods.enderio.Vat;`

## Methode

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** - Die Ausgangsflüssigkeit (rechter Panzer).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** - Die Eingangsflüssigkeit (linker Tank).

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Items die in Slot 1 gehen können.

**float[] slot1Mults** - Die Multiplikatoren für die Artikel in Slot 1. Muss die gleiche Länge wie Slot1Solids sein.

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Items die in Slot 2 gehen können.

**float[] slot2Mults** - Die Multiplikatoren für die Artikel in Slot 2. Muss die gleiche Länge wie slot2Solids sein.

**@Optional int energyCost** - Wie viel FE das Rezept verwendet. Standard ist 5000.

## Addition

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack Output, ILiquidStack Input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

Mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Entfernen

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack output);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```