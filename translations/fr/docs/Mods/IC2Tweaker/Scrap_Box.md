# Scrap Box

## Package

`import mods.ic2.ScrapBox;`

## Methods

- **[WeightedItemStack](/Vanilla/Items/WeightedItemStack/) weightedItem** The new entry of scrap box drop pool. Percentage weight will be divided by 100.
- **float weight** The weight of this new entry

### Add Drop (WeightedItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Add Drop (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(IItemStack item, float weight);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Removal

- If IC2 Classic Tweaker is installed and Ic2 Classic is being used instead of Ic2 Experimental, scrap box drops can be removed. See [here](/Mods/IC2ClassicTweaker/Scrap_Box) for doc.
- If using Ic2 Experimental, then removal is not possible.