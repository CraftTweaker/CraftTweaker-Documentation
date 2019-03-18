# Item

This allows you to add items to the game!

## Create the Item Representation
Before you can add the item, you need to create an Item Representation which will allow you to set the properties of the item you want to add.  
This is where the [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) comes in:
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

| Property Name               | Type                                                                                                                  | Required | Default Value | Description/Notes                                                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------|----------|---------------|--------------------------------------------------------------------------------------|
| beaconPayment               | boolean                                                                                                               | No       | false         | Can be given to a beacon to enable bonuses                                           |
| creativeTab                 | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                          | No       | Misc          | The Creative tab the item will be put in                                             |
| glowing                     | boolean                                                                                                               | No       | false         | Can be used to give your item the glowing effect (as if it were enchanted).          |
| itemColorSupplier           | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)               | No       | -1 as color   | The item's color                                                                     |
| itemDestroyedBlock          | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)             | No       | false         | What happens when the item just destroyed a block?                                   |
| itemDestroySpeed            | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)                 | No       | null          | Determines the Item's block breaking speed.                                          |
| itemGetContainerItem        | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)         | No       | null          | What will remain in the crafting grid when this item was used in a recipe?           |
| itemRightClick              | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)                     | No       |               | Called when the player right clicks with the item                                    |
| itemUseAction               | EnumUseAction                                                                                                         | No       | "NONE"        | What animation the item use will have ("NONE", "EAT", "DRINK", "BLOCK", "BOW")       |
| localizedNameSupplier       | [ILocalizedNameSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/)       | No       | null          | Can be used to programmatically determine your item's display name                   |
| maxDamage                   | int                                                                                                                   | No       | -1            | How many uses does the item have? Less than 0 means it cannot be damaged             |
| maxStackSize                | int                                                                                                                   | No       | 64            | How many items can fit in one Stack? Less than 0 means standart stack size (64)      |
| onItemUpdate                | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                             | No       | null          | Called when the player right click on a block with the item                          |
| onItemUse                   | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                                   | No       | null          | Called when the player right click on a block with the item                          |
| rarity                      | EnumRarity                                                                                                            | No       | COMMON        | How rare an item is, determines ToolTip color ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| smeltingExprerience         | float                                                                                                                 | No       | -1            | How much experienve the player earns for smelting that item in a furnace?            |
| textureLocation             | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                                | No       | null          | The item's resource location, used for textures etc.                                 |
| toolClass                   | String                                                                                                                | No       |               | What block types the tool can break                                                  |
| toolLevel                   | int                                                                                                                   | No       | -1            | The level of blocks can be broken                                                    |
| unlocalizedName             | String                                                                                                                | Yes      |               | Name, should be all lowercase                                                        |


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
You will need to add `item.contenttweaker.itemName.name=Localized Name` to the responding language files.  
Example in en_us.lang file `item.contenttweaker.zsItem.name=Your itemName Here` will show `Your itemName Here` in the game.

Alternatively, you could use CraftTweaker's [localization feature](/Vanilla/Game/IGame/), though it's recommended using the language files!
