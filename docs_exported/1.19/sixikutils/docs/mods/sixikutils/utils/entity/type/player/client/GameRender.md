# GameRender

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.entity.player.client.GameRender;
```


## Methods

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as float)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| Float     | float  |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as float[])
```

| Parameter |  Type   |
|-----------|---------|
| uni       | string  |
| Float     | float[] |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| uni       | string      |
| Float     | **invalid** |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as Matrix3f)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| uni       | string                                      |
| Float     | [Matrix3f](/vanilla/api/util/math/Matrix3f) |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as Vector3f)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| uni       | string                                      |
| Float     | [Vector3f](/vanilla/api/util/math/Vector3f) |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as float, Float2 as float)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| Float     | float  |
| Float2    | float  |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as float, Float2 as float, Float3 as float)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| Float     | float  |
| Float2    | float  |
| Float3    | float  |


:::

:::group{name=blitShader}

```zenscript
GameRender.blitShader(uni as string, Float as float, Float2 as float, Float3 as float, Float4 as float)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| Float     | float  |
| Float2    | float  |
| Float3    | float  |
| Float4    | float  |


:::

:::group{name=blitShaderSet}

```zenscript
GameRender.blitShaderSet(uni as string, Float as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| uni       | string      |
| Float     | **invalid** |


:::

:::group{name=blitShaderSetLocation}

```zenscript
GameRender.blitShaderSetLocation(uni as string, Float as int)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| Float     | int    |


:::

:::group{name=blitShaderSetSafe}

```zenscript
GameRender.blitShaderSetSafe(uni as string, f1 as float, Float2 as float, Float3 as float, Float4 as float)
```

| Parameter |  Type  |
|-----------|--------|
| uni       | string |
| f1        | float  |
| Float2    | float  |
| Float3    | float  |
| Float4    | float  |


:::

:::group{name=getMainCamera}

Return Type: [Camera](/mods/sixikutils/utils/entity/type/player/client/Camera)

```zenscript
// GameRender.getMainCamera() as Camera

myGameRender.getMainCamera();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/utils/entity/type/player/ExpandPlayer)

```zenscript
// GameRender.getPlayer() as Player

myGameRender.getPlayer();
```

:::

:::group{name=getPlayerByUUID}

Return Type: [Player](/mods/sixikutils/utils/entity/type/player/ExpandPlayer)

```zenscript
GameRender.getPlayerByUUID(uuid as string) as Player
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=getShadersName}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// GameRender.getShadersName() as stdlib.List<string>

myGameRender.getShadersName();
```

:::


