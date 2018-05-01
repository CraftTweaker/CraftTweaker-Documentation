# Requirement Types


## Advancements:
Advancements is one of the original requirement types supported in Skillable (Original Mod) and has now been improved in the code to be more relyable for gating.
The Advancement Syntax is as followS:
```
Example:
adv|ResourceLocation

Working Example:
adv|minecraft:husbandry/plant_seed
```

This works for any and all Advancements even those added by other mods than minecraft, however the correct Resource Location needs to be specified.



## GameStages:
GameStages is a Requirement introduced by CompatSkills and allows you to gate items behind GameStages.
The GameStage Syntax is as follows:
```
Example:
stage|stageName

Working Example:
stage|test
```



## Skills:
Skills alongside Advancements was one of the original lock types added by Skillable and has since then been refined to support other mods adding more Skills.
The Skill Syntax is as follows:
```
Example:
ResourceLocation|Level

Working Example:
reskillable:building|15
```

Since the release of Reskillable we've moved from a skill name system to a resource location name system.
This allows for several skills to add skills with the same internal name but different mod id's for the Resource Location.
You can find the Skill's ResourceLocations under:
[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits)



## Traits:
Traits is a new addition for Reskillable and makes it so you now can lock things behind a required Trait.
Traits are similar to Skills in the way that we've moved them over to a Resource Location instead of a name to allow for more robust extendability.
The Trait Syntax is as follows:
```
Example:
trait|ResourceLocation

Working Example:
trait|reskillable:battle_spirit
```

You can find the Traits's ResourceLocations under:
[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits)


## Inverted Requirements:
Inverted Requirements are a 1.4.0 CompatSkills feature only!
Inverted Requirements are unlocked when you do not have the required component.
Inverted Skill Requirement is unlocked when you do not have the specified level of the skill or higher.
The Inverted-Syntaxes are as follows:
```
Example:
!adv|
!stage|
!skill|
!trait|


Working Example:
!adv|minecraft:husbandry/plant_seed
!stage|test
!skill|reskillable:building|15
!trait|reskillable:battle_spirit
```