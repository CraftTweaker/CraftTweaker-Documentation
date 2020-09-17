# Seltener Erdextraktor

## Paket

```zenscript
importieren mods.ic2.RareEarthExtractor;
```

## Methode

- **float Wert**
- **[IItemStack](/Vanilla/Items/IItemStack/)... Eingaben** Kann mehr als einen für die Eingabe angegeben haben. In diesem Fall geben alle angegebenen Elemente den gleichen Wert an.

### Seltene Erdeinträge hinzufügen

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(float value, IItemStack... input);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```