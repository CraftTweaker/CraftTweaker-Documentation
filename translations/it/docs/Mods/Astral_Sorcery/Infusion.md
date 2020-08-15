# Ricette Infusione Starlight

È possibile aggiungere e rimuovere le infusioni di creazione.

## Chiamata

Puoi chiamare il pacchetto InfusionRecipe usando `mods.astralsorcery.StarlightInfusion`.

## Rimozione

Questo rimuoverà la prima infusione che trova che crea l'output [IItemStack](/Vanilla/Items/IItemStack/) `fornito`.  
Se ci sono più ricette che restituiscono l'output fornito, è necessario chiamare questo metodo più volte!

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Addizione

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumption Chance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```