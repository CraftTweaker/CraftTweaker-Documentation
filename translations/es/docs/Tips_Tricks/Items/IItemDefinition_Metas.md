# Usar IItemDefinitions para ahorrar tiempo cuando nos referimos a items con metadata.

## El problema 

Digamos que queremos quitar recetas de unos colores muy especificos de lana.   
La lana blanca tiene metadata 0, y los diferentes colores van de metadata 1 a 15, así que en total existen 16 colores.

Sólo queremos eliminar las lanas con metadata que está entre 3 y 12. ¿Qué hacemos?  
Podriamos eliminar todas las recetas, y volver a añadir las que faltan (en otras palabras, usar `<minecraft:wool:*>`), pero tampoco queremos escribir 10 veces la misma cosa.  
Mientras que en este ejemplo esto funcionaría completamente, a gran escala esto se vuelve bastante molesto.

## Lo que sabemos y debemos saber 

- recipes.remove require un Objeto `IIngredient`
- Un `<a href="/Vanilla/Items/IItemStack/">IItemStack</a>` puede ser usado como `<a href="/Vanilla/Variable_Types/IIngredient/">IIngredient</a>` ya que `<a href="/Vanilla/Items/IItemStack/">IItemStack</a>` extiende `<a href="/Vanilla/Variable_Types/IIngredient/">IIngredient</a>`
- Podemos usar `<a href="/Vanilla/Items/IItemDefinition/">IItemDefinitions</a>` para crear `<a href="/Vanilla/Items/IItemStack/">IItemStacks</a>`

## La solución

Usamos `<a href="/Vanilla/Items/IItemDefinition/">IItemDefinitions</a>` y un Rango Integer y iteramos a través de el Rango.</br /> Si no podemos usar un Rango Integer también podemos usar un array de ints, pero eso necesitaria que escribas todos los numeros necesarios.  
También puedes usar esto para eliminar ciertos objetos de ser usados.

```zenscript
val itemDef = <minecraft:wool>.definition;

//hace esto de <minecraft:wool:3> a<minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef.makeStack(i));
}


val arrayNum = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> a <minecraft:wool:12>
for i in arrayNum{
    itemDef.makeStack(i).addTooltip("No crafteable");
}

//<minecraft:wool:3> a <minecraft:wool:12>, pero sin 5 y 9
for i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Ayuda");
    }
}

```