# WitherSkull

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.WitherSkull;
```


## Extending AbstractHurtingProjectile

WitherSkull extends [AbstractHurtingProjectile](/vanilla/api/entity/type/projectile/AbstractHurtingProjectile). That means all methods available in [AbstractHurtingProjectile](/vanilla/api/entity/type/projectile/AbstractHurtingProjectile) are also available in WitherSkull

## Constructor #构造函数


```zenscript
new WitherSkull(level as Level, owner as LivingEntity, xPower as double, yPower as double, zPower as double) as WitherSkull
new WitherSkull(level, entity, 9, 9, 9);
```
| 参数     | 类型                                               | 描述                                         |
| ------ | ------------------------------------------------ | ------------------------------------------ |
| level  | [Level](/vanilla/api/world/Level)                | The level the entity is in.                |
| owner  | [LivingEntity](/vanilla/api/entity/LivingEntity) | The owner of the skull, used for position. |
| xPower | double                                           | The xPower of the entity.                  |
| yPower | double                                           | The yPower of the entity.                  |
| zPower | double                                           | The zPower of the entity.                  |



## 使用方式

:::group{name=isDangerous}

Gets whether this skull is dangerous or not.

Returns: true if dangerous, false otherwise.  
Return Type: boolean

```zenscript
// WitherSkull.isDangerous() as boolean

myWitherSkull.isDangerous();
```

:::

:::group{name=setDangerous}

Sets whether this skull is dangerous or not.

```zenscript
// WitherSkull.setDangerous(dangerous as boolean)

myWitherSkull.setDangerous(true);
```

| 参数        | 类型  |
| --------- | --- |
| dangerous | 布尔值 |


:::


## 参数

| 名称          | 类型  | 可获得  | 可设置  | 描述                                           |
| ----------- | --- | ---- | ---- | -------------------------------------------- |
| isDangerous | 布尔值 | true | true | Gets whether this skull is dangerous or not. |

