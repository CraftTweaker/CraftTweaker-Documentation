# Estado de IBlock

Un objeto IBlockState representa el estado actual de un bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.block.IBlockState;`

## Llamando a un estado IBlockState

Hay varios métodos que devuelven un IBlockState

- Usando el [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- Utilizando el método estático `IBlockState.getBlockState()`. (Ver abajo para más información)
- Utilizando el método `getMatchingBlockStates()` en un objeto [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) para recuperar un array de IBlockStates.
- Utilizando el método `withProperty()` en otro objeto de IBlockState.

## Resolver un IBlockState en tiempo de ejecución

Puede haber ocasiones en las que su script puede depender de la interacción con un bloque de un mod que aún no ha sido cargado. como dentro de los eventos de bloque en ContentTweaker u otro cargador de scripts prein-init. Si intentas usar un [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) para un bloque que aún no ha sido registrado, el manejador fallará en resolver y su script no funcionará.

Para evitar esto, puede utilizar el método estático `IBlockState.getBlockState()` para resolver un IBlockState en tiempo de ejecución.

### statik getBlockState

`static IBlockState getBlockState(String blockname, String... properties)` Parameters:

- Nombre de bloque de cadena → Una cadena en el formato "modid:blockname" tal como aparecería en el [BlockState Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/)
- Cadena... properties → Cero o más cadenas de `"name=value"` pares de propiedades para aplicar a este estado de bloque. Cualquier propiedad no especificada utilizará el mismo valor que en el estado de bloque por defecto para el nombre de bloque especificado.

Devuelve un IBlockState del `blockname` especificado con las propiedades `especificadas`, o el estado de bloque predeterminado si no se especifican propiedades.

## Extendiendo IBlockProperties

IBlockState extiende [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Eso significa que todos los métodos que están disponibles para los objetos de [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) también están disponibles para los objetos de IBlockState.

## Extendiendo IBlockStateMatcher

IBlockState extiende [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Eso significa que todos los métodos disponibles para los objetos [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) también están disponibles para los objetos de IBlockState.

## ZenMethods y ZenGetters

| ZenGetter     | Tipo de devolución                | Descripción                                                                                   |
| ------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| bloque        | [IBlock](/Vanilla/Blocks/IBlock/) | Devuelve el bloque referido                                                                   |
| meta          | int                               | Devuelve los metadatos del bloque referido                                                    |
| commandString | cadena                            | Devuelve un posible [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) para este estado |

## Métodos

### es reemplazable

`booleano es reemplazable (mundo IWorld, IBlockPos pos);`  
Parámetros:

- [IWorld](/Vanilla/World/IWorld/) mundo → El mundo a facturar
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → Posición del bloque

Devuelve un booleano que sais si el bloque puede ser reemplazado o no.

### Obtener o cambiar propiedades

Puede obtener una lista de todas las propiedades registradas, ya sea como lista con todos los nombres de propiedades o como mapa que asigna las propiedades a su valor.  
También puede comprobar qué valores son posibles para un nombre de propiedad.  
También puede usar `withProperty` para crear un nuevo objeto IBlockState con esa propiedad cambiada.

```zenscript
Lista<String> getPropertyNames();
String getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String value);
```

### Comparando dos objetos IBlockState

Puede usar `int compare(IBlockState other);` o las fichas ZenCompare `==` `!=`.  
Sin embargo, el retorno de diferentes tipos:

- `state.compare(other)` devuelve un mensaje que es 0 si son iguales
- `estado == otro` devuelve un bool que es cierto de que son iguales

### Obteniendo un Blockstate Matcher explícito

Devuelve un [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) que coincide con el bloque dado.

```zenscript
IBlockStateMatcher matchBlock();
```