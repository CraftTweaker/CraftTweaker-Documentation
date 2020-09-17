# Enclume

## Paquet

`Enclume`

## Ajouter

### Simple

Crée des recettes d'enclume individuelles qui sont affichées séparément dans JEI.

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Jeu de recettes

Crée plusieurs recettes d'enclume que JEI passe à travers les options possibles.

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

## Retirer

L'enclume n'utilise pas de recettes dans le sens normal mais vous êtes toujours en mesure de supprimer/blacklister des entrées ou des sorties spécifiques.

```zenscript
// remove(IIngredient[] inputs)
// remove(IIngredient output) - Supprimer une sortie

// Blacklist Mending Enchant (input)
Anvil. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V on a Diamond Sword (inputs)
mods. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Liste noire des livres enchantés (output)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
