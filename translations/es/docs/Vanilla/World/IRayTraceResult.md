# IRayTraceResultado

Cuando un jugador está mirando o haciendo clic en algo que lanza un rayo que va hasta que llega a lo que necesita para golpear, o se pierde.  
El resultado de este golpe es un objeto IRayTraceResult.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.world.IRayTraceResult`

## ZenGetters

Todo lo que puedes hacer es recuperar información de estos objetos, aquí es que:  
Ten cuidado, ya que todos los getters que no devuelvan un bool pueden devolver `nulo`!

| nombre       | tipo                                   |
| ------------ | -------------------------------------- |
| isMiss       | pluma                                  |
| es entidad   | pluma                                  |
| es Bloque    | pluma                                  |
| entidad      | [IEntity](/Vanilla/Entities/IEntity/)  |
| bloquear Pos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit      | [Enfrentar](/Vanilla/World/IFacing/)   |