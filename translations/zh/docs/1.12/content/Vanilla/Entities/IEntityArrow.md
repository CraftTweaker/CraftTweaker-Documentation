# IEntityArrow

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityArrow;`

## Extending
IEntityArrow implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntity](/Vanilla/Entities/IEntity/)
- [IProjectile](/Vanilla/Events/Events/IProjectile/)

## 使用方式

| ZenGetter         | ZenSetter         | 类型                                    |
| ----------------- | ----------------- | ------------------------------------- |
| shooter           | shooter           | [IEntity](/Vanilla/Entities/IEntity/) |
| damage            | damage            | 双精度                                   |
| knockbackStrength | knockbackStrength | int                                   |
| isCritical        | isCritical        | 布尔值                                   |
| pickupStatus      | pickupStatus      | 字符串[string]                           |
| shake             |                   | int                                   |

## Additional methods

- void `shoot(IEntity shooter, float pitch, float yaw, float roll, float velocity, float inaccuracy)`

- void `setPickupDisallowed()`

- void `setPickupAllowed()`

- void `setPickupCreative()`

