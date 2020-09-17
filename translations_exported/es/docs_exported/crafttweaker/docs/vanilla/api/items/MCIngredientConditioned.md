# MCIngredientcondicionado

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.MCIngredientConditioned
```

## Interfaces implementadas
MCIngredientConditioned implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### cualquier daño

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(pila como crafttweaker.api.item.ItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Tipo de retorno: booleano

```zenscript
null.matches(stack as crafttweaker.api.item.IIItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |



Tipo de retorno: booleano

```zenscript
myMCIngredientConditioned.matches(pila como crafttweaker.api.item.ItemStack, ignoreDaño como booleano);
```

| Parámetro    | Tipo                                                              | Descripción                   |
| ------------ | ----------------------------------------------------------------- | ----------------------------- |
| pila         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |
| ignorar daño | boolean                                                           | No se proporcionó descripción |


### solo dañado

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Tipo de devolución: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parámetro | Tipo                                                                                                    | Descripción                   | Opcional | Valor por defecto |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| uid       | Cadena                                                                                                  | No se proporcionó descripción | falso    | `nulo`            |
| función   | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No se proporcionó descripción | verdad   | `nulo`            |



## Propiedades

| Nombre           | Tipo                                                                                                           | Tiene Obtén | Tiene Setter |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| Ingrediente base | T                                                                                                              | verdad      | falso        |
| commandString    | Cadena                                                                                                         | verdad      | falso        |
| condición        | [crafttweaker.api.item.IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | verdad      | falso        |
| objetos          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]                                            | verdad      | falso        |

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

