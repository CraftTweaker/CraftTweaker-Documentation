# Fireworks

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.Fireworks;
```


## Extending Record

Fireworks extends Record. That means all methods available in Record are also available in Fireworks

## Static Methods

:::group{name=of}

Return Type: [Fireworks](/vanilla/api/item/component/Fireworks)

```zenscript
Fireworks.of(flightDuration as int, explosions as stdlib.List<FireworkExplosion>) as Fireworks
```

|   Parameter    |                                         Type                                          |
|----------------|---------------------------------------------------------------------------------------|
| flightDuration | int                                                                                   |
| explosions     | stdlib.List&lt;[FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)&gt; |


:::

## Properties

|      Name      |                                         Type                                          | Has Getter | Has Setter |
|----------------|---------------------------------------------------------------------------------------|------------|------------|
| explosion      | stdlib.List&lt;[FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)&gt; | true       | false      |
| flightDuration | int                                                                                   | true       | false      |

