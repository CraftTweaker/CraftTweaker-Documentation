# IFluidStack

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Interfaces implementadas
IFluidStack implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### copiar

Copia la pila. Sólo es necesario cuando se trata de pilas mutables.

 Devuelve: `Una nueva pila que contiene la misma información que esta`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutable

Hace esta pila mutable

 Devuelve: `Una nueva pila, que es mutable.`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAamount

Establece la cantidad de fluido en MilliBuckets (MB)

 Devuelve: `Una pila nueva, o esta pila, dependiendo de si esta pila es mutable`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parámetro | Tipo | Descripción                         |
| --------- | ---- | ----------------------------------- |
| monto     | int  | La cantidad a multiplicar esta pila |



## Propiedades

| Nombre        | Tipo                                                         | Tiene Obtén | Tiene Setter |
| ------------- | ------------------------------------------------------------ | ----------- | ------------ |
| commandString | Cadena                                                       | verdad      | falso        |
| fluido        | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | verdad      | falso        |

## Operadores
### MUL

Establece la cantidad de fluido en MilliBuckets (MB)

 Devuelve: `Una pila nueva, o esta pila, dependiendo de si esta pila es mutable`

```zenscript
myIFluidStack * cantidad como int
myIFluidStack * 1000
```

| Parámetro | Tipo | Descripción                         |
| --------- | ---- | ----------------------------------- |
| monto     | int  | La cantidad a multiplicar esta pila |

