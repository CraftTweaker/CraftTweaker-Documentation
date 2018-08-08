# RitualEvent

There are three kinds of ritual events:  

- RitualActivatedEvent: Fired whenever a ritual is about to be (re)activated. Cancelabe, which will result in the Ritual not activating.
- RitualRunEvent: Fired each time the ritual effect is performed. Speed depends on the ritual. Cancelable, which will result in the ritual not performing the effect.
- RitualStopEvent: Fired whenever a ritual is stopped, no matter the cause. NOT cancelable.

## Implementing EventClasses
The RitualEvents implements following EventClasses and thus are able to use all functionality they provide as well: 

| Class                                                       | RitualActivated | RitualRun | RitualStop |
|-------------------------------------------------------------|-----------------|-----------|------------|
| [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/) | ✔               |      ✔    |            |
| [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)         | ✔               |           |            |


## Event Class
You will need to cast the event in the function header as one of these classes:  
```
//Superclass, all ritual Events are this class.
mods.bloodmagic.RitualEvent

//Specific subclasses. In most cases you won't need the superclass but only those:
mods.bloodmagic.RitualActivatedEvent
mods.bloodmagic.RitualRunEvent
mods.bloodmagic.RitualStopEvent
```  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name    | ZenSetter Name | Type                                                                                    | Activated | Run | Stop |
|-------------------|----------------|-----------------------------------------------------------------------------------------|-----------|-----|------|
| masterRitualStone |                | [MasterRitualStone](/Mods/ZenEvents/SupportedMods/BloodMagic/Wrapper/MasterRitualStone/) | ✔          | ✔    | ✔     |
| ritual            |                | [Ritual](/Mods/ZenEvents/SupportedMods/BloodMagic/Wrapper/Ritual/)                       | ✔          | ✔    | ✔     |
| activationCrystal |                | [IItemStack](/Vanilla/Items/IItemStack/)                                                 | ✔          |     |      |
| crystalTier       |                | int                                                                                     | ✔          |     |      |
| canceled          | canceled       | bool                                                                                    | ✔          | ✔    |      |
| player            |                | [IPlayer](/Vanilla/Players/IPlayer/)                                                     | ✔          |     |      |