# Manejadores de corchete

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.BracketHandlers
```

## Métodos
### getBlockMaterial

Obtiene el [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) dado. Arroja una excepción si no se encuentra.

 Devuelve: `El [crafttweaker.api.block.material.MCMaterial]encontrado (/vanilla/api/block/material/MCMaterial)`

Tipo de retorno: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("terre");
```

| Parámetro | Tipo   | Descripción                                |
| --------- | ------ | ------------------------------------------ |
| fichas    | Cadena | Lo que usted escribiría en la llamada BEP. |


### getBlockState

Crea un Blockstate basado en las entradas dadas. Devuelve `null` si no puede encontrar el bloque, ignorado variantes inválidas

 Devuelve: `El BlockState encontrado`

Tipo de retorno: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parámetro | Tipo   | Descripción                                  |
| --------- | ------ | -------------------------------------------- |
| fichas    | Cadena | Ubicación y variantes de recursos del bloque |


### getDirectionAxis

Obtiene la dirección del eje basado en el nombre. Arroja un error si no puede encontrar la dirección Eje.

 Devuelve: `La dirección encontrada Eje`

Tipo de retorno: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parámetro | Tipo   | Descripción                          |
| --------- | ------ | ------------------------------------ |
| fichas    | Cadena | La ubicación de los recursos del Eje |


### Efecto

Obtiene el efecto basado en el nombre del registro. Arroja un error si no puede encontrar el efecto.

 Devuelve: `El efecto encontrado`

Tipo de retorno: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parámetro | Tipo   | Descripción                      |
| --------- | ------ | -------------------------------- |
| fichas    | Cadena | Ubicación de recursos del efecto |


### Clasificación

Obtiene la entityClassification basada en el nombre del registro. Registra un error y devuelve `null` si no puede encontrar la entityClassification.

 Devuelve: `La entityClasificación encontrada`

Tipo de retorno: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parámetro | Tipo   | Descripción                                      |
| --------- | ------ | ------------------------------------------------ |
| fichas    | Cadena | Ubicación de recursos de la entityClassification |


### getEntityType

Obtiene el entityType basado en el nombre del registro. Registra un error y devuelve `null` si no puede encontrar el entityType.

 Devuelve: `La entidad encontrada`

Tipo de retorno: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parámetro | Tipo   | Descripción                          |
| --------- | ------ | ------------------------------------ |
| fichas    | Cadena | Ubicación de recursos del entityType |


### getFluidStack

Obtiene la pila de fluidos basada en el nombre del registro. Arroja un error si no puede encontrar el fluido.

 Devuelve: `Una pila del líquido con cantidad == 1mb`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parámetro | Tipo   | Descripción                      |
| --------- | ------ | -------------------------------- |
| fichas    | Cadena | Ubicación de recursos del fluido |


### getItem

Obtiene el elemento basado en el nombre del registro. Arroja un error si no puede encontrar el elemento.

 Devuelve: `El elemento encontrado`

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokens as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parámetro | Tipo   | Descripción                      |
| --------- | ------ | -------------------------------- |
| fichas    | Cadena | Ubicación de recursos del objeto |


### Obtener Poción

Tipo de retorno: [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens as String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| fichas    | Cadena | No se proporcionó descripción |


### getRecipeManager

Obtiene el recipeManager basado en el nombre del registro. Arroja un error si no puede encontrar el gestor de recetas. Arroja una ampliación si no se encuentra el tipo de receta dado. <p> Esto siempre devolverá IRecipeManager.<br> También hay un BEP para eso, pero eso funciona de forma diferente por lo que no se puede agregar automáticamente a la documentación aquí. Pero el BEP se ve igual que los demás: `<recipetype:minecraft:crafting>`

 Devuelve: `La receta encontrada`

Tipo de devolución: [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parámetro | Tipo   | Descripción                                 |
| --------- | ------ | ------------------------------------------- |
| fichas    | Cadena | Ubicación de recursos del gestor de recetas |


### Ubicación de recursos

Crea una ubicación de Recursos basada en los tokens. Arroja un error si los tokens no son una ubicación válida.

 Devuelve: `La ubicación`

Tipo de retorno: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokens as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parámetro | Tipo   | Descripción              |
| --------- | ------ | ------------------------ |
| fichas    | Cadena | La ubicación del recurso |


### getTag

Obtiene la etiqueta basada en el nombre del registro. Se creará una etiqueta vacía si no se encuentra ninguna.<br> Sin embargo, en tal caso, necesita registrar la etiqueta como su tipo apropiado

 Devuelve: `La etiqueta encontrada, o una recién creada`

Tipo de retorno: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parámetro | Tipo   | Descripción                          |
| --------- | ------ | ------------------------------------ |
| fichas    | Cadena | Ubicación de recursos de la etiqueta |


### getTextFormatting

Tipo de retorno: [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokens as String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| fichas    | Cadena | No se proporcionó descripción |



