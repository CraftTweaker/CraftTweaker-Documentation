# EquipmentSlot

## Importare la Classe

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
## Metodi

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


## Proprietà

| Nome          | Tipo                                                                 | Ha Getter | Ha Setter | Descrizione             |
| ------------- | -------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| commandString | string                                                               | sì        | no        | No Description Provided |
| indice        | int                                                                  | sì        | no        | No Description Provided |
| nome          | string                                                               | sì        | no        | No Description Provided |
| type          | [EquipmentSlotType](/vanilla/api/entity/equipment/EquipmentSlotType) | sì        | no        | No Description Provided |

