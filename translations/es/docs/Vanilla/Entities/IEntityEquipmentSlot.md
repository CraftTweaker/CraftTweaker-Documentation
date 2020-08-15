# Máquina de equipamiento

Una Ranura IEntityEquipmentSlot es una ranura en el inventario de un jugador. Eso podría ser, por ejemplo, el manto o uno de los huecos de armadura.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethods

| Obtén     | Tipo   |
| --------- | ------ |
| índice    | int    |
| slotIndex | int    |
| nombre    | cadena |

### Comparar

Puedes comprobar si dos objetos IEntityEquipmentSlot son iguales:  
Devuelve un bool.

```zenscript
slotOne == slotTwo;
```

## Enumeraciones

La interfaz EntityEquipmentSlot tiene 6 métodos estáticos, cada uno devolviendo el objeto IEntityEquipmentSlot dado.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```