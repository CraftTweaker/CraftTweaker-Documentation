# Scrigno Rottami

## Pacchetto

`import mods.ic2.ScrapBox;`

## Metodi

- **[WeightedItemStack](/Vanilla/Items/WeightedItemStack/) weightedItem** The new entry of scrap box drop pool. La percentuale di peso sarà divisa per 100.
- **float weight** The weight of this new entry

### Aggiungi Goccia (WeightedItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Aggiungi goccia (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(IItemStack item, float weight);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Rimozione

- Se IC2 Classic Tweaker è installato e Ic2 Classic viene utilizzato al posto di Ic2 Experimental, le gocce di scatola di rottami possono essere rimosse. Vedi [qui](/Mods/IC2ClassicTweaker/Scrap_Box) per il doc.
- Se si utilizza Ic2 Experimental, la rimozione non è possibile.