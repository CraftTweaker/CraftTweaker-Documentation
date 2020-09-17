# Транмутация Звёздного Света

Вы можете добавить и удалить трансмутации Звёздного Света

## Звонок

Вы можете вызвать пакет LightTransmutations с помощью `mods.astralsorcery.LightTransmutation`.

## Удаление

Эта функция удаляет первый рецепт, который он обнаружил, что возвращает предоставленный [IItemStack](/Vanilla/Items/IItemStack/) `output` и использует `matchStack` , чтобы определить, должно ли он совпадать с метаданными.  
Если есть несколько рецептов, возвращающих предоставленный выход, вам нужно вызвать этот метод несколько раз!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Сложение

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, двойной стоимости);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```