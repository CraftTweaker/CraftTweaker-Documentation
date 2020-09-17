# IBlockStateMatcher

Un objeto IBlockStateMatcher puede ser usado para emparejar un objeto [IBlockState](/Vanilla/Blocks/IBlockState/) con un conjunto de requisitos o un conjunto de estados de bloqueo coincidentes.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/) o usar el `estático. reate()` método), más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.block.IBlockStateMatcher;`

## Coincidiendo con un IBlockState específico

Cada [IBlockState](/Vanilla/Blocks/IBlockState/) también es un IBlockStateMatcher que solo coincide con sí mismo.

## Coincidir con cualquier Estado de Bloque para un Bloque Específico

Puedes usar el método [IBlockState](/Vanilla/Blocks/IBlockState/)de `matchBlock()` para crear un IBlockStateMatcher que coincida con cualquier posible estado de bloqueo para ese bloque.

## Calling an IBlockStateMatcher

Hay varios métodos que devuelven un IBlockStateMatcher

- Usando `IBlockStateMatcher.create()`.
- Utilizando el método `withMatchedValuesForProperty()` en otro IBlockStateMatcher.
- O dos IBlockStateMatchers juntos para conseguir un matcher compuesto.
- Creando un [IBlockState](/Vanilla/Blocks/IBlockState/), ya que todos los objetos de IBlockState son IBlockStateMatchers.

## Matchers Compuestos

Cuando se utiliza OR (`|`) para combinar IBlockStateMatchers, el IBlockStateMatcher resultante ya no está atado a un bloque subyacente específico, como sería con un [IBlockState](/Vanilla/Blocks/IBlockState/) o un IBlockStateMatcher creado usando el `IBlockStateMatcher. reate()` método. En su lugar, el matcher coincide con cualquier estado de bloqueo que hubiera sido igualado por cualquiera de los matchers combinados.

Debido a que este estado de bloque no está atado a un bloque específico, no es posible utilizar el método `withMatchedValuesForProperty()` para recuperar otro IBlockStateMatcher.

### creación estática

`static IBlockStateMatcher create(IBlockState... blockStates);` Parameters:

- [Estado IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Cero o más estados de bloqueo para coincidir con este matcher. 

Devuelve un IBlockStateMatcher para que coincida con el o los estados de bloque especificados.

- Si se proporcionan cero `Estados de bloqueo` , este emparejador nunca coincidirá con ningún Estado de bloqueo. 
- Si solo se suministra un estado de bloqueo en `blockStates`, el resultante IBlockStateMatcher coincidirá con *cualquier* estado de bloqueo del bloque subyacente de IBlockState suministrado con cualquier valor de propiedad aceptado como coincidente. El método `withMatchedValuesForProperty` se puede utilizar para añadir requisitos más específicos para las propiedades. 
- Si se proporcionan múltiples `Estados de bloqueo` , el IBlockStateMatcher resultante es el mismo que usar el operador OR (`|`) con cada uno de los IBlockStates proporcionados.

## Métodos

### partidas

`coincidencias booleanas (IBlockState blockState);`  
Parámetros:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → El objeto blockstate contra el cual coincidir

Devuelve un boolean que representa si el estado de bloque coincide con los requisitos de esta coincidencia.  
También puedes usar `A tiene B` que representa `A.matches(B)`.

### Obtener o añadir propiedades permitidas

*(Estos métodos sólo se permiten en instancias IBlockStateMatcher no compuestas)*

    IBlockStateMatcher withMatchedValuesForProperty(String name, String... valores);
    Lista<String> getMatchedValuesForProperty(String name);
    Mapa<String, List<String>> getMatchedProperties();
    

Parámetros:

- Nombre de cadena → El nombre de la propiedad
- Cadena... values → Uno o más valores que la propiedad de un IBlockState coincidente puede tener.

Devuelve un nuevo IBlockStateMatcher con los mismos requisitos de propiedad que este IBlockStateMatcher con la excepción de la propiedad especificada `name`, que ahora permitirá cualquiera de los `valores especificados` como una entrada coincidente.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Returns a collection of every [IBlockState](/Vanilla/Blocks/IBlockState/) with any combination of properties that match this IBlockStateMatcher. Esta lista puede contener estados de bloqueo que no son posibles a través de medios de juego normales. (Ej: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` devolverá un IBlockStateMatcher que coincida con los registros con la propiedad `axis=none`, tener texturas de corteza en los 6 lados)

### Compruebe si un Estado de Bloque es un Estado compuesto

`boolean isCompound()`

Hace lo que esperarías.

### Obtener una representación de commandString

`Comando de ZenGetter`

Devuelve una cadena de expresión Bracket Handler, si es necesario emparejada con `withMatchedValueForProperty()` llamadas.  
Ten en cuenta, sin embargo, que las llamadas a métodos devueltos no tienen `""` alrededor de los parámetros.  
Así que si quieres copiar ese resultado, ¡necesitarás añadirlo manualmente a los argumentos!