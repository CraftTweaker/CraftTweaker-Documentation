# Action

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.permissions.Action;
```


## Enum Constants

Action is an enum. It has 30 enum constants. They are accessible using the code below.

```zenscript
<constant:minecolonies:permissions/action:access_huts>
<constant:minecolonies:permissions/action:guards_attack>
<constant:minecolonies:permissions/action:place_huts>
<constant:minecolonies:permissions/action:break_huts>
<constant:minecolonies:permissions/action:edit_permissions>
<constant:minecolonies:permissions/action:manage_huts>
<constant:minecolonies:permissions/action:receive_messages>
<constant:minecolonies:permissions/action:use_scan_tool>
<constant:minecolonies:permissions/action:place_blocks>
<constant:minecolonies:permissions/action:break_blocks>
<constant:minecolonies:permissions/action:toss_item>
<constant:minecolonies:permissions/action:pickup_item>
<constant:minecolonies:permissions/action:fill_bucket>
<constant:minecolonies:permissions/action:open_container>
<constant:minecolonies:permissions/action:rightclick_block>
<constant:minecolonies:permissions/action:rightclick_entity>
<constant:minecolonies:permissions/action:throw_potion>
<constant:minecolonies:permissions/action:shoot_arrow>
<constant:minecolonies:permissions/action:attack_citizen>
<constant:minecolonies:permissions/action:attack_entity>
<constant:minecolonies:permissions/action:access_free_blocks>
<constant:minecolonies:permissions/action:teleport_to_colony>
<constant:minecolonies:permissions/action:explode>
<constant:minecolonies:permissions/action:receive_messages_far_away>
<constant:minecolonies:permissions/action:can_keep_colony_active_while_away>
<constant:minecolonies:permissions/action:rally_guards>
<constant:minecolonies:permissions/action:hurt_citizen>
<constant:minecolonies:permissions/action:hurt_visitor>
<constant:minecolonies:permissions/action:map_border>
<constant:minecolonies:permissions/action:map_deaths>
```
## Methods

:::group{name=getFlag}

Return Type: long

```zenscript
// Action.getFlag() as long

myAction.getFlag();
```

:::


