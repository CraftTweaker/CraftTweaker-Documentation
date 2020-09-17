# ICommandSender

Das ICommandSender-Interface wird als Basis für jede Entität und auch für einige andere Typen in CraftTweaker verwendet.  
Jede [IEntity](/Vanilla/Entities/IEntity/) und [IPlayer](/Vanilla/Players/IPlayer/) implementiert diese!

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter   | Rückgabetyp                            |
| ----------- | -------------------------------------- |
| displayName | string                                 |
| position    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| Welt        | [IWorld](/Vanilla/World/IWorld/)       |
| server      | [IServer](/Vanilla/Game/IServer/)      |

## ZenMethoden

#### Nachricht senden

Nimmt einen String. Gibt nichtig zurück (nichts).

```zenscript
sender.sendMessage(String Text);
```