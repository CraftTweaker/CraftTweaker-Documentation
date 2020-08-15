# Hand

Eine Hand ist eine Auflistung der zwei möglichen Hände des Spielers: Haupt- und Ausschalten

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.Hand;`

## Aufzählungen

Hand kann von diesen beiden Werten sein:

- wichtigsten
- aus

```zenscript
import mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Verwendungen

Hauptverwendung einer Hand ist in einer [IItemUse Funktion](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Vergleiche zwei Handobjekte

Sie können zwei Handobjekte mit dem `==` verglichen.

```zenscript
Hand.main() == Hand.main()
```