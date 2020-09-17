# IIngredient

Das ist IIngredient!!!

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.item.IIngredient
```

## Implementierte Schnittstellen
IIngredient implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### Verbleibender Artikel

Was bleibt im Raster, wenn diese Zutatenstapel hergestellt wird? Prüft aber nicht, ob der Stapel übereinstimmt! Verwendet z.B. im net.minecraft.item.crafting.ICraftingRecipe von CrT

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
<tag:ingotIron>.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel für diese Zutat. |


### passt

Stimmt der gegebene Stapel mit der Zutat?

Rückgabewert boolesch

```zenscript
<tag:ingotIron>.matches(Stapel als crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung           |
| --------- | ----------------------------------------------------------------- | ---------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel |



## Eigenschaften

| Name          | Type                                                                | Hat Getter | Hat Setter |
| ------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile | String                                                              | true       | false      |
| gegenstände   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |

## Zauberer

| Ergebnis-Typ                                               | Ist Implizit |
| ---------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true         |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true         |

