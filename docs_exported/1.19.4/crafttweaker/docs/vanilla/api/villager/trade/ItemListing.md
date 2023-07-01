# ItemListing

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.trade.ItemListing;
```


## Methods

:::group{name=getOffer}

Return Type: [MerchantOffer](/vanilla/api/villager/MerchantOffer)

```zenscript
ItemListing.getOffer(traderEntity as Entity, random as RandomSource) as MerchantOffer
```

|  Parameter   |                        Type                         |
|--------------|-----------------------------------------------------|
| traderEntity | [Entity](/vanilla/api/entity/Entity)                |
| random       | [RandomSource](/vanilla/api/util/math/RandomSource) |


:::


