# Раствор

## Пакет
`mods.alchemistry.Раствор`

## Методы
- **[IItemStack](/Vanilla/Items/IItemStack/) ввода** - Ввод рецепта.
- **boolean относительная вероятность** - Подсчет вероятностей
- **int rolls** - Возможность ролей
- **вероятностные группы** - массив массивов с двойным значением, за которым следуют любые # из [IItemStack](/Vanilla/Items/IItemStack/)s. Двойной относится к вероятности того, что группа окажется в группе.

## Сложение
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Удаление
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();
```

# Примечания
Для облегчения разработки модификации существующих рецептов dissolver существует команда, просто /dissolver для получения рецепта мастерства для предмета, который вы держите и скопируйте его в буфер обмена

Если относительная вероятность верна, то каждая вероятность будет рассчитываться исходя из суммы всех вероятностей. В приведенном выше примере есть 33,3% шансов выпустить камень каждый бросок и 66. % шанс выпустить песок и железную руду.

Если относительная вероятность является ложной, то эти числа являются абсолютными процентами, т.е. a 10% шанс выпустить камень и 20% шанс вывоза железной руды (независимо от того, был ли камень выработан). Вероятность поддерживаются с плавающей точкой, поэтому 4.5 будет означать 4,5%

