# Коробка с ломом

## Пакет

`импорт mods.ic2.ScrapBox;`

## Методы

- **[взвешенный ItemStack](/Vanilla/Items/WeightedItemStack/) взвешенная вещь** Новый вход в пул коробки скрапа. Вес процента будет разделён на 100.
- **вес с плавающей точкой** Вес этой новой записи

### Добавить Drop (взвешенный ItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> 10);
```

### Добавить Drop (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(предмет IItemStack, вес с плавающей точкой);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Удаление

- При установленном IC2 Classic Tweaker и использовании Ic2 Classic вместо Ic2 Экспериментальная коробка скрапа может быть удалена. Смотрите [здесь](/Mods/IC2ClassicTweaker/Scrap_Box) для документации.
- При использовании Экспериментального Ic2 удаление невозможно.