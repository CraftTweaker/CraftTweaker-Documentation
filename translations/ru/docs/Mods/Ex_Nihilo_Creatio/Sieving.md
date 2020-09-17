# Sieving

## Пакет

Чтобы получить доступ к `Sieve` , не уточнив полный путь, вы можете импортировать пакет в верхней части скрипта следующим образом:

```zenscript
import mods.exnihilocreatio.Sieve;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) блок** блок, который выводит вывод.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Элемент, который падает из блока..
- **Шанс плавающего** Шанс должен быть от 0 до 1.

## Строковая сетка

```zenscript
Sieve.addStringMeshRecipe(IIngredient, IItemStack, плавающий шанс);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Кремневая сетка

```zenscript
Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Железная сетка

```zenscript
Sieve.addIronMeshRecipe(IIngredient, IItemStack, плавающий шанс);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Алмазная сетка

```zenscript
Sieve.addDiamondMeshRecipe(IIngredient, IItemStack, плавающий шанс);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Удаление

```zenscript
Sieve.removeAll();
```
