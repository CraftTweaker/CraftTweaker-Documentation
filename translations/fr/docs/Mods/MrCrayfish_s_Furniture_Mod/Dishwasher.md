# Lave-vaisselle

Le lave-vaisselle vous permet de nettoyer les outils sales.

Par défaut, les réparations de la durabilité des outils et des armes en vanille uniquement.

## Enlèvement

## Retirer les objets lavables assortis.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Supprime tous les objets lavables.
mods.cfm.Dishwasher.remove();
```

## Ajout en cours

## Ajouter un article lavable.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```