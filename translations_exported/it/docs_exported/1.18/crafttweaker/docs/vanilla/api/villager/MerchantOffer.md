# MerchantOffer

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.MerchantOffer;
```


## Constructors


```zenscript
new MerchantOffer(baseCostA as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parametro       | Tipo                                     | Descrizione                 |
| --------------- | ---------------------------------------- | --------------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| maxUses         | int                                      | Nessuna descrizione fornita |
| xp              | int                                      | Nessuna descrizione fornita |
| priceMultiplier | float                                    | Nessuna descrizione fornita |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parametro       | Tipo                                     | Descrizione                 |
| --------------- | ---------------------------------------- | --------------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| maxUses         | int                                      | Nessuna descrizione fornita |
| xp              | int                                      | Nessuna descrizione fornita |
| priceMultiplier | float                                    | Nessuna descrizione fornita |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float) as MerchantOffer
```
| Parametro       | Tipo                                     | Descrizione                 |
| --------------- | ---------------------------------------- | --------------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| uses            | int                                      | Nessuna descrizione fornita |
| maxUses         | int                                      | Nessuna descrizione fornita |
| xp              | int                                      | Nessuna descrizione fornita |
| priceMultiplier | float                                    | Nessuna descrizione fornita |

```zenscript
new MerchantOffer(baseCostA as ItemStack, costB as ItemStack, result as ItemStack, uses as int, maxUses as int, xp as int, priceMultiplier as float, demand as int) as MerchantOffer
```
| Parametro       | Tipo                                     | Descrizione                 |
| --------------- | ---------------------------------------- | --------------------------- |
| baseCostA       | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| costB           | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| result          | [ItemStack](/vanilla/api/item/ItemStack) | Nessuna descrizione fornita |
| uses            | int                                      | Nessuna descrizione fornita |
| maxUses         | int                                      | Nessuna descrizione fornita |
| xp              | int                                      | Nessuna descrizione fornita |
| priceMultiplier | float                                    | Nessuna descrizione fornita |
| demand          | int                                      | Nessuna descrizione fornita |



## Metodi

:::group{name=addToSpecialPriceDiff}

Return Type: void

```zenscript
MerchantOffer.addToSpecialPriceDiff(specialPriceDiff as int) as void
```

| Parametro        | Tipo | Descrizione             |
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

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| a         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |
| b         | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=setSpecialPriceDiff}

Return Type: void

```zenscript
MerchantOffer.setSpecialPriceDiff(specialPriceDiff as int) as void
```

| Parametro        | Tipo | Descrizione             |
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

| Parametro | Tipo                                       | Descrizione             |
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


## Proprietà

| Nome             | Tipo                                       | Ha Getter | Ha Setter | Descrizione             |
| ---------------- | ------------------------------------------ | --------- | --------- | ----------------------- |
| baseCostA        | [IItemStack](/vanilla/api/item/IItemStack) | sì        | no        | No Description Provided |
| costA            | [IItemStack](/vanilla/api/item/IItemStack) | sì        | no        | No Description Provided |
| costB            | [IItemStack](/vanilla/api/item/IItemStack) | sì        | no        | No Description Provided |
| demand           | int                                        | sì        | no        | No Description Provided |
| maxUses          | int                                        | sì        | no        | No Description Provided |
| needsRestock     | boolean                                    | sì        | no        | No Description Provided |
| outOfStock       | boolean                                    | sì        | no        | No Description Provided |
| priceMultiplier  | float                                      | sì        | no        | No Description Provided |
| result           | [IItemStack](/vanilla/api/item/IItemStack) | sì        | no        | No Description Provided |
| shouldRewardExp  | boolean                                    | sì        | no        | No Description Provided |
| specialPriceDiff | int                                        | sì        | sì        | No Description Provided |
| uses             | int                                        | sì        | no        | No Description Provided |
| xp               | int                                        | sì        | no        | No Description Provided |

