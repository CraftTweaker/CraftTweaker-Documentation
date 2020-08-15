# Tostapane

Il Tostapane prescrive cibo per iniziare la giornata.

## Ricette Tostapane Predefinite

- Manzo -> Carne Cotta
- Salsiccia -> Salsiccia Cotta
- Kebab -> Kebab Cotto

## Rimozione

## Rimuovere le ricette del tostapane corrispondenti.

```zenscript
mods.cfm.Toaster.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Rimuovi le ricette che fanno toast da una fetta di pane
mods. fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Rimuovi tutte le ricette
mods.cfm.Toaster.remove();
```

## Aggiunta

Aggiungi una ricetta tostapane.

## Supporta solo ingressi di dimensione 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta che rende Pane da Grano
mods.cfm. oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Aggiungere una ricetta che rende il manzo cotto di manzo
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```