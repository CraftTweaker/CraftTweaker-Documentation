# BiasedToBottomInt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.BiasedToBottomInt;
```


## Extending IntProvider

BiasedToBottomInt extends [IntProvider](/vanilla/api/util/valueprovider/IntProvider). That means all methods available in [IntProvider](/vanilla/api/util/valueprovider/IntProvider) are also available in BiasedToBottomInt

## Static Methods

:::group{name=of}

Return Type: [BiasedToBottomInt](/vanilla/api/util/valueprovider/BiasedToBottomInt)

```zenscript
BiasedToBottomInt.of(minInclusive as int, maxInclusive as int) as BiasedToBottomInt
```

|  Parameter   | Type |
|--------------|------|
| minInclusive | int  |
| maxInclusive | int  |


:::

