# DamageSource

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.DamageSource;
```


## Static Methods

:::group{name=arrow}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.arrow(arrow as Arrow, owner as Entity?) as DamageSource
```

| Parameter | Type                                                     | Beschreibung            |
| --------- | -------------------------------------------------------- | ----------------------- |
| arrow     | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)?                    | No Description Provided |


:::

:::group{name=badRespawnPointExplosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.badRespawnPointExplosion() as DamageSource

DamageSource.badRespawnPointExplosion();
```

:::

:::group{name=explosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.explosion(explosion as Explosion?) as DamageSource
```

| Parameter | Type                                       | Beschreibung            |
| --------- | ------------------------------------------ | ----------------------- |
| explosion | [Explosion](/vanilla/api/world/Explosion)? | No Description Provided |


:::

:::group{name=explosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.explosion(owner as LivingEntity?) as DamageSource
```

| Parameter | Type                                              | Beschreibung            | Optional | DefaultValue |
| --------- | ------------------------------------------------- | ----------------------- | -------- | ------------ |
| owner     | [LivingEntity](/vanilla/api/entity/LivingEntity)? | No Description Provided | true     |              |


:::

:::group{name=fireball}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.fireball(fireball as Fireball, owner as Entity?) as DamageSource
```

| Parameter | Type                                                     | Beschreibung            |
| --------- | -------------------------------------------------------- | ----------------------- |
| fireball  | [Fireball](/vanilla/api/entity/type/projectile/Fireball) | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)?                    | No Description Provided |


:::

:::group{name=fireworks}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.fireworks(entity as FireworkRocketEntity, owner as Entity?) as DamageSource
```

| Parameter | Type                                                                             | Beschreibung            |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| entity    | [FireworkRocketEntity](/vanilla/api/entity/type/projectile/FireworkRocketEntity) | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)?                                            | No Description Provided |


:::

:::group{name=indirectMagic}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.indirectMagic(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter | Type                                  | Beschreibung            |
| --------- | ------------------------------------- | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity)  | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)? | No Description Provided |


:::

:::group{name=indirectMobAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.indirectMobAttack(entity as Entity, owner as LivingEntity?) as DamageSource
```

| Parameter | Type                                              | Beschreibung            |
| --------- | ------------------------------------------------- | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity)              | No Description Provided |
| owner     | [LivingEntity](/vanilla/api/entity/LivingEntity)? | No Description Provided |


:::

:::group{name=mobAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.mobAttack(living as LivingEntity) as DamageSource
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| living    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=playerAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.playerAttack(player as Player) as DamageSource
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=string}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.string(living as LivingEntity) as DamageSource
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| living    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=thorns}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.thorns(entity as Entity) as DamageSource
```

| Parameter | Type                                 | Beschreibung            |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::

:::group{name=thrown}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.thrown(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter | Type                                  | Beschreibung            |
| --------- | ------------------------------------- | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity)  | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)? | No Description Provided |


:::

:::group{name=trident}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.trident(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter | Type                                  | Beschreibung            |
| --------- | ------------------------------------- | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity)  | No Description Provided |
| owner     | [Entity](/vanilla/api/entity/Entity)? | No Description Provided |


:::

:::group{name=witherSkull}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.witherSkull(witherSkull as WitherSkull, owner as Entity?) as DamageSource
```

| Parameter   | Type                                                           | Beschreibung            |
| ----------- | -------------------------------------------------------------- | ----------------------- |
| witherSkull | [WitherSkull](/vanilla/api/entity/type/projectile/WitherSkull) | No Description Provided |
| owner       | [Entity](/vanilla/api/entity/Entity)?                          | No Description Provided |


:::

## Methoden

:::group{name=getDirectEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
// DamageSource.getDirectEntity() as Entity?

myDamageSource.getDirectEntity();
```

:::

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
// DamageSource.getEntity() as Entity?

myDamageSource.getEntity();
```

:::

:::group{name=getFoodExhaustion}

Return Type: float

```zenscript
// DamageSource.getFoodExhaustion() as float

myDamageSource.getFoodExhaustion();
```

:::

:::group{name=getLocalizedDeathMessage}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
DamageSource.getLocalizedDeathMessage(entity as LivingEntity) as Component
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) | No Description Provided |


:::

:::group{name=getMsgId}

Return Type: string

```zenscript
// DamageSource.getMsgId() as string

myDamageSource.getMsgId();
```

:::

:::group{name=getSourcePosition}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)?

```zenscript
// DamageSource.getSourcePosition() as Vec3?

myDamageSource.getSourcePosition();
```

:::

:::group{name=isBypassArmor}

Return Type: boolean

```zenscript
// DamageSource.isBypassArmor() as boolean

myDamageSource.isBypassArmor();
```

:::

:::group{name=isBypassInvul}

Return Type: boolean

```zenscript
// DamageSource.isBypassInvul() as boolean

myDamageSource.isBypassInvul();
```

:::

:::group{name=isBypassMagic}

Return Type: boolean

```zenscript
// DamageSource.isBypassMagic() as boolean

myDamageSource.isBypassMagic();
```

:::

:::group{name=isCreativePlayer}

Return Type: boolean

```zenscript
// DamageSource.isCreativePlayer() as boolean

myDamageSource.isCreativePlayer();
```

:::

:::group{name=isDamageHelmet}

Return Type: boolean

```zenscript
// DamageSource.isDamageHelmet() as boolean

myDamageSource.isDamageHelmet();
```

:::

:::group{name=isExplosion}

Return Type: boolean

```zenscript
// DamageSource.isExplosion() as boolean

myDamageSource.isExplosion();
```

:::

:::group{name=isFall}

Return Type: boolean

```zenscript
// DamageSource.isFall() as boolean

myDamageSource.isFall();
```

:::

:::group{name=isFire}

Return Type: boolean

```zenscript
// DamageSource.isFire() as boolean

myDamageSource.isFire();
```

:::

:::group{name=isMagic}

Return Type: boolean

```zenscript
// DamageSource.isMagic() as boolean

myDamageSource.isMagic();
```

:::

:::group{name=isNoAggro}

Return Type: boolean

```zenscript
// DamageSource.isNoAggro() as boolean

myDamageSource.isNoAggro();
```

:::

:::group{name=isProjectile}

Return Type: boolean

```zenscript
// DamageSource.isProjectile() as boolean

myDamageSource.isProjectile();
```

:::

:::group{name=scalesWithDifficulty}

Return Type: boolean

```zenscript
// DamageSource.scalesWithDifficulty() as boolean

myDamageSource.scalesWithDifficulty();
```

:::

:::group{name=setExplosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setExplosion() as DamageSource

myDamageSource.setExplosion();
```

:::

:::group{name=setIsFall}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setIsFall() as DamageSource

myDamageSource.setIsFall();
```

:::

:::group{name=setMagic}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setMagic() as DamageSource

myDamageSource.setMagic();
```

:::

:::group{name=setNoAggro}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setNoAggro() as DamageSource

myDamageSource.setNoAggro();
```

:::

:::group{name=setProjectile}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setProjectile() as DamageSource

myDamageSource.setProjectile();
```

:::

:::group{name=setScalesWithDifficulty}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DamageSource.setScalesWithDifficulty() as DamageSource

myDamageSource.setScalesWithDifficulty();
```

:::


## Properties

| Name                 | Type                                  | Has Getter | Has Setter | Beschreibung            |
| -------------------- | ------------------------------------- | ---------- | ---------- | ----------------------- |
| directEntity         | [Entity](/vanilla/api/entity/Entity)? | true       | false      | No Description Provided |
| doesBypassArmor      | boolean                               | true       | false      | No Description Provided |
| doesBypassInvul      | boolean                               | true       | false      | No Description Provided |
| doesBypassMagic      | boolean                               | true       | false      | No Description Provided |
| doesDamageHelmet     | boolean                               | true       | false      | No Description Provided |
| entity               | [Entity](/vanilla/api/entity/Entity)? | true       | false      | No Description Provided |
| foodExhaustion       | float                                 | true       | false      | No Description Provided |
| isCreativePlayer     | boolean                               | true       | false      | No Description Provided |
| isExplosion          | boolean                               | true       | false      | No Description Provided |
| isFall               | boolean                               | true       | false      | No Description Provided |
| isFire               | boolean                               | true       | false      | No Description Provided |
| isMagic              | boolean                               | true       | false      | No Description Provided |
| isNoAggro            | boolean                               | true       | false      | No Description Provided |
| isProjectile         | boolean                               | true       | false      | No Description Provided |
| msgId                | string                                | true       | false      | No Description Provided |
| scalesWithDifficulty | boolean                               | true       | false      | No Description Provided |
| quell                | [Vec3](/vanilla/api/util/math/Vec3)?  | true       | false      | No Description Provided |

