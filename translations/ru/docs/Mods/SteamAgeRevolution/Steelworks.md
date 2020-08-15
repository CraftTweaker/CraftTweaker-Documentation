# Стальные работы

Стальные работы - это машина, которая преобразует входной элемент и жидкость в выходной элемент с помощью пара.

## Звонок

Вы можете вызвать пакет Steelworks с помощью `mods.steamagerevolution.Steelworks`.

## Удаление

Эта функция удаляет первый рецепт, который он находит с данным [IItemStack](/Vanilla/Items/IItemStack/) `вывод`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack);

// Примеры
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Эта функция удаляет *все* рецепты, определенные в настоящее время для стальных работ:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Добавление

Эта функция используется для добавления новых рецептов для сталеплавильных работ:

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// Примеры
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200;
```
