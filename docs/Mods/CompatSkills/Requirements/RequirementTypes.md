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



## Dimensions:
Dimensions is a Requirement introduced by CompatSkills and allows you to gate things behind either:
- Being in a **Specific** dimension.
- Being in **any** dimension **other than** the one specified.
```
Example:
dim|integer

Working Example:
dim|0
```



## GameStages:
GameStages is a Requirement introduced by CompatSkills and allows you to gate items behind GameStages.
The GameStage Syntax is as follows:
```
Example:
stage|stageName

Working Example:
stage|test
```



## Items:
Items is a Requirement-Type introduced by CompatSkills and allows you to gate things behind holding a specific Item/NBT-Value/Mod-Item in either your Main or Off-Hand.
The Item Syntax is as follows:
```
Example:
// Adds the requirement of you holding ANY item from the specified mod.
stack|modid

// Adds the requirement of you holding the specified item with Meta 0
stack|modid:item

// Adds the requirement of you holding the specified item with the specified Meta (* = Wildcard Metadata)
stack|modid:item:meta

// Adds the requirement of you holding ANY item with the specified NBT-data
stack||NBT as JSON

// Adds the requirement of you holding ANY item from the specified mod with the specified NBT-data.
stack|modid|NBT as JSON

// Adds the requirement of you holding the specified item with meta 0 and the specified NBT-data
stack|modid:item|NBT as JSON

// Adds the requirement of you holding the specified item with the specified Meta and the specified NBT-data
stack|modid:item:meta|NBT as JSON



// Working Examples:
stack|minecraft
stack|minecraft:iron_pickaxe
stack|minecraft:iron_pickaxe:*

//Needs a silk touch item
stack||{ench:[{id: 33s}]} 

//fortune tinkers tool
stack|tconstruct|{ench:[{id: 35s}]} 

stack|minecraft:iron_sword|{ench:[{id: 17s}]}
stack|minecraft:iron_sword:*|{ench:[{id: 17s}]}
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
[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits/)



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
[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits/)


## Inverted Requirements:
Inverted requirements are a 1.4.0+ CompatSkills feature only!
Inverted requirements are unlocked as long as you do not have the required component.
An Inverted Skill Requirement is unlocked as long as you do not have the specified level of the skill or higher.
The Inverted-Syntaxes are as follows:
```
Example:
!adv|
!dim|
!stage|
!skill|
!trait|


Working Example:
!adv|minecraft:husbandry/plant_seed
!dim|0
!stage|test
!skill|reskillable:building|15
!trait|reskillable:battle_spirit
```