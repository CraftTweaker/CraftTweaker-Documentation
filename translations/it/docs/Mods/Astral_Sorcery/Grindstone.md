# Grindstone

È possibile utilizzare CrT per aggiungere o rimuovere ricette formano la smerigliatrice AS.

## Chiamata

Puoi chiamare il pacchetto InfusionRecipe usando `mods.astralsorcery.Grindstone`.

## Rimozione

Questo rimuoverà la prima ricetta di rettifica che trova che crea l'output [IItemStack](/Vanilla/Items/IItemStack/) `fornito`.  
Se ci sono più ricette che restituiscono l'output fornito, è necessario chiamare questo metodo più volte!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Addizione

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```