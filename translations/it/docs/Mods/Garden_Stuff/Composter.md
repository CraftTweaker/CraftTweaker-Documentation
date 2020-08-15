# Composter
## Pacchetto
`import mods.gardenstuff.CompostBin;`

## Metodi
- **[IItemStack](/Vanilla/Liquids/IItemStack/) item** L'elemento da compostare.
- **int processTime** Quantità di energia creata per tick in una macchina a linea di base.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** An oreDictionary entry.

## Aggiungi Elemento Compostabile
```zenscript
mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Aggiungi voce per il dizionario orale compostabile
```zenscript
mods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);
```
