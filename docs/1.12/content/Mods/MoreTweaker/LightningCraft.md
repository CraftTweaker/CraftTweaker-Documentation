# LightningCraft

### Lightning Transforming

```
import moretweaker.lightningcraft.LightningTransforming;

LightningTransforming.add(IItemStack output, IItemStack[] inputs);
```

### Lightning Crusher

```
import moretweaker.lightningcraft.LightningCrusher;

LightningCrusher.add(IItemStack output, IIngredient input);

LightningCrusher.remove(IIngredient output);

LightningCrusher.removeAll();
```

### Lightning Infusion

```
import moretweaker.lightningcraft.LightningInfusion;

LightningInfusion.add(IItemStack output, IIngredient catalyst, int requiredLE, IIngredient[] inputs);

LightningInfusion.remove(IIngredient output);

LightningInfusion.removeAll();
```