# IngredientTransformer

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Methoden
### getCommandString

Rückgabetyp: String

```zenscript
myIIngredientTransformer.getCommandString(Zutat als T);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| zutat     | T    | Keine Beschreibung angegeben |


### passt

Rückgabetyp: boolesch

```zenscript
myIIngredientTransformer.matches(Stapel als crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung                 |
| --------- | ----------------------------------------------------------------- | ---------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |



