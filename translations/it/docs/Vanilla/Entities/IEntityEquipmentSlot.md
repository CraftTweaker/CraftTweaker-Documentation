# IEntityEquipmentSlot

Un IEntityEquipmentSlot è uno slot nell'inventario di un giocatore. Questo potrebbe per esempio essere la Mano principale o uno degli slot di armatura,

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethods

| Getter    | Tipo    |
| --------- | ------- |
| indice    | int     |
| slotIndex | int     |
| nome      | stringa |

### Confronta

Puoi controllare se due oggetti IEntityEquipmentSlot sono uguali:  
Restituisce un bool.

```zenscript
slotOne == slotTwo;
```

## Enumerazioni

L'Interfaccia EntityEquipmentSlot ha 6 Metodi statici, ciascuno restituendo l'oggetto IEntityEquipmentSlot dato.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```