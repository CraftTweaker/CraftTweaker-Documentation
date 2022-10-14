# LightningBolt

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.LightningBolt;
```


## Extending Entity

LightningBolt extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LightningBolt

## 使用方式

:::group{name=getBlocksSetOnFire}

Return Type: int

```zenscript
// LightningBolt.getBlocksSetOnFire() as int

myLightningBolt.getBlocksSetOnFire();
```

:::

:::group{name=getCause}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?

```zenscript
// LightningBolt.getCause() as ServerPlayer?

myLightningBolt.getCause();
```

:::

:::group{name=isVisualOnly}

Return Type: boolean

```zenscript
// LightningBolt.isVisualOnly() as boolean

myLightningBolt.isVisualOnly();
```

:::

:::group{name=setVisualOnly}

```zenscript
LightningBolt.setVisualOnly(visualOnly as boolean)
```

| 参数         | 类型  |
| ---------- | --- |
| visualOnly | 布尔值 |


:::


## 参数

| 名称              | 类型                                                            | 可获得  | 可设置   |
| --------------- | ------------------------------------------------------------- | ---- | ----- |
| blocksSetOnFire | int                                                           | true | false |
| cause           | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)? | true | false |
| visualOnly      | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt)  | true | true  |

