# Создание взрыва

Взрывной Создатель используется для преобразования одного предмета в другой, подвергая его взрыву, когда он является предметом на земле. Можно задать настраиваемую (случайную) скорость потерь. По умолчанию используется для конвертации железных слитков в сжатые железные слитки со скоростью потери 20%.

## Звонок

Вы можете вызвать пакет взрывного создания, используя `mods.pneumaticcraft.explosioncrafting`

## Удаление

Эта функция удаляет первый рецепт, который он находит с данным [IIngredient](/Vanilla/Variable_Types/IIngredient/) `вывод`:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngredient output);
// Пример
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Эта функция удаляет *всех рецептов взрыва*:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## Добавление

Эти функции используются для добавления новых рецептов взрыва:

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);

// Пример
модов. neumaticcraft.explosioncrafting.removeAllRecipes();
// Набор экспертного режима может сделать очень плохой выбор из обычного железа, а сталь гораздо лучше.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncraft. ddRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// Способ создания множества незер кирпич, за счет среднего арифметического 4x стоимость модификаций Netherrack
. neumaticcraft.explosioncraft.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```