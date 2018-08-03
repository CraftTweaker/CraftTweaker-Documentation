# Part Builder
If you want to build a [Part](/Mods/ContentTweaker/Materials/Parts/Part/), you will need a Part Builder!  
Doesn't sound that hard, does it?

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.PartBuilder;` 


## Retrieving such an object
You can retrieve a new, clear Builder using the [MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/):

```JAVA
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```


## Set the Part's Properties

You can set these Properties

| ZenMethod                           | Parameter                                                            |
|-------------------------------------|----------------------------------------------------------------------|
| setHasOverlay(hasOverlay)           | boolean hasOverlay                                                   |
| setName(name)                       | String name                                                          |
| setPartType(partType)               | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partType  |
| setOreDictName(prefix)              | String prefix                                                        |
| setAdditionalOreDictNames(prefixes) | String... prefixes                                                   |

All these Methods do 2 things: Firstly, they change the builder's Property, secondly they return the modified builder.  
You can see in the example scripts below what this means.

## Actually build the Material
Before you can build your material, you need to build it:
```JAVA
pBuilder.build();
```

This returns an [Part](/Mods/ContentTweaker/Materials/Parts/Part/) Object.

## Example Script
```JAVA
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build();
```

## Noteworthy information
### Localizing the MaterialParts
The items you create with your new part will generally be named `contenttweaker.part.partname`  
If you want your item to include the material name, you will need to localize it, preferably in CoT's language files which can be found at `Resources/contenttweaker/lang`.  
Instead of the material name you write `%s`, so naming the dense gears ans ingots created above would look like this:
```
contenttweaker.part.dense_gear=Dense %s Gear
contenttweaker.part.dense_ingot=Dense %s Ingot
```

### Adding a texture
The items you create with your new part will look a bit edgy to you.  
If you want your part to have a specific icon you will need to add a `partname.png` file to `Resources/contenttweaker/textures/items`.  
So, giving the dense gears a texture would require us to add a file called `gear_dense.png` to that folder.