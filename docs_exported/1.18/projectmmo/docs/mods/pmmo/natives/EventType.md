# EventType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.EventType;
```


## Implemented Interfaces
EventType implements the following interfaces. That means all methods defined in these interfaces are also available in EventType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

EventType is an enum. It has 54 enum constants. They are accessible using the code below.

```zenscript
<constant:pmmo:eventtype:anvil_repair>
<constant:pmmo:eventtype:block_break>
<constant:pmmo:eventtype:break_speed>
<constant:pmmo:eventtype:block_place>
<constant:pmmo:eventtype:breath_change>
<constant:pmmo:eventtype:breed>
<constant:pmmo:eventtype:brew>
<constant:pmmo:eventtype:consume>
<constant:pmmo:eventtype:craft>
<constant:pmmo:eventtype:receive_damage>
<constant:pmmo:eventtype:from_mobs>
<constant:pmmo:eventtype:from_players>
<constant:pmmo:eventtype:from_animals>
<constant:pmmo:eventtype:from_projectiles>
<constant:pmmo:eventtype:from_magic>
<constant:pmmo:eventtype:from_environment>
<constant:pmmo:eventtype:from_impact>
<constant:pmmo:eventtype:deal_melee_damage>
<constant:pmmo:eventtype:melee_to_mobs>
<constant:pmmo:eventtype:melee_to_players>
<constant:pmmo:eventtype:melee_to_animals>
<constant:pmmo:eventtype:deal_ranged_damage>
<constant:pmmo:eventtype:ranged_to_mobs>
<constant:pmmo:eventtype:ranged_to_players>
<constant:pmmo:eventtype:ranged_to_animals>
<constant:pmmo:eventtype:death>
<constant:pmmo:eventtype:enchant>
<constant:pmmo:eventtype:fish>
<constant:pmmo:eventtype:smelt>
<constant:pmmo:eventtype:grow>
<constant:pmmo:eventtype:health_change>
<constant:pmmo:eventtype:jump>
<constant:pmmo:eventtype:sprint_jump>
<constant:pmmo:eventtype:crouch_jump>
<constant:pmmo:eventtype:world_connect>
<constant:pmmo:eventtype:world_disconnect>
<constant:pmmo:eventtype:hit_block>
<constant:pmmo:eventtype:activate_block>
<constant:pmmo:eventtype:activate_item>
<constant:pmmo:eventtype:entity>
<constant:pmmo:eventtype:respawn>
<constant:pmmo:eventtype:riding>
<constant:pmmo:eventtype:shield_block>
<constant:pmmo:eventtype:skill_up>
<constant:pmmo:eventtype:sleep>
<constant:pmmo:eventtype:sprinting>
<constant:pmmo:eventtype:submerged>
<constant:pmmo:eventtype:swimming>
<constant:pmmo:eventtype:diving>
<constant:pmmo:eventtype:surfacing>
<constant:pmmo:eventtype:swim_sprinting>
<constant:pmmo:eventtype:taming>
<constant:pmmo:eventtype:vein_mine>
<constant:pmmo:eventtype:disable_perk>
```
## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// EventType.getCommandString() as string

myEventType.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

