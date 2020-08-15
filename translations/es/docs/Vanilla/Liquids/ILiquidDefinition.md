# Definición de ILiquidido

La Definición ILiquidada define el líquido de un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) se compone. A diferencia de ILiquidStack, esta interfaz le permite cambiar propiedades de fluido.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.liquid.ILiquidDefinition;`

## Métodos

Entonces, ¿qué podemos hacer con ello?

### Multiplicación

Multiplicar una Definición ILiquidada resulta en un nuevo [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) con la cantidad especificada en millonarios

```zenscript
val def = <liquid:lava>.definition;

//essentially the same
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Obtener y Fijar propiedades fluidas

Como un ILiquidDefinition representa un líquido, usted puede obtener, pero también establecer sus propiedades. Consulte la tabla de abajo para obtener más información.

Al igual que en la tabla anterior, estableces el Zengetter/Setter al final de la ILiquidDefinition. Algunos ZenGetters no tienen según ZenSetter, usted tendrá que confiar en otros medios para alterar estas propiedades.

Tenga cuidado con los zensetters, sin embargo, sólo alteran el registro de fluidos y no tienen ningún efecto en los fluidos del mundo. Probablemente solo necesitarás el ajuste de temperatura cuando te molestes con [Combustibles de fundición de Tinker](/Mods/Modtweaker/TConstruct/Fuel/).

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: luminosidad
val lavaL = definition.luminosidad;

//Zensetter: luminosidad
definition.luminosity = 0;
```

| Zengetter          | Zensetter   | ¿Qué es esto?                                               | Devuelve/Definir Tipo |
| ------------------ | ----------- | ----------------------------------------------------------- | --------------------- |
| nombre             |             | Esto devuelve el nombre del líquido no localizado           | cadena                |
| nombre de pantalla |             | Esto devuelve el nombre del líquido localizado              | cadena                |
| luminosidad        | luminosidad | Esto devuelve/establece la luminosidad del líquido referido | int                   |
| densidad           | densidad    | Esto devuelve/establece la densidad del líquido referido    | int                   |
| temperatura        | temperatura | Esto devuelve/establece la temperatura del líquido referido | int                   |
| viscosidad         | viscosidad  | Esto devuelve/establece la viscosidad del líquido referido  | int                   |
| gaseoso            | gaseoso     | Esto devuelve/establece si el líquido referido es gaseoso   | boolean               |