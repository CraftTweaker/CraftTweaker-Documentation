# Mine Bay

Du kannst Gegenstände auf Minebay handeln.

## Standard-Trades

- Gehärtete Ton für 1x Smaragd
- Schädel für 8x Smaragd
- Sattel für 4x Smaragd
- Spawn Ei (Meta 100, macht nichts) für 8x Smaragd
- Diamant Pferderüstung für 8x Diamant
- Flasche O' Verzauberung für 1x Eisenbarren
- 4x Feuerwerk für 1x Eisenbarren
- Silk Touch verzaubertes Buch für 8x Smaragd
- 2x Nachtsicht Trank (3:00) für 1x Smaragd
- Rezept Buch gegeben 1x Smaragd

## Entfernen

## Entfernen Sie passende Trades.

```zenscript
mods.cfm.MineBay.remove(@Optionaler IIngredienten-Item);

// Handel entfernen, der zu einem Nachtvision Trank (mit beliebiger Menge)
Modi führt. fm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// Alle Trades entfernen
mods.cfm.MineBay.remove();
```

Derzeit unterstützt das Entfernen nur nach dem Handelsergebnis.

## Hinzufügen

## Handel hinzufügen.

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack item, @Nonnull IItemStack currency);

// Trading für 42 Sticks mit 13 Diamanten
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>. ithAmount(13));
// Handel für 16 gegebene Äpfel hinzufügen
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>. ithAmount(3));
// Handel für 1 Smaragd 1 Zuckerbrot hinzufügen
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```