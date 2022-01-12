# Plane

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Plane;
```


## Interfacce Implementate
Plane implements the following interfaces. That means all methods defined in these interfaces are also available in Plane

- stdlib.Iterable&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Plane is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
Plane.HORIZONTAL
Plane.VERTICAL
```
## Metodi

:::group{name=getRandomAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
Plane.getRandomAxis(random as Random) as Axis
```

| Parametro | Tipo                                    | Descrizione             |
| --------- | --------------------------------------- | ----------------------- |
| random    | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=getRandomDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Plane.getRandomDirection(random as Random) as Direction
```

| Parametro | Tipo                                    | Descrizione             |
| --------- | --------------------------------------- | ----------------------- |
| random    | [Random](/vanilla/api/util/math/Random) | No Description Provided |


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
Plane.test(direction as Direction) as boolean
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::


## Proprietà

| Nome     | Tipo                                                                                  | Ha Getter | Ha Setter | Descrizione             |
| -------- | ------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| iterator | stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | sì        | no        | No Description Provided |

