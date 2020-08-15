# Händler

## Befehle

Die folgenden Befehle werden hinzugefügt, um Informationen über die verfügbaren Händlerberufe & zurückzuholen:

- `/ct Händlerberufe` - gibt eine Liste gültiger Händlerberufe aus
- `/ct Händler Karrieren [profession]` - gibt ein Protokoll gültiger Karrieren für alle oder den angegebenen Beruf aus

## Paket

`mods.rockytweaks.Merchant`

## Addition

Trades können einem bestimmten Händlerberuf & hinzugefügt werden.

```zenscript
// addTrade(String-Beruf, String-Karriere, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Entfernen

Das Entfernen des Händlers ist derzeit nicht möglich.
