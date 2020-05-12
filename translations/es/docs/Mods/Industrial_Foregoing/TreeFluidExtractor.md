# Tree Fluid Extractor

### Importing

```zenscript
import mods.industrialforegoing.Extractor;
```

### Adding

```zenscript
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Removing

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```