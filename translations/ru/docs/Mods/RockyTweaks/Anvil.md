# Наковальня

## Пакет

`mods.rockytweaks.Anvil`

## Сложение

### Одиночный

Создает индивидуальные злобные рецепты, которые отображаются отдельно в JEI.

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Набор рецептов

Создает несколько злых рецептов, которые JEI проводит через возможные варианты.

```zenscript
// addRecipe(IItemstack input1, IItemstack[] input2, IItemstack[] output, int[] exp-cost);
mods.rockytweaks.Anvil. ddRecipe(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32
  ],
  [
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32
  ]
);
```

## Удаление

Накопление не использует рецепты в нормальном смысле, но вы все еще можете удалять/черный список конкретных входов или выводов.

```zenscript
// remove(IIngredient[] inputs)
// remove(IIngredient output) - Удаление выходного результата

// Чёрный список, Mending Enchant (input)
Anvil. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Чёткость черного списка V на алмазном мече (inputs)
моды. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Чёрный список зачарованных книг (вывод)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
