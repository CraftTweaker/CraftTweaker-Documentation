# Редкий Пламенный Экстрактор

## Пакет

```zenscript
import mods.ic2.RareEarthExtractor;
```

## Метод

- **значение с плавающей точкой**
- **[IItemStack](/Vanilla/Items/IItemStack/)... вводит** Может быть больше одного для ввода. Если это так, то все указанные пункты имеют одинаковое указанное значение.

### Добавить редкие записи Земли

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(float value, IItemStack... Ввод);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```