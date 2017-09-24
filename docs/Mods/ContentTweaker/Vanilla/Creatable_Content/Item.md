# Item

This allows you to add items to the game!

## Create the Item Representation
Before you can add the item, you need to create an Item Representation which will allow you to set the properties of the item you want to add.  
This is where the [VanillaFactory](VanillaFactory) comes in:
```JAVA
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## ZenProperties

To get/set the properties you can either use the respecting ZenGetters/Setters or the ZenMethods:
```
//property name: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Property Name   | Type                         | Required | Default Value | Description/Notes                                                                                                                                         |
|-----------------|------------------------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| unlocalizedName | String                       | Yes      |               | Name, should be all lowercase                                                                                                                             |
| maxStackSize    | int                          | No       | 64            | Maximum items allowed in a Stack                                                                                                                          |
| rarity          | EnumRarity                   | No       | COMMON        | How rare an item is, determines ToolTip color                                                                                                             |
| creativeTab     | [ICreativeTab](Creative_Tab) | No       | Misc          | The Creative tab the item will be put in                                                                                                                  |
| toolClass       | String                       | No       |               | What block types the tool can break                                                                                                                       |
| toolLevel       | int                          | No       | -1            | The level of blocks can be broken                                                                                                                         |
| beaconPayment   | boolean                      | No       | false         | Can be given to a beacon to enable bonuses                                                                                                                |
| itemRightClick  | IItemRightClick              | No       |               | Called when the player right clicks with the item. See the [function page](/Mods/Contenttweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick) |


## Registering the item
You need to call this method to register the item in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the item or change any of it's properties!

```
item.register();
```

## Example Script
```
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods.contenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem.creativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
zsItem.register();
```