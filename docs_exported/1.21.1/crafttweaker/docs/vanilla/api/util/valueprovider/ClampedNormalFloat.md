# ClampedNormalFloat

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.ClampedNormalFloat;
```


## Extending FloatProvider

ClampedNormalFloat extends [FloatProvider](/vanilla/api/util/valueprovider/FloatProvider). That means all methods available in [FloatProvider](/vanilla/api/util/valueprovider/FloatProvider) are also available in ClampedNormalFloat

## Static Methods

:::group{name=of}

Return Type: [ClampedNormalFloat](/vanilla/api/util/valueprovider/ClampedNormalFloat)

```zenscript
ClampedNormalFloat.of(mean as float, deviation as float, min as float, max as float) as ClampedNormalFloat
```

| Parameter | Type  |
|-----------|-------|
| mean      | float |
| deviation | float |
| min       | float |
| max       | float |


:::

