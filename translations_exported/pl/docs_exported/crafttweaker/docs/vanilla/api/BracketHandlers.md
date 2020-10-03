# BracketHandlers

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.BracketHandlers
```

## Methods
### getBlockMaterial

Pobiera podane [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial). Rzuca wyjątek, jeśli nie znaleziono.

 Zwraca: `Znalezione [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

Typ zwrotu: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokeny jako String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| tokens    | String | Co napisaliby państwo w wezwaniu do BEP. |


### getBlockState

Tworzy Blockstate na podstawie danych wejściowych. Zwraca `null` , jeśli nie może znaleźć bloku, zignorowano nieprawidłowe warianty

 Zwroty: `Znaleziony stan blokowania`

Typ zwrotu: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokeny jako String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parameter | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| tokens    | String | Lokalizacja i warianty zasobów bloku |


### getDirectionAxis

Pobiera kierunek osi w oparciu o nazwę. Rzuca błąd, jeśli nie może znaleźć kierunku osi.

 Zwraca: `Znaleziony kierunek osi`

Typ zwrotu: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokeny jako String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| tokens    | String | Kierunek, w którym znajduje się zasób osi |


### Uzyskaj Efekt

Pobiera efekt na podstawie nazwy rejestru. Rzuca błąd, jeśli nie może znaleźć efektu.

 Zwroty: `Znaleziony efekt`

Typ zwrotu: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokeny jako String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| tokens    | String | Lokalizacja zasobu efektu |


### getEntityClassification

Pobiera klasyfikację podmiotu na podstawie nazwy rejestru. Rejestruje błąd i zwraca `null` , jeśli nie może znaleźć klasyfikacji przedmiotów.

 Zwroty: `Znaleziona klasyfikacja podmiotów`

Typ zwrotu: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokeny jako String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| tokens    | String | Lokalizacja zasobu klasy podmiotu |


### getEntityType

Pobiera typ podmiotu na podstawie nazwy rejestru. Rejestruje błąd i zwraca `null` , jeśli nie może znaleźć typu jednostki.

 Zwroty: `Znaleziony typ jednostki`

Typ zwrotu: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokeny jako String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| tokens    | String | Lokalizacja zasobu typu podmiotu |


### getFluidStack

Pobiera stos płynny na podstawie nazwy rejestru. Rzuca błąd, jeśli nie może znaleźć płynu.

 Zwraca: `Stos płynu z ilością == 1 mb`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokeny jako String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| tokens    | String | Lokalizacja zasobu płynu |


### getItem

Pobiera element na podstawie nazwy rejestru. Rzuca błąd, jeśli nie może znaleźć przedmiotu.

 Zwroty: `Znaleziony element`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokeny jako String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| tokens    | String | Lokalizacja zasobu elementu |


### Mikstura getmikstury

Typ zwrotu: [crafttweaker.api.potion.MCMikstura](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokeny jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |


### getRecipeManager

Pobiera przepis na podstawie nazwy rejestru. Rzuca błąd, jeśli nie jest w stanie znaleźć Przepisnika. Rzuca ekspresję jeśli dany przepis nie został znaleziony. <p> To zawsze zwróci IRecipeManagera.<br> Istnieje również dla tego BEP, ale działa inaczej, więc nie może być automatycznie dodany do dokumentacji tutaj. Ale BEP wygląda tak samo jak inne: `<recipetype:minecraft:crafting>`

 Zwroty: `Znaleziony przepis`

Typ zwrotu: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokeny jako String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| tokens    | String | Lokalizacja zasobu w recepturze |


### getResourceLocation

Tworzy lokalizację zasobów na podstawie tokenów. Rzuca błąd, jeśli tokeny nie są poprawną lokalizacją.

 Zwroty: `Lokalizacja`

Typ zwrotu: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokeny jako String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| tokens    | String | Lokalizacja zasobu |


### getTag

Pobiera tag na podstawie nazwy rejestru. Jeśli żaden nie zostanie znaleziony, stworzy pusty znacznik.<br> Jednak w takim przypadku musisz zarejestrować tag jako odpowiedni typ

 Zwroty: `Znaleziony tag lub nowo utworzony`

Typ zwrotu: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokeny jako String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | Lokalizacja zasobu tagu |


### formatowanie getText

Typ zwrotu: [crafttweaker.api.text.TextFormatmatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokeny jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |



