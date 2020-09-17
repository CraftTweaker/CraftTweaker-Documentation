# 制动机

## 所属包名

```zenscript
导入 mods.ic2.CanningMachine;
```

### 效果id列表
* 1: 饥饿(罗滕·弗莱什) (80%概率)
* 2: 毒药(皮革眼)
* 3：饥饿(生鸡) (30%的概率)
* 4：金苹果
* 5： Notch 苹果
* 6： 科鲁斯果子

## 使用方式

### 注册特效项目 (int id, IItemstack) inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack) 输入)；    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>)；
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... 输入** 获得食物的输入能够生效。
- **整数型变量 id** 您想要应用到指定项目的 effectID 。 有效效果id如下：

### 删除特效Id (int id, booly deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolide deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **整数型变量 id** 您想要从填充的 effectID 可以移除。 请参阅上面的有效效果 ids.
- **布尔删除项目** 是否也从备案罐中删除具有这种效果的项目。 当前这个布尔值可能无法工作。

### 注册燃料值 (int fuelValue，IItemStack输入)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); ///Formerly have a value of 2548。
```

- **英寸燃料值** 指定物品的价值是多少燃料。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 要注册该燃料值的项目。 它甚至可以是具有现有值的项目，在这种情况下将覆盖先前指定的值。 注意：必须是一个物品，不允许使用任何操作符。

### 注册燃料加成器 (浮动燃料加成，IItemStack输入)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float feller Multiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **浮动燃料倍增器** 以前输入值的百分比是多大的。 例如，1=100%，0.5=50%，0=0%，ec。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 注册燃料乘数的项目。 它甚至可以是现有乘数的项目，在这种情况下，将会覆盖先前指定的乘数。 注意：必须是一个物品，不允许使用任何操作符。

### 删除项目燃料(StemStack输入)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(StemStack input);

mods.ic2.CanningMachine.delteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 将要删除的项目是燃料罐的输入。

查看 [这里](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) 了解燃油罐如何工作的信息。

### 添加制动配方(临时堆栈输出, Igredient 填充, IItemStack 容器)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(IItemStack output, Ingredient filler, IItemStack container);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 产品
- **[IItemStack](/Vanilla/Items/IItemStack/) 容器** 需要填充的物品包 </strong>
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) filler** 填充到容器中的成分</strong>

