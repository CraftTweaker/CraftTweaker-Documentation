# Compostage

## Paquet
```zenscript
Compost
```

## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **Chance flottante** La chance doit être entre 0 et 1.
- **Couleur de la chaîne de caractères** La couleur est hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.

## Ajouter

Ne prend pas de tableaux dans Igredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Retirer

```zenscript
Retirer tout ();
```