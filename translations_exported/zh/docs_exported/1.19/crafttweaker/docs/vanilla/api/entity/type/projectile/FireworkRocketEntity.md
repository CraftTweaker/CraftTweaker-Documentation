# FireworkRocketEntity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.FireworkRocketEntity;
```


## Extending Projectile

FireworkRocketEntity extends [Projectile](/vanilla/api/entity/type/projectile/Projectile). That means all methods available in [Projectile](/vanilla/api/entity/type/projectile/Projectile) are also available in FireworkRocketEntity

## 已实现的接口
FireworkRocketEntity implements the following interfaces. That means all methods defined in these interfaces are also available in FireworkRocketEntity

- [ItemSupplier](/vanilla/api/entity/type/projectile/ItemSupplier)

## Constructor #构造函数


```zenscript
new FireworkRocketEntity(level as Level, x as double, y as double, z as double, stack as ItemStack) as FireworkRocketEntity
new FireworkRocketEntity(level, 0, 0, 0, <item:minecraft:air>);
```
| 参数    | 类型                                  | 描述                            |
| ----- | ----------------------------------- | ----------------------------- |
| level | [Level](/vanilla/api/world/Level)   | The level the entity is in.   |
| x     | double                              | The x position of the entity. |
| y     | double                              | The y position of the entity. |
| z     | double                              | The z position of the entity. |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) | The optional firework stack.  |



## 使用方式

:::group{name=isShotAtAngle}

Checks whether this firework rocket was shot at an angle or not.

Returns: true if shot at an angle, false otherwise.  
Return Type: boolean

```zenscript
// FireworkRocketEntity.isShotAtAngle() as boolean

myFireworkRocketEntity.isShotAtAngle();
```

:::


## 参数

| 名称            | 类型  | 可获得  | 可设置   | 描述                                                               |
| ------------- | --- | ---- | ----- | ---------------------------------------------------------------- |
| isShotAtAngle | 布尔值 | true | false | Checks whether this firework rocket was shot at an angle or not. |

