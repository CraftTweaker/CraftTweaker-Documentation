# Sludge Refiner

### Importing

```zenscript
import mods.industrialforegoing.SludgeRefiner;
```

### Adding

```zenscript
SludgeRefiner.add(IItemStack output, int ItemWeight);

SludgeRefiner.add(<minecraft:wheat_seeds>, 10);
```

### Removing

```zenscript
SludgeRefiner.remove(IItemStack output);

SludgeRefiner.remove(<minecraft:wheat_seeds>);
```