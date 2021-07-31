# Research Locking

## Feature:
This feature allows you to lock the acquisition of Research behind a set group of requirements.
This means for example that you can set the acquisition of "Golem Research" behind the requirement of being in a certain dimension (as seen in the example below).
This does mean that you have to be in that dimension to acquire the research, however once you've got the research you've got it.
It doesn't "reset" or get "unlearnt" by leaving the dimension or no longer meeting the requirements in general!

## Syntax:
```
mods.compatskills.Thaumcraft.addResearchLock(String researchKey, String... requirements);

mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");
```