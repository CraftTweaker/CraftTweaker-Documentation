# 加湿器

ModTweaker 允许你添加或移除林业加湿器配方

## 导入
使用 `mods.forestry.Moistener` 以导入相关包

## 移除

```JAVA
//mods.forestry.Moistener.removeRecipe(IIngredient output);
//output 输出
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```


## 添加

```JAVA
//mods.forestry.Moistener.addRecipe(IItemStack output, IItemStack input, int packagingTime); 
//output 输出
//input 输入
//packagingTime 时间
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## 移除催化剂
```JAVA
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);、
//moistenerItem 催化剂
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```


## 添加催化剂
```JAVA
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

|参数             |类型                                    | 描述                                                                                       |
|----------------|----------------------------------------|--------------------------------------------------------------------------------------------|
|item            |物品堆（[IItemStack](/Vanilla/Items/IItemStack)）|需要添加的物品                                                                      |
|product         |物品堆（[IItemStack](/Vanilla/Items/IItemStack)）|会被移出加湿器工作区域的物品（例：发霉小麦或覆盖戍）                                     |
|MoistenerValue  |整型                                    |物品对合成最终产物的催化的贡献数量                                                               |
|stage           |整数                                    |物品的阶段。阶段较低的物品会在加湿器中先被消耗                                                   |
