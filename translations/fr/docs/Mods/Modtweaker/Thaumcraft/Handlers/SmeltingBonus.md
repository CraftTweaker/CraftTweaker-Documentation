# Bonus de fusion

Ce pack vous permet d'ajouter et de supprimer des objets de la liste bonus de Fonderie.  
La liste des bonus de fusion est interrogée chaque fois qu'un four infernal prépare un objet.

## Importation du paquet

Vous pouvez [importer](/AdvancedFunctions/Import/) le paquet et ses méthodes pour faciliter la récupération des méthodes.

```zenscript
Importer mods.thaumcraft.SmeltingBonus;
```

## Ajout d'éléments

Notice: L'entrée doit être soit un IItemStack soit un IOreDictEntry

```zenscript
//mods.thaumcraft.Smeltingbonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Suppression des éléments

Notice: L'entrée doit être soit un IItemStack soit un IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```