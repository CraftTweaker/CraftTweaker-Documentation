# Creative Tab

This allows you to add Creative Tabs to the game!

## Creating the ICreativeTab object

Before you can add the tab, you need to create a representation which will allow you to set the properties of the tab you want to add.  
This is where the [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) comes in:

```JAVA
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

The String is in each of the three methods the same: It's the unlocalized name the Tab will later have.  
The second parameter is the symbol your tab will carry later on (e.g. a lava bucket for "misc").  
You can decide wheter you want to use an itemRepresentation, an itemStack, a blockrepresentation or an itemStackSupplier function.

## Calling an existing ICreativeTab object

You can also call an [existing creative](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) tab, though you cannot change any of it's properties.  
Why would you need this, you ask?  
You will need this if you want to add a newly created block or item to an existing tab!

## Properties

You can call and set all these properties using the normal ZenGetters and ZenSetters  
`tab.unlocalizedName = "hh";`  
Note that you will probably hardly ever need the Setters as these Properties are already initialized to your wanted values when you create the ICreativeTab object.  
Also, you can neither set nor get properties from an existing ICreativeTab(one that you retrieved using the [Bracket handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| Property Name     | Type                                                                                                    | Required | Default Value | Description/Notes       |
| ----------------- | ------------------------------------------------------------------------------------------------------- | -------- | ------------- | ----------------------- |
| unlocalizedName   | String                                                                                                  | YES      |               | The Creative Tab's name |
| iconStack         | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | YES/NO   |               | The Creative Tab's icon |
| iconStackSupplier | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | NO/YES   | null          | Determines something?   |

## Registering the creative tab

You need to call this method to register the creative Tab in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the tab or change any of it's properties!

    tab.register();
    

## Example Script

```JAVA
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```