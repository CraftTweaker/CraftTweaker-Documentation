# IIngredientes

Esto es IIngredient!!!

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.IIngredient
```

## Interfaces implementadas
IIngredient implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### cualquier daño

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyDamage();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.ItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |



¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IIItemStack, ignoreDamage as boolean);
```

| Parámetro    | Tipo                                                              | Descripción                |
| ------------ | ----------------------------------------------------------------- | -------------------------- |
| pila         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar        |
| ignorar daño | boolean                                                           | ¿Debe comprobarse el daño? |


### solo dañado

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parámetro | Tipo                                                                                                    | Descripción                   | Opcional | Valor por defecto |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| uid       | Cadena                                                                                                  | No se proporcionó descripción | falso    | `nulo`            |
| función   | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No se proporcionó descripción | verdad   | `nulo`            |



## Propiedades

| Nombre        | Tipo                                                                | Tiene Obtén | Tiene Setter |
| ------------- | ------------------------------------------------------------------- | ----------- | ------------ |
| commandString | Cadena                                                              | verdad      | falso        |
| objetos       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | verdad      | falso        |

## Operadores
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

