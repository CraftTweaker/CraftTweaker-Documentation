# IItemStack

Dies ist ein Element. Es kann mit einem Item BEP abgerufen werden. Ist ein [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implementierte Schnittstellen
IItemStack implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### clearCustomname

Löscht jeden benutzerdefinierten Namen für diesen Artikel

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### Verbleibender Artikel

Was bleibt im Raster, wenn diese Zutatenstapel hergestellt wird? Prüft aber nicht, ob der Stapel übereinstimmt! Verwendet z.B. im net.minecraft.item.crafting.ICraftingRecipe von CrT

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
<item:minecraft:dirt>.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel für diese Zutat. |


### passt

Stimmt der gegebene Stapel mit der Zutat?

Rückgabewert boolesch

```zenscript
<item:minecraft:dirt>.matches(Stapel als crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung           |
| --------- | ----------------------------------------------------------------- | ---------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel |


### setDisplayName

Setzt den Anzeigenamen des Artikel-Stacks

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
<item:minecraft:dirt>.setDisplayName(Name als String);
<item:minecraft:dirt>.setDisplayName("total nicht schmutzig");
```

| Parameter | Type   | Beschreibung           |
| --------- | ------ | ---------------------- |
| name      | String | Neuer Name des Stacks. |


### widerrufen Schaden

Legt den Schaden des Gegenstandsstapel fest

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
<item:minecraft:dirt>.withSchaden(Schaden);
<item:minecraft:dirt>.withSchaden(10);
```

| Parameter | Type | Beschreibung         |
| --------- | ---- | -------------------- |
| schaden   | int  | der neue Schadenwert |


### mit Tag

Legt das Schlagwort für den Artikel-Stack fest.

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({lor: ["Hallo"]}});
```

| Parameter | Type                                                   | Beschreibung         |
| --------- | ------------------------------------------------------ | -------------------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Das zu setzende Tag. |



## Eigenschaften

| Name           | Type                                                                | Hat Getter | Hat Setter |
| -------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| beträge        | int                                                                 | true       | false      |
| brennzeit      | int                                                                 | true       | true       |
| Kommandozeile  | String                                                              | true       | false      |
| beschädigbar   | boolean                                                             | true       | false      |
| beschädigt     | boolean                                                             | true       | false      |
| displayName    | String                                                              | true       | false      |
| leer           | boolean                                                             | true       | false      |
| essen          | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true       | true       |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| getRepairCost  | int                                                                 | true       | false      |
| hasDisplayName | boolean                                                             | true       | false      |
| hasEffect      | boolean                                                             | true       | false      |
| hasTag         | boolean                                                             | true       | false      |
| isCrossbow     | boolean                                                             | true       | false      |
| isEnchantable  | boolean                                                             | true       | false      |
| isEnchanted    | boolean                                                             | true       | false      |
| gegenstände    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |
| maxDamage      | int                                                                 | true       | false      |
| maxStackSize   | int                                                                 | true       | false      |
| registryName   | String                                                              | true       | false      |
| stapelbar      | boolean                                                             | true       | false      |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| translationkey | String                                                              | true       | false      |
| useDuration    | int                                                                 | true       | false      |

## Operatoren
### MUL

Legt den Betrag des Artikel-Stacks fest

```zenscript
<item:minecraft:dirt> * Betrag als Int
<item:minecraft:dirt> * 3
```

| Parameter | Type | Beschreibung |
| --------- | ---- | ------------ |
| beträge   | int  | neuer Betrag |

## Zauberer

| Ergebnis-Typ                                                      | Ist Implizit |
| ----------------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | true         |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | true         |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | false        |

