# 合成配方

ICraftingRecipe是Zenscript所看到的工作台配方。


## 导入相关包
可能需要[导入](/AdvancedFunctions/Import)相关包以避免错误。 
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### 检测一个物品栏是否包含配方

如果[ICraftingInventory（合成物品栏）](ICraftingInventory)包含这个配方，返回`true`
```
rec.matches(inventory);
//inventory 物品栏

rec in inventory;
rec has inventory;
```

### 检测物品栏配方合成的物品

返回在[ICraftingInventory（合成物品栏）](ICraftingInventory)中合成所得到的物品。

```
rec.getCraftingResult(inventory);
//inventory 物品栏
```


### Check for transformers
返回布尔值
```
rec.transformers;
rec.hasTransformers();
```

### ApplyTransformers

参数类型分别是[ICraftingInventory（合成物品栏）](ICraftingInventory)和[IPlayer（玩家）](/Vanilla/Players/IPlayer)。
```
rec.applyTransformers(ICraftingInventory inventory, IPlayer byPlayer);
```

### To String
```
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```
