# Globale Funktionen

Globale Funktionen sind Funktionen, die ohne [importiert werden können](/AdvancedFunctions/Import/).  
Hier ist die Liste:

## drucken

Gibt die Zeichenkette in das Handwerksprotokoll als Information aus.

```zenscript
//print(String message);
print("Hallo Welt!");
```

Gibt nichts zurück

## Gesamte Aktionen

```zenscript
//totalActions();
totalActions();
```

Gibt eine Int zurück, die zeigt, wie viele globale Funktionen registriert sind.

## enableDebug

Aktiviert den Debug-Modus.  
Verwendung des [Debug-Präprozessors](/AdvancedFunctions/Preprocessors/DebugPreprocessor/) wird jedoch bevorzugt.

```zenscript
//enableDebug();
enableDebug();
```

Gibt nichts zurück

## isNull

Prüft, ob ein bestimmtes Objekt null ist.  
Funktioniert nicht auf Primitiven!

```zenscript
//isNull(Objekt o);
isNull(<minecraft:dirt>);
```

Returns a boolean Note: If this does not work for you, try casting the object to bool `<minecraft:dirt> as bool`

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Gibt eine Int zurück

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Gibt eine Int zurück

## pow

```zenscript
//pow(double number 1, double number 2);
pow(2.0, 4.0);
```

Gibt ein Doppeltes zurück

## Globale Felder

| Feld            | Beschreibung                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------- |
| brauen          | Zugriff auf den [Brauer Handler](/Vanilla/Recipes/Recipes_Brewing_Stand/)                       |
| klient          | Zugriff auf [Client-Methoden](/Vanilla/Game/IClient/)                                           |
| veranstaltungen | Zugriff auf den [Event-Handler](/Vanilla/Events/IEventManager/)                                 |
| formatieren     | Zugriff auf den [Formatierungs-Handler](/Vanilla/Utils/IFormatter/)                             |
| ofen            | Zugriff auf den [Ofenhandler](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                        |
| spiel           | Zugriff auf [Spielfunktionen](/Vanilla/Game/IGame/)                                             |
| itemUtils       | Zugriff auf den [Artikel Handler](/Vanilla/Utils/IItemUtils/)                                   |
| geladene Mods   | Zugriff auf die [geladene Mods Liste](/Vanilla/Game/Mods/)                                      |
| logger          | Zugriff auf den [Logger](/Vanilla/Utils/Logger/)                                                |
| oreDict         | Zugriff auf den [OreDictionary Handler](/Vanilla/OreDict/IOreDict/)                             |
| rezepte         | Zugriff auf den [Rezept-Handler](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)             |
| server          | Zugriff auf [Server-Methoden](/Vanilla/Game/IServer/)                                           |
| vanilla         | Zugriff auf Vanille-Funktionen (derzeit nur [vanilla.seeds](/Vanilla/Recipes/Seeds/) verfügbar) |