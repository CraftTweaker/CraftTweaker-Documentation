# Farbe

Wenn Sie unsicher sind, wie Sie das Farb-Int-Objekt erstellen, können Sie stattdessen das Farb-Objekt verwenden.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.Color;`

## Statische Methoden

Statische Methoden werden auf dem Paketnamen aufgerufen und nicht auf dem Objekt selbst.  
All diese Methoden geben ein Farbobjekt zurück.

| ZenMethode    | Parametertyp |
| ------------- | ------------ |
| vonInt(Farbe) | int          |
| vonHex(Farbe) | string       |

## Nichtstatische Methoden

Nicht statische Methoden werden nicht auf den Paketnamen aufgerufen, sondern auf das Objekt selbst.

| ZenMethode    | Rückgabetyp |
| ------------- | ----------- |
| getIntColor() | int         |