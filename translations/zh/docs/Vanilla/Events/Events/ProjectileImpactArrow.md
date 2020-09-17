# ProjectileImpactArrow

每当箭射弹撞击一个实体但在损伤之前等被计算出来时，这个事件都会被发射。 它是 **可取消**，如果取消，将不会处理影响。

来自箭头实体的各种数值可以通过zengetter获得，并且可以被修改以调整伤害。 击退强度、拾取状态并确定（或强制）一个关键击中。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftmilower.event.ProjecttileImpactArrow事件；`

## 扩展 IEntityEvent
ProjectileImpactArrow Events 实现了以下接口，并且能够调用他们所有的方法/getter/setters：

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters 和 ZenSettters

以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                    |
| --------- | --------- | ------------------------------------- |
| `箭头`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `射手`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `伤害`      | `伤害`      | 双精度                                   |
|           | `击退强度`    | 整数型变量(仅限设置，无getter)                   |
| `关键字`     | `关键字`     | boolean                               |
| `拾取状态`    |           | 字符串[string]                           |

## 其他方法

- `setPickupDisalled()`

不允许在任何情况下拿起箭头。

- `setPickupalled()`

允许箭头从实体的位置上移。

- `setPickupCreative()`

只有当玩家处于创造性模式时才允许拿起箭头。
