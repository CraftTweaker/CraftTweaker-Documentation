# Recipe Builder

## 导入相关包
使用以下方法导入合成构造器相关包：
```JAVA
import mods.artisanworktables.Worktable;
import mods.artisanworktables.IRecipeBuilder;
```

### 例子
```JAVA
//最简例子
var CarpenterRecipe = Worktable.createRecipeBuilder("carpenter");

CarpenterRecipe.setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]
        ]);
CarpenterRecipe.setTool(<ore:carpenters_hammer>, 3)
CarpenterRecipe.addOutput(<minecraft:planks>)
CarpenterRecipe.create();
```

更多信息请浏览[用法](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages)
