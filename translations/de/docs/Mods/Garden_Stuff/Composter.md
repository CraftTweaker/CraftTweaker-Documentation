# Komponist
## Paket
`mods.gardenstuff. importieren.Kompost-Band;`

## Methoden
- **[IItemStack](/Vanilla/Liquids/IItemStack/) Element** Das zu kompostierende Element.
- **int ProzessTime** Menge an Energie, die pro Ticker in einer Basismaschine erzeugt wird.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** Ein oreDictionary Eintrag.

## Kompostierbares Element hinzufügen
```zenscript
mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Kompostbarer OreDictionary Eintrag hinzufügen
```zenscript
mods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);
```
