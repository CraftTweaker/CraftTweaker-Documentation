# Plane

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Plane;
```


## Implemented Interfaces
Plane implements the following interfaces. That means all methods defined in these interfaces are also available in Plane

- stdlib.Iterable&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Plane is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:direction/plane:horizontal>
<constant:minecraft:direction/plane:vertical>
```
## Методы

:::group{name=getRandomAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
Plane.getRandomAxis(random as Random) as Axis
```

| Параметр | Тип                                     | Описание                |
| -------- | --------------------------------------- | ----------------------- |
| random   | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=getRandomDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Plane.getRandomDirection(random as Random) as Direction
```

| Параметр | Тип                                     | Описание                |
| -------- | --------------------------------------- | ----------------------- |
| random   | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=iterator}

Return Type: stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

```zenscript
// Plane.iterator() as stdlib.Iterator<Direction>

myPlane.iterator();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
Plane.test(direction as Direction?) as boolean
```

| Параметр  | Тип                                                 | Описание                |
| --------- | --------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction)? | No Description Provided |


:::


## Свойства

| Название | Тип                                                                                   | Имеет Getter | Имеет Setter | Описание                |
| -------- | ------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| iterator | stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true         | false        | No Description Provided |

