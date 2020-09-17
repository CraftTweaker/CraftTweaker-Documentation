# Zutatenliste

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.item.IngredientList
```

## Implementierte Schnittstellen
IngredientList implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### anfallender Schaden

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anySchaden();
```

### Verbleibender Artikel

Was bleibt im Raster, wenn diese Zutatenstapel hergestellt wird? Prüft aber nicht, ob der Stapel übereinstimmt! Verwendet z.B. im net.minecraft.item.crafting.ICraftingRecipe von CrT

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel für diese Zutat. |


### passt

Stimmt der gegebene Stapel mit der Zutat?

Rückgabetyp: boolesch

```zenscript
null.matches(Stapel als crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung           |
| --------- | ----------------------------------------------------------------- | ---------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel |



Stimmt der gegebene Stapel mit der Zutat?

Rückgabetyp: boolesch

```zenscript
null.matches(Stapel als crafttweaker.api.item.IItemStack, ignoreSchaden als boolean);
```

| Parameter     | Type                                                              | Beschreibung                       |
| ------------- | ----------------------------------------------------------------- | ---------------------------------- |
| stapeln       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel             |
| ignoreSchaden | boolean                                                           | Soll der Schaden überprüft werden? |


### nur Beschädigt

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Beschreibung                 | IsOptionale | Standardwert |
| --------- | ------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- | ------------ |
| uid       | String                                                                                                  | Keine Beschreibung angegeben | false       | `null`       |
| funktion  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Keine Beschreibung angegeben | true        | `null`       |



## Eigenschaften

| Name          | Type                                                                | Hat Getter | Hat Setter |
| ------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile | String                                                              | true       | false      |
| gegenstände   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |

## Operatoren
### OR (ODER)

```zenscript
<tag:ingotIron> | Andere als crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Beschreibung                 |
| --------- | ------------------------------------------------------------------- | ---------------------------- |
| andere    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ                                               | Ist Implizit |
| ---------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true         |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true         |

