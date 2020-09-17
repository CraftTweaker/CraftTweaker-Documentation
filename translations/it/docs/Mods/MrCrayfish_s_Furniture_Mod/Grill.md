# Griglia

La Grill cuocia il cibo sopra carboni caldi.

Richiede di capovolgere il cibo per cucinare entrambi i lati.

## Ricette Di Griglia Predefinite

- Manzo -> Carne Cotta
- Salsiccia -> Salsiccia Cotta
- Kebab -> Kebab Cotto

## Rimozione

## Rimuovere le ricette grill corrispondenti.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient);

// Rimuovi ricette che richiedono manzo
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Rimuovi le ricette che si traducono in una salsiccia cotta
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Rimuovi tutte le ricette
mods.cfm.Grill.remove();
```

## Aggiunta

Aggiungi una ricetta alla griglia.

## Supporta solo ingressi di dimensione 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta che fa un bastone da una salsiccia
mods. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Aggiungi una ricetta che fa una torcia da un bastone
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```