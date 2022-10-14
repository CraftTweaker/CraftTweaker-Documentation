# ResourceLocationBracketHandler

Bracket handlers specifically for resource location as it is used in multiple loaders.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.bracket.ResourceLocationBracketHandler;
```


## Static Methods

:::group{name=getResourceLocation}

Creates a Resource location based on the tokens. <br />  Throws an error if the tokens are not a valid location.

Returns: The location  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
<resource:minecraft:dirt>

// ResourceLocationBracketHandler.getResourceLocation(tokens as string) as ResourceLocation

ResourceLocationBracketHandler.getResourceLocation("minecraft:dirt");
```

| 参数     | 类型     | 描述                    |
| ------ | ------ | --------------------- |
| tokens | string | The resource location |


:::

