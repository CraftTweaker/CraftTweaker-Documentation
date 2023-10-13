# Guide: Comparison with MineTweaker 2

For those whom are already used to MineTweaker 2: the main concept is still the same and the basic functionality remains as it was. However, a lot of things have changed too:

* Everything now uses the angled bracket syntax. Where you had to write tile.chest, you would now write <tile.chest> in MC 1.6.4 and <minecraft:chest> in MC 1.7.2+.
* Ores use angled bracket syntax too. eg: <ore:ingotCopper>
* Liquids use the same syntax (no more having to find liquids from containers): <liquid:water>
* You can print a list of item and liquid names with /mt names and /mt liquids
* All output is now sent to minetweaker.log. No more scanning the development log unless you need stack traces due to bugs in minetweaker. Errors and warnings are still reported.
* The scripting engine will now attempt to continue executing the script if there is an error. On the flipside, this may cause more errors due to one error generating another.
* There are no more scripts in the config directory. There are no more local scripts. Everything is defined server-side and always sent to connected clients, no exceptions. Instead, there is a global script directory (applicable to all worlds hosted on that minecraft instance) in /scripts and a per-world script directory in the savegame/scripts directory. The empty directories are automatically generated when you open the game or world. Per-world scripts can override the contents of a global script.
* The reload command has been improved. You can always reload, but some recipes may be stuck. These will be reported. There is no more force quitting minecraft, but a restart may still be required if you want to clear those old recipes. Errors no longer break the reload function.
* Item names are now per item and should now work properly in all cases.
* Mod support is still missing - only NEI and IC2 are supported, and IC2 is not yet supported in 1.6.4. The past mods will be ported in a subsequent release.
* Recipe ingredients can now have conditions. A condition may be a minimum/maximum damage value or a specific NBT tag.