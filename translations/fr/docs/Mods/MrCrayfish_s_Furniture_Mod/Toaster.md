# Grille-pain

Le grille-pain dévoile la nourriture pour commencer la journée.

## Recettes du grille-pain par défaut

- Boeuf -> Boeuf cuit
- Saucisse -> Saucisse cuite
- Kebab -> Kebab Cuit

## Enlèvement

## Retirer les recettes de grille-pain correspondantes.

```zenscript
mods.cfm.Toaster.remove(@Optional final Igredient output, @Optional final Igredient input);

// Supprime les recettes qui font Toast à partir d'un mod
de tranches de pain. fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Supprime toutes les recettes
mods.cfm.Toaster.remove();
```

## Ajout en cours

Ajouter une recette de grille-pain.

## Ne prend en charge que les entrées de taille 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette qui fait du pain de blé
mods.cfm. oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Ajoute une recette qui fait du boeuf cuit
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```