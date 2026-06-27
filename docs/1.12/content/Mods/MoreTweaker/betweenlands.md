# The Betweenlands

### Animator

```
import moretweaker.betweenlands.Animator;

Animator.addRecipe(IItemStack input, int fuel, int life, IItemStack output);

Animator.addRecipe(IItemStack input, int fuel, int life, String entity);

Animator.removeRecipe(IIngredient output);

Animator.removeRecipe(String entityOutput);

Animator.removeAll();
```

Entity can for example be `minecraft:wither`.

### Compost Bin

```
import moretweaker.betweenlands.Composter;

Composter.addRecipe(IIngredient input);

Composter.addRecipe(IIngredient input, int compostValue, int compostTime);
```

### Druid Altar

The inputs array must have a length of 4.

```
import moretweaker.betweenlands.DruidAltar;

DruidAltar.addRecipe(IItemStack output, IIngredient[] inputs);

DruidAltar.removeRecipe(IIngredient output);

DruidAltar.removeAll();
```

### Pestle & Mortar

```
import moretweaker.betweenlands.Mortar;

Mortar.addRecipe(IIngredient input, IItemStack output);

Mortar.removeRecipe(IIngredient output);

Mortar.removeAll();
```

### Purifier

```
import moretweaker.betweenlands.Purifier;

Purifier.addRecipe(IIngredient input, IItemStack output);

Purifier.removeRecipe(IIngredient output);

Purifier.removeAll();
```