# Ritual Support

## Rituals:
This will cancel the activation of a ritual if the specific requirements aren't met for the rituals activation.


### Command:
There is currently a in-game command for dumping all of the Ritual Strings for use by the Ritual Handler.
The command is: /ct ritualDump and it'll output all of the ritual strings to the "Crafttweaker.log".


### Pre-1.4.0:

#### Syntax:
```
Blank Example:
mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)

Test Example:
mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
```


### Post-1.4.0:
As of CompatSkills 1.4.0 a few new ZenMethods has been added as well as some changes has been done to the existing syntax.
We've also fixed an issue that made Ritual Support and Binding Support not work properly!

#### Syntax:
```
Blank Example:
mods.compatskills.RitualHandler.addRitualLock(String ritual, String... requirements);
mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... requirements);
mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);

Test Example:
mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
```

#### Error Message
As with the Binding-Support, the Error-Message has been moved over to a localizable string instead of a string set in the CrT Method. This will make it so ResourcePack Authors can localize and change the strings as they'd like much easier.
```
compatskills.bloodmagic.ritualError=As the ritual activates, you don't achieve the expected result
```

Some other changes are for example that the default Error Message now displays as part of a status chat-message to the player.
This means that the message is only shown to the player and not printed in chat for everyone to see.
This also means that it will now display alongside requirements in the chat.
Which makes it easier for the player to identify what they are missing from the lock.