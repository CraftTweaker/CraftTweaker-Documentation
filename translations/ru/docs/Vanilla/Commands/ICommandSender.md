# ICommandSender

The ICommandSender interface is used the base of each Entity and also some other types in CraftTweaker.  
Each [IEntity](/Vanilla/Entities/IEntity/) and [IPlayer](/Vanilla/Players/IPlayer/) implements this!

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.command.ICommandSender;`

## Геттеры

| Геттер      | Возвращаемый тип                       |
| ----------- | -------------------------------------- |
| displayName | string                                 |
| position    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| world       | [IWorld](/Vanilla/World/IWorld/)       |
| server      | [IServer](/Vanilla/Game/IServer/)      |

## Методы

#### Send Message

Takes a String. Returns void (nothing).

```zenscript
sender.sendMessage(String text);
```