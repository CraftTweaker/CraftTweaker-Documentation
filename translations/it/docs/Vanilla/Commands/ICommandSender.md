# ICommandSender

L'interfaccia ICommandSender viene utilizzata la base di ogni entità e anche alcuni altri tipi in CraftTweaker.  
Ogni [IEntity](/Vanilla/Entities/IEntity/) e [IPlayer](/Vanilla/Players/IPlayer/) implementa questo!

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter   | Tipo Di Reso                           |
| ----------- | -------------------------------------- |
| displayName | stringa                                |
| posizione   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| mondo       | [IWorld](/Vanilla/World/IWorld/)       |
| server      | [IServer](/Vanilla/Game/IServer/)      |

## ZenMethods

#### Invia Messaggio

Prende una stringa. Restituisce vuoto (nulla).

```zenscript
sender.sendMessage(testo stringa);
```