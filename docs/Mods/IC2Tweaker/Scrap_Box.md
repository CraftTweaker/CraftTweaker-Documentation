# Scrap Box

## Package
`import mods.ic2.ScrapBox`

## Add Drop (WeightedItemStack)
```
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

## Add Drop (IItemStack, float)

```
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem, float weight;
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```
