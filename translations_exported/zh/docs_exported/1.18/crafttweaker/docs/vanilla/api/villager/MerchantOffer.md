# MerchantOffer

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.MerchantOffer;
```


## Constructor #构造函数


```zenscript
new MerchantOffer(baseCostA as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| 参数              | 类型                                  |
| --------------- | ----------------------------------- |
| baseCostA       | [物品应用](/vanilla/api/item/ItemStack) |
| result          | [物品应用](/vanilla/api/item/ItemStack) |
| maxUses         | int                                 |
| xp (经验值)        | int                                 |
| priceMultiplier | float                               |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| 参数              | 类型                                  |
| --------------- | ----------------------------------- |
| baseCostA       | [物品应用](/vanilla/api/item/ItemStack) |
| costB           | [物品应用](/vanilla/api/item/ItemStack) |
| result          | [物品应用](/vanilla/api/item/ItemStack) |
| maxUses         | int                                 |
| xp (经验值)        | int                                 |
| priceMultiplier | float                               |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| 参数              | 类型                                  |
| --------------- | ----------------------------------- |
| baseCostA       | [物品应用](/vanilla/api/item/ItemStack) |
| costB           | [物品应用](/vanilla/api/item/ItemStack) |
| result          | [物品应用](/vanilla/api/item/ItemStack) |
| uses            | int                                 |
| maxUses         | int                                 |
| xp (经验值)        | int                                 |
| priceMultiplier | float                               |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float, demand as int) as MerchantOffer
```
| 参数              | 类型                                  |
| --------------- | ----------------------------------- |
| baseCostA       | [物品应用](/vanilla/api/item/ItemStack) |
| costB           | [物品应用](/vanilla/api/item/ItemStack) |
| result          | [物品应用](/vanilla/api/item/ItemStack) |
| uses            | int                                 |
| maxUses         | int                                 |
| xp (经验值)        | int                                 |
| priceMultiplier | float                               |
| demand          | int                                 |



## 使用方式

:::group{name=addToSpecialPriceDiff}

```zenscript
MerchantOffer.addToSpecialPriceDiff(specialPriceDiff as int)
```

| 参数               | 类型  |
| ---------------- | --- |
| specialPriceDiff | int |


:::

:::group{name=assemble}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.assemble() as IItemStack

myMerchantOffer.assemble();
```

:::

:::group{name=createTag}

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MerchantOffer.createTag() as MapData

myMerchantOffer.createTag();
```

:::

:::group{name=getBaseCostA}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.getBaseCostA() as IItemStack

myMerchantOffer.getBaseCostA();
```

:::

:::group{name=getCostA}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.getCostA() as IItemStack

myMerchantOffer.getCostA();
```

:::

:::group{name=getCostB}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.getCostB() as IItemStack

myMerchantOffer.getCostB();
```

:::

:::group{name=getDemand}

Return Type: int

```zenscript
// MerchantOffer.getDemand() as int

myMerchantOffer.getDemand();
```

:::

:::group{name=getMaxUses}

Return Type: int

```zenscript
// MerchantOffer.getMaxUses() as int

myMerchantOffer.getMaxUses();
```

:::

:::group{name=getPriceMultiplier}

Return Type: float

```zenscript
// MerchantOffer.getPriceMultiplier() as float

myMerchantOffer.getPriceMultiplier();
```

:::

:::group{name=getResult}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.getResult() as IItemStack

myMerchantOffer.getResult();
```

:::

:::group{name=getSpecialPriceDiff}

Return Type: int

```zenscript
// MerchantOffer.getSpecialPriceDiff() as int

myMerchantOffer.getSpecialPriceDiff();
```

:::

:::group{name=getUses}

Return Type: int

```zenscript
// MerchantOffer.getUses() as int

myMerchantOffer.getUses();
```

:::

:::group{name=getXp}

Return Type: int

```zenscript
// MerchantOffer.getXp() as int

myMerchantOffer.getXp();
```

:::

:::group{name=increaseUses}

```zenscript
// MerchantOffer.increaseUses()

myMerchantOffer.increaseUses();
```

:::

:::group{name=isOutOfStock}

Return Type: boolean

```zenscript
// MerchantOffer.isOutOfStock() as boolean

myMerchantOffer.isOutOfStock();
```

:::

:::group{name=needsRestock}

Return Type: boolean

```zenscript
// MerchantOffer.needsRestock() as boolean

myMerchantOffer.needsRestock();
```

:::

:::group{name=resetSpecialPriceDiff}

```zenscript
// MerchantOffer.resetSpecialPriceDiff()

myMerchantOffer.resetSpecialPriceDiff();
```

:::

:::group{name=resetUses}

```zenscript
// MerchantOffer.resetUses()

myMerchantOffer.resetUses();
```

:::

:::group{name=satisfiedBy}

Return Type: boolean

```zenscript
MerchantOffer.satisfiedBy(a as IItemStack, b as IItemStack) as boolean
```

| 参数 | 类型                                         |
| -- | ------------------------------------------ |
| a  | [IItemstack](/vanilla/api/item/IItemStack) |
| b  | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setSpecialPriceDiff}

```zenscript
MerchantOffer.setSpecialPriceDiff(specialPriceDiff as int)
```

| 参数               | 类型  |
| ---------------- | --- |
| specialPriceDiff | int |


:::

:::group{name=setToOutOfStock}

```zenscript
// MerchantOffer.setToOutOfStock()

myMerchantOffer.setToOutOfStock();
```

:::

:::group{name=shouldRewardExp}

Return Type: boolean

```zenscript
// MerchantOffer.shouldRewardExp() as boolean

myMerchantOffer.shouldRewardExp();
```

:::

:::group{name=take}

Return Type: boolean

```zenscript
MerchantOffer.take(a as IItemStack, b as IItemStack) as boolean
```

| 参数 | 类型                                         |
| -- | ------------------------------------------ |
| a  | [IItemstack](/vanilla/api/item/IItemStack) |
| b  | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=updateDemand}

```zenscript
// MerchantOffer.updateDemand()

myMerchantOffer.updateDemand();
```

:::


## 参数

| 名称               | 类型                                         | 可获得  | 可设置   |
| ---------------- | ------------------------------------------ | ---- | ----- |
| baseCostA        | [IItemstack](/vanilla/api/item/IItemStack) | true | false |
| costA            | [IItemstack](/vanilla/api/item/IItemStack) | true | false |
| costB            | [IItemstack](/vanilla/api/item/IItemStack) | true | false |
| demand           | int                                        | true | false |
| maxUses          | int                                        | true | false |
| needsRestock     | 布尔值                                        | true | false |
| outOfStock       | 布尔值                                        | true | false |
| priceMultiplier  | float                                      | true | false |
| result           | [IItemstack](/vanilla/api/item/IItemStack) | true | false |
| shouldRewardExp  | 布尔值                                        | true | false |
| specialPriceDiff | int                                        | true | true  |
| uses             | int                                        | true | false |
| xp (经验值)         | int                                        | true | false |

