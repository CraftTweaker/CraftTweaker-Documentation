# Item

This allows you to add items to the game!

## Create the Item Representation
Before you can add the item, you need to create an Item Representation which will allow you to set the properties of the item you want to add.  
This is where the [VanillaFactory](VanillaFactory) comes in:
```JAVA
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Import the representation Package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Item;` 

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

| Property Name      | Type                                                                                                       | Required | Default Value | Description/Notes                                                                    |
|--------------------|------------------------------------------------------------------------------------------------------------|----------|---------------|--------------------------------------------------------------------------------------|
| unlocalizedName    | String                                                                                                     | Yes      |               | Name, should be all lowercase                                                        |
| maxDamage          | int                                                                                                        | No       | -1            | How many items can fit in one Stack? Less than 0 means standart stack size (64)      |
| maxStackSize       | int                                                                                                        | No       | 64            | Maximum items allowed in a Stack                                                     |
| rarity             | EnumRarity                                                                                                 | No       | COMMON        | How rare an item is, determines ToolTip color ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| creativeTab        | [ICreativeTab](Creative_Tab)                                                                               | No       | Misc          | The Creative tab the item will be put in                                             |
| toolClass          | String                                                                                                     | No       |               | What block types the tool can break                                                  |
| toolLevel          | int                                                                                                        | No       | -1            | The level of blocks can be broken                                                    |
| beaconPayment      | boolean                                                                                                    | No       | false         | Can be given to a beacon to enable bonuses                                           |
| itemRightClick     | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick)           | No       |               | Called when the player right clicks with the item                                    |
| itemUseAction      | EnumUseAction                                                                                              | No       | "NONE"        | What animation the item use will have ("NONE", "EAT", "DRINK", "BLOCK", "BOW")       |
| glowing            | boolean                                                                                                    | No       | false         | Can be used to give your item the glowing effect (as if it were enchanted).          |
| onItemUse          | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse)                         | No       | null          | Called when the player right click on a block with the item                          |
| itemDestroySpeed   | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed)       | No       | null          | Determines the Item's block breaking speed.                                          |
| itemDestroyedBlock | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock) | No       | false         | Determines something?                                                                |


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

## Localising the item
You will need to add `item.contenttweaker.itemName = Localized Name` to the responding language files.  
Alternatively, you could use CraftTweaker's [localization feature](/Vanilla/Game/IGame), though it's recommended using the language files!
