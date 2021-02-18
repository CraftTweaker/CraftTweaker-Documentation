# VillagerTrades



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villagers.VillagerTrades;
```


## Methods

### addTrade

Adds a Villager Trade for emeralds for an Item. An example being, giving a villager 2 emeralds for an arrow.

Return Type: void

```zenscript
VillagerTrades.addTrade(profession as MCVillagerProfession, villagerLevel as int, emeralds as int, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void
```

| Parameter     | Type                                                               | Description                                                         | Optional | DefaultValue |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                                | The level the Villager needs to be.                                 | false    |              |
| emeralds      | int                                                                | The amount of Emeralds.                                             | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | What Itemstack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                                | How many times can this trade be done.                              | false    |              |
| xp            | int                                                                | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                              | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |

Adds a Villager Trade for an Item for an Item. An example being, giving a villager 2 diamonds for an arrow.

Return Type: void

```zenscript
VillagerTrades.addTrade(profession as MCVillagerProfession, villagerLevel as int, input1 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void
```

| Parameter     | Type                                                               | Description                                                         | Optional | DefaultValue |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                                | The level the Villager needs to be.                                 | false    |              |
| input1        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | The Itemstack that is being given to the Villager.                  | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | What Itemstack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                                | How many times can this trade be done.                              | false    |              |
| xp            | int                                                                | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                              | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |

Adds a Villager Trade for two Items for an Item. An example being, giving a villager 2 diamonds and 2 dirt for an arrow.

Return Type: void

```zenscript
VillagerTrades.addTrade(profession as MCVillagerProfession, villagerLevel as int, input1 as ItemStack, input2 as ItemStack, forSale as ItemStack, maxTrades as int, xp as int, priceMult as float) as void
```

| Parameter     | Type                                                               | Description                                                         | Optional | DefaultValue |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- | -------- | ------------ |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                           | false    |              |
| villagerLevel | int                                                                | The level the Villager needs to be.                                 | false    |              |
| input1        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | The main Itemstack that is being given to the Villager.             | false    |              |
| input2        | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | The secondary Itemstack that is being given to the Villager.        | false    |              |
| forSale       | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                 | What Itemstack is being sold (by the Villager).                     | false    |              |
| maxTrades     | int                                                                | How many times can this trade be done.                              | false    |              |
| xp            | int                                                                | How much Experience is given by trading.                            | false    |              |
| priceMult     | float                                                              | When this trade is discounted, how much should it be discounted by. | true     | 1.0          |

### addWanderingTrade

Adds a Wandering Trader Trade for emeralds for an Item. An example being, giving a Wandering Trader 2 emeralds for an arrow.

Return Type: void

```zenscript
VillagerTrades.addWanderingTrade(rarity as int, emeralds as int, forSale as ItemStack, maxTrades as int, xp as int) as void
villagerTrades.addWanderingTrade(1, 16, <item:minecraft:diamond>, 16, 2);
```

| Parameter | Type                                               | Description                                                                                                                 |
| --------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                                | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| emeralds  | int                                                | The amount of Emeralds.                                                                                                     |
| forSale   | [format@@0 ItemStack](/vanilla/api/item/ItemStack) | What Itemstack is being sold (by the Wandering Trader).                                                                     |
| maxTrades | int                                                | How many times can this trade be done.                                                                                      |
| xp        | int                                                | How much Experience is given by trading.                                                                                    |


### removeDyedArmorForEmeraldsTrade

Removes a Villager trade for Items for Dyed leather armor. An example being, giving a villager a diamond and getting a Blue Dyed Leather clestplate.

Return Type: void

```zenscript
VillagerTrades.removeDyedArmorForEmeraldsTrade(profession as MCVillagerProfession, villagerLevel as int, buyingItem as MCItemDefinition) as void
villagerTrades.removeDyedArmorForEmeraldsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:leather_chestplate>);
```

| Parameter     | Type                                                               | Description                                                                                                       |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                                                                         |
| villagerLevel | int                                                                | The level the Villager needs to be.                                                                               |
| buyingItem    | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)             | The base ItemStack that a random Dye colour will be applied to. E.G. A leather chestplate with no effect applied. |


### removeEmeraldForItemsTrade

Removes a Villager trade for Emeralds for Items. An example being, giving a villager 2 Emaralds for an Arrow.

Return Type: void

```zenscript
VillagerTrades.removeEmeraldForItemsTrade(profession as MCVillagerProfession, villagerLevel as int, tradeFor as MCItemDefinition) as void
villagerTrades.removeEmeraldForItemsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:arrow>.definition);
```

| Parameter     | Type                                                               | Description                                     |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.       |
| villagerLevel | int                                                                | The level the Villager needs to be.             |
| tradeFor      | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)             | What Itemstack is being sold (by the Villager). |


### removeEmeraldForMapTrade

Removes a Villager trade for a Map. An example being, giving a villager Emeralds and getting a Map to a structure.

Return Type: void

```zenscript
VillagerTrades.removeEmeraldForMapTrade(profession as MCVillagerProfession, villagerLevel as int) as void
villagerTrades.removeEmeraldForMapTrade(<profession:minecraft:farmer>, 1);
```

| Parameter     | Type                                                               | Description                               |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                                | The level the Villager needs to be.       |


### removeEnchantedBookForEmeraldsTrade

Removes a Villager trade for an Enchanted Book. An example being, giving a villager Emeralds and getting an Enchanted Book with a random Enchantment.

Return Type: void

```zenscript
VillagerTrades.removeEnchantedBookForEmeraldsTrade(profession as MCVillagerProfession, villagerLevel as int) as void
villagerTrades.removeEnchantedBookForEmeraldsTrade(<profession:minecraft:farmer>, 1);
```

| Parameter     | Type                                                               | Description                               |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                                | The level the Villager needs to be.       |


### removeEnchantedItemForEmeraldsTrade

Removes a Villager trade for an Enchanted Item. An example being, giving a villager Emeralds and getting an Enchanted Pickaxe.

Return Type: void

```zenscript
VillagerTrades.removeEnchantedItemForEmeraldsTrade(profession as MCVillagerProfession, villagerLevel as int, buyingItem as IItemStack) as void
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:diamond_sword>.withTag({Enchantments: [{lvl: 1 as short, id: "minecraft:smite" as string}]}));
```

| Parameter     | Type                                                               | Description                                                     |
| ------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                       |
| villagerLevel | int                                                                | The level the Villager needs to be.                             |
| buyingItem    | [IItemStack](/vanilla/api/items/IItemStack)                        | The ItemStack that the Villager is selling (including any NBT). |


### removeItemWithPotionForEmeraldsAndItemsTrade

Removes a Villager trade for Items for an Item with a PotionEffect. An example being, giving a villager an Arrow and getting a Tipped Arrow with night vision.

Return Type: void

```zenscript
VillagerTrades.removeItemWithPotionForEmeraldsAndItemsTrade(profession as MCVillagerProfession, villagerLevel as int, potionStack as IItemStack, sellingItem as MCItemDefinition) as void
villagerTrades.removeItemWithPotionForEmeraldsAndItemsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:tipped_arrow>, <item:minecraft:arrow>);
```

| Parameter     | Type                                                               | Description                                                                                                    |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.                                                                      |
| villagerLevel | int                                                                | The level the Villager needs to be.                                                                            |
| potionStack   | [IItemStack](/vanilla/api/items/IItemStack)                        | The base ItemStack that a random potion effect will be applied to. E.G. A tipped Arrow with no effect applied. |
| sellingItem   | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)             | What Itemstack is being given to the Villager.                                                                 |


### removeItemsForEmeraldsAndItemsTrade

Removes a Villager trade for Emeralds and Items for Items. An example being, giving a villager an Emerald and Gravel and getting 16 Flint.

Return Type: void

```zenscript
VillagerTrades.removeItemsForEmeraldsAndItemsTrade(profession as MCVillagerProfession, villagerLevel as int, sellingItem as IItemStack, buyingItem as IItemStack) as void
villagerTrades.removeItemsForEmeraldsAndItemsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:gravel>, <item:minecraft:flint>);
```

| Parameter     | Type                                                               | Description                                    |
| ------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.      |
| villagerLevel | int                                                                | The level the Villager needs to be.            |
| sellingItem   | [IItemStack](/vanilla/api/items/IItemStack)                        | What Itemstack is being given to the Villager. |
| buyingItem    | [IItemStack](/vanilla/api/items/IItemStack)                        | The item that the Villager is selling.         |


### removeItemsForEmeraldsTrade

Removes a Villager trade for Items for Emeralds. An example being, giving a villager an Arrow and getting 2 Emaralds.

Return Type: void

```zenscript
VillagerTrades.removeItemsForEmeraldsTrade(profession as MCVillagerProfession, villagerLevel as int, sellingItem as IItemStack) as void
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:farmer>, 1, <item:minecraft:arrow>);
```

| Parameter     | Type                                                               | Description                                    |
| ------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for.      |
| villagerLevel | int                                                                | The level the Villager needs to be.            |
| sellingItem   | [IItemStack](/vanilla/api/items/IItemStack)                        | What Itemstack is being given to the Villager. |


### removeSuspiciousStewForEmeraldTrade

Removes a Villager trade for Suspicious Stew. An example being, giving a villager Emeralds and getting a bowl of Suspicious Stew back..

Return Type: void

```zenscript
VillagerTrades.removeSuspiciousStewForEmeraldTrade(profession as MCVillagerProfession, villagerLevel as int) as void
villagerTrades.removeSuspiciousStewForEmeraldTrade(<profession:minecraft:farmer>, 1);
```

| Parameter     | Type                                                               | Description                               |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| profession    | [MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession) | What profession this trade should be for. |
| villagerLevel | int                                                                | The level the Villager needs to be.       |


### removeWanderingTrade

Removes a Wandering Trader trade for Emeralds for Items. An example being, giving a Wandering Trader  2 Emaralds for an Arrow.

Return Type: void

```zenscript
VillagerTrades.removeWanderingTrade(rarity as int, tradeFor as IItemStack) as void
villagerTrades.removeWanderingTrade(2, <item:minecraft:arrow>);
```

| Parameter | Type                                        | Description                                                                                                                 |
| --------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| rarity    | int                                         | The rarity of the Trade. Valid options are `1` or `2`. A Wandering Trader can only spawn with a single trade of rarity `2`. |
| tradeFor  | [IItemStack](/vanilla/api/items/IItemStack) | What Itemstack is being sold (by the Villager).                                                                             |



