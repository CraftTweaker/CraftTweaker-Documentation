# 精炼厂

## 所属包名

`thermalext.Refinery`

## 添加配方

`Refinery.addRecipe(output, outputItem, input, energy);`

- `输出` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `能源` &lt;int> 能源总成本

```zenscript
导入mods.thermalreas.Refinery；

// 添加一个输出1mB 的熔岩和每1mB 水下的钻石
精炼厂的配方。 ddRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50)；

// 添加一种食谱，输出5mB的岩浆和每100mB水中的一颗钻石（机会为1%）
精炼。 ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50)；
```

### 添加药水配方

添加一种配方与Alchemical Retort 增强一起使用

`Refinery.addRecipepPotion(output, input, energy)；`

- `输出` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `能源` &lt;int> 能源总成本

```zenscript
导入 mods.thermalext.Refinery;

Refinery.addRecipepPotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## 删除配方

`Refinery.removeRecipe(input)；`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
导入 mods.thermalext.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### 移除药水配方

`Refinery.removeRecipepPotion(input)；`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
导入 mods.thermalext.Refinery;

Refinery.removeRecipepPotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"});
```