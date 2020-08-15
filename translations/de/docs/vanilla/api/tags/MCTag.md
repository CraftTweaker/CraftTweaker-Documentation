# MCTag

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implementierte Schnittstellen
MCTag implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
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


### hinzufügende Elemente

```zenscript
myMCTag.addItems(Items als crafttweaker.api.item.IItemStack[]);
```

| Parameter   | Type                                                                | Beschreibung                 |
| ----------- | ------------------------------------------------------------------- | ---------------------------- |
| gegenstände | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Keine Beschreibung angegeben |


### createBlockTag

Gibt [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag) zurück

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Gibt [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag) zurück

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Gibt [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag) zurück

```zenscript
myMCTag.createItemTag();
```

### Verbleibender Artikel

Was bleibt im Raster, wenn diese Zutatenstapel hergestellt wird? Prüft aber nicht, ob der Stapel übereinstimmt! Verwendet z.B. im net.minecraft.item.crafting.ICraftingRecipe von CrT

Gibt [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) zurück

```zenscript
myMCTag.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der Stapel für diese Zutat. |


### passt

Stimmt der gegebene Stapel mit der Zutat?

Rückgabewert boolesch

```zenscript
myMCTag.matches(Stapel als crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung           |
| --------- | ----------------------------------------------------------------- | ---------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Der zu prüfende Stapel |


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


### Elemente entfernen

```zenscript
myMCTag.removeItems(Items als crafttweaker.api.item.IItemStack[]);
```

| Parameter   | Type                                                                | Beschreibung                 |
| ----------- | ------------------------------------------------------------------- | ---------------------------- |
| gegenstände | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Keine Beschreibung angegeben |



## Eigenschaften

| Name          | Type                                                                         | Hat Getter | Hat Setter |
| ------------- | ---------------------------------------------------------------------------- | ---------- | ---------- |
| blocks        | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true       | false      |
| Kommandozeile | String                                                                       | true       | false      |
| entity-Typen  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true       | false      |
| gegenstände   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true       | false      |

## Zauberer

| Ergebnis-Typ                                               | Ist Implizit |
| ---------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true         |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true         |

