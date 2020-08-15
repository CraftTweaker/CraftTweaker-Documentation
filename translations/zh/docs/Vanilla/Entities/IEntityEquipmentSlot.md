# IEntity装备槽位

IEntity装备槽是玩家物品栏中的一个槽。 例如，这可以是干燥箱或装甲箱之一。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 craftweaker.entity.IEntityEquipment 槽；`

## ZenGetters/ZenMethods

| Getter    | 类型  |
| --------- | --- |
| index     | int |
| slotIndex | int |
| 名称        | 字符串 |

### 比较

您可以检查两个IEntity装备槽对象是否相同：  
返回了一个布尔。

```zenscript
slotone == slottwo;
```

## 枚举

实体装备槽接口有6个静态方法，每个方法返回给定的 IEntityEquipmentSlot 对象。

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```