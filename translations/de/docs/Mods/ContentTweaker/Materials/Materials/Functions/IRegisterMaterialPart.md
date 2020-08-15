# IRegisterMaterialPart

Die Funktion IRegisterMaterialPart ist eine Fucntion, die verwendet wird, um [Materialteile](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) zu registrieren, die mit einem benutzerdefinierten [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) hinzugefügt wurden.

## Dieses Paket importieren

Wenn Sie jemals das Bedürfnis haben, die Klasse dieser Funktion zu importieren, gehen Sie hier:

```zenscript
importieren mods.contenttweaker.RegisterMaterialPart;
```

## Syntax

Wir haben eine ungültige Funktion, die einen [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) als Eingabe nimmt.  
Dies ist der Materialteil, der registriert werden soll.  
Sie können zum Beispiel die [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) an dieser Stelle anrufen aber wie weiter aus diesem Punkt ist wirklich die Aufgabe von Ihnen.

```zenscript
function(materialPart) {
    //DoStuff
    gibt zurück;
}
```