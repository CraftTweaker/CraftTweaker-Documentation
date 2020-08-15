# La Partita

## Pacchetto

`import mods.enderio.Vat;`

## Metodo

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** - Il fluido di uscita (serbatoio di destra).

**[Ingresso ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** - Il fluido di ingresso (serbatoio di sinistra).

**[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Oggetti che possono andare nello slot 1.

**float[] slot1Mults** - I moltiplicatori per gli oggetti nello slot 1. Deve essere la stessa lunghezza di slot1Solids.

**[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Oggetti che possono andare nello slot 2.

**float[] slot2Mults** - I moltiplicatori per gli oggetti nello slot 2. Deve essere la stessa lunghezza di slot2Solids.

**@Optional int energyCost** - Quanto FE usa la ricetta. Predefinito a 5000.

## Addizione

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Rimozione

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack output);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```