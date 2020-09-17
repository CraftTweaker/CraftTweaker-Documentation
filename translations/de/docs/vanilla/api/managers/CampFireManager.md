# CampFireManager



Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.CampFireManager
```

## Implementierte Schnittstellen
CampFireManager implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Methoden
### addRecipe

Fügt ein Rezept basierend auf angegebenen Parametern hinzu.

```zenscript
campfire.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
campfire.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parameter | Type                                                                | Beschreibung                    |
| --------- | ------------------------------------------------------------------- | ------------------------------- |
| name      | String                                                              | Name des neuen Rezepts          |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack-Ausgabe des Rezepts  |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ingrediente Eingabe des Rezepts |
| xp        | float                                                               | wie viel xp der Spieler bekommt |
| kochzeit  | int                                                                 | wie lange es dauert zu kochen   |


### Rezept entfernen

Entfernt ein Rezept basierend auf Ausgabe und Eingabe.

```zenscript
campfire.removeRecipe(Ausgabe als crafttweaker.api.item.IItemStack, Eingabe als crafttweaker.api.item.IIngredient);
campfire.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parameter | Type                                                                | Beschreibung                             |
| --------- | ------------------------------------------------------------------- | ---------------------------------------- |
| ausgeben  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack Ausgabe des Rezeptes.         |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ingredient des zu entfernenden Rezeptes. |



