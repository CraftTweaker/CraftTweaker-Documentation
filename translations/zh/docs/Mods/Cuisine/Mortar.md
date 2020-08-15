# 面包机

## 加

```zenscript
导入mods.cuisine.Mortar;

// 第三个参数“step”表示“你需要多少次推送pestle”
Mortar。 d(IItemStack[…]投入, IItemStack输出, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## 移除

```zenscript
导入 mods.cuisine.Mortar;

// 通过输入删除。
mortar.remove(IItemStack[…]输入)；

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>])；

// 通过输出删除。
mortar.remove ByOutput(Ingredient output);

Mortar.remove ByOutput(<item:minecraft:diamond>);
Mortar.remove ByOutput(<ore:gemDiamond>);

// 通过标识符删除。
mortar.remove(String id);

Mortar.remove("recipe_name");

// 移除所有东西!
mortar.removeAll();
```