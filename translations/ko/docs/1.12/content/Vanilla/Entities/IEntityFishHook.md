# IEntityFishHook



## 패키지 임포트하기
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityFishHook;`


## Extending [IEntity](/Vanilla/Entities/IEntity/)
IEntityFishHook extends [IEntity](/Vanilla/Entities/IEntity/). That means all functions available to [IEntities](/Vanilla/Entities/IEntity/) also are available to IEntityFishHook.

## ZenGetters

| ZenGetter    | GetterMethod   | 반환 타입                                 |
| ------------ | -------------- | ------------------------------------- |
| caughtEntity | caughtEntity() | [IEntity](/Vanilla/Entities/IPlayer/) |
| angler       | getAngler()    | [IPlayer](/Vanilla/Entities/IEntity/) |

## ZenSetters

| SetterName | SetterMethod            | Parameter Type |
| ---------- | ----------------------- | -------------- |
| lureSpeed  | setLureSpeed(lureSpeed) | int            |
| luck       | setLuck(luck)           | int            |
