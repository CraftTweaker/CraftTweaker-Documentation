# Tree Fluid Extractor

### Importing

```
import mods.industrialforegoing.Extractor;
```

### Adding

```
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Removing

```
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```
