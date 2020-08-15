# IMachine

Eine IMachine ist das aktuelle Maschinenobjekt, Sie können es von der [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) erhalten.

## Dieses Paket importieren

It might be required for you to [import](/AdvancedFunctions/Import) the class.  
You usually only need to import a class when directly using the name, such as in casting or [Array Declarations](/AdvancedFunctions/Arrays_and_Loops) but better be safe than sorry and add the import.

```zenscript
extrautilities2.Tweaker.IMachine;
```

## Rezepte hinzufügen

Es gibt zwei Methoden zum Hinzufügen von Rezepten, eine verwendet eine Wahrscheinlichkeitskarte für die Ausgaben, eine erlaubt die Verwendung von [Gewichteten Gegenständen](/Vanilla/Items/WeightedItemStack) und [GewichtetLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) Objekte.  
Beide Methoden verwenden [Karten](/AdvancedFunctions/Associative_Arrays) mit Zeichenketten als Indizes.  
Diese Zeichenketten werden die Namen der eingegebenen Ein-/Ausgabe-Slots sein, aus diesem Grund sollten Sie nicht zwei Slots mit dem gleichen Namen in einer Maschine haben.

### Verwende eine Wahrscheinlichkeitskarte

```zenscript
myMachine.addRecipe(Eingänge, Ausgaben, Energie, Zeit, Wahrscheinlichkeit);
```

Diese Methode verwendet folgende Parameter:

| Name                 | Type                                                        |
| -------------------- | ----------------------------------------------------------- |
| inputs               | [Ingredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs              | [Ingredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| energien             | int                                                         |
| Zeit                 | int                                                         |
| Wahrscheinlichkeiten | float[string\]                                             |

### Nur Ausgabekarte verwenden

Sie können auch nur die Ausgabekarte verwenden, dann wird ExtUtils2 auf beliebige [Gewichtete Artikel](/Vanilla/Items/WeightedItemStack) und [Gewichtete LiquidStack](/Vanilla/Liquids/WeightedLiquidStack) Objekte prüfen und ihre Chancen nutzen.  
Denken Sie daran, dass das Hinzufügen von etwas anderem als diesen zwei oder [IIngredient](/Vanilla/Variable_Types/IIngredient) als zugeordneter Wert keine Wirkung hat.

```zenscript
myMachine.addRecipe(Eingänge, Ausgaben, Energie, Zeit);
```

Diese Methode verwendet folgende Parameter:

| Name     | Type                                                        |
| -------- | ----------------------------------------------------------- |
| inputs   | [Ingredient](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs  | Objekt[string\]                                            |
| energien | int                                                         |
| Zeit     | int                                                         |

## Rezepte entfernen

Du kannst auch Rezepte entfernen. Auch hier verwenden Sie [Karten](/AdvancedFunctions/Associative_Arrays) mit Zeichenketten als Indizes.

Es gibt zwei Methoden, eine verwendet [IIngredient](/Vanilla/Variable_Types/IIngredient) als Werte, und eine, die eine Karte mit [IItemStack](/Vanilla/Items/IItemStack) und einer Karte mit [ILiquidStack](/Vanilla/Liquids/ILiquidStack) Werten akzeptiert.

### Verwendung von IIngredient

```zenscript
myMachine.removeRecipe(Eingabe);
```

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| inputs | [Ingredient](/Vanilla/Variable_Types/IIngredient)[string\] |

### Verwende separate Karten für Artikel und Flüssigkeiten

```zenscript
myMachine.removeRecipe(Gegenstände, Flüssigkeit);
```

| Name          | Type                                                    |
| ------------- | ------------------------------------------------------- |
| gegenstände   | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| Flüssigkeiten | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## Rechnerinformationen werden abgerufen

Sie können auch einige Informationen über die Maschine mit den folgenden Methoden abrufen:

- `getInputSlots()`: Gibt alle Eingabefelder als Liste von [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) zurück.
- `getOutputSlots()`: Gibt alle Ausgabeslots als Liste von [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) zurück.
- `getSlot()`: Gibt den [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) mit dem Namen zurück.

## Benennen der Maschine

Bisher werden alle unsere Maschinen den Namen `machine.crafttweaker:your_machine_name` erhalten, wobei `your_machine_name` der Name ist, den Sie zur Erstellung der Maschine verwendet haben.

Wenn der Maschinenname lokalisiert werden soll, verwenden Sie entweder CrT's [IGame](/Vanilla/Game/IGame) Fähigkeiten oder eine benutzerdefinierte Sprachdatei.

Wenn Ihr Rechnername `time_machine`war, müssen Sie entweder in einem Skript aufrufen:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Space Time distorter (Time machine)");
```

Oder füge dies einer Sprachdatei hinzu:

    machine.crafttweaker:time_machine=Space Time Verzerrer (Zeitmaschine)