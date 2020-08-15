# 斧头

## 可用性

在做任何事情之前，您应该检查是否启用轴制：

```zenscript
导入mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) format@@
    // do stuff
} exuf
    print("Axe Chopping 已禁用, 跳过");
}
```

## 添加配方

```zenscript
导入 mods.cuisine.AxeChopping;

AxeChopping.add(StemStack 输入, IItemStack 输出);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// 如果需要，也可以使用矿石字典。
AxeChopping.add(IOreentry input, IItemStack output);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## 删除配方

```zenscript
导入mods.cuisine.AxeChopping;

// 通过输入删除。
AxeChopping.remove(StemStack 输入);

AxeChopping.remove(<item:minecraft:log>);

// 通过输出删除。
AxeChopping.removeByOut(IItemStack 输出);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// 通过标识符删除。
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// 移除所有东西！
AxeChopping.removeAll();
```

## Misc.

```zenscript
导入mods.cuisine.AxeChopping;

val defaultPlanksoutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStick输出as int = AxeChopping.getDefaultStickOutput();
```