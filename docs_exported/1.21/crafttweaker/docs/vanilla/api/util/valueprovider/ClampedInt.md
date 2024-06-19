# ClampedInt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.ClampedInt;
```


## Extending IntProvider

ClampedInt extends [IntProvider](/vanilla/api/util/valueprovider/IntProvider). That means all methods available in [IntProvider](/vanilla/api/util/valueprovider/IntProvider) are also available in ClampedInt

## Static Methods

:::group{name=of}

Return Type: [ClampedInt](/vanilla/api/util/valueprovider/ClampedInt)

```zenscript
ClampedInt.of(delegate as IntProvider, minInclusive as int, maxInclusive as int) as ClampedInt
```

|  Parameter   |                            Type                            |
|--------------|------------------------------------------------------------|
| delegate     | [IntProvider](/vanilla/api/util/valueprovider/IntProvider) |
| minInclusive | int                                                        |
| maxInclusive | int                                                        |


:::

