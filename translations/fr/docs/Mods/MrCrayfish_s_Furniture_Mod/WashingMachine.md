# Machine à laver

La machine à laver vous permet de nettoyer les vêtements sales.

Par défaut, répare la durabilité de l'armure vanille, y compris l'Elytra.

## Enlèvement

## Retirer les objets lavables assortis.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Supprime tous les objets lavables.
mods.cfm.WashingMachine.remove();
```

## Ajout en cours

## Ajouter un article lavable.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots> ); 
 mods.cfm.WashingMachine.add( <minecraft:leather_boots> );
```