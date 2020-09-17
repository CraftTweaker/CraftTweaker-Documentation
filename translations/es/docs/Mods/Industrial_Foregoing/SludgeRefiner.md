# Sludge Refiner

### Importando

```zenscript
importar mods.industrialforegoing.SludgeRefiner;
```

### Agregando

```zenscript
SludgeRefiner.add(IItemStack output, int ItemWeight);

SludgeRefiner.add(<minecraft:wheat_seeds>, 10);
```

### Eliminando

```zenscript
SludgeRefiner.remove(IItemStack output);

SludgeRefiner.remove(<minecraft:wheat_seeds>);
```