# DropTableBuilder

DropTableBuilder wird verwendet, um 'drops' Zeichenketten für Erze und Muster zu erstellen, die das Ablegen mehrerer Stacks auf einmal unterstützen, Gegenstandsstapel, die mehr als einen Gegenstand und gewichtete Tropfen enthalten.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.DropTableBuilder;`

## Methoden

Diese Methoden ermöglichen das Erstellen und Modifizieren einer Drop Tabelle. Alle Builder-Methoden geben den Builder zurück, auf dem sie ausgeführt wurden, was Chaining-Methoden erlaubt.

| Methodenname    | Beschreibung                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| newSlot()       | Erstellt eine neue Drop-Tabelle, wenn sie statisch ausgeführt wird, oder fügt der Drop-Tabelle einen neuen Slot hinzu. |
| addItem()       | Fügt das angegebene Element dem aktuellen Slot der Drop Tabelle hinzu.                                                 |
| enableFortune() | Ermöglicht den aktuellen Slot von der Verzauberung des Vermögens.                                                      |

### Verwendung:

#### `newSlot()`

DropTableBuilder.newSlot() erstellt einen neuen Builder. \<builder\>.newSlot() wird den aktuellen Slot beenden und einen neuen starten.

#### `addItem (String itemStr[, int Gewicht[, int count]])`

`itemStr` kann der Name eines Elements sein wie \<mod\>:\<item\>:\<meta\>, ein Erzwörterbucheintrag wie oredict:\<entry\>, oder das Wort leer. `Gewicht` bestimmt, wie wahrscheinlich der Gegenstand mit der Formel fallen soll \<item weight\>/\<sum of item weights within slot\>. Standardmäßig 1 wenn ausgelassen. `Anzahl` ist, wie viele der Elemente fallen gelassen werden, wenn ausgewählt. Standardmäßig 1 wenn ausgelassen.

#### `enableFortune()`

Spielautomaten mit aktiviertem Vermögen werden eine Reihe zusätzlicher Gegenstände aus dem Spielfeld bis hin zum verwendeten Vermögen auswählen. Matches Vanilla Glücksverhalten auf Slots, die nur 1 Item haben.

## Beispiele mit dem Builder

### Erstellen einer Drop Tabelle

```zenscript
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

Dieser Drop-Tisch würde 2 Diamanten (10%) oder 1 Kohle (90%) in den Genuss von Vermögen, 1 Stein (100%) und 1 Kopfstein (50%) fallen.

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   . ddItem("minecraft:lapis_lazuli", 1, 4)
                   . ddItem("minecraft:lapis_lazuli", 1, 5)
                   . ddItem("minecraft:lapis_lazuli", 1, 6)
                   . ddItem("minecraft:lapis_lazuli", 1, 7)
                   . ddItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

Dieser Drop Tisch imitiert Vanilla-Lapis, fällt 4-8 Runden und profitiert vom Glück.

### Benutze eine Drop Tabelle

Builder werden verwendet, indem sie sie als Datenwert "drops" zuweisen. Da Datenwerte nur Strings akzeptieren, wird der Builder mit seiner ToString-Methode als String gegossen.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable);
complexData.addDataValue("drops",complextable+lapistable);
```

Wenn 2 Builder zusammen hinzugefügt werden, wird eine neue Tabelle mit den Slots aus beiden Tabellen erstellt.