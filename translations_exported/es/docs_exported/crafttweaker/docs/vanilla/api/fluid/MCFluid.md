# MCFluido

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Interfaces implementadas
MCFluid implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### makeStack

Crea un nuevo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la cantidad de fluido dada.

 Devuelve: `un nuevo (inmutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(amount as int);
myMCFluid.makeStack(1000);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| monto     | int  | No se proporcionó descripción |



## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |

## Operadores
### MUL

Crea un nuevo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la cantidad de fluido dada.

 Devuelve: `un nuevo (inmutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * cantidad como int
myMCFluid * 1000
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| monto     | int  | No se proporcionó descripción |

