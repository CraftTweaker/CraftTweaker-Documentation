# Tavola Di Chopping

Il tagliere permette di tagliare un oggetto in molti pezzi di un altro oggetto.

Per impostazione predefinita taglia solo il pane in 6 fette di pane.

## Rimozione Delle Ricette Di Ritaglio

## Rimuovere le ricette di taglio corrispondenti.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Rimuovi la ricetta con il pane come elemento di input
mods.cfm.ChoppingBoard. emove(null,<minecraft:bread>);
// Rimuovi le ricette che danno luogo a 6 fette di pane (stessa corrispondenza di quella sopra la ricetta, quindi non avrà effetto se usato dopo)
mods. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## Aggiunta Di Ricette Di Ritaglio

Aggiungi una ricetta da tritare.

## L'input richiede la dimensione dello stack di 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull finale IItemStack output, @Nonnull finale IItemStack input);

// Aggiungi una ricetta per tagliare il grano in 2 bastoncini
mods.cfm.ChoppingBoard. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Aggiungi una ricetta per tagliare il pane in 3 grano
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```