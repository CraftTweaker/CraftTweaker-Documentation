# ICommandSender

La interfaz ICommandSender se utiliza la base de cada entidad y también algunos otros tipos en Craftweaker.  
Cada [Ientidad](/Vanilla/Entities/IEntity/) y [IPlayer](/Vanilla/Players/IPlayer/) implementan esto!

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter          | Tipo de devolución                     |
| ------------------ | -------------------------------------- |
| nombre de pantalla | cadena                                 |
| posición           | [IBlockPos](/Vanilla/World/IBlockPos/) |
| mundo              | [IWorld](/Vanilla/World/IWorld/)       |
| servidor           | [IServer](/Vanilla/Game/IServer/)      |

## Métodos

#### Enviar mensaje

Toma una cadena. Devuelve nulo (nada).

```zenscript
sender.sendMessage(String text);
```