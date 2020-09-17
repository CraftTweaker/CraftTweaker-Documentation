# Mine Bay

Puoi scambiare oggetti su minebay.

## Trades Predefinite

- Argilla indurita per 1x Smeraldo
- Teschio per 8x Smeraldo
- Sella per 4x Smeraldo
- Uovo di Uovo (meta 100, non fa nulla) per 8x Smeraldo
- Armatura di Cavallo di Diamante per 8 x Diamante
- Bottiglia Incantata per 1x Lingotto di Ferro
- 4x Fuochi d'artificio per 1x Lingotto di Ferro
- Libro incantato tocco di seta per 8x Smeraldo
- 2x Pozione di visione notturna (3:00) per 1x Smeraldo
- Ricetta libro dato 1x Smeraldo

## Rimozione

## Rimuovi gli scambi corrispondenti.

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Rimuovere il commercio risultante nella pozione di visione notturna (con qualsiasi quantità)
mods. fm.MineBay.remove(<minecraft:potion>.withTag({Potenza: "night_vision"}));
// Rimuovi tutti gli scambi
mods.cfm.MineBay.remove();
```

Attualmente supporta solo la rimozione dal risultato commerciale.

## Aggiunta

## Aggiungi un'operazione.

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack item, @Nonnull IItemStack currency);

// Aggiungi un commercio per 42 bastoni dati 13 diamanti
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>. ithAmount(13));
// Aggiungere un commercio per 16 mele dato 3 smeraldi
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>. ithAmount(3));
// Aggiungere un commercio per 1 carota dato 1 smeraldo
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```