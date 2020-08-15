# Microonde

Il Microonde riscalda gli oggetti alimentari.

## Ricette Microonde Predefinite

- Manzo -> Carne Cotta
- Patata -> Patata Al Forno

## Rimozione

## Rimuovere le ricette a microonde corrispondenti.

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient);

// Rimuovi ricette che richiedono una patata
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Rimuovi le ricette che si traducono in Manzo cotto
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Rimuovi tutte le ricette
mods.cfm.Microwave.remove();
```

## Aggiunta

## Aggiungi una ricetta a microonde.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta che fa un 4 bastoncini da una canna da zucchero
mods. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```