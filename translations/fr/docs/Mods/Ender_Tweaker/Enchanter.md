# Enchanteur

## Paquet

`Importer mods.enderio.Enchanter;`

## Méthodes

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) sortie** L'enchantement de sortie.

**- [Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'objet qu'il a utilisé pour faire cet enchantement.

**- int amountPerLevel** Le nombre d'éléments d'entrée par niveau d'enchantement.

**- double costMultiplier** utilisé pour modifier le coût de la recette.

## Ajouter

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition, Ingredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Retirer

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```