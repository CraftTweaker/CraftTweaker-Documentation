# BracketHandler

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.BracketHandlers
```

## Methoden
### getBlockMaterial

Ruft das angegebene [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) ab. Wirft eine Ausnahme wenn nicht gefunden.

 Lieferungen: `Die gefundenen [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

Rückgabetyp: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(Token als String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Parameter | Type   | Beschreibung                                |
| --------- | ------ | ------------------------------------------- |
| token     | String | Was Sie in den BEP-Aufruf schreiben würden. |


### getBlockStatus

Erstellt einen Blockstatus basierend auf den angegebenen Eingängen. Gibt `null` zurück, wenn der Block nicht gefunden werden kann, ungültige Varianten ignoriert

 Rückgaben: `Der gefundene BlockState`

Rückgabetyp: [craftweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(Token als String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parameter | Type   | Beschreibung                                     |
| --------- | ------ | ------------------------------------------------ |
| token     | String | Die Ressourcen-Position und Varianten des Blocks |


### getDirectionAxis

Liefert die Richtungsachse basierend auf dem Namen. Wirf einen Fehler, wenn die Richtung der Achse nicht gefunden wird.

 Gibt zurück: `Die gefundene Richtungsachse`

Rückgabetyp: [craftweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(Token als String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parameter | Type   | Beschreibung                                  |
| --------- | ------ | --------------------------------------------- |
| token     | String | Die Richtung der Ressourcenposition der Achse |


### getEffekt

Gibt den Effekt basierend auf Registry-Namen zurück. Wirf einen Fehler, wenn der Effekt nicht gefunden wird.

 Gibt zurück: `Der gefundene Effekt`

Rückgabetyp: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(Token als String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parameter | Type   | Beschreibung                       |
| --------- | ------ | ---------------------------------- |
| token     | String | Der Ressourcenstandort des Effekts |


### getEntityklassifikation

Ruft die entityClassification basierend auf Registry-Namen ab. Protokolliert einen Fehler und gibt `null` zurück, wenn die EntityClassification nicht gefunden wurde.

 Rückgaben: `Die gefundene EntityKlassifikation`

Rückgabetyp: [craftweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(Spielsteine als String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parameter | Type   | Beschreibung                                    |
| --------- | ------ | ----------------------------------------------- |
| token     | String | Der Ressourcenstandort der EntityClassifikation |


### getEntityType

Gibt den EntityType basierend auf Registry-Namen zurück. Protokolliert einen Fehler und gibt `null` zurück, wenn der Entitytyp nicht gefunden wird.

 Rückgaben: `Der gefundene EntityType`

Rückgabetyp: [craftweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(Token als String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| token     | String | Der EntityType-Ressourcenstandort |


### getFluidStack

Liefert den Flüssigkeitsstack basierend auf Registry-Namen. Wirft einen Fehler, wenn die Flüssigkeit nicht gefunden werden kann.

 Gibt zurück: `Ein Stapel der Flüssigkeit mit der Menge == 1mb`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(Token als String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Beschreibung                     |
| --------- | ------ | -------------------------------- |
| token     | String | Der Ressourcenstandort der Fluid |


### getItem

Ruft das Element basierend auf Registry-Namen ab. Wirf einen Fehler, wenn das Element nicht gefunden werden kann.

 Rückgaben: `Das gefundene Element`

Rückgabetyp: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(Token als String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parameter | Type   | Beschreibung                        |
| --------- | ------ | ----------------------------------- |
| token     | String | Der Ressourcenstandort des Elements |


### getTrank

Rückgabetyp: [crafttweaker.api.potion.MCTrank](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(Marken als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| token     | String | Keine Beschreibung angegeben |


### getRecipeManager

Ruft den recipeManager basierend auf Registry-Namen zurück. Wirf einen Fehler, wenn der recipeManager nicht gefunden werden kann. Wirf eine Verbreitung, wenn der angegebene Rezepttyp nicht gefunden wird. <p> Dies gibt den IRecipeManager immer zurück.<br> Dafür gibt es auch ein BEP, das aber anders funktioniert, so dass es hier nicht automatisch zu den Docs hinzugefügt werden kann. Aber die BEP sieht wie die anderen aus: `<recipetype:minecraft:crafting>`

 Rückgaben: `Der gefundene recipeManager`

Rückgabetyp: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(Token als String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter | Type   | Beschreibung                              |
| --------- | ------ | ----------------------------------------- |
| token     | String | Der Ressourcenstandort des recipeManagers |


### getResource-Standort

Erstellt eine Ressourcen-Position basierend auf den Token. Sendet einen Fehler, wenn die Token keine gültige Position sind.

 Gibt zurück: `Der Ort`

Rückgabetyp: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(Token als String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter | Type   | Beschreibung           |
| --------- | ------ | ---------------------- |
| token     | String | Der Ressourcenstandort |


### getTag

Liefert den Tag basierend auf Registry-Namen. Erstellt ein leeres Schlagwort, wenn keiner gefunden wird.<br> In einem solchen Fall müssen Sie das Schlagwort jedoch als seinen passenden Typ registrieren

 Gibt zurück: `Das Fund-Tag oder ein neu erstelltes`

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(Token als String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parameter | Type   | Beschreibung                    |
| --------- | ------ | ------------------------------- |
| token     | String | Der Ressourcenstandort des Tags |


### getTextformatierung

Rückgabetyp: [craftweaker.api.text.TextFormatierung](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(Token als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| token     | String | Keine Beschreibung angegeben |



