# 高级配方

## 所属包名

```zenscript
导入 mods.ic2.Advances;
```

## 配方类型
有几种配方：

### 形状配方
形状的配方是一种配方，在这种配方中，哪个项目进入哪个配置。 例如，你不能只是安排7个大小不同的一堆里面的铁豆来创建铁腿。 形状很重要，因此它是一种形状的配方。

### 无缝配方
无缝配方是配方的，只有你放置在网格中的物品才是配方的，而形状则不重要。 例如，蓝色和黄色染料会产生绿色染料。 这个配方不关心你放在哪里的项目。

## 添加配方

### 添加了
```zenscript
mods.ic2.Advly Recipes.addShaped(output,input);
```

这将为 `输出` 创建一个形状的配方。使用 `输入` 作为属性。

`输出` 是 [IItemStack](/Vanilla/Items/IItemStack/)  
`输入` 是一个 [Ingredient](/Vanilla/Variable_Types/IIngredient/)\[] [\] (见下文)

`输入` 是一个 2 维度 [元素](/Vanilla/Variable_Types/IIngredient/) 数组  
铁护腿的写法将为 `[[iron,iron,iron,iron],[iron,null,iron],[iron,null,iron],[iron,] ull,iron]]`  
如果这会令人困惑，请尝试将数组分割成每行一个数组
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

Advances Recipes. ddShaped(leggings,
 [iron * 5,iron * 7,iron * 5],
  [iron * 3,null,iron*3],
  [iron,null,iron]]);
```

### addShapeless
```zenscript
mods.ic2.Advly Recipes.addShapeless(output,input)
```

这创建了一种可耻的堆积的配方使用 `输出` 使用 `输入` 作为成分。

`输出` 是一个 [IItemStack](/Vanilla/Items/IItemStack/)  
`输入` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (例如，[<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.Advly Recipes.addHiddenShapeless(ItemStack output, IIngredient[…]成分)；
mods.ic2.Advances.addhdenShaped(ItemStack output, IIngredient[] 成分)；
```

这将创建一个形状或无耻的堆叠配方用于 `输出` ，使用 `输入` 作为隐藏的元素。 
