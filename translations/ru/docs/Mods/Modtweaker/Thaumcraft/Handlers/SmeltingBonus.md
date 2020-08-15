# Плавка

Этот пакет позволяет добавлять и удалять вещи в или из бонусного списка Плавки.  
Список Плавки запрашивается всякий раз, когда используется предмет для приготовления ферментной печи.

## Импорт пакета

Вы можете [импортировать](/AdvancedFunctions/Import/) пакет и его методы для облегчения извлечения методов.

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## Добавление элементов

Примечание: Вход должен быть либо IItemStack, либо IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Удаление элементов

Примечание: Вход должен быть либо IItemStack, либо IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```