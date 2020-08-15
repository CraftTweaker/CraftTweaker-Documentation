# Congélation

Le congélateur est le compartiment inférieur du frigo.

Il peut être utilisé pour geler des objets, mais nécessite de la glace pour fonctionner.

## Recettes de congélation par défaut

- Seau d'eau -> Glace
- Glace -> Glace empaquetée
- Seau de lave -> Obsidienne
- Slimeball -> Boule de neige
- Pomme de terre toxique -> Pomme de terre
- Chair pourrie -> Chair

## Enlèvement

## Retirez les recettes de congélation correspondantes.

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final Igredient input);

// Supprime les recettes qui résultent en Ice
mods.cfm.Freezer. emove(<minecraft:ice>);
// Supprime les recettes qui nécessitent un Bucket Lava
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Supprime toutes les recettes
mods.cfm.Freezer.remove();
```

## Ajout en cours

Ajouter une recette de congélateur.

## Ne prend en charge que les entrées de taille 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Ajoute une recette qui fait 16 Glaces à partir d'une Lava Bucket
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Ajoute une recette qui fait 16 Obsidienne à partir d'un seau d'eau
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Ajoute une recette qui fabrique un seau d'eau à partir d'un seau
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```