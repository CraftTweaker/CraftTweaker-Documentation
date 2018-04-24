# 合成构造器

## 导入相关包
使用以下方法导入合成构造器相关包：
```JAVA
import mods.artisanworktables.builder.RecipeBuilder;
```

### 例子
```JAVA
//Bare Minimum Example
RecipeBuilder.get("carpenter")
  .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]
        ])
  .addTool(<ore:carpenters_hammer>, 3)
  .addOutput(<minecraft:planks>)
  .create();
```

For more features see [Usages](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages)
