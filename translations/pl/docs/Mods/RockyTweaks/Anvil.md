# Kowadło

## Pakiet

`mods.rockytweaks.Kowadło`

## Dodanie

### Pojedyncze

Tworzy indywidualne receptury kowadła, które są wyświetlane osobno w JEI.

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Zestaw przepisów

Tworzy wiele przepisów na kowadło, które JEI cykluje przez możliwe opcje.

```zenscript
// addRecipe(IItemstack input1, IItemstack[] input2, IItemstack[] output, int[] exp-cost);
mods.rockytweaks.Anvil. ddReceptura(<minecraft:book>,
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

## Usuwanie

Kowadło nie używa receptur w normalnym sensie, ale nadal możesz usunąć/czarną listę konkretnych wejść lub wyjść.

```zenscript
// remove(IIngredient[] wejścia
// remove(IIngredient output) - Usuń wyjście

// Czarna lista Mending Enchant (input)
Anvil. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Czarna lista ostrości V na diamentowym mieczu (wejście)
mody. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Blacklist Zaklęte Książki (wyjście)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
