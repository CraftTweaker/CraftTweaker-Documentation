# Quack Lib

### Alloy Furnace

```
import moretweaker.quacklib.AlloyFurnace;

AlloyFurnace.addRecipe(IItemStack output, IIngredient[] inputs);

AlloyFurnace.removeRecipe(IIngredient output);

AlloyFurnace.removeAll();
```

When using ingredients that are matching multiple stacks only
one of them is displayed in JEI. That is not because of
MoreTweaker. It's because of QuackLib JEI support.