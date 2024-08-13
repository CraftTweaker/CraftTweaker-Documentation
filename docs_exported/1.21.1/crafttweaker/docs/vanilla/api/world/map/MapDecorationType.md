# MapDecorationType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.map.MapDecorationType;
```


## Extending Record

MapDecorationType extends Record. That means all methods available in Record are also available in MapDecorationType

## Properties

|         Name          |                            Type                            | Has Getter | Has Setter |
|-----------------------|------------------------------------------------------------|------------|------------|
| assetId               | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| explorationMapElement | boolean                                                    | true       | false      |
| hasMapColor           | boolean                                                    | true       | false      |
| mapColor              | int                                                        | true       | false      |
| showOnItemFrame       | boolean                                                    | true       | false      |
| trackCount            | boolean                                                    | true       | false      |

