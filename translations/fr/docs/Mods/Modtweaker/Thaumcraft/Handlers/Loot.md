# Sacs de butin

Ce pack vous permet d'ajouter et de supprimer des objets vers/depuis les sacs de butin.

## Importation du paquet

Vous pouvez [importer](/AdvancedFunctions/Import/) le paquet et ses méthodes pour faciliter la récupération des méthodes.

```zenscript
Importer mods.thaumcraft.LootBag;
```

## Types de butin

Vous devez fournir un tableau d'un ou plusieurs nombres entre 0 et 2 (inclus) et les fonctions.  
Celles déterminent le type de sac de butin à affecter.

- 0 : Commun
- 1 : Inhabituel
- 2 : Rare

## Ajout d'éléments

Avis: Les pièces d'or ont une valeur de 2000, les diamants sont de 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Suppression des éléments

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```