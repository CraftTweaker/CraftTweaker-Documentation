### 所属类名

```zenscript
导入 mods.roots.FlowerGrowth;
```

#### 可用方法

```zenscript
无效的removeRecipe(
  字符串名称 // 你想要删除的
 的配方名称)；
```

* * *

```zenscript
无效 addRecipeBlockState(
  字符串名称 // 您添加的配方名称
  IBlockState// 花块状态
)；
```

* * *

```zenscript
无效 addRecipeBlock(
  字符串名称, // 您添加的
  IBlock 块的配方名称 // 要放置的花块
  int meta // 花块状态的元
;
```

* * *

### 例子

```zenscript
导入 mods.roots.FlowerGrowth;

// 删除dandelon 的默认配方
FlowerGrowth.removeRecipe("dandelion");

// 使用方块状态添加Botania 白花
FlowerGrowth. ddRecipeBlockState("mystical_whit_flower", <blockstate:botania:flower:color=white>);

// 使用 block + meta 添加Botania magenta花
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2)
```

### 注意

目前尚未用双高花进行测试。