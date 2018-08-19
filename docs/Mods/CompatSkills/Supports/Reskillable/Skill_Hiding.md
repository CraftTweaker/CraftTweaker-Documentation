# Skill Hiding / Visibility Locking

This lock allows you to hide Skills until the point where a player fulfills the requirements to see the skill.
This has some limited use-cases for example when adding "Class" Skills in Custom-Packs where you don't want someone who is an "Engineer" to see or be able to get access to the "Mage" skill page.
 
## Syntax:
```
Blank Example:
mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill skill, String... Default Requirements);

Working Example:
mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");
```