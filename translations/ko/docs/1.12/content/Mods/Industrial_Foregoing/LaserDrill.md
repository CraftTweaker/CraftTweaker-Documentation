# Laser Drill

### Importing

```zenscript
import mods.industrialforegoing.LaserDrill;
```

### Adding

```zenscript
LaserDrill.add(int itemLensMetaColor, IItemStack output, int ItemWeight);

LaserDrill.add(1, <minecraft:stone>, 10);
```

### Removing

```zenscript
LaserDrill.remove(IItemStack output);

LaserDrill.remove(<minecraft:stone>);
```