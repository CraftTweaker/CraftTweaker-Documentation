# UniformInt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.UniformInt;
```


## Extending IntProvider

UniformInt extends [IntProvider](/vanilla/api/util/valueprovider/IntProvider). That means all methods available in [IntProvider](/vanilla/api/util/valueprovider/IntProvider) are also available in UniformInt

## Static Methods

:::group{name=of}

Return Type: [UniformInt](/vanilla/api/util/valueprovider/UniformInt)

```zenscript
UniformInt.of(minInclusive as int, maxInclusive as int) as UniformInt
```

|  Parameter   | Type |
|--------------|------|
| minInclusive | int  |
| maxInclusive | int  |


:::

