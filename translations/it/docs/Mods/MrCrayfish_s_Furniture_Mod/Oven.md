# Microonde

Il Microonde riscalda gli oggetti alimentari.

## Ricette Microonde Predefinite

- Manzo -> Carne Cotta
- Carne Di Maiale -> Cotta Di Maiale
- Patata -> Patata Al Forno
- Pollo -> Pollo Cotto
- Pesce -> Pesce Cotto
- Salmone -> Salmone Cotto
- Carne -> Carne Cotta

## Rimozione

## Rimuovere le ricette del forno corrispondenti.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient);

// Rimuovi le ricette che portano a Cooked Flesh
mods.cfm.Oven. emove(<cfm:item_flesh_cooked>);
// Rimuovi ricette che richiedono una patata
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Rimuovi tutte le ricette
mods.cfm.Oven.remove();
```

## Aggiunta

## Aggiunga una ricetta di forno.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta che fa due mele da un bastone
mods. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```