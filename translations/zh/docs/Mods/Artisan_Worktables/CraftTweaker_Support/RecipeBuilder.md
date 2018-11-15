# 配方构建器

## 导入相关包

使用以下代码导入配方构建器：

```JAVA
import mods.artisanworktables.builder.RecipeBuilder;
```

### 例子

```JAVA
//最简例子
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

更多特性请见 [用法](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages/)