# IItemStack

Esto representa un elemento. Puede ser recuperado usando un artículo BEP. Es un [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.IItemStack
```

## Interfaces implementadas
ItemStack implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(content as crafttweaker.api.util.text.MCTextComponent, showMessage as crafttweaker.api.util.text.MCTextComponent);
```

| Parámetro       | Tipo                                                                                 | Descripción                   | Opcional | Valor por defecto |
| --------------- | ------------------------------------------------------------------------------------ | ----------------------------- | -------- | ----------------- |
| contenido       | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción | falso    | `nulo`            |
| mostrar mensaje | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción | verdad   | `nulo`            |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(contenido como crafttweaker.api.util.text.MCTextComponent);
```

| Parámetro | Tipo                                                                                 | Descripción                   |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| contenido | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción |


### cualquier daño

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### borrar nombre

Limpia cualquier nombre personalizado establecido para este ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copiar

Crea una copia

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.ItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |



¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IIItemStack, ignoreDamage as boolean);
```

| Parámetro    | Tipo                                                              | Descripción                |
| ------------ | ----------------------------------------------------------------- | -------------------------- |
| pila         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar        |
| ignorar daño | boolean                                                           | ¿Debe comprobarse el daño? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(function as crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Parámetro | Tipo                                                                                              | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| función   | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | No se proporcionó descripción |


### mutable

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### solo dañado

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parámetro | Tipo                                                                                                    | Descripción                   | Opcional | Valor por defecto |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| uid       | Cadena                                                                                                  | No se proporcionó descripción | falso    | `nulo`            |
| función   | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No se proporcionó descripción | verdad   | `nulo`            |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| regex     | Cadena | No se proporcionó descripción |


### setDisplayName

Establece el nombre a mostrar del ItemStack

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(nombre como cadena);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parámetro | Tipo   | Descripción              |
| --------- | ------ | ------------------------ |
| nombre    | Cadena | Nuevo nombre de la pila. |


### peso

Tipo de retorno: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(peso doble);
```

| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| peso      | doble | No se proporcionó descripción |


### con daño

Establece el daño de la pila de objetos

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parámetro | Tipo | Descripción             |
| --------- | ---- | ----------------------- |
| daño      | int  | el nuevo valor del daño |


### conEtiqueta

Establece la etiqueta para el ItemStack.

 Devuelve: `Este itemStack si es mutable, uno nuevo con la propiedad cambiada de lo contrario`

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hola"]}});
```

| Parámetro | Tipo                                  | Descripción               |
| --------- | ------------------------------------- | ------------------------- |
| etiqueta  | [data.IData](/vanilla/api/data/IData) | La etiqueta a establecer. |



## Propiedades

| Nombre             | Tipo                                                                | Tiene Obtén | Tiene Setter |
| ------------------ | ------------------------------------------------------------------- | ----------- | ------------ |
| monto              | int                                                                 | verdad      | falso        |
| tiempo quemado     | int                                                                 | verdad      | verdad       |
| commandString      | Cadena                                                              | verdad      | falso        |
| daño               | int                                                                 | verdad      | falso        |
| dañable            | boolean                                                             | verdad      | falso        |
| dañado             | boolean                                                             | verdad      | falso        |
| nombre de pantalla | Cadena                                                              | verdad      | falso        |
| vacío              | boolean                                                             | verdad      | falso        |
| comida             | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | verdad      | verdad       |
| getOrCreate        | [data.IData](/vanilla/api/data/IData)                               | verdad      | falso        |
| getRepairCost      | int                                                                 | verdad      | falso        |
| hasDisplayName     | boolean                                                             | verdad      | falso        |
| hasEfecto          | boolean                                                             | verdad      | falso        |
| hasTag             | boolean                                                             | verdad      | falso        |
| isCrossbow         | boolean                                                             | verdad      | falso        |
| encantable         | boolean                                                             | verdad      | falso        |
| encantado          | boolean                                                             | verdad      | falso        |
| objetos            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | verdad      | falso        |
| maxDamage          | int                                                                 | verdad      | falso        |
| maxStackSize       | int                                                                 | verdad      | falso        |
| dueño              | Cadena                                                              | verdad      | falso        |
| registryName       | Cadena                                                              | verdad      | falso        |
| apilable           | boolean                                                             | verdad      | falso        |
| etiqueta           | [data.IData](/vanilla/api/data/IData)                               | verdad      | falso        |
| translationKey     | Cadena                                                              | verdad      | falso        |
| useDuration        | int                                                                 | verdad      | falso        |

## Operadores
### MUL

Establece la cantidad de la pila de objetos

```zenscript
<item:minecraft:dirt> * monto como int
<item:minecraft:dirt> * 3
```

| Parámetro | Tipo | Descripción    |
| --------- | ---- | -------------- |
| monto     | int  | nueva cantidad |
### MOD

```zenscript
<item:minecraft:dirt> % porcentaje como int
```

| Parámetro  | Tipo | Descripción                   |
| ---------- | ---- | ----------------------------- |
| porcentaje | int  | No se proporcionó descripción |
### O

```zenscript
<tag:ingotIron> | otro como crafttweaker.api.item.IIngredient
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| otro      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No se proporcionó descripción |

## Casters

| Tipo de resultado                                          | Es implícito |
| ---------------------------------------------------------- | ------------ |
| [data.IData](/vanilla/api/data/IData)                      | verdad       |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | verdad       |

