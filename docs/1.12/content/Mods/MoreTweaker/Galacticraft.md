# Galacticraft

### Circuit Fabricator

```
import moretweaker.galacticraft.CircuitFabricator;

CircuitFabricator.add(IItemStack output, IIngredient[] inputs);

CircuitFabricator.remove(IItemStack output);
```

### Compressor

```
import moretweaker.galacticraft.Compressor;

Compressor.addShaped(IItemStack output, IItemStack[][] inputs);

Compressor.addShapeless(IItemStack output, IIngredient[] inputs);

Compressor.remove(IItemStack output);
```