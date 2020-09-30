# Composter
## Package
`import mods.gardenstuff.CompostBin;`

## Methods
- **[IItemStack](/Vanilla/Liquids/IItemStack/) item** The item to be composted.
- **int processTime** Amount of energy created per tick in a base-line machine.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** An oreDictionary entry.

## Add Compostable Item
```zenscript
mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Add Compostable oreDictionary Entry
```zenscript
mods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);
```
