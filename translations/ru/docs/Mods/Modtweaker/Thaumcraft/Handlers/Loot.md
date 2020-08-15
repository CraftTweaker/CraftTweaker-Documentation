# Трофеи Сумки

Этот пакет позволяет вам добавлять и удалять предметы в или из мешки Вещей.

## Импорт пакета

Вы можете [импортировать](/AdvancedFunctions/Import/) пакет и его методы для облегчения извлечения методов.

```zenscript
import mods.thaumcraft.LootBag;
```

## Типы добычи

Необходимо задать массив одного или нескольких чисел от 0 до 2 (включительно) до функций.  
Они определяют тип упаковочной сумки, которая будет затронута.

- 0: Обычный
- 1: Необычный
- 2: Редкий

## Добавление элементов

Внимание: золотые монеты стоимостью 2000 год, алмазы составляют 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Удаление элементов

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```