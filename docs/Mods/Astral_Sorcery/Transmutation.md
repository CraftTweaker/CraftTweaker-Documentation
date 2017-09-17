# Starlight Transmutation

You can add and remove Starlight Transmutations


## Calling
You can call the LightTransmutations package using `mods.astralsorcery.LightTransmutation`.  

## Removing
This function removes the first recipe it finds that returns provided [IItemStack](/Vanilla/Items/IItemStack) `output` and uses `matchStack` to determine whether it should also match Metadata.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```JAVA
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Addition
```
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, double cost);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```