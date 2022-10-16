# Rotation

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Rotation;
```


## Enum Constants

Rotation is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:direction/rotation:none>
<constant:minecraft:direction/rotation:clockwise_90>
<constant:minecraft:direction/rotation:clockwise_180>
<constant:minecraft:direction/rotation:counterclockwise_90>
```
## Методы

:::group{name=getRotated}

Return Type: [Rotation](/vanilla/api/util/math/Rotation)

```zenscript
Rotation.getRotated(rotation as Rotation) as Rotation
```

| Параметр | Тип                                         |
| -------- | ------------------------------------------- |
| rotation | [Rotation](/vanilla/api/util/math/Rotation) |


:::

:::group{name=rotate}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Rotation.rotate(direction as Direction) as Direction
```

| Параметр  | Тип                                                |
| --------- | -------------------------------------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=rotate}

Return Type: int

```zenscript
Rotation.rotate(rotation as int, positionCount as int) as int
```

| Параметр      | Тип |
| ------------- | --- |
| rotation      | int |
| positionCount | int |


:::

:::group{name=rotation}

Return Type: [OctahedralGroup](/vanilla/api/util/math/OctahedralGroup)

```zenscript
// Rotation.rotation() as OctahedralGroup

myRotation.rotation();
```

:::


