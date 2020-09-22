# MCTag

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implementierte Schnittstellen
MCTag implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### add-Blöcke

```zenscript
myMCTag.addBlock(Blöcke als crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Beschreibung                 |
| --------- | --------------------------------------------------------------- | ---------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Keine Beschreibung angegeben |


### addEntity-Typen

```zenscript
myMCTag.addEntityTypes(Entitäten als crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------- | ---------------------------- |
| objekte   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Keine Beschreibung angegeben |


### addFluids

```zenscript
myMCTag.addFluids(Flüssigkeiten als crafttweaker.api.fluid.MCFluid[]);
```

| Parameter     | Type                                                           | Beschreibung                 |
| ------------- | -------------------------------------------------------------- | ---------------------------- |
| flüssigkeiten | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Keine Beschreibung angegeben |


### hinzufügende Elemente

Fügt Items zu diesem Tag hinzu, wird fehlschlagen, wenn dies kein Tag ist, das Items enthalten kann

```zenscript
myMCTag.addItems(Gegenstände als crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parameter   | Type                                                                | Beschreibung                             |
| ----------- | ------------------------------------------------------------------- | ---------------------------------------- |
| gegenstände | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elemente, die zum Tag hinzugefügt werden |


### anfallender Schaden

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anySchaden();
```

### createBlockTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
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


### entfernen Blöcke

```zenscript
myMCTag.removeBlock(Blöcke als crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Beschreibung                 |
| --------- | --------------------------------------------------------------- | ---------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Keine Beschreibung angegeben |


### entfernenEntity-Typen

```zenscript
myMCTag.removeEntityTypes(Entitäten als crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------- | ---------------------------- |
| objekte   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Keine Beschreibung angegeben |


### entfernen Flüssigkeiten

```zenscript
myMCTag.removeFluids(Flüssigkeiten als crafttweaker.api.fluid.MCFluid[]);
```

| Parameter     | Type                                                           | Beschreibung                 |
| ------------- | -------------------------------------------------------------- | ---------------------------- |
| flüssigkeiten | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Keine Beschreibung angegeben |


### Elemente entfernen

entfernt Items von diesem Tag, wird fehlschlagen, wenn dies kein Schlagwort ist, das Items enthalten kann

```zenscript
myMCTag.removeItems(Items als crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parameter   | Type                                                                | Beschreibung            |
| ----------- | ------------------------------------------------------------------- | ----------------------- |
| gegenstände | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Zu entfernende Elemente |



## Eigenschaften

| Name            | Type                                                                             | Hat Getter | Hat Setter |
| --------------- | -------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true       | false      |
| Kommandozeile   | String                                                                           | true       | false      |
| entity-Typen    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true       | false      |
| erster Block    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true       | false      |
| firstEntityType | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true       | false      |
| erstefluid      | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true       | false      |
| erster Artikel  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true       | false      |
| flüssigkeiten   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true       | false      |
| id              | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| isBlockTag      | boolean                                                                          | true       | false      |
| isEntityTypeTag | boolean                                                                          | true       | false      |
| isFluidTag      | boolean                                                                          | true       | false      |
| isItemTag       | boolean                                                                          | true       | false      |
| gegenstände     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true       | false      |

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

