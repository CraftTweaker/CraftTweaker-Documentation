# ICommandSender

The ICommandSender interface is used the base of each Entity and also some other types in Crafttweaker.  
Each [IEntity](/Vanilla/Entities/IEntity/) and [IPlayer](/Vanilla/Players/IPlayer/) implements this!

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter   | Return Type                            |
| ----------- | -------------------------------------- |
| displayName | string                                 |
| position    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| world       | [IWorld](/Vanilla/World/IWorld/)       |
| server      | [IServer](/Vanilla/Game/IServer/)      |

## ZenMethods

#### Send Message

Takes a String. Returns void (nothing).

    sender.sendMessage(String text);