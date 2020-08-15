# Schrottkiste

## Paket

`importieren mods.ic2.ScrapBox;`

## Methoden

- **[Gewichtetes Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) gewichteter Gegenstand** Der neue Eintrag des Schrottkastenbeckens. Prozentuales Gewicht wird durch 100 geteilt.
- **Fließgewicht** Das Gewicht dieses neuen Eintrags

### Drop hinzufügen (WeightedItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Drop hinzufügen (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(IItemStack item, float weight);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Entfernen

- Wenn IC2 Classic Tweaker installiert ist und Ic2 Classic anstelle von Ic2 Experimental verwendet wird, können Schrottboxen entfernt werden. Siehe [hier](/Mods/IC2ClassicTweaker/Scrap_Box) für Doc.
- Wenn Ic2 Experimental verwendet wird, ist eine Entfernung nicht möglich.