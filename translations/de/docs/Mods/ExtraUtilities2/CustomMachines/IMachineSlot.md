# IMachineSlot

Ein Maschinenslot ist ein Slot, der Artikel oder Flüssigkeiten akzeptiert.  
Sie benötigen sie, wenn Sie eine Maschine mit der [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) später erstellen.

## Dieses Paket importieren

Wenn Sie Methodenaufrufe verkürzen oder Probleme auftreten möchten, müssen Sie [das Paket importieren](/AdvancedFunctions/Import) importieren.  
Sie können dies tun mit

```zenscript
extrautilities2.Tweaker.IMachineSlot;
```

## Erstellen eines neuen IMachineSlot

Das IMachineSlot Paket bietet Methoden zur Erstellung neuer IMachineSlot Objekte:

```zenscript
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilitities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrautilities2.Tweaker.IMachineSlot. ewItemStackSlot(name, color, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

All diese Methoden werden den neuen Slot als IMachineSlot Objekt zurückgeben.

Die Parameter sind:

| Name               | Type                                          |
| ------------------ | --------------------------------------------- |
| name               | string                                        |
| isOptional         | bool                                          |
| stackkapazität     | int                                           |
| farben             | int                                           |
| Hintergrund-Textur | string                                        |
| filterLiquidStack  | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Was die Parameter tun:

- `Name`: Der Slot-Name. Wird später für Rezepte verwendet. Stellen Sie sicher, dass eine Maschine keine 2 Slots mit dem gleichen Namen hat.
- `isOptional`: Diktiert ob dieser Slot für Rezeptprüfungen ausgefüllt werden muss oder nicht.
- `StackCapacity`: Wie viele Gegenstände/Millibuckets können in diesen Slot passen?
- `Farbe`: Welche Farbe hat der Slot?
- `Hintergrundtextur`: Hier kann ein benutzerdefinierter Texturpfad für den Hintergrund dieses Slot hinzugefügt werden.
- `filterLiquidStack`: Wenn Sie dieses [ILiquidStack](/Vanilla/Liquids/ILiquidStack) Objekt angeben, dann ist nur dieses Flüssigkeit berechtigt, den Slot zu betreten.

## Getriebe

Sie können auch grundlegende Informationen von einem IMachineSlot erhalten.  
Erwarten Sie von diesen Gettern nicht, dass sie etwas anderes zurückgeben als das, was Sie beim Erstellen des Slot gesetzt haben.

| Name           | Type   |
| -------------- | ------ |
| name           | string |
| optional       | bool   |
| stackkapazität | int    |