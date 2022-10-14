# LightningBolt

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.LightningBolt;
```


## Extending Entity

LightningBolt extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LightningBolt

## Methoden

:::group{name=getBlocksSetOnFire}

Return Type: int

```zenscript
// LightningBolt.getBlocksSetOnFire() as int

myLightningBolt.getBlocksSetOnFire();
```

:::

:::group{name=getCause}

Return Type: **invalid**

```zenscript
// LightningBolt.getCause() as invalid

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

Return Type: void

```zenscript
LightningBolt.setVisualOnly(visualOnly as boolean) as void
```

| Parameter  | Type    | Beschreibung            |
| ---------- | ------- | ----------------------- |
| visualOnly | boolean | No Description Provided |


:::


## Properties

| Name            | Type                                                         | Has Getter | Has Setter | Beschreibung            |
| --------------- | ------------------------------------------------------------ | ---------- | ---------- | ----------------------- |
| blocksSetOnFire | int                                                          | true       | false      | No Description Provided |
| cause           | **invalid**                                                  | true       | false      | No Description Provided |
| visualOnly      | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt) | true       | true       | No Description Provided |

