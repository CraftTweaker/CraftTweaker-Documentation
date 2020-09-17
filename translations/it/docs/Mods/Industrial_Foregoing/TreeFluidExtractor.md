# Estrattore Di Fluido Albero

### Importazione

```zenscript
import mods.industrialforegoing.Extractor;
```

### Aggiunta

```zenscript
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Rimozione

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```