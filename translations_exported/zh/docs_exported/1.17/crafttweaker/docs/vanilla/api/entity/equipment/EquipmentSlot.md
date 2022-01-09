# EquipmentSlot

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.equipment.EquipmentSlot;
```


## Enum Constants

EquipmentSlot is an enum. It has 6 enum constants. They are accessible using the code below.

```zenscript
EquipmentSlot.MAINHAND
EquipmentSlot.OFFHAND
EquipmentSlot.FEET
EquipmentSlot.LEGS
EquipmentSlot.CHEST
EquipmentSlot.HEAD
```
## 使用方式

:::group{name=getCommandString}

Return Type: string

```zenscript
// EquipmentSlot.getCommandString() as string

myEquipmentSlot.getCommandString();
```

:::

:::group{name=getIndex}

Return Type: int

```zenscript
// EquipmentSlot.getIndex() as int

myEquipmentSlot.getIndex();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// EquipmentSlot.getName() as string

myEquipmentSlot.getName();
```

:::

:::group{name=getType}

Return Type: [EquipmentSlotType](/vanilla/api/entity/equipment/EquipmentSlotType)

```zenscript
// EquipmentSlot.getType() as EquipmentSlotType

myEquipmentSlot.getType();
```

:::


## 参数

| 名称                   | 类型                                                                   | 可获得  | 可设置   | 描述                      |
| -------------------- | -------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string                                                               | true | false | No Description Provided |
| index                | int                                                                  | true | false | No Description Provided |
| name（名称）             | string                                                               | true | false | No Description Provided |
| 类型                   | [EquipmentSlotType](/vanilla/api/entity/equipment/EquipmentSlotType) | true | false | No Description Provided |

