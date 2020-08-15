# Micro-ondes

Le micro-ondes chauffe les aliments.

## Recettes micro-ondes par défaut

- Boeuf -> Boeuf cuit
- Patate -> Pomme de terre cuite

## Enlèvement

## Retirez les recettes de micro-ondes correspondantes.

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final Igredient input);

// Supprime les recettes qui nécessitent un Potato
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Supprime les recettes qui aboutissent au boeuf cuit
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Supprime toutes les recettes
mods.cfm.Microwave.remove();
```

## Ajout en cours

## Ajouter une recette micro-ondes.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette qui fait un 4 sticks à partir d'une canne à sucre
mods. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```