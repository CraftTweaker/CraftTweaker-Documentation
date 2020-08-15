# IEntityEquipmentSlot

[PLACEHOLDER] IEntityEquipmentSlot is the slot in the player inventory. Może to być na przykład główna ręka lub jeden ze slotów na zbroje.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethods

| crwdns74646:0crwdne74646:0 | Typ         |
| -------------------------- | ----------- |
| indeks                     | odcień      |
| slotIndex                  | odcień      |
| Nazwa                      | ciąg znaków |

### Porównaj

Możesz sprawdzić, czy dwa obiekty IEntityEquipmentSlot są równe:  
Zwraca bool.

```zenscript
slotOne == slot drugi;
```

## Liczby

Interfejs EnityEquipmentSlot ma 6 metod statycznych, każdy zwraca dany obiekt IEntityEquipmentSlot.

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```