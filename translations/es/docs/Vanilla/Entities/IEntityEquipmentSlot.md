# IEntityEquipmentSlot

An IEntityEquipmentSlot is a slot in a player's inventory. That could for example be the mainHand or one of the armor slots.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethods

| Obtén     | Tipo   |
| --------- | ------ |
| index     | int    |
| slotIndex | int    |
| nombre    | cadena |

### Compare

You can check if two IEntityEquipmentSlot objects are equal:  
Returns a bool.

```zenscript
slotOne == slotTwo;
```

## Enumeraciones

The EntityEquipmentSlot Interface has 6 static Methods, each returning the given IEntityEquipmentSlot object.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```