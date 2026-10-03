# Erebus

Due to the way that Erebus handles it's recipes only `IItemStack`
and `IOreDictEntry` are allowed item ingredients.

### Composter

```
import moretweaker.erebus.Composter;

Composter.add(IItemStack compostable);

Composter.addAll(IItemStack[] compostables);

Composter.remove(IItemStack nonCompostable);

Composter.removeAll(IItemStack[] nonCompostables);
```

### Offering Altar

```
import moretweaker.erebus.OfferingAltar;

OfferingAltar.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, IIngredient input3);

OfferingAltar.removeRecipe(IIngredient output);

OfferingAltar.removeAll();
```

### Smoothie Maker

The parameter named `container` has to be in the output slot
for the recipe to start.

```
import moretweaker.erebus.SmoothieMaker;

SmoothieMaker.addRecipe(IItemStack output, optional IItemStack container, IIngredient[] inputs, ILiquidStack[] fluids);

SmoothieMaker.removeRecipe(IIngredient output);

SmoothieMaker.removeAll();
```