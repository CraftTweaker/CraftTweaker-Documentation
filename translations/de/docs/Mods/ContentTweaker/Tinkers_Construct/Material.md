# Materialvertretung

Eine Materialdarstellung stellt ein Tinkers' Construct Material dar.  
Sie können ein solches Objekt entweder vom [Materialbauer](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) oder vom [Materialklappenhandler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/) erhalten.

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter     | Type   |
| ------------- | ------ |
| identifier    | string |
| Kommandozeile | string |

## Materialartikel hinzufügen

Wenn du das angegebene Item im Bauteilbauer verwendest können Sie einstellen, wie viele Materialpunkte vergeben werden oder wie viel der Gegenstand reparieren wird.

    //myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched);
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `Gegenstand` ist der Gegenstand, auf den man zutrifft. Sie können [Artikelbedingungen](/Vanilla/Items/Item_Conditions/) verwenden, aber keine Transformatoren. 
- `Der benötigte Betrag` ist die Anzahl der Gegenstände, gegen die abgestimmt wird. Sie können sie über alle Slots der Toolforge aufteilen, so dass Sie auch über 64 hinausgehen können. Im zweiten Beispiel oben benötigen Sie 4 Eisenblöcke pro Zuschlag. Standard ist 1.
- `Betrag übereinstimmend` ist die Menge an Materialpunkten, die pro `Betrag hinzugefügt werden muss`. Im zweiten Beispiel über vier Eisenblöcke gibt es zwei Materialpunkte. Standardmäßig 144 (ein ingot/ein Materialwert).

## Materialeigenschaften hinzufügen

Du kannst dem Material ein Merkmal hinzufügen.  
Alle Gegenstände aus diesem Material werden dann dieses Merkmal haben.  
Verwendet eine [Merkmalsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) oder eine Zeichenkette mit dem Bezeichner (empfohlen), gibt ungültig zurück.  
Sie können auch eine Abhängigkeitszeichenkette angeben, , was dazu führt, dass das Merkmal nur für bestimmte Bauteiltypen, wie zum Beispiel Köpfe, verfügbar ist. Wenn dieser Parameter null injiziert, , was dazu führt, dass das Merkmal nur auf dem Bauteiltyp liegt, wenn noch keine anderen nonnull Abhängigkeitsmodifikatoren auf diesem Teil vorhanden sind.

Der String-Varaint wird empfohlen, da zum Zeitpunkt der CoT-Ausführung die meisten Züge noch nicht verfügbar sind und zum Zeitpunkt der Ausführung von CrT nicht alle wurden initialisiert, aber wenn Sie die Zeichenketten verwenden, wird der Zusatz der Materialien verschoben, bis sie verfügbar sind. Es ist immer noch nicht fehlersicher und es gibt keine einfache Möglichkeit nach Tippfehlern zu suchen, also sollten Sie die Fehlermeldungen beachten, die Ihnen mitteilen, welche Merkmale noch nicht gefunden wurden.

```zenscript
myMaterial.addTrait("fiery", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```