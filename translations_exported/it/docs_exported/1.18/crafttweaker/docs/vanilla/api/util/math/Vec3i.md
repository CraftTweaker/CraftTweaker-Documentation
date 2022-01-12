# Vec3i

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vec3i;
```


## Interfacce Implementate
Vec3i implements the following interfaces. That means all methods defined in these interfaces are also available in Vec3i

- Comparable&lt;[Vec3i](/vanilla/api/util/math/Vec3i)&gt;

## Metodi

:::group{name=above}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.above() as Vec3i

myVec3i.above();
```

:::

:::group{name=above}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.above(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::

:::group{name=below}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.below() as Vec3i

myVec3i.below();
```

:::

:::group{name=below}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.below(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Vec3i.closerThan(other as Vec3i, maxDistance as double) as boolean
```

| Parametro   | Tipo                                  | Descrizione             |
| ----------- | ------------------------------------- | ----------------------- |
| other       | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |
| maxDistance | double                                | No Description Provided |


:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Vec3i.closerThan(position as Position, maxDistance as double) as boolean
```

| Parametro   | Tipo                                   | Descrizione             |
| ----------- | -------------------------------------- | ----------------------- |
| position    | [Position](/vanilla/api/util/Position) | No Description Provided |
| maxDistance | double                                 | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
Vec3i.compareTo(other as Vec3i) as int
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=cross}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.cross(other as Vec3i) as Vec3i
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=distManhattan}

Return Type: int

```zenscript
Vec3i.distManhattan(other as Vec3i) as int
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=distSqr}

Return Type: double

```zenscript
Vec3i.distSqr(other as Vec3i) as double
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=distSqr}

Return Type: double

```zenscript
Vec3i.distSqr(other as Vec3i, useCenter as boolean) as double
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |
| useCenter | boolean                               | No Description Provided |


:::

:::group{name=distSqr}

Return Type: double

```zenscript
Vec3i.distSqr(position as Position, other as boolean) as double
```

| Parametro | Tipo                                   | Descrizione             |
| --------- | -------------------------------------- | ----------------------- |
| position  | [Position](/vanilla/api/util/Position) | No Description Provided |
| other     | boolean                                | No Description Provided |


:::

:::group{name=distSqr}

Return Type: double

```zenscript
Vec3i.distSqr(x as double, y as double, z as double, useCenter as boolean) as double
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| x         | double  | No Description Provided |
| y         | double  | No Description Provided |
| z         | double  | No Description Provided |
| useCenter | boolean | No Description Provided |


:::

:::group{name=east}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.east() as Vec3i

myVec3i.east();
```

:::

:::group{name=east}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.east(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::

:::group{name=getValue}

Return Type: int

```zenscript
Vec3i.getValue(axis as Axis) as int
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=getX}

Return Type: int

```zenscript
// Vec3i.getX() as int

myVec3i.getX();
```

:::

:::group{name=getY}

Return Type: int

```zenscript
// Vec3i.getY() as int

myVec3i.getY();
```

:::

:::group{name=getZ}

Return Type: int

```zenscript
// Vec3i.getZ() as int

myVec3i.getZ();
```

:::

:::group{name=multiply}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.multiply(scalar as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| scalar    | int  | No Description Provided |


:::

:::group{name=north}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.north() as Vec3i

myVec3i.north();
```

:::

:::group{name=north}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.north(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::

:::group{name=offset}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.offset(other as Vec3i) as Vec3i
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=offset}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.offset(x as double, y as double, z as double) as Vec3i
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| x         | double | No Description Provided |
| y         | double | No Description Provided |
| z         | double | No Description Provided |


:::

:::group{name=offset}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.offset(x as int, y as int, z as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| x         | int  | No Description Provided |
| y         | int  | No Description Provided |
| z         | int  | No Description Provided |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(direction as Direction) as Vec3i
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(axis as Axis, distanec as int) as Vec3i
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |
| distanec  | int                                      | No Description Provided |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(direction as Direction, distance as int) as Vec3i
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |
| distance  | int                                                | No Description Provided |


:::

:::group{name=south}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.south() as Vec3i

myVec3i.south();
```

:::

:::group{name=south}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.south(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::

:::group{name=subtract}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.subtract(other as Vec3i) as Vec3i
```

| Parametro | Tipo                                  | Descrizione             |
| --------- | ------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=toShortString}

Return Type: string

```zenscript
// Vec3i.toShortString() as string

myVec3i.toShortString();
```

:::

:::group{name=west}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.west() as Vec3i

myVec3i.west();
```

:::

:::group{name=west}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.west(distance as int) as Vec3i
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| distance  | int  | No Description Provided |


:::


## Proprietà

| Nome          | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------ | --------- | --------- | ----------------------- |
| toShortString | string | sì        | no        | No Description Provided |
| x             | int    | sì        | no        | No Description Provided |
| y             | int    | sì        | no        | No Description Provided |
| z             | int    | sì        | no        | No Description Provided |

