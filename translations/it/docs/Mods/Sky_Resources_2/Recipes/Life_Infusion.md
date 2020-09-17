# Infusione Di Vita

La confezione *infusione* viene utilizzata per aggiungere o rimuovere ricette da/per il processo di Life Infusion.

## Chiamata

Puoi chiamare il pacchetto *infusione* usando `mods.skyresources.infusion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.infusion.addRecipe(IItemStack output, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```