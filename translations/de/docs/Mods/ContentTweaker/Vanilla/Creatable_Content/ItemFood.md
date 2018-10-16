# Food Items

This allows you to add food items to the game!

## Create the Food Item Representation

Before you can add the item, you need to create a food item Representation which will allow you to set the properties of the item you want to add.  
This is where the [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) comes in:

```JAVA
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Import the representation Package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.ItemFood;`

## ItemRepresentation Expansion

The ItemFoodRepresentation class expands [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). That means all Methods and ZenProperties that are available for [Items](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) are also available for food items!

## ZenProperties

To get/set the properties you can either use the respecting ZenGetters/Setters or the ZenMethods:

    //property name: healAmount
    //ZenGetter
    print(item.healAmount);
    //ZenSetter
    item.healAmount = 16;
    //ZenMethods
    item.getHealAmount();
    item.setHealAmount(64);
    

| Property     | Type  | Required | Default Value | Description/Notes                                           |
| ------------ | ----- | -------- | ------------- | ----------------------------------------------------------- |
| healAmount   | int   | Yes      |               | How many food points are restored when eaten?               |
| alwaysEdible | bool  | No       | false         | Can the food still be eaten if the user's food bar is full? |
| wolfFood     | bool  | No       | false         | Can the food be used to tame woves?                         |
| saturation   | float | No       | 0.6           | The food's Saturation Value                                 |

## Registering the item

You need to call this method to register the item in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the item or change any of it's properties!

    item.register();