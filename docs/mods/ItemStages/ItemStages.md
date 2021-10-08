::requiredMod[ItemStages]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/item-stages}

ItemStages is an addon for [GameStages](https://www.curseforge.com/minecraft/mc-mods/game-stages) that allows you to create custom restrictions for items as part of a GameStages progression system. It is highly recommended to read the [Introduction to GameStages](mods/GameStages/Introduction/) page before you try to use this mod.

To use ItemStages in your script you must import the ItemStages class in your script.

```zenscript
import mods.itemstages.ItemStages;
```

## Creating Restrictions
The ItemStages class provides several helper methods for creating item restrictions. A restriction only applies to items that match their conditions and are only in effect for players that do not have their required stages. By default a restriction will aggressively restrict the item and prevent players from holding the item in their inventory, picking up the item, using it as a weapon, left/right clicking the item, and more.

### Restrict a Specific Item
Using the following helper method allows you to restrict a specific item. This will apply to all instances of the item regardless of if they are enchanted or renamed. By appending multiple stage names to the end you can require more than one stage. 

```zenscript
// ItemStages.restrict(IIngredient toRestrict, String... requiredStages);
ItemStages.restrict(<item:minecraft:stick>, "ex_one");
```

### Restrict a Tag
Using the following helper method allows you to restrict an entire item tag. By appending multiple stage names to the end you can require more than one stage.

```zenscript
// ItemStages.restrict(MCTag<Item> toRestrict, String... requiredStages);
ItemStages.restrict(<tag:items:forge:cobblestone>, "ex_two");
```

### Restricting an Enchantment
Using the following helper method allows you to stage any item that has an enchantment on it. This includes enchanted books or items that have been enchanted with the enchantment. This will **NOT** prevent that enchantment from being applied at the Enchantment table or at the Anvil.

```zenscript
// ItemStages.restrict(Enchantment enchantment, String... requiredStages);
ItemStages.restrict(<enchantment:minecraft:sharpness>, "ex_three");
```

### Restricting a Rarity
Using the following helper method allows you to stage any item with the specified item rarity.

```zenscript
// ItemStages.restrict(Rarity rarity, String... requiredStages);
ItemStages.restrict(Rarity.EPIC, "ex_four");
```

### Restricting by ToolType
Using the following helper method allows you to stage an item that has the specified tool type. The following example will stage all items that act as pickaxes, including all in one tools (AIOT).

```zenscript
// ItemStages.restrict(ToolType toolType, String... requiredStages);
ItemStages.restrict(<tooltype:pickaxe>, "ex_five");
```

### Restricting an Entire Mod
Using the following helper method allows you to stage any item that is from a specified mod. 

```zenscript
// ItemStages.createModRestriction(String modid, String... requiredStages);
// ItemStages.createModRestriction(String[] manyModIds, String... requiredStages);
ItemStages.createModRestriction("minecraft", "ex_six");
```

If you want to stage *most* of the items from a mod and not **all** you will need to use an alternative approach. The recommended way to do this is to create a new item tag or a list of items and then stage that instead. You can also apply an inclusion filter to the previous method that will exclude matching items from that restriction. The following example will stage all items from minecraft except for sticks.

```zenscript
//ItemStages.createModRestriction(String modid, Predicate<IItemStack>, String... requiredStages);
ItemStages.createModRestriction("minecraft", s => <item:minecraft:stick>.matches(s), "one");
```

## Configuring Restrictions
There may be scenarios where you only want certain aspects of an item to be restricted. This can be done by configuring the restriction object that is created and returned by the helper methods.

### Changing Restricted Name
When an Item is restricted it will be visually renamed to "Unfamiliar Item". You can replace this on a per-restriction bases using the following method.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").hiddenName("Lemon Bar");
```

If you want to rename all hidden items instead of doing it on a case by case basis you can bind `tooltip.itemstages.hidden_name` in the language files to a new name. 

### Inventory Restrictions
By default restricted items will be tossed from the player's inventory. This can be disabled by setting preventInventory to false.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").preventInventory(false);
```

### Equipment Restrictions
By default restricted items that are equipped will be tossed from the player's inventory. This can be disabled by setting preventInventory to false. Equipment slots are handled separately from preventInventory to allow pack authors greater control.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").preventEquipment(false);
```

### Allow Attacking
By default restricted items will not be able to attack other entities. This can be disabled by setting preventAttacking to false.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").preventAttacking(false);
```

### Allow Pickup
By default restricted items can not be picked up. This can be disabled by setting preventPickup to false.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").preventPickup(false);
```

### Allow Left/Right Clicking
By default you can not use an item by left or right clicking it. This can be disabled by setting preventUsing to false.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").preventUsing(false);
```

### Allowing in JEI
By default restricted items are hidden in JEI, if JEI is installed. This can be disabled by setting hiddenInJEI to false.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").setHiddenInJEI(false);
```

## Tips

### Improve performance by lowering restrictions.
Every restriction you create will have a minor performance impact. The game can easily handle dozens or even hundreds of restrictions however the less you have the smoother the game will run and the more you can do elsewhere. For example imagine you have 100 items that you want to restrict to stage one. A simple way to do this would be to create 100 new restrictions using a loop, however this is not very performant. The better way to do this would be to create a new Item tag and add these items to that tag. You can then stage the entire tag. Alternatively you can create one restriction and add additional items to it directly using the restrict method.

```zenscript
ItemStages.restrict(<item:minecraft:gold_ingot>, "adv_one").restrict(<item:minecraft:stick>).restrict(<item:minecraft:diamond>);
```
