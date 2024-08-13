# ClampedNormalInt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.ClampedNormalInt;
```


## Extending IntProvider

ClampedNormalInt extends [IntProvider](/vanilla/api/util/valueprovider/IntProvider). That means all methods available in [IntProvider](/vanilla/api/util/valueprovider/IntProvider) are also available in ClampedNormalInt

## Static Methods

:::group{name=of}

Return Type: [ClampedNormalInt](/vanilla/api/util/valueprovider/ClampedNormalInt)

```zenscript
ClampedNormalInt.of(mean as float, deviation as float, minInclusive as int, maxInclusive as int) as ClampedNormalInt
```

|  Parameter   | Type  |
|--------------|-------|
| mean         | float |
| deviation    | float |
| minInclusive | int   |
| maxInclusive | int   |


:::

