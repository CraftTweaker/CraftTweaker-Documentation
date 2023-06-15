# Camera

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.entity.player.client.Camera;
```


## Methods

:::group{name=getBlockAtCamera}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// Camera.getBlockAtCamera() as BlockState

myCamera.getBlockAtCamera();
```

:::

:::group{name=getBlockPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Camera.getBlockPosition() as BlockPos

myCamera.getBlockPosition();
```

:::

:::group{name=getBottomLeft}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Camera.getBottomLeft() as Vec3

myCamera.getBottomLeft();
```

:::

:::group{name=getBottomRight}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Camera.getBottomRight() as Vec3

myCamera.getBottomRight();
```

:::

:::group{name=getEntity}

Return Type: [Entity](/mods/sixikutils/utils/entity/Entity)

```zenscript
// Camera.getEntity() as Entity

myCamera.getEntity();
```

:::

:::group{name=getLeftVector}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Camera.getLeftVector() as Vector3f

myCamera.getLeftVector();
```

:::

:::group{name=getLookVector}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Camera.getLookVector() as Vector3f

myCamera.getLookVector();
```

:::

:::group{name=getPointOnPlane}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Camera.getPointOnPlane(block1 as float, block2 as float) as Vec3
```

| Parameter | Type  |
|-----------|-------|
| block1    | float |
| block2    | float |


:::

:::group{name=getPosition}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Camera.getPosition() as Vec3

myCamera.getPosition();
```

:::

:::group{name=getTopLeft}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Camera.getTopLeft() as Vec3

myCamera.getTopLeft();
```

:::

:::group{name=getTopRight}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Camera.getTopRight() as Vec3

myCamera.getTopRight();
```

:::

:::group{name=getUpVector}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Camera.getUpVector() as Vector3f

myCamera.getUpVector();
```

:::

:::group{name=getXRot}

Return Type: float

```zenscript
// Camera.getXRot() as float

myCamera.getXRot();
```

:::

:::group{name=getYRot}

Return Type: float

```zenscript
// Camera.getYRot() as float

myCamera.getYRot();
```

:::

:::group{name=isDetached}

Return Type: boolean

```zenscript
// Camera.isDetached() as boolean

myCamera.isDetached();
```

:::

:::group{name=isInitialized}

Return Type: boolean

```zenscript
// Camera.isInitialized() as boolean

myCamera.isInitialized();
```

:::


