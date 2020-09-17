# Trapano Laser

### Importazione

```zenscript
import mods.industrialforegoing.LaserDrill;
```

### Aggiunta

```zenscript
LaserDrill.add(int itemLensMetaColor, IItemStack output, int ItemWeight);

LaserDrill.add(1, <minecraft:stone>, 10);
```

### Rimozione

```zenscript
LaserDrill.remove(IItemStack output);

LaserDrill.remove(<minecraft:stone>);
```