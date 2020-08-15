# Micro-ondes

Le micro-ondes chauffe les aliments.

## Recettes micro-ondes par défaut

- Boeuf -> Boeuf cuit
- Côtelette de porc -> Côtelette de porc cuite
- Patate -> Pomme de terre cuite
- Poulet -> Poulet cuit
- Poisson -> Poisson cuit
- Saumon -> Saumon cuit
- Chair -> Chair cuite

## Enlèvement

## Retirer les recettes du four correspondantes.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Supprime les recettes qui résultent en une Chair Cuite
mods.cfm.Oven. emove(<cfm:item_flesh_cooked>);
// Supprime les recettes qui nécessitent un Potato
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Supprime toutes les recettes
mods.cfm.Oven.remove();
```

## Ajout en cours

## Ajouter une recette de four.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette qui fait deux pommes à partir d'un mod
bâton. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>;
```