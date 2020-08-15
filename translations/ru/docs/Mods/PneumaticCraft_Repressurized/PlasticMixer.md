# Пластиковый микшер

Plastic Mixer это машина с двумя функциями:

* Для уплотнения жидкой жидкости жидкой жидкости в твердые пластиковые листы, используя красные, зеленые и синие краски для окрашивания листов.
* Плавить твердые пластиковые листы в жидкую пластмассу. Для этого требуется минимальная температура 150°С (423K).

Поддержка Craftweaker добавляет возможность задавать любую комбинацию предметов и жидкости для целей плавления и/или уплотнения. Можно указать, что товары должны быть расплавлены, жидкости должны быть уплотнены или разрешены двухсторонний процесс.

В то время как целевой предмет для затвердевания может быть любым предметом, здесь есть смысл использовать цветные вещи. Так как краска всегда используется, независимо от того, является ли выводимый элемент или нет.

## Звонок

Пакет Plastic Mixer можно вызвать с помощью `mods.pneumaticcraft.plasticmixer`.

## Удаление

Эта функция удаляет первый рецепт, который он найдет, используя данный [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `входной`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// Пример
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Эта функция удаляет *всех* рецептов пластического микшера:

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Добавление

Для добавления рецептов к ППС можно использовать следующие функции:

```zenscript
// Добавляем двухсторонний рецепт (температура в Кельвине)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack, int temperature);

// Добавляем рецепт, разрешающий уплотнение только
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(ILiquidStack liquidInput, IItemStack itemput);

// Добавляем рецепт, позволяющий плавить только (температура в Кельвине)
mods.pneumaticcraft.plasticmixer. ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Пример: конвертация 100mB Lava в/из бетона (плавка при 573K)
модов. neumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Пример: конвертация Масляной 2000mB в пластиковую (но не позволяющая перетаскивать)
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Пример: конвертировать пластическое масло в 100mB при 473K (но не допускать утепления)
модов. neumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```