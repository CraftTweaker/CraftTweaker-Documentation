# Baumflüssigkeitsextraktor

### Importieren

```zenscript
importiere mods.industrialforegoing.Extractor;
```

### Hinzufügen

```zenscript
Extractor.add(IItemStack Ausgabe, ILiquidStack Fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Entfernen

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```