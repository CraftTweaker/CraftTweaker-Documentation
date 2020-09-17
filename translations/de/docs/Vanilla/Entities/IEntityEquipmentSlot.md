# IEntityEquipmentSlot

Ein IEntityEquipmentSlot ist ein Platz im Inventar eines Spielers. Das könnte zum Beispiel die Haupthand oder eine der Rüstungsplätze sein.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethoden

| Getriebe   | Type   |
| ---------- | ------ |
| indexieren | int    |
| slotIndex  | int    |
| name       | string |

### Vergleichen

Du kannst überprüfen, ob zwei IEntityEquipmentSlot Objekte gleich sind:  
Gibt einen Bool zurück.

```zenscript
slotOne == slotTwo;
```

## Aufzählungen

Das EntityEquipmentSlot Interface hat 6 statische Methoden, jede gibt das angegebene IEntityEquipmentSlot Objekt zurück.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```