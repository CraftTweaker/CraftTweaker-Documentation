# Transformadores de artículos

Los Transformadores de Artículos transforman tus entradas de fabricación al fabricar objetos.  
Esto puede variar entre dañar el objeto y devolver un objeto completamente diferente.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.ItemTransformer;`

```zenscript
<br /><br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//item será consumido pero le dará la pila especificada (la ranura de fabricación será eliminada!).
transformedItem = elemento. iveBack(<minecraft:potato>);

//item será reemplazado con el objeto especificado, que en su lugar irá a la ranura de fabricación
transformedItem = item. ransformReplace(<minecraft:potato>);

//da el objeto por 1
transformedItem = item. ransformDamage();

//damages the item by the given value
transformedItem = item.transformDamage(3);

//item will be consumed, without matter what.
transformedItem = item.noReturn();

//Causa múltiples elementos a consumir.
transformedItem = item.transformConsume(3);
```

## Registrando propios transformadores de artículo

### Transformar

El antiguo transformador de objetos que podría dejar de existir en 1.13.  
Esta es una función especial que acepta dos parámetros: el elemento [](/Vanilla/Items/IItemStack/) en sí mismo y el [jugador](/Vanilla/Players/IPlayer/) realizando la fabricación.

```zenscript
transformedItem = item.transform(function(item, player) {return item;});
```

La función debe devolver un [ItemStack](/Vanilla/Items/IItemStack/).  
Esta pila reemplazará lo que hay en la ranura de fabricación después. Usa `nulo` para limpiar esa ranura.

### TransformNuevo

Con el nuevo sistema interno de recetas se necesitaba un nuevo ItemTransformer. Este solo acepta un parámetro, que es el elemento en la ranura.

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

La función necesita devolver un [ItemStack](/Vanilla/Items/IItemStack/).  
A diferencia de la otra transformación, sin embargo, no será el stach de objetos que reemplaza al que se encuentra en la ranura de fabricación, sino el que se devuelve para esa ranura de fabricación.  
En otras palabras, si devuelve `null` aquí, se consumirá un objeto, cualquier otro elemento que sea devuelto será colocado en la ranura de fabricación, si es posible, o devuelto, igual que cuando se trata de cuchillos.  
Si realmente no necesitas la variable del jugador, ¡este es el transformador por el que ir!