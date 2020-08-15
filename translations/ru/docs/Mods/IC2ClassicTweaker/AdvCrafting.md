# Расширенные Рецепты

## Пакет

```zenscript
импорт mods.ic2.AdvRecips;
```

## Типы рецептов
Существует несколько типов рецептов:

### Рецепты Формы
Формированные Рецепты - это рецепты, в которых имеет значение, в которые входит предмет. Например, вы не можете просто устроить 7 разных размеров стеков железных слитков ни для создания железных штанг. Таким образом, эта форма имеет форму рецепта.

### Рецепты без форм
Рецепты без форм - это рецепты, где только те предметы, которые вы поместите в сетку ремесла, в то время как форма не имеет значения. Например, синяя и желтая краска создадут зеленый краситель. Этот рецепт не заботится о том, где вы поставили предмет.

## Добавить рецепты

### addShaped
```zenscript
mods.ic2.AdvRecipes.addShaped(вывод, входы);
```

Это создает рецепт формы для `вывода` , используя `входных данных` в качестве ингредиентов.

`Вывод` является [IItemStack](/Vanilla/Items/IItemStack/)  
`входами` является [Ingredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (см. ниже)

`входов` является 2 измерений [IIngredient](/Vanilla/Variable_Types/IIngredient/) массив.  
Таким образом, рецепт железных поножей будет написан как `[[железо,железо,железо],[железо,нуль,железо],[железо, ull,iron]]`  
Если это запутает, попробуйте разбить массивы на один массив на одну строку
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

AdvRecipes. ddShaped(Штаны,
 [[iron * 5,iron * 7,iron * 5],
  [iron * 3,null,iron * 3],
  [железо,null,iron]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(вывод, входы)
```

Это создает бесформенный рецепт для вывода `` с помощью `входов` в качестве ингредиентов.

`вывод` является [IItemStack](/Vanilla/Items/IItemStack/)  
`входов` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (например [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack, компоненты IIngredient[]);
mods.ic2.AdvRecipes.addHiddenShaped(выход IItemStack, IIngredient[][] ингредиентов);
```

Это создает скрытый в форме рецепт для `вывода` с помощью `входов` ингредиентов. 
