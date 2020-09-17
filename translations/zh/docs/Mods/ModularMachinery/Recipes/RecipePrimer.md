# 食谱师

食谱仪对象是实际配方。 你可以从 [食谱构建器](/Mods/ModularMachinery/Recipes/RecipeBuilder/) 获取这样一个对象，并使用它的方法来实际提供配方的内容和东西。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入mods.modarmachinery.RecipePrimer；`

## ZenMethods

每种方法都有两件事：第一，它修改对象，然后它返回对象本身（作为另一个RecipePrimer）。  
意味着您可以单独调用每个方法。 或在你附加每个代码的地方拨打一个电话(下面的示例)。

### 设置机会

```zenscript
setChance(浮动概率)；
```

### 增加能源和燃料需求

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? 这是源代码的说法，如果它不起作用，请尝试输入
addFuelItemInout(int required TotalBurnTime)；
```

### 添加输入

您可以添加 [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) 或 [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) 作为输入。

```zenscript
addItemInput(StemStack 堆栈)；

addItemInput(IomeDictEntry oredict)；
addItemInput(IOLquidStack 堆栈)；


addFulluidInput(ILiquidStack 堆栈)；
```

### Adding outputs

您可以添加 [IItemStacks](/Vanilla/Items/IItemStack/), [IOREDictEntries](/Vanilla/OreDict/IOreDictEntry/) 或 [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) 作为输出。

```zenscript
addItemOut(StemStack 堆栈)；

addItemOutput(IOREDictEntry oredict)；
addItemOutput(IOLictEntry oredict, int amount)；


addFluidOut(ILiquidStack 堆栈)；
```

### 构建配方

在您完成上述更改后，您需要构建配方，以便它能够做一些事情。

```zenscript
构建();
```

## 例子

您可以单独调用每个方法，也可以播放代码：

```zenscript
val reci = mods.modarmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOut(<minecraft:gold_ingot>);
reci.addItemOput( uild();



val rec = mods.modarmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```