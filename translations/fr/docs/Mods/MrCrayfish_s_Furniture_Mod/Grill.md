# Grill

Le Grill fait cuire de la nourriture sur des charbons chauds.

Il faut faire cuire les deux côtés.

## Recettes de grille par défaut

- Boeuf -> Boeuf cuit
- Saucisse -> Saucisse cuite
- Kebab -> Kebab Cuit

## Enlèvement

## Retirer les recettes de grill correspondantes.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final Igredient input);

// Supprime les recettes qui nécessitent du boeuf
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Supprime les recettes qui aboutissent à un saucisse cuite
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Supprime toutes les recettes
mods.cfm.Grill.remove();
```

## Ajout en cours

Ajouter une recette de grillade.

## Ne prend en charge que les entrées de taille 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette qui fait un Stick à partir d'un mod
Sausage. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Ajoute une recette qui fait une torche à partir d'un bâton
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```