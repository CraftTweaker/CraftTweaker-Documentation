# Komposter
## Pakiet
`importuj mods.ogrodnictwo.kompostowa;`

## Metody
- **[element IItemStack](/Vanilla/Liquids/IItemStack/)** Przedmiot do kompostowania.
- **int processTime** Ilość energii wytworzonej na tick w maszynie bazowej.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** Wpis oreDictionary.

## Dodaj element kompostowalny
```zenscript
mods.ogrody.CompostBin.add(element IItemStack, int processTime);

mods.ogrody.CompostBin.add(<minecraft:carrot>, 150);
```

## Dodaj kompostowalny wpis słownika
```zenscript
mods.ogrody.CompostBin.add(oredictKey, int processTime);

mods.ogrody.CompostBin.add(<ore:cropCarrot>, 150);
```
