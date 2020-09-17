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
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(Inhalt als crafttweaker.api.util.text.MCTextComponent, showMessage als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter       | Type                                                                                 | Beschreibung                 | IsOptionale | Standardwert |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------- | ----------- | ------------ |
| inhalt          | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben | false       | `null`       |
| zeige Nachricht | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben | true        | `null`       |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(Inhalt als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| inhalt    | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben |


### anfallender Schaden

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anySchaden();
```

### clearCustomname

Löscht jeden benutzerdefinierten Namen für diesen Artikel

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### kopieren

Erstellt eine Kopie

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### Verbleibender Artikel

Was bleibt im Raster, wenn diese Zutatenstapel hergestellt wird? Prüft aber nicht, ob der Stapel übereinstimmt! Verwendet z.B. im net.minecraft.item.crafting.ICraftingRecipe von CrT

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel für diese Zutat. |


### passt

Stimmt der gegebene Stapel mit der Zutat?

Rückgabetyp: boolesch

```zenscript
<item:minecraft:dirt>.matches(Stapel als crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung           |
| --------- | ----------------------------------------------------------------- | ---------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel |



Stimmt der gegebene Stapel mit der Zutat?

Rückgabetyp: boolesch

```zenscript
<item:minecraft:dirt>.matches(Stapel als crafttweaker.api.item.IItemStack, ignoreSchaden als boolean);
```

| Parameter     | Type                                                              | Beschreibung                       |
| ------------- | ----------------------------------------------------------------- | ---------------------------------- |
| stapeln       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel             |
| ignoreSchaden | boolean                                                           | Soll der Schaden überprüft werden? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(Funktion als crafttweaker.api.item.tooltip.ITooltipFunktion);
```

| Parameter | Type                                                                                              | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------- |
| funktion  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Keine Beschreibung angegeben |


### mutierbar

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### nur Beschädigt

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Beschreibung                 | IsOptionale | Standardwert |
| --------- | ------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- | ------------ |
| uid       | String                                                                                                  | Keine Beschreibung angegeben | false       | `null`       |
| funktion  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Keine Beschreibung angegeben | true        | `null`       |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| regex     | String | Keine Beschreibung angegeben |


### setDisplayName

Setzt den Anzeigenamen des Artikel-Stacks

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(Name als String);
<item:minecraft:dirt>.setDisplayName("total nicht schmutzig");
```

| Parameter | Type   | Beschreibung           |
| --------- | ------ | ---------------------- |
| name      | String | Neuer Name des Stacks. |


### widerrufen Schaden

Legt den Schaden des Gegenstandsstapel fest

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withSchaden(Schaden);
<item:minecraft:dirt>.withSchaden(10);
```

| Parameter | Type | Beschreibung         |
| --------- | ---- | -------------------- |
| schaden   | int  | der neue Schadenwert |


### mit Tag

Legt das Schlagwort für den Artikel-Stack fest.

 Gibt `diesen Gegenstandstapel zurück, wenn er veränderbar ist, andernfalls ein neuer mit der geänderten Eigenschaft`

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

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
| schaden        | int                                                                 | true       | false      |
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
| besitzer       | String                                                              | true       | false      |
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

