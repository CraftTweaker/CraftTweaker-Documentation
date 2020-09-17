# Transmutacja Gwiazdy

Możesz dodawać i usuwać Transmutacje Starlight

## Dzwonienie

Możesz wywołać pakiet LightTransmutations używając `mods.astralsorcery.LightTransmutation`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajdzie zwrot dostarczony [IItemStack](/Vanilla/Items/IItemStack/) `wyjścia` i używa `dopasowania` , aby ustalić, czy powinien on również pasować do metadanych.  
Jeśli istnieje wiele receptur, które zwracają podaną wartość, musisz zadzwonić do tej metody wielokrotnie!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Dodanie

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, podwójny koszt);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, , 10);
```