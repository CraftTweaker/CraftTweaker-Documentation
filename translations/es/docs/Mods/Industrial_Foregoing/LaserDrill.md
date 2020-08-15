# Laser Drill

### Importando

```zenscript
import mods.industrialforegoing.LaserDrill;
```

### Agregando

```zenscript
LaserDrill.add(int itemLensMetaColor, IItemStack output, int ItemWeight);

LaserDrill.add(1, <minecraft:stone>, 10);
```

### Eliminando

```zenscript
LaserDrill.remove(IItemStack output);

LaserDrill.remove(<minecraft:stone>);
```