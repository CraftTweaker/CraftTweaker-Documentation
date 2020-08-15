# Evento Posicionable

Esta interfaz se extiende por todos los eventos cuya posición importa.  
Esto significa que puedes usar los getters de abajo para acceder a los detalles de posición.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IEventPositionable;`

## ZenGetters

| nombre   | tipo                                   |
| -------- | -------------------------------------- |
| posición | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | int                                    |
| y        | int                                    |
| z        | int                                    |