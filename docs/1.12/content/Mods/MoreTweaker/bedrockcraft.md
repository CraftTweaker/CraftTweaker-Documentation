# BedrockCraft

### Dust Infusion

```
import moretweaker.bedrockcraft.DustInfusion;

DustInfusion.addRecipe(IItemStack block, IItemStack output);

DustInfusion.removeRecipe(IItemStack block);
```

`block` is the target block one needs to click. Recipes are
removed by that block, not by output.

### Bedrock Ritual

```
import moretweaker.bedrockcraft.BedrockRitual;

BedrockRitual.addRecipe(IItemStack output, IIngredient center, int bedrockAmount, IIngredient[] inputs);

BedrockRitual.removeRecipe(IIngredient output);

BedrockRitual.removeAll();
```

When adding recipes the `inputs` array must have a length of
2, 3, 4, 6, or 12.