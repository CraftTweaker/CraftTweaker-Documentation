# MCMerchantOffer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.MCMerchantOffer;
```


## Constructors


```zenscript
new MCMerchantOffer(baseCostA as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MCMerchantOffer
```
| Parameter | Type | Description |
|-----------|------|-------------|
| baseCostA | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| maxUses | int | No description provided |
| xp | int | No description provided |
| priceMultiplier | float | No description provided |



```zenscript
new MCMerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MCMerchantOffer
```
| Parameter | Type | Description |
|-----------|------|-------------|
| baseCostA | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| maxUses | int | No description provided |
| xp | int | No description provided |
| priceMultiplier | float | No description provided |



```zenscript
new MCMerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float) as MCMerchantOffer
```
| Parameter | Type | Description |
|-----------|------|-------------|
| baseCostA | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| uses | int | No description provided |
| maxUses | int | No description provided |
| xp | int | No description provided |
| priceMultiplier | float | No description provided |



```zenscript
new MCMerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float, demand as int) as MCMerchantOffer
```
| Parameter | Type | Description |
|-----------|------|-------------|
| baseCostA | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| costB | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| result | [ItemStack](/vanilla/api/item/ItemStack) | No description provided |
| uses | int | No description provided |
| maxUses | int | No description provided |
| xp | int | No description provided |
| priceMultiplier | float | No description provided |
| demand | int | No description provided |



## Methods

:::group{name=calculateDemand}

Return Type: void

```zenscript
// MCMerchantOffer.calculateDemand() as void

myMCMerchantOffer.calculateDemand();
```

:::

:::group{name=doTransaction}

Return Type: boolean

```zenscript
MCMerchantOffer.doTransaction(a as IItemStack, b as IItemStack) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| a | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| b | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=getBuyingStackFirst}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCMerchantOffer.getBuyingStackFirst() as IItemStack

myMCMerchantOffer.getBuyingStackFirst();
```

:::

:::group{name=getBuyingStackSecond}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCMerchantOffer.getBuyingStackSecond() as IItemStack

myMCMerchantOffer.getBuyingStackSecond();
```

:::

:::group{name=getCopyOfSellingStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCMerchantOffer.getCopyOfSellingStack() as IItemStack

myMCMerchantOffer.getCopyOfSellingStack();
```

:::

:::group{name=getDemand}

Return Type: int

```zenscript
// MCMerchantOffer.getDemand() as int

myMCMerchantOffer.getDemand();
```

:::

:::group{name=getDiscountedBuyingStackFirst}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCMerchantOffer.getDiscountedBuyingStackFirst() as IItemStack

myMCMerchantOffer.getDiscountedBuyingStackFirst();
```

:::

:::group{name=getDoesRewardExp}

Return Type: boolean

```zenscript
// MCMerchantOffer.getDoesRewardExp() as boolean

myMCMerchantOffer.getDoesRewardExp();
```

:::

:::group{name=getGivenExp}

Return Type: int

```zenscript
// MCMerchantOffer.getGivenExp() as int

myMCMerchantOffer.getGivenExp();
```

:::

:::group{name=getMaxUses}

Return Type: int

```zenscript
// MCMerchantOffer.getMaxUses() as int

myMCMerchantOffer.getMaxUses();
```

:::

:::group{name=getPriceMultiplier}

Return Type: float

```zenscript
// MCMerchantOffer.getPriceMultiplier() as float

myMCMerchantOffer.getPriceMultiplier();
```

:::

:::group{name=getSellingStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCMerchantOffer.getSellingStack() as IItemStack

myMCMerchantOffer.getSellingStack();
```

:::

:::group{name=getSpecialPrice}

Return Type: int

```zenscript
// MCMerchantOffer.getSpecialPrice() as int

myMCMerchantOffer.getSpecialPrice();
```

:::

:::group{name=getUses}

Return Type: int

```zenscript
// MCMerchantOffer.getUses() as int

myMCMerchantOffer.getUses();
```

:::

:::group{name=hasBeenUsed}

Return Type: boolean

```zenscript
// MCMerchantOffer.hasBeenUsed() as boolean

myMCMerchantOffer.hasBeenUsed();
```

:::

:::group{name=hasNoUsesLeft}

Return Type: boolean

```zenscript
// MCMerchantOffer.hasNoUsesLeft() as boolean

myMCMerchantOffer.hasNoUsesLeft();
```

:::

:::group{name=increaseSpecialPrice}

Return Type: void

```zenscript
MCMerchantOffer.increaseSpecialPrice(specialPrice as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| specialPrice | int | No Description Provided |


:::

:::group{name=increaseUses}

Return Type: void

```zenscript
// MCMerchantOffer.increaseUses() as void

myMCMerchantOffer.increaseUses();
```

:::

:::group{name=makeUnavailable}

Return Type: void

```zenscript
// MCMerchantOffer.makeUnavailable() as void

myMCMerchantOffer.makeUnavailable();
```

:::

:::group{name=matches}

Return Type: boolean

```zenscript
MCMerchantOffer.matches(a as IItemStack, b as IItemStack) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| a | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| b | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=resetSpecialPrice}

Return Type: void

```zenscript
// MCMerchantOffer.resetSpecialPrice() as void

myMCMerchantOffer.resetSpecialPrice();
```

:::

:::group{name=resetUses}

Return Type: void

```zenscript
// MCMerchantOffer.resetUses() as void

myMCMerchantOffer.resetUses();
```

:::

:::group{name=setSpecialPrice}

Return Type: void

```zenscript
MCMerchantOffer.setSpecialPrice(specialPrice as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| specialPrice | int | No Description Provided |


:::

:::group{name=write}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MCMerchantOffer.write() as IData

myMCMerchantOffer.write();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| buyingStackFirst | [IItemStack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |
| buyingStackSecond | [IItemStack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |
| copyOfSellingStack | [IItemStack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |
| demand | int | true | false | No Description Provided |
| discountedBuyingStackFirst | [IItemStack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |
| doesRewardExp | boolean | true | false | No Description Provided |
| givenExp | int | true | false | No Description Provided |
| hasBeenUsed | boolean | true | false | No Description Provided |
| hasNoUsesLeft | boolean | true | false | No Description Provided |
| maxUses | int | true | false | No Description Provided |
| priceMultiplier | float | true | false | No Description Provided |
| sellingStack | [IItemStack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |
| specialPrice | int | true | false | No Description Provided |
| uses | int | true | false | No Description Provided |

