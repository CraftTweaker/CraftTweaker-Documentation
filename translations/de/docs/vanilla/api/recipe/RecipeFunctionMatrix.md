# RecipeFunctionMatrix

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Funktionale Schnittstelle

Diese Klasse ist eine funktionale Schnittstelle. Das bedeutet, dass Sie die Lambda-Notation benutzen können, um eine Instanz davon zu erstellen. Die Lambda-Notation sieht wie folgt aus:
```zenscript
(üblicherweise Out, Eingänge) => <item:minecraft:dirt>
```
## Methoden
### verarbeiten

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[][]);
```

| Parameter     | Type                                                                  | Beschreibung                 |
| ------------- | --------------------------------------------------------------------- | ---------------------------- |
| üblicherweise | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | Keine Beschreibung angegeben |
| inputs        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | Keine Beschreibung angegeben |



