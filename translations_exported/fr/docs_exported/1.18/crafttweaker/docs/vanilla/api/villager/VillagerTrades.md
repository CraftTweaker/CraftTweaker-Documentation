# VillagerTrades



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villagers.VillagerTrades;
```


## Methods

:::group{name=addTrade}

Adds a Villager Trade for emeralds for an Item. An example being, giving a villager 2 emeralds for an arrow.

Return Type: void

```zenscript
// VillagerTrades.addTrade(profession as VillagerProfession, villagerLevel as int, emeralds as int, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void

villagerTrades.addTrade(<profession:minecraft:farmer>, 1, 16, <item:minecraft:diamond>, 5, 2, 0.05);
```

| Parameter     | Type                                                           | Description                                                         | Optional | DefaultValue |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                            | The level the Villager needs to be.                                 | false    |              |
| emeralds      | int                                                            | The amount of Emeralds.                                             | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | What ItemStack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                            | How many times can this trade be done.                              | false    |              |
| xp            | int                                                            | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                          | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |


:::

:::group{name=addTrade}

Adds a Villager Trade for an Item for an Item. An example being, giving a villager 2 diamonds for an arrow.

Return Type: void

```zenscript
// VillagerTrades.addTrade(profession as VillagerProfession, villagerLevel as int, input1 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void

villagerTrades.addTrade(<profession:minecraft:farmer>, 1, <item:minecraft:dirt> * 16, <item:minecraft:diamond>, 5, 2, 0.05);
```

| Parameter     | Type                                                           | Description                                                         | Optional | DefaultValue |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                            | The level the Villager needs to be.                                 | false    |              |
| input1        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | The ItemStack that is being given to the Villager.                  | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | What ItemStack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                            | How many times can this trade be done.                              | false    |              |
| xp            | int                                                            | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                          | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |


:::

:::group{name=addTrade}

Adds a Villager Trade for two Items for an Item. An example being, giving a villager 2 diamonds and 2 dirt for an arrow.

Return Type: void

```zenscript
// VillagerTrades.addTrade(profession as VillagerProfession, villagerLevel as int, input1 as ItemStack, input2 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void

villagerTrades.addTrade(<profession:minecraft:farmer>, 1, <item:minecraft:diamond> * 2, <item:minecraft:dirt> * 2, <item:minecraft:arrow>, 5, 2, 0.05);
```

| Parameter     | Type                                                           | Description                                                         | Optional | DefaultValue |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                            | The level the Villager needs to be.                                 | false    |              |
| input1        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | The main ItemStack that is being given to the Villager.             | false    |              |
| input2        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | The secondary ItemStack that is being given to the Villager.        | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)             | What ItemStack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                            | How many times can this trade be done.                              | false    |              |
| xp            | int                                                            | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                          | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |


:::

:::group{name=addWanderingTrade}

Adds a Wandering Trader Trade for emeralds for an Item. An example being, giving a Wandering Trader 2 emeralds for an arrow.

Return Type: void

```zenscript
// VillagerTrades.addWanderingTrade(rarity as int, emeralds as int, forSale as ItemStack, maxTrades as int, xp as int) as void

villagerTrades.addWanderingTrade(1, 16, <item:minecraft:diamond>, 16, 2);
```

| Parameter | Type                                               | Description                                                                                                                 |
| --------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                                | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| emeralds  | int                                                | The amount of Emeralds.                                                                                                     |
| forSale   | [format@@0 ItemStack](/vanilla/api/item/ItemStack) | What ItemStack is being sold (by the Wandering Trader).                                                                     |
| maxTrades | int                                                | How many times can this trade be done.                                                                                      |
| xp        | int                                                | How much Experience is given by trading.                                                                                    |


:::

:::group{name=addWanderingTrade}

Adds a Wandering Trader Trade for emeralds for an Item. An example being, giving a Wandering Trader 2 emeralds for an arrow.

Return Type: void

```zenscript
// VillagerTrades.addWanderingTrade(rarity as int, price as IItemStack, forSale as IItemStack, maxTrades as int, xp as int) as void

villagerTrades.addWanderingTrade(1, <item:minecraft:dirt>, <item:minecraft:diamond>, 16, 2);
```

| Parameter | Type                                       | Description                                                                                                                 |
| --------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                        | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| price     | [IItemStack](/vanilla/api/item/IItemStack) | The ItemStack being given to the Wandering Trader.                                                                          |
| forSale   | [IItemStack](/vanilla/api/item/IItemStack) | What ItemStack is being sold (by the Wandering Trader).                                                                     |
| maxTrades | int                                        | How many times can this trade be done.                                                                                      |
| xp        | int                                        | How much Experience is given by trading.                                                                                    |


:::

:::group{name=removeAllTrades}

Removes all the trades for the given profession and villagerLevel

Return Type: void

```zenscript
// VillagerTrades.removeAllTrades(profession as VillagerProfession, villagerLevel as int) as void

villagerTrades.removeAllTrades(<profession:minecraft:farmer>, 1);
```

| Parameter     | Type                                                           | Description                         |
| ------------- | -------------------------------------------------------------- | ----------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | hat profession to remove from.      |
| villagerLevel | int                                                            | The level the Villager needs to be. |


:::

:::group{name=removeAllWanderingTrades}

Removes all wandering trades of the given rarity

Return Type: void

```zenscript
VillagerTrades.removeAllWanderingTrades(rarity as int) as void
```

| Parameter | Type | Description                                                                                                                 |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int  | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |


:::

:::group{name=removeBasicTrade}

Removes a `BasicTrade` Villager trade. `BasicTrades` are trades that allow any item, to any other item. It is only really used for mod recipes and is not used for any vanilla villager trade.

Return Type: void

```zenscript
// VillagerTrades.removeBasicTrade(profession as VillagerProfession, villagerLevel as int, forSale as IItemStack, price as IItemStack, price2 as IItemStack) as void

villagerTrades.removeBasicTrade(<profession:minecraft:farmer>, 1, <item:minecraft:arrow>, <item:minecraft:stick>, <item:minecraft:emerald>);
```

| Parameter     | Type                                                           | Description                                     | Optional | DefaultValue         |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------- | -------- | -------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.       | false    |                      |
| villagerLevel | int                                                            | The level the Villager needs to be.             | false    |                      |
| forSale       | [IItemStack](/vanilla/api/item/IItemStack)                     | What ItemStack is being sold (by the Villager). | false    |                      |
| price         | [IItemStack](/vanilla/api/item/IItemStack)                     | No Description Provided                         | true     | <item:minecraft:air> |
| price2        | [IItemStack](/vanilla/api/item/IItemStack)                     | No Description Provided                         | true     | <item:minecraft:air> |


:::

:::group{name=removeDyedArmorForEmeraldsTrade}

Removes a Villager trade for Items for Dyed leather armor. An example being, giving a villager Leather Leggings and 3 Emeralds and getting a Blue Dyed Leather Leggings.

Return Type: void

```zenscript
// VillagerTrades.removeDyedArmorForEmeraldsTrade(profession as VillagerProfession, villagerLevel as int, buyingItem as ItemDefinition) as void

villagerTrades.removeDyedArmorForEmeraldsTrade(<profession:minecraft:leatherworker>, 1, <item:minecraft:leather_chestplate>);
```

| Parameter     | Type                                                           | Description                                                                                                       |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                                                                         |
| villagerLevel | int                                                            | The level the Villager needs to be.                                                                               |
| buyingItem    | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | The base ItemStack that a random Dye colour will be applied to. E.G. A leather chestplate with no effect applied. |


:::

:::group{name=removeEmeraldForItemsTrade}

Removes a Villager trade for Emeralds for Items. An example being, giving a villager 20 Wheat and getting an Emerald from the villager.

Return Type: void

```zenscript
// VillagerTrades.removeEmeraldForItemsTrade(profession as VillagerProfession, villagerLevel as int, tradeFor as ItemDefinition) as void

villagerTrades.removeEmeraldForItemsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:potato>.definition);
```

| Parameter     | Type                                                           | Description                                     |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.       |
| villagerLevel | int                                                            | The level the Villager needs to be.             |
| tradeFor      | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | What ItemStack is being sold (by the Villager). |


:::

:::group{name=removeEnchantBookForEmeraldsTrade}

Removes a Villager trade for an Enchanted Book. An example being, giving a villager Emeralds and getting an Enchanted Book with a random Enchantment.

Return Type: void

```zenscript
// VillagerTrades.removeEnchantBookForEmeraldsTrade(profession as VillagerProfession, villagerLevel as int) as void

villagerTrades.removeEnchantBookForEmeraldsTrade(<profession:minecraft:librarian>, 1);
```

| Parameter     | Type                                                           | Description                               |
| ------------- | -------------------------------------------------------------- | ----------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                            | The level the Villager needs to be.       |


:::

:::group{name=removeEnchantedItemForEmeraldsTrade}

Removes a Villager trade for an Enchanted Item. An example being, giving a villager 3 Emeralds and getting an Enchanted Pickaxe.

Return Type: void

```zenscript
// VillagerTrades.removeEnchantedItemForEmeraldsTrade(profession as VillagerProfession, villagerLevel as int, buyingItem as IItemStack) as void

villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:armorer>, 1, <item:minecraft:diamond_boots>);
```

| Parameter     | Type                                                           | Description                                                     |
| ------------- | -------------------------------------------------------------- | --------------------------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                       |
| villagerLevel | int                                                            | The level the Villager needs to be.                             |
| buyingItem    | [IItemStack](/vanilla/api/item/IItemStack)                     | The ItemStack that the Villager is selling (including any NBT). |


:::

:::group{name=removeItemsAndEmeraldsToItemsTrade}

Removes a Villager trade for Emeralds and Items for Items. An example being, giving a villager 6 uncooked Cod and an Emerald and getting back 6 Cooked Cod.

Return Type: void

```zenscript
// VillagerTrades.removeItemsAndEmeraldsToItemsTrade(profession as VillagerProfession, villagerLevel as int, sellingItem as IItemStack, buyingItem as IItemStack) as void

villagerTrades.removeItemsAndEmeraldsToItemsTrade(<profession:minecraft:fisherman>, 1, <item:minecraft:cooked_cod>, <item:minecraft:cod>);
```

| Parameter     | Type                                                           | Description                                    |
| ------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.      |
| villagerLevel | int                                                            | The level the Villager needs to be.            |
| sellingItem   | [IItemStack](/vanilla/api/item/IItemStack)                     | What ItemStack is being given to the Villager. |
| buyingItem    | [IItemStack](/vanilla/api/item/IItemStack)                     | The item that the Villager is selling.         |


:::

:::group{name=removeItemsForEmeraldsTrade}

Removes a Villager trade for Items for Emeralds. An example being, giving a villager an Emerald and getting 4 Pumpkin Pies from the villager.

Return Type: void

```zenscript
// VillagerTrades.removeItemsForEmeraldsTrade(profession as VillagerProfession, villagerLevel as int, sellingItem as IItemStack) as void

villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:apple>);
```

| Parameter     | Type                                                           | Description                                    |
| ------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.      |
| villagerLevel | int                                                            | The level the Villager needs to be.            |
| sellingItem   | [IItemStack](/vanilla/api/item/IItemStack)                     | What ItemStack is being given to the Villager. |


:::

:::group{name=removeSuspiciousStewForEmeraldTrade}

Removes a Villager trade for Suspicious Stew. An example being, giving a villager an Emerald and getting a bowl of Suspicious Stew back.

Return Type: void

```zenscript
// VillagerTrades.removeSuspiciousStewForEmeraldTrade(profession as VillagerProfession, villagerLevel as int) as void

villagerTrades.removeSuspiciousStewForEmeraldTrade(<profession:minecraft:farmer>, 1);
```

| Parameter     | Type                                                           | Description                               |
| ------------- | -------------------------------------------------------------- | ----------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                            | The level the Villager needs to be.       |


:::

:::group{name=removeTippedArrowForItemsAndEmeraldsTrade}

Removes a Villager trade for Items for an Item with a PotionEffect. An example being, giving a villager an Arrow and an Emerald and getting a Tipped Arrow with night vision.

Return Type: void

```zenscript
// VillagerTrades.removeTippedArrowForItemsAndEmeraldsTrade(profession as VillagerProfession, villagerLevel as int, potionStack as IItemStack, sellingItem as ItemDefinition) as void

villagerTrades.removeTippedArrowForItemsAndEmeraldsTrade(<profession:minecraft:fletcher>, 1, <item:minecraft:tipped_arrow>, <item:minecraft:arrow>);
```

| Parameter     | Type                                                           | Description                                                                                                    |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for.                                                                      |
| villagerLevel | int                                                            | The level the Villager needs to be.                                                                            |
| potionStack   | [IItemStack](/vanilla/api/item/IItemStack)                     | The base ItemStack that a random potion effect will be applied to. E.G. A tipped Arrow with no effect applied. |
| sellingItem   | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | What ItemStack is being given to the Villager.                                                                 |


:::

:::group{name=removeTrade}

Removes the specified trade for the given profession and villagerLevel.

Return Type: void

```zenscript
// VillagerTrades.removeTrade(profession as VillagerProfession, villagerLevel as int, buying as IIngredient, selling as IIngredient, secondBuying as IIngredient) as void

villagerTrades.removeTrade(<profession:minecraft:farmer>, 1, <item:minecraft:potato>, <item:minecraft:emerald>, <item:minecraft:air>);
```

| Parameter     | Type                                                           | Description                                                                               | Optional | DefaultValue         |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------- | -------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | That profession to remove from.                                                           | false    |                      |
| villagerLevel | int                                                            | The level the Villager needs to be.                                                       | false    |                      |
| buying        | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The first item that you are giving to the villager.                                       | false    |                      |
| selling       | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The item that the villager is selling to you.                                             | false    |                      |
| secondBuying  | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The second item that you are giving to the villager. Will default to air if not provided. | true     | <item:minecraft:air> |


:::

:::group{name=removeTradesBuying}

Removes all trades that have the specified item as the buying item for the given profession and villagerLevel.

Return Type: void

```zenscript
// VillagerTrades.removeTradesBuying(profession as VillagerProfession, villagerLevel as int, buying as IIngredient) as void

villagerTrades.removeTradesBuying(<profession:minecraft:farmer>, 1, <item:minecraft:potato>);
```

| Parameter     | Type                                                           | Description                                         |
| ------------- | -------------------------------------------------------------- | --------------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | That profession to remove from.                     |
| villagerLevel | int                                                            | The level the Villager needs to be.                 |
| buying        | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The first item that you are giving to the villager. |


:::

:::group{name=removeTradesBuying}

Removes all trades that have the specified items as the buying items for the given profession and villagerLevel.

Return Type: void

```zenscript
// VillagerTrades.removeTradesBuying(profession as VillagerProfession, villagerLevel as int, buying as IIngredient, secondBuying as IIngredient) as void

villagerTrades.removeTradesBuying(<profession:minecraft:farmer>, 1, <item:minecraft:potato>, <item:minecraft:air>);
```

| Parameter     | Type                                                           | Description                                                                               |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | That profession to remove from.                                                           |
| villagerLevel | int                                                            | The level the Villager needs to be.                                                       |
| buying        | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The first item that you are giving to the villager.                                       |
| secondBuying  | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The second item that you are giving to the villager. Will default to air if not provided. |


:::

:::group{name=removeTradesSelling}

Removes all trades that sell the specified item for the given profession and villagerLevel.

Return Type: void

```zenscript
// VillagerTrades.removeTradesSelling(profession as VillagerProfession, villagerLevel as int, selling as IIngredient) as void

villagerTrades.removeTradesSelling(<profession:minecraft:farmer>, 1, <item:minecraft:emerald>);
```

| Parameter     | Type                                                           | Description                                   |
| ------------- | -------------------------------------------------------------- | --------------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | That profession to remove from.               |
| villagerLevel | int                                                            | The level the Villager needs to be.           |
| selling       | [IIngredient](/vanilla/api/ingredient/IIngredient)             | The item that the villager is selling to you. |


:::

:::group{name=removeTreasureMapForEmeraldsTrade}

Removes a Villager trade for a Map. An example being, giving a villager 13 Emeralds and getting a Map to a structure.

Return Type: void

```zenscript
// VillagerTrades.removeTreasureMapForEmeraldsTrade(profession as VillagerProfession, villagerLevel as int) as void

villagerTrades.removeTreasureMapForEmeraldsTrade(<profession:minecraft:cartographer>, 1);
```

| Parameter     | Type                                                           | Description                               |
| ------------- | -------------------------------------------------------------- | ----------------------------------------- |
| profession    | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                            | The level the Villager needs to be.       |


:::

:::group{name=removeWanderingTrade}

Removes a Wandering Trader trade for Emeralds for Items. An example being, giving a Wandering Trader 2 Emeralds for an Arrow.

Return Type: void

```zenscript
// VillagerTrades.removeWanderingTrade(rarity as int, tradeFor as IIngredient) as void

villagerTrades.removeWanderingTrade(2, <item:minecraft:arrow>);
```

| Parameter | Type                                               | Description                                                                                                                 |
| --------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                                | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| tradeFor  | [IIngredient](/vanilla/api/ingredient/IIngredient) | What ItemStack is being sold (by the Villager).                                                                             |


:::

:::group{name=removeWanderingTrade}

Removes a Wandering Trader trade for Emeralds for Items. An example being, giving a Wandering Trader 2 Emeralds for an Arrow.

Return Type: void

```zenscript
// VillagerTrades.removeWanderingTrade(rarity as int, tradeFor as IItemStack) as void

villagerTrades.removeWanderingTrade(2, <item:minecraft:arrow>);
```

| Parameter | Type                                       | Description                                                                                                                 |
| --------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                        | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| tradeFor  | [IItemStack](/vanilla/api/item/IItemStack) | What ItemStack is being sold (by the Villager).                                                                             |


:::


