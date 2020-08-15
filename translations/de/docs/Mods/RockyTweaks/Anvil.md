# Amboss

## Paket

`mods.rockytweaks.Amboss`

## Addition

### Einzeln

Erstellt einzelne Ambossrezepte, die separat in JEI angezeigt werden.

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Rezept-Set

Erstellt mehrere Ambossrezepte, die JEI durch die möglichen Optionen wechselt.

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

## Entfernen

Der Amboss verwendet keine Rezepte im normalen Sinne, aber du kannst trotzdem bestimmte Eingaben oder Ausgänge entfernen/blacklisten lassen.

```zenscript
// Entfernen(IZutritt[] Eingänge)
// // entfernen(IIngrediente Ausgabe) - Entferne eine Ausgabe

// Blacklist Mending Enchant (Eingabetaste)
Anvil. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V an einem Diamantschwert (Eingabetaste)
Mods. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Verzauberte Bücher Blacklist (output)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
