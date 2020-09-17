# Резонатор

ModTweaker позволяет добавлять или удалять дополнительные утилиты 2 рецепта Резонатора

## Звонок

Вы можете вызвать пакет Resonator с помощью `mods.extrautils2.Resonator`

## Удаление

```zenscript
//mods.extrautils2.Resonator.remove(outoutoutout;
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Сложение

```zenscript
<br />//1 ГП = 100 энергии
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
модов. xtrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```