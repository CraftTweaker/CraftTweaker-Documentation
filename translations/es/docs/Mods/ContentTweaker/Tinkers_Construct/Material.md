# Representación del material

Una representación de Material representa un Material de Construcción de Tinkers.  
Puedes obtener tal objeto del [Constructor de Material](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) o del [Manejador de Bracket Material](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/).

## Importar la clase

Podría ser necesario que importes la clase si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter     | Tipo   |
| ------------- | ------ |
| identifier    | cadena |
| commandString | cadena |

## Añadiendo material

Si utiliza el elemento dado en el constructor de piezas, puedes establecer cuántos puntos materiales darán o cuánto reparará el objeto.

    //myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `elemento` es el elemento que coincide en su lugar. Puede utilizar [Condiciones del artículo](/Vanilla/Items/Item_Conditions/) pero sin Transformadores. 
- `la cantidad requerida` es la cantidad de artículos que coinciden en contra. Puede dividirlos entre todas las ranuras que proporciona la forja de herramientas, lo que también le permite ir por encima de 64. En el segundo ejemplo anterior, se necesitan 4 bloques de hierro por adición. Por defecto es 1.
- `monto coincidente` es la cantidad de puntos materiales añadidos por `cantidad necesaria`. En el segundo ejemplo de arriba cuatro bloques de hierro dan dos puntos materiales. Por defecto es 144 (un valor de ingot/un material).

## Añadiendo rasgos de material

Puedes añadir un rasgo al material.  
Todos los artículos fabricados con este material tendrán este rasgo.  
Utiliza una representación de [rasgo](/Mods/ContentTweaker/Tinkers_Construct/Trait/) o una cadena con el identificador (recomendado), devuelve el vacío.  
También puede proporcionar una cadena de dependencia, que hará que el rasgo sólo esté disponible para ciertos tipos de piezas, como las cabezas, por ejemplo. Omitiendo ese parámetro inyectará nulo, que hará que el rasgo sólo esté en el tipo de pieza cuando no haya otros modificadores de dependencia no nulos en esa parte ya.

Se recomienda la varaint de cadena, ya que para el tiempo en que se ejecuta CoT, la mayoría de los rasgos aún no están disponibles, e incluso para el tiempo en que se ejecuta CrT, no todos han sido inicializados, pero si utiliza las cadenas, la adición de los materiales se pospone hasta que estén disponibles. Todavía no es prueba de errores y no hay una forma fácil de comprobar los errores tipográficos, así que ten cuidado con los mensajes de error que te indican qué rasgos no se han encontrado.

```zenscript
myMaterial.addTrait("fiery", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```