# DecoratedPotPattern

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.DecoratedPotPattern;
```


## Extending Record

DecoratedPotPattern extends Record. That means all methods available in Record are also available in DecoratedPotPattern

## Methods

:::group{name=assetId}

Gets the location of the asset used by the pot pattern.

Returns: The pot pattern asset ID.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// DecoratedPotPattern.assetId() as ResourceLocation

myDecoratedPotPattern.assetId();
```

:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |                       Description                       |
|---------------|------------------------------------------------------------|------------|------------|---------------------------------------------------------|
| assetId       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      | Gets the location of the asset used by the pot pattern. |
| commandString | string                                                     | true       | false      |                                                         |

