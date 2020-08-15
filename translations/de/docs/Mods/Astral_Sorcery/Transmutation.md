# Starlight-Übertragung

Sie können Starlight-Transmutationen hinzufügen und entfernen

## Anruf

Sie können das LightTransmutations-Paket mit `mods.astralsorcery.LightTransmutation` aufrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept das sie findet, das [IItemStack](/Vanilla/Items/IItemStack/) `Ausgabe` zurückgibt und verwendet `MatchStack` , um festzustellen, ob es auch Metadaten entsprechen soll.  
Wenn es mehrere Rezepte gibt, die die angegebene Ausgabe zurückgeben, müssen Sie diese Methode mehrmals aufrufen!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Addition

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, Doppelkosten);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```