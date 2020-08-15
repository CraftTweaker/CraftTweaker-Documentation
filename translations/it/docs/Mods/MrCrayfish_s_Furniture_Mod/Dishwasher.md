# Lavastoviglie

La lavastoviglie consente di pulire gli strumenti sporchi.

Per impostazione predefinita ripara la durata di strumenti di vaniglia e solo le armi.

## Rimozione

## Rimuovere gli articoli lavabili corrispondenti.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Rimuovi tutti gli elementi lavabili.
mods.cfm.Dishwasher.remove();
```

## Aggiunta

## Aggiungi un oggetto lavabile.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```