# DamageSource

## Importing the class

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

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| arrow     | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) |
| owner     | [Entity](/vanilla/api/entity/Entity)?                    |


:::

:::group{name=badRespawnPointExplosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.badRespawnPointExplosion(position as Vec3) as DamageSource
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| position  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=explosion}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.explosion(explosion as Explosion?) as DamageSource
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| explosion | [Explosion](/vanilla/api/world/Explosion)? |


:::

:::group{name=fireball}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.fireball(fireball as Fireball, owner as Entity?) as DamageSource
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| fireball  | [Fireball](/vanilla/api/entity/type/projectile/Fireball) |
| owner     | [Entity](/vanilla/api/entity/Entity)?                    |


:::

:::group{name=fireworks}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.fireworks(entity as FireworkRocketEntity, owner as Entity?) as DamageSource
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| entity    | [FireworkRocketEntity](/vanilla/api/entity/type/projectile/FireworkRocketEntity) |
| owner     | [Entity](/vanilla/api/entity/Entity)?                                            |


:::

:::group{name=indirectMagic}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.indirectMagic(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)  |
| owner     | [Entity](/vanilla/api/entity/Entity)? |


:::

:::group{name=indirectMobAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.indirectMobAttack(entity as Entity, owner as LivingEntity?) as DamageSource
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)              |
| owner     | [LivingEntity](/vanilla/api/entity/LivingEntity)? |


:::

:::group{name=mobAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.mobAttack(living as LivingEntity) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| living    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=playerAttack}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.playerAttack(player as Player) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=string}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.string(living as LivingEntity) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| living    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=thorns}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.thorns(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=thrown}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.thrown(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)  |
| owner     | [Entity](/vanilla/api/entity/Entity)? |


:::

:::group{name=trident}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.trident(entity as Entity, owner as Entity?) as DamageSource
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)  |
| owner     | [Entity](/vanilla/api/entity/Entity)? |


:::

:::group{name=witherSkull}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
DamageSource.witherSkull(witherSkull as WitherSkull, owner as Entity?) as DamageSource
```

|  Parameter  |                              Type                              |
|-------------|----------------------------------------------------------------|
| witherSkull | [WitherSkull](/vanilla/api/entity/type/projectile/WitherSkull) |
| owner       | [Entity](/vanilla/api/entity/Entity)?                          |


:::

## Methods

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

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


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

|         Name         |                 Type                  | Has Getter | Has Setter |
|----------------------|---------------------------------------|------------|------------|
| directEntity         | [Entity](/vanilla/api/entity/Entity)? | true       | false      |
| doesBypassArmor      | boolean                               | true       | false      |
| doesBypassInvul      | boolean                               | true       | false      |
| doesBypassMagic      | boolean                               | true       | false      |
| doesDamageHelmet     | boolean                               | true       | false      |
| entity               | [Entity](/vanilla/api/entity/Entity)? | true       | false      |
| foodExhaustion       | float                                 | true       | false      |
| isCreativePlayer     | boolean                               | true       | false      |
| isExplosion          | boolean                               | true       | false      |
| isFall               | boolean                               | true       | false      |
| isFire               | boolean                               | true       | false      |
| isMagic              | boolean                               | true       | false      |
| isNoAggro            | boolean                               | true       | false      |
| isProjectile         | boolean                               | true       | false      |
| msgId                | string                                | true       | false      |
| scalesWithDifficulty | boolean                               | true       | false      |
| source               | [Vec3](/vanilla/api/util/math/Vec3)?  | true       | false      |

