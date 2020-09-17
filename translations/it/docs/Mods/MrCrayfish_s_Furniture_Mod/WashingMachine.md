# Lavatrice

La Lavatrice permette di pulire i vestiti sporchi.

Per difetto ripara la durata di armatura di vaniglia, compreso l'Elytra.

## Rimozione

## Rimuovere gli articoli lavabili corrispondenti.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Rimuovi tutti gli articoli lavabili.
mods.cfm.WashingMachine.remove();
```

## Aggiunta

## Aggiungi un oggetto lavabile.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.( add(<minecraft:leather_boots>);
```