# LightningBolt

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.LightningBolt;
```


## Extending Entity

LightningBolt extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in LightningBolt

## Metodi

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

| Parametro  | Tipo    |
| ---------- | ------- |
| visualOnly | boolean |


:::


## Proprietà

| Nome            | Tipo                                                          | Ha Getter | Ha Setter |
| --------------- | ------------------------------------------------------------- | --------- | --------- |
| blocksSetOnFire | int                                                           | sì        | no        |
| cause           | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)? | sì        | no        |
| visualOnly      | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt)  | sì        | sì        |

