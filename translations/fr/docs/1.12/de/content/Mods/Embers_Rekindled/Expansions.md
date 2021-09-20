# Expansions

## IItemStack Expansions
```zenscript
itemstack.hasHeat(); // returns bool

itemstack.getHeat(); //returns float
itemstack.setHeat(float level);

itemstack.getMaxHeat(); // returns float

itemstack.getHeatLevel(); // returns int
itemstack.setHeatLevel(int level);

itemstack.addModifier(IItemStack modifier);
Boolean itemstack.isModifierValid(string modifiername);
Boolean itemstack.hasModifier(string modifiername);
Integer itemstack.getModifierLevel(string modifiername);
itemstack.setModifierLevel(string modifiername, int level);
```

## IIngredient Expansions
```zenscript
ingredient.anyHeat();
ingredient.onlyHeatAtLeast(float amount);
ingredient.onlyHeatAtMost(float amount);

ingredient.onlyHeatLevelAtLeast(int level);
ingredient.onlyHeatLevelAtMost(int level);

ingredient.onlyWithModifier(string modifier);
ingredient.onlyWithModifierLevelAtLeast(string modifier, int level);
ingredient.onlyWithModifierLevelAtMost(string modifier, int level);
ingredient.onlyIfModifierValid(string modifier);
```