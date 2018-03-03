# Anvil

## Package

`mods.rockycore.Anvil`

## Addition

### Single

Creates individual anvil recipes that a displayed separately in JEI.

```java
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockycore.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Recipe Set

Creates multiple anvil recipes that JEI cycles through the possible options.

```java
// addRecipe(IItemstack input1, IItemstack[] input2, IItemstack[] output, int[] exp-cost);
mods.rockycore.Anvil.addRecipe(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32
  ],
  [
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32
  ]
);
```

## Removal

The anvil does not use recipes in the normal sense but you are still able to remove/blacklist specific inputs or outputs.

```java
// remove(IIngredient[] inputs)
// remove(IIngredient output) - Remove an output

// Blacklist Mending Enchant (input)
Anvil.remove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V on a Diamond Sword (inputs)
mods.rockycore.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Blacklist Enchanted Books (output)
mods.rockycore.Anvil.remove(<minecraft:enchanted_book>);
```
