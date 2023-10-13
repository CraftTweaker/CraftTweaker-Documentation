# Harvest Festival Support
## Contents
* Important
* Handlers Supported
* Shipping
* Shops
  * 0.5.15+
  * 0.6.0+
* Blacklist
* Crops
* Gifting

Important
**Make sure to place your Harvest Festival Scripts in the "harvestfestival" folder, inside the scripts folder.**

## Handlers Supported
The following handlers are supported as of 0.5.4+: You can only add items with them.

* Shipping
* Shop Items
The following handlers are supported as of 0.6.0+:

* Blacklist
* Crops
* Gifting

### Shipping
```zenscript
//ItemStack, SellValue
mods.harvestfestival.Shipping.addShipping(<minecraft:stick>, 100);
```

### Shops
For a list of shop names you can use the command /hf shops

```zenscript
//Adding an item
//ShopName, ItemStack, Cost
mods.harvestfestival.Shops.addPurchasable("harvestfestival:cafe", <minecraft:stick>, 1000);
 
//Add an item to the builder shop
//ItemStack, WoodCost, StoneCost, GoldCost
mods.harvestfestival.Shops.addPurchasableToBuilder(<minecraft:stick>, 100, 100, 1000);
```

### 0.5.15+

### Commands

For a list of npc names you can use the command /hf npcs
For a list of item purchasable ids in a shop you can use the command /hf items [shopid]
#### Attaching a shop to a npc without a shop already

```zenscript
//NPCID, ShopName, ShopGreeting, ShopOpeningHours, OpeningHoursText(Optional), 
mods.harvestfestival.Shops.addShopToNPC("fenn", "Vinery", "Welcome to the vinery!", "monday,8000,22000;tuesday,3000,22000", "Well we're open from 8am to 10pm on Mondays and 3am to 10pm on Tuesdays!");
```

#### Remove an item from a shop

```zenscript
//ShopName, PurchasableID
mods.harvestfestival.Shops.removePurchasable("harvestfestival:barn", "harvestfestival_treat");
```

#### Adjust a value of an item

```zenscript
//ShopName, PurchasableId, NewGoldCost
mods.harvestfestival.Shops.adjustPurchasable("harvestfestival:barn", "entityharvestcow", 40000);
```


#### Adjust a carpenter price, only works for items that require wood/stone already

```zenscript
//PurchasableID, NewLogsCost, NewStoneCost, NewGoldCost
mods.harvestfestival.Shops.adjustCarpenter("harvestfestival_supermarket", 500, 100, 1000000);
```
### 0.6.0+

### Blacklist
```zenscript
//Preventing a certain type of seeds from being planted.
//ItemStack
mods.harvestfestival.Blacklist.blacklistSeeds(<minecraft:wheat_seeds>);
   
//Preventing an hoe from being usable. Useful for disallowing other mods hoes from being used to till soil.
//ItemStack
mods.harvestfestival.Blacklist.blacklistHoe(<minecraft:stone_hoe>);
   
//Preventing an item from being giftable.
//ItemStack
mods.harvestfestival.Blacklist.blacklistGiftable(<minecraft:cake>);
```

### Crops
```zenscript
You need as a minimum requirement to have "addCrop" and "setDrop" for each custom crop, to be properly added.
 //Add your own custom crop to Harvest Festival
//Name, Localized name
mods.harvestfestival.Crops.addCrop("kiwi", "Kiwi");
   
 //Set the drop of your custom crop
//Name, ItemStack
mods.harvestfestival.Crops.setDrop("kiwi", <minecraft:potato>);
   
 //Set multiple drops for your custom crop
//Name, Drops, Amounts, Chances(Percentage)
mods.harvestfestival.Crops.setDrops("kiwi", [<minecraft:potato>, <minecraft:carrot>], [1, 2], [25, 50]);
   
 //Set the amount of stages for your crop
//Name, Stages
mods.harvestfestival.Crops.setStages("kiwi", [1,2,3,4]);
   
 //Add the amount of stages to custom crops
//Name, Block, Stages
mods.harvestfestival.Crops.setStages("kiwi", <harvestfestival:kiwi>, [1,2,3,4]);
   
 //Add custom rendering stages, using metadata. Example below goes through all the stones metadata, from smooth stone to polished andesite.
//Name, Block, Stages, Block Meta
mods.harvestfestival.Crops.setStages("stoneCrop", <minecraft:stone>, [1,2,3,4,5,6,7], [0,1,2,3,4,5,6]);
   
 //Add custom rendering stages, based on certain blocks. Example below starts as fern, then turns into a spruce sapling, then spruce leaves.
//Name, Stages, Blocks, Block Meta
mods.harvestfestival.Crops.setStages("test", [1,2,3], [<minecraft:tallgrass>, <minecraft:sapling>, <minecraft:leaves>], [2,1,1]); 
   
 //Set seasons the crop can grow in. Required to be set for seed to appear in the General Store
//Name, Seasons
mods.harvestfestival.Crops.setSeasons("kiwi", ["summer", "autumn"]);
   
 //Set cost/sell value of the crop
//Name, Cost value, Sell value
mods.harvestfestival.Crops.setValue("kiwi", 20, 10);
   
 //Set the colour of the seed bag
//Name, Hex Colour
mods.harvestfestival.Crops.setSeedColor("kiwi", "9DAE5C");
   
 //Set regrow stage
//Name, Stage
mods.harvestfestival.Crops.setRegrow("kiwi", 3);
   
 //Set max numbers of time a crop can be harvested Required to be set for setRegrow to work
//Name, MaxHarvestTimes
mods.harvestfestival.Crops.setMaxHarvests("kiwi", 2);
   
 //Set food type (Types: REDMEAT, CHICKEN, FISH, SEED, VEGETABLE, FRUIT, GRASS)
//Name, Food type
mods.harvestfestival.Crops.setFoodType("kiwi", "fruit");
   
 //Set the year the crop unlocks
//Name, Year
mods.harvestfestival.Crops.setYearUnlocked("kiwi", 2);
   
 //Set a certain crop to require a sickle to be harvested. Can be set to -1, to remove the requirement from an existing crop.
//Name, Minimum cut stage
mods.harvestfestival.Crops.setRequiresSickle("kiwi", 3);
   
 //Set the plant type for the crop
//Name, EnumPlantType
mods.harvestfestival.Crops.setPlantType("kiwi", "crop");
   
 //Set whether the crop requires water or not (true/false)
//Name, Requires water
mods.harvestfestival.Crops.setWaterRequirements("kiwi", true);
```

### Gifting
```zenscript
//Add an ItemStack or Ore Dictionary string, as a gift to a certain gift category
//Gift, Category
mods.harvestfestival.Gifting.addGift(<minecraft:potato>, "art");
mods.harvestfestival.Gifting.addGift("gemDiamond", "gem");
```