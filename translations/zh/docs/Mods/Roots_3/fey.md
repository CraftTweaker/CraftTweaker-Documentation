### 所属类名

```zenscript
import mods.roots.Fey;
```

#### 可用方法

```zenscript
void addRecipe(
  string name,         // the name of the recipe; if replacing an existing recipe, be sure to use the same name to ensure Patchouli continuity
  IItemStack output,   // the itemstack produced by this recipe
  IIngredient[] inputs // an array of IIngredients that make up the recipe; must contain 5 items
);
```

* * *

```zenscript
void addRecipe(
  string name,          // the name of the recipe; if replacing an existing recipe, be sure to use the same name to ensure Patchouli continuity
  IItemStack output,    // the itemstack produced by this recipe
  IIngredient[] inputs, // an array of IIngredients that make up the recipe; must contain 5 items
  int xp                // the amount of xp (in levels) to reward the player for crafting this recipe
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the item produced by the recipe you wish to remove
);
```

* * *

### 例子

```zenscript
import mods.roots.Fey;

// 添加用四个火药和一个红色羊毛合成一个TNT的配方
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// 添加与上文提到的那个配方，并且每次合成时给予玩家6级经验 (从0级-6级的所需的经验值) 
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// 移除活镐的合成配方
Fey.removeRecipe(<roots:living_axe>);

// 添加新的合成配方，务必保持与原配方同名，以确保它能被Patchouli手册展示出来。 默认情况下，所有精灵工匠台的名称与物品的名称相同。
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### 注意

Patchouli手册的正常工作很重要，如果你删除一个默认配方 (例如 `living_axe`，也就是活镐)，如果你想要Patchouli手册正确显示新的配方，你必须用另一个配方替换它，并且给配方名称 `"living_axe"` 。