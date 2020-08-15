# Дробитель

ModTweaker позволяет добавлять или удалять дополнительные утилиты 2 Дробителя Рецептов

## Звонок

Вы можете вызвать пакет дробилки с помощью `mods.extrautils2.Crusher`

## Удаление

```zenscript
//mods.extrautils2.Crusher.remove(outoutout;
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Сложение

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```