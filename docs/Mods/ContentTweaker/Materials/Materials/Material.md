# Material

A Material is what an item is made of, for example Platinum.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Material;` 

## Retrieving such an object
You can either retrieve an existing Material using the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem) or create an entirely new one using the [Material Builder](/Mods/ContentTweaker/Materials/Materials/Material_Builder)

## Fields
You can retrieve the following information from a Material:

| ZenMethod            | Return Type | Description                                    |
|----------------------|-------------|------------------------------------------------|
| getName()            | String      | Returns the Material's name                    |
| getColor()           | int         | Returns the Material's color                   |
| isHasEffect()        | boolean     | Returns if the material has the glowing effect |
| getUnlocalizedName() | String      | Returns the Material's unlocalized name        |

## Register [Material Parts](MaterialPart)

You can either register parts using the [part object](/Mods/ContentTweaker/Materials/Parts/Part) or it's name string.  
You can also either register a single part or multiple at once.  
So you got 4 options in total:
```JAVA
registerParts(String[] partNames);
registerParts(IPart[] parts);


registerPart(String partName);
registerPart(IPart part);
```

The registerPart Methods return a single [MaterialPart](MaterialPart) object.  
The registerParts Methods return a [MaterialPart](MaterialPart) list.