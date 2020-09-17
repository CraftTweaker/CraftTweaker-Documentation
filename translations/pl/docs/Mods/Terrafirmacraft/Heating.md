# Ogrzewanie

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Ogrzewanie;
```

## Dodanie

```zenscript
Ogrzewanie.addRecipe(String registryName, IItemStack, wyjście IItemStack, transformacja float, maks.Temp);
```
- przekształć temperaturę, w której przepis całkowicie przekształca dane wejściowe w stos wyjściowy.
- maxTemp to temperatura, w której wejście jest niszczone. Aby uzyskać pełne odniesienie, sprawdź [Temperatury ogrzewania](/Mods/Terrafirmacraft/HeatingTemperatures)

## Usuwanie

```zenscript
Ogrzewanie.removeRecipe(wyjście IItemStack);
Ogrzewanie.removeRecipe(RejeststryName);
```