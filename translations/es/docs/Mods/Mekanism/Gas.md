# Mekanismo

El soporte de Mekanism CraftTweaker se ha integrado directamente en el Mekanism ahora ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

El mekanismo añade soporte para el manejo de corchetes para definir **gas** -- un estado de material especial diferente de la forja [**líquidos**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Ten en cuenta que `<gas:water>` es diferente de `<liquid:water>`*

A partir del Mekanism 9.7.0 ahora es posible ver todos los gases registrados (incluidos los de otros mods) mediante el comando `/ct gases`

También es posible a partir del Mekanism 9.7.1 obtener un manejador de pila/brazalete de gas por cuerda. Usar `mods.mekanism.MekanismHelper.getGas(string);`

## Ejemplo

```zenscript
import mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetters

Como LiquidStacks, IGasStacks también soporta algunos ZenGetters especiales.  
Llamas a ZenGetters usando `gas.Getter` (Ej. `<gas:water>.name`)

| ZenGetter          | Descripción                                | Tipo de devolución |
| ------------------ | ------------------------------------------ | ------------------ |
| definición         | Devuelve la definición de gas              | IGasDefinición     |
| NOMBRE             | Devuelve el nombre del gas                 | cadena             |
| nombre de pantalla | Devuelve el nombre de la pantalla de gas   | cadena             |
| monto              | Devuelve la cantidad de gas en millbuckets | int                |

## Establecer la cantidad del objeto

Puede establecer la cantidad del objeto (volumen de gas en Millibuckets) de dos maneras, que ambos hacen exactamente lo mismo:

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## IGasDefinición

Un objeto IGasDefinition contiene información sobre un gas.  
Puede obtener dicho objeto usando `gasStack.definition` (verifique la tabla de arriba)

| ZenGetter          | Descripción                         | Tipo de devolución |
| ------------------ | ----------------------------------- | ------------------ |
| NOMBRE             | Devuelve el nombre del gas referido | cadena             |
| nombre de pantalla | Devuelve el nombre del gas referido | cadena             |

Puedes multiplicar una Definición de Gastos para devolver un IGasStack nuevo con la cantidad dada en millones:

```zenscript
var gas_definition = <gas:water>.definition;
var gas_bucket = gas_definition * 1000;
```