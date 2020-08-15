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
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Métodos
### borrar nombre

Limpia cualquier nombre personalizado establecido para este ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### Objeto restante

Cuando se fabrica esta pila de ingredientes, ¿qué quedará en la cuadrícula? No comprueba si la pila concuerda! Utilizado, por ejemplo, en net.minecraft.item.crafting.ICraftingRecipe

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.ItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción                                 |
| --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila para proporcionar este ingrediente. |


### partidas

¿La pila dada coincide con el ingrediente?

Devuelve booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila a comprobar |


### setDisplayName

Establece el nombre a mostrar del ItemStack

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(nombre como cadena);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parámetro | Tipo   | Descripción              |
| --------- | ------ | ------------------------ |
| nombre    | Cadena | Nuevo nombre de la pila. |


### con daño

Establece el daño de la pila de objetos

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parámetro | Tipo | Descripción             |
| --------- | ---- | ----------------------- |
| daño      | int  | el nuevo valor del daño |


### conEtiqueta

Establece la etiqueta para el ItemStack.

Devuelve [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

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

## Casters

| Tipo de resultado                                                 | Es implícito |
| ----------------------------------------------------------------- | ------------ |
| [data.IData](/vanilla/api/data/IData)                             | verdad       |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | verdad       |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | falso        |

