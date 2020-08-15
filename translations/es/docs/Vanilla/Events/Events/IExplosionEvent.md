# Evento de Explosión

Esta interfaz es extendida por todos los eventos de la explosión. Esto significa que puede utilizar los getters de abajo para acceder a los detalles de posición.

## Importar la clase
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| nombre   | tipo                                   |
| -------- | -------------------------------------- |
| mundo    | [IWorld](/Vanilla/World/IWorld/)       |
| posición | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | doble                                  |
| y        | doble                                  |
| z        | doble                                  |
