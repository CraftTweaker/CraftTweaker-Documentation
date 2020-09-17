# Planche à découper

La planche à découper vous permet de couper un objet en plusieurs morceaux d'un autre objet.

Par défaut, il suffit de couper le pain en 6 tranches de pain.

## Suppression des recettes hachées

## Retirer les recettes de hachage correspondantes.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final Igredient output, @Optional final IIngredient input);

// Supprime la recette avec du pain comme élément d'entrée
mods.cfm.ChoppingBoard. emove(null,<minecraft:bread>);
// Supprime les recettes qui aboutissent à 6 tranches de pain (même correspondance que la recette ci-dessus, donc n'aura aucun effet si utilisé après)
mods. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## Ajout de recettes hachées

Ajouter une recette de hachage.

## L'entrée nécessite une taille de pile de 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette pour couper le blé en 2 sticks
mods.cfm.ChoppingBoard. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Ajoute une recette pour couper du pain dans 3 wheat
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```