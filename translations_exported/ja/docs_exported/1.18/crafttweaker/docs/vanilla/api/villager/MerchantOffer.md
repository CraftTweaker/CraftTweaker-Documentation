# MerchantOffer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.MerchantOffer;
```


## Constructors


```zenscript
new MerchantOffer(baseCostA as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parameter       | Type                                     | Description             |
| --------------- | ---------------------------------------- | ----------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| maxUses         | int                                      | No description provided |
| xp              | int                                      | No description provided |
| priceMultiplier | float                                    | No description provided |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parameter       | Type                                     | Description             |
| --------------- | ---------------------------------------- | ----------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| maxUses         | int                                      | No description provided |
| xp              | int                                      | No description provided |
| priceMultiplier | float                                    | No description provided |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parameter       | Type                                     | Description             |
| --------------- | ---------------------------------------- | ----------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| uses            | int                                      | No description provided |
| maxUses         | int                                      | No description provided |
| xp              | int                                      | No description provided |
| priceMultiplier | float                                    | No description provided |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float, demand as int) as MerchantOffer
```
| Parameter       | Type                                     | Description             |
| --------------- | ---------------------------------------- | ----------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| uses            | int                                      | No description provided |
| maxUses         | int                                      | No description provided |
| xp              | int                                      | No description provided |
| priceMultiplier | float                                    | No description provided |
| demand          | int                                      | No description provided |



## Methods

:::group{name=addToSpecialPriceDiff}

Return Type: void

```zenscript
MerchantOffer.addToSpecialPriceDiff(specialPriceDiff as int) as void
```

| Parameter        | Type | Description             |
| ---------------- | ---- | ----------------------- |
| specialPriceDiff | int  | No Description Provided |


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

Return Type: void

```zenscript
// MerchantOffer.increaseUses() as void

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

Return Type: void

```zenscript
// MerchantOffer.resetSpecialPriceDiff() as void

myMerchantOffer.resetSpecialPriceDiff();
```

:::

:::group{name=resetUses}

Return Type: void

```zenscript
// MerchantOffer.resetUses() as void

myMerchantOffer.resetUses();
```

:::

:::group{name=satisfiedBy}

Return Type: boolean

```zenscript
MerchantOffer.satisfiedBy(a as IItemStack, b as IItemStack) as boolean
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| a         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |
| b         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=setSpecialPriceDiff}

Return Type: void

```zenscript
MerchantOffer.setSpecialPriceDiff(specialPriceDiff as int) as void
```

| Parameter        | Type | Description             |
| ---------------- | ---- | ----------------------- |
| specialPriceDiff | int  | No Description Provided |


:::

:::group{name=setToOutOfStock}

Return Type: void

```zenscript
// MerchantOffer.setToOutOfStock() as void

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

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| a         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |
| b         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=updateDemand}

Return Type: void

```zenscript
// MerchantOffer.updateDemand() as void

myMerchantOffer.updateDemand();
```

:::


## Properties

| 名称               | Type                                       | Has Getter | Has Setter | Description             |
| ---------------- | ------------------------------------------ | ---------- | ---------- | ----------------------- |
| baseCostA        | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      | No Description Provided |
| costA            | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      | No Description Provided |
| costB            | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      | No Description Provided |
| demand           | int                                        | true       | false      | No Description Provided |
| maxUses          | int                                        | true       | false      | No Description Provided |
| needsRestock     | boolean型                                   | true       | false      | No Description Provided |
| outOfStock       | boolean型                                   | true       | false      | No Description Provided |
| priceMultiplier  | float                                      | true       | false      | No Description Provided |
| result           | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      | No Description Provided |
| shouldRewardExp  | boolean型                                   | true       | false      | No Description Provided |
| specialPriceDiff | int                                        | true       | true       | No Description Provided |
| uses             | int                                        | true       | false      | No Description Provided |
| xp               | int                                        | true       | false      | No Description Provided |

