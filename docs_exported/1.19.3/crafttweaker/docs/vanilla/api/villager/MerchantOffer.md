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
|    Parameter    |                   Type                   |
|-----------------|------------------------------------------|
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) |
| result          | [ItemStack](/vanilla/api/item/ItemStack) |
| maxUses         | int                                      |
| xp              | int                                      |
| priceMultiplier | float                                    |



```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
|    Parameter    |                   Type                   |
|-----------------|------------------------------------------|
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) |
| result          | [ItemStack](/vanilla/api/item/ItemStack) |
| maxUses         | int                                      |
| xp              | int                                      |
| priceMultiplier | float                                    |



```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
|    Parameter    |                   Type                   |
|-----------------|------------------------------------------|
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) |
| result          | [ItemStack](/vanilla/api/item/ItemStack) |
| uses            | int                                      |
| maxUses         | int                                      |
| xp              | int                                      |
| priceMultiplier | float                                    |



```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float, demand as int) as MerchantOffer
```
|    Parameter    |                   Type                   |
|-----------------|------------------------------------------|
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) |
| result          | [ItemStack](/vanilla/api/item/ItemStack) |
| uses            | int                                      |
| maxUses         | int                                      |
| xp              | int                                      |
| priceMultiplier | float                                    |
| demand          | int                                      |



## Methods

:::group{name=addToSpecialPriceDiff}

```zenscript
MerchantOffer.addToSpecialPriceDiff(specialPriceDiff as int)
```

|    Parameter     | Type |
|------------------|------|
| specialPriceDiff | int  |


:::

:::group{name=assemble}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MerchantOffer.assemble() as IItemStack

myMerchantOffer.assemble();
```

:::

:::group{name=createTag}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MerchantOffer.createTag() as IData

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

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| a         | [IItemStack](/vanilla/api/item/IItemStack) |
| b         | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setSpecialPriceDiff}

```zenscript
MerchantOffer.setSpecialPriceDiff(specialPriceDiff as int)
```

|    Parameter     | Type |
|------------------|------|
| specialPriceDiff | int  |


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

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| a         | [IItemStack](/vanilla/api/item/IItemStack) |
| b         | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=updateDemand}

```zenscript
// MerchantOffer.updateDemand()

myMerchantOffer.updateDemand();
```

:::


## Properties

|       Name       |                    Type                    | Has Getter | Has Setter |
|------------------|--------------------------------------------|------------|------------|
| baseCostA        | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| costA            | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| costB            | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| demand           | int                                        | true       | false      |
| maxUses          | int                                        | true       | false      |
| needsRestock     | boolean                                    | true       | false      |
| outOfStock       | boolean                                    | true       | false      |
| priceMultiplier  | float                                      | true       | false      |
| result           | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| shouldRewardExp  | boolean                                    | true       | false      |
| specialPriceDiff | int                                        | true       | true       |
| uses             | int                                        | true       | false      |
| xp               | int                                        | true       | false      |

