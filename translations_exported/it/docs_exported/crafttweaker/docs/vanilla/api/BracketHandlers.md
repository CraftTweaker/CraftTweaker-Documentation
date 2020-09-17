# BracketHandlers

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.BracketHandlers
```

## Metodi
### getBlockMaterial

Ottiene il dato [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial). Lancia un'Eccezione se non trovata.

 Restituisce: `The found [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

Tipo di restituzione: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Parametro | Tipo    | Descrizione                          |
| --------- | ------- | ------------------------------------ |
| token     | Stringa | Cosa scriveresti nella chiamata BEP. |


### getBlockState

Crea un Blockstate in base agli input forniti. Restituisce `null` se non riesce a trovare il blocco, le varianti ignorate non valide

 Restituisce: `Il BlockState trovato`

Tipo di restituzione: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parametro | Tipo    | Descrizione                                   |
| --------- | ------- | --------------------------------------------- |
| token     | Stringa | Posizione e varianti della risorsa del blocco |


### getDirectionAxis

Ottiene la direzione Asse basata sul nome. Lancia un errore se non riesce a trovare la direzione Axis.

 Restituisce: `La direzione trovata Asse`

Tipo restituito: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parametro | Tipo    | Descrizione                                        |
| --------- | ------- | -------------------------------------------------- |
| token     | Stringa | La direzione della posizione delle risorse di Axis |


### getEffect

Ottiene l'effetto basato sul nome del registro. Lancia un errore se non riesce a trovare l'effetto.

 Restituisce: `L'effetto trovato`

Tipo di restituzione: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(token as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parametro | Tipo    | Descrizione                             |
| --------- | ------- | --------------------------------------- |
| token     | Stringa | La posizione delle risorse dell'effetto |


### getEntityClassification

Ottiene la classificazione entità basata sul nome del registro. Registra un errore e restituisce `null` se non riesce a trovare l'entityClassification.

 Restituisce: `The found entityClassification`

Tipo restituito: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(token as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parametro | Tipo    | Descrizione                                           |
| --------- | ------- | ----------------------------------------------------- |
| token     | Stringa | La posizione delle risorse dell'entitàClassificazione |


### getEntityType

Ottiene l'entityType basato sul nome del registro. Registra un errore e restituisce `null` se non riesce a trovare l'entityType.

 Restituisce: `L'entità trovata`

Tipo restituito: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parametro | Tipo    | Descrizione                                |
| --------- | ------- | ------------------------------------------ |
| token     | Stringa | La posizione delle risorse dell'entitàType |


### getFluidStack

Ottiene il fluido Stack basato sul nome del registro. Lancia un errore se non riesce a trovare il fluido.

 Restituisce: `Una pila del liquido con quantità == 1mb`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(token as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parametro | Tipo    | Descrizione                           |
| --------- | ------- | ------------------------------------- |
| token     | Stringa | La posizione delle risorse del fluido |


### getItem

Ottiene l'elemento basato sul nome del registro. Lancia un errore se non riesce a trovare l'elemento.

 Restituisce: `L'elemento trovato`

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(token as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parametro | Tipo    | Descrizione                             |
| --------- | ------- | --------------------------------------- |
| token     | Stringa | La posizione della risorsa dell'oggetto |


### getPozione

Tipo di restituzione: [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(token as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| token     | Stringa | Nessuna descrizione fornita |


### getRecipeManager

Ottiene il recipeManager basato sul nome del registro. Lancia un errore se non riesce a trovare il recipeManager. Lancia una expcetion se la recipeType data non è stata trovata. <p> Questo restituirà sempre IRecipeManager.<br> C'è anche una BEP per questo, ma che funziona diversamente quindi non può essere aggiunta automaticamente ai documenti qui. Ma la BEP sembra la stessa delle altre: `<recipetype:minecraft:crafting>`

 Restituisce: `La recipeManager trovata`

Tipo di restituzione: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(token as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parametro | Tipo    | Descrizione                                    |
| --------- | ------- | ---------------------------------------------- |
| token     | Stringa | La posizione delle risorse del Gestore ricette |


### getResourceLocation

Crea una posizione Risorsa in base ai token. Lancia un errore se i token non sono una posizione valida.

 Restituisce: `La posizione`

Tipo di restituzione: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(token as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parametro | Tipo    | Descrizione                |
| --------- | ------- | -------------------------- |
| token     | Stringa | La posizione delle risorse |


### getTag

Ottiene il tag basato sul nome del registro. Creerà un Tag vuoto se non viene trovato nessuno.<br> Tuttavia, in questo caso, è necessario registrare il tag come tipo appropriato

 Restituisce: `Il tag trovato, o uno appena creato`

Tipo di restituzione: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(token as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parametro | Tipo    | Descrizione                        |
| --------- | ------- | ---------------------------------- |
| token     | Stringa | La posizione delle risorse del tag |


### getTextFormatting

Tipo di restituzione: [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(token as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| token     | Stringa | Nessuna descrizione fornita |



