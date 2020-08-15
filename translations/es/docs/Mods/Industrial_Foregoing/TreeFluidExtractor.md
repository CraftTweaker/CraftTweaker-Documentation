# Tree Fluid Extractor

### Importando

```zenscript
import mods.industrialforegoing.Extractor;
```

### Agregando

```zenscript
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Eliminando

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```