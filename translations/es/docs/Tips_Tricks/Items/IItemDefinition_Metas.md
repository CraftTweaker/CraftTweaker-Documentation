# Usar ItemDefiniciones para ahorrar mucho tiempo al referir meta-elementos

## Problema

Digamos que queremos eliminar las recetas de algunos colores específicos de la lana.  
La lana blanca tiene los metadatos 0, todos los colores varían de meta 1 a meta 15, así que hay 16 en total.

Queremos quitar las lanas con meta 3 a 12. ¿Qué hacemos?  
No podemos simplemente remover todos (en otras palabras, use `<minecraft:wool:*>`), pero tampoco queremos escribir 10 veces la misma cosa.  
Mientras que en este ejemplo esto funcionaría completamente, en gran escala esto se vuelve bastante molesto!

## ¿Qué sabemos/necesitamos saber

- recipes.remove requiere un objeto [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- Un [ItemStack](/Vanilla/Items/IItemStack/) puede utilizarse como [IIngrediente](/Vanilla/Variable_Types/IIngredient/) como [Itemstack](/Vanilla/Items/IItemStack/) extiende [IIngrediente](/Vanilla/Variable_Types/IIngredient/)
- Podemos usar [ItemDefiniciones](/Vanilla/Items/IItemDefinition/) para crear [ItemStacks](/Vanilla/Items/IItemStack/)

## Solución

Utilizamos [ItemDefiniciones](/Vanilla/Items/IItemDefinition/) y un rango entero e iteramos a través de éste.  
Si no podemos usar un rango int también podemos usar un array de números, pero eso requeriría que escriba todos los números requeridos.  
También puede usar esto para exceptuar algunos elementos de su uso.

```zenscript
val itemDef = <minecraft:wool>. efinition;

//does this for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef. akeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] como int[];


//<minecraft:wool:3> a <minecraft:wool:12>
for i en numArray{
    itemDef. akeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> a <minecraft:wool:12>, pero sin 5 y 9
para i en 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("¡Ayuda!");
    }
}

```