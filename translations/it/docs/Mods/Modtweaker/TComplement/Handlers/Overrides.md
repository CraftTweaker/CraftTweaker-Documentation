# Sostituisce

Il pacchetto Overrides è usato per aggiungere/rimuovere ricette da/alle Override melter.

## Chiamata

Puoi chiamare il pacchetto Overrides usando `mods.tcomplement.Overrides`

## Sostituisce l'aggiunta dell'elemento

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack output, IItemStack input, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Sostituisce la rimozione delle voci

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack output, @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```