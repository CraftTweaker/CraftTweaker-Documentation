# FireworkExplosion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.FireworkExplosion;
```


## Extending Record

FireworkExplosion extends Record. That means all methods available in Record are also available in FireworkExplosion

## Static Methods

:::group{name=of}

Return Type: [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)

```zenscript
FireworkExplosion.of(shape as FireworkExplosionShape, colors as stdlib.List<int?>, fadeColors as stdlib.List<int?>, hasTrail as boolean, hasTwinkle as boolean) as FireworkExplosion
```

| Parameter  |                                     Type                                     |
|------------|------------------------------------------------------------------------------|
| shape      | [FireworkExplosionShape](/vanilla/api/item/component/FireworkExplosionShape) |
| colors     | stdlib.List&lt;int?&gt;                                                      |
| fadeColors | stdlib.List&lt;int?&gt;                                                      |
| hasTrail   | boolean                                                                      |
| hasTwinkle | boolean                                                                      |


:::

## Methods

:::group{name=withFadeColors}

Return Type: [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)

```zenscript
FireworkExplosion.withFadeColors(colors as stdlib.List<int?>) as FireworkExplosion
```

| Parameter |          Type           |
|-----------|-------------------------|
| colors    | stdlib.List&lt;int?&gt; |


:::


## Properties

|    Name    |                                     Type                                     | Has Getter | Has Setter |
|------------|------------------------------------------------------------------------------|------------|------------|
| colors     | stdlib.List&lt;int?&gt;                                                      | true       | false      |
| fadeColors | stdlib.List&lt;int?&gt;                                                      | true       | false      |
| hasTrail   | boolean                                                                      | true       | false      |
| hasTwinkle | boolean                                                                      | true       | false      |
| shape      | [FireworkExplosionShape](/vanilla/api/item/component/FireworkExplosionShape) | true       | false      |

