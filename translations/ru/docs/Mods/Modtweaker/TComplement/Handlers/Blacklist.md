# Черный список

Пакет Blacklist используется для добавления/удаления рецептов из/в черный список.

## Звонок

Вы можете вызвать пакет Blacklist с помощью `mods.tcomplement.Blacklist`

## Добавление черного списка

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack, ввод IItemStack);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Удаление записи черного списка

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```