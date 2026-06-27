# Matter Overdrive

### Inscriber

The `energy` value is *FE* and the `time` value is *ticks* (1/20 of a second).

```
import moretweaker.matteroverdrive.Inscriber;

Inscriber.addRecipe(IIngredient input1, IIngredient input2, IItemStack output, int energy, int time);

Inscriber.removeRecipe(IIngredient output);

Inscriber.removeAll();
```

### Matter

```
import moretweaker.matteroverdrive.Matter;

Matter.set(IIngredient input, int matter);
```