# Sluice Box

## Importing the Package
```zenscript
import mods.magneticraft.SluiceBox;
```

## Adding Recipes
```zenscript
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1);
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1, float output2Probability, IItemStack output2);
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1, float output2Probability, IItemStack output2, float output3Probability, IItemStack output3);
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1, float output2Probability, IItemStack output2, float output3Probability, IItemStack output3, float output4Probability, IItemStack output4);
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1, float output2Probability, IItemStack output2, float output3Probability, IItemStack output3, float output4Probability, IItemStack output4, float output5Probability, IItemStack output5);
//mods.magneticraft.SluiceBox.addRecipe(IIngredient input, float output1Probability, IItemStack output1, float output2Probability, IItemStack output2, float output3Probability, IItemStack output3, float output4Probability, IItemStack output4, float output5Probability, IItemStack output5, float output6Probability, IItemStack output6);

mods.magneticraft.SluiceBox.addRecipe(<minecraft:gold_ore>, 1.0, <minecraft:gold_nugget> * 9);
mods.magneticraft.SluiceBox.addRecipe(<minecraft:gravel>, 0.15, <minecraft:gold_nugget>, 0.5, <minecraft:flint>);
mods.magneticraft.SluiceBox.addRecipe(<minecraft:sand>, 0.05, <minecraft:gold_nugget>, 0.001, <minecraft:flint>, 0.1, <minecraft:quartz>);
```

## Removing Recipes
```zenscript
//mods.magneticraft.SluiceBox.removeRecipe(IItemStack input);
mods.magneticraft.SluiceBox.removeRecipe(<minecraft:sand>);
```
