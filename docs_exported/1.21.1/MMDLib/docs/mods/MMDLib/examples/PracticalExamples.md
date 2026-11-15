# Practical ZenCode examples

Each example below is a complete, independent startup script. Save the chosen
script in your instance's `scripts/` directory, keep `#loader mmdlib` at the top,
and restart Minecraft after changing it. Install MMDLib and CraftTweaker on both
sides, and use matching scripts and resources on client and server.

These examples focus on one workflow at a time and contain no test assertions,
smoke-test IDs, world markers or fixture dependencies. You can install them
individually or together. Their `guide_` names avoid collisions with the runtime
fixtures; change those names and every reference to them when adapting a script.
They use API patterns exercised by the integration tests. Verification of these
exact scripts is described below.

For complete XML machine setup, see the **Examples / XML machines** walkthrough.
For individual signatures, use the corresponding API pages; the cookbook covers
additional settings and limitations.

## Reusable modules, copies and typed references

Save as `scripts/workshop_parts.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemModule;
import mods.mmdlib.ItemModuleReference;
import mods.mmdlib.ItemBuilder;
import mods.mmdlib.ItemReference;

// Define a reusable part, then copy its current settings into a second module.
var small = new ItemModule("guide_small_part", new ItemModuleReference("mmdlib:ingot"));
small.stackSize = 16;
small.addTags("c:guide_parts");
var large = small.copy("guide_large_part");
large.stackSize = 4;
small.build();
large.build();

// Modules must be built before items select them.
var washer = new ItemBuilder("guide_washer", small.reference);
washer.displayName = "Workshop Washer";
washer.build();
var housing = new ItemBuilder("guide_housing", large.reference);
housing.displayName = "Workshop Housing";
housing.build();

// An item reference stores an ID; it is not an item-stack bracket lookup.
var cartridge = new ItemBuilder("guide_cartridge");
cartridge.displayName = "Coolant Cartridge";
cartridge.remainder(new ItemReference("minecraft:bucket"));
cartridge.build();
```

This creates two modules and three items. `copy` snapshots the source's settings
at that line: the housing stacks to four, while the washer stacks to sixteen.
Build the modules before constructing items that select their references.
`small.reference` is an `ItemModuleReference`; the cartridge's remainder needs an
`ItemReference` instead. The example names an existing vanilla bucket, avoiding
any dependency on the registration order of new script items. Neither reference
is a live item stack.

The remainder setting controls crafting-grid remainder behavior; this script does
not add a crafting recipe. Add recipes in a separate ordinary CraftTweaker script,
where item brackets are available. Supply textures at:

- `scripts/mmdlibdata/assets/mmdlib/textures/item/guide_washer.png`
- `scripts/mmdlibdata/assets/mmdlib/textures/item/guide_housing.png`
- `scripts/mmdlibdata/assets/mmdlib/textures/item/guide_cartridge.png`

Copying callbacks copies their bindings, but captured mutable script variables can
still be shared. Avoid using a captured counter as per-item or per-block state.

## Item-use and hit callback interfaces

Save as `scripts/workshop_charms.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemBuilder;
import mods.mmdlib.ItemUseContext;
import mods.mmdlib.HitContext;

// A plain item needs a use duration before it can finish a held-use action.
var charm = new ItemBuilder("guide_cooling_charm");
charm.displayName = "Cooling Charm";
charm.useDuration = 40;
charm.useAnimation = "bow";
charm.onUseFinish((use as ItemUseContext) => {
    if (!use.client) {
        use.entity.setRemainingFireTicks(0);
    }
});
charm.build();

// Hit callbacks run on the server, after a melee hit.
var blade = new ItemBuilder("guide_ember_blade", "mmdlib:sword");
blade.displayName = "Ember Blade";
blade.onHit((hit as HitContext) => {
    hit.target.setRemainingFireTicks(60);
});
blade.build();
```

Hold use for forty ticks with the charm to clear fire from the user. Stopping early
does not run the finish callback. `ItemUseContext` runs on both sides, so the world
change is guarded by `!use.client`. `HitContext` already runs on the server; the
blade ignites its target for sixty ticks after a successful melee hit.

The typed lambda parameters show which context each interface receives. You do not
construct those contexts yourself or call the interface's `handle` method manually;
MMDLib supplies them when the event occurs. Register callbacks before `build()`.
Supply `item/guide_cooling_charm.png` and `item/guide_ember_blade.png` under
`scripts/mmdlibdata/assets/mmdlib/textures/`.

## Stateful block clicks and directional redstone

Save as `scripts/workshop_signals.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.BlockBuilder;
import mods.mmdlib.ClickContext;
import mods.mmdlib.RedstoneContext;

// Each placement stores its own output; no shared script counter is needed.
var dial = new BlockBuilder("guide_signal_dial");
dial.displayName = "Signal Dial";
dial.redstoneOutput = true;
dial.comparator = "output";
dial.onRightClick((click as ClickContext) => {
    if (!click.client) {
        click.output = click.sneaking ? 0 : (click.output + 1) % 16;
    }
});
dial.build();

// A separate directional gate inverts the signal arriving at its back.
var inverter = new BlockBuilder("guide_inverter");
inverter.displayName = "Signal Inverter";
inverter.directional = true;
inverter.redstoneOutput = true;
inverter.removeInputFaces("all").addInputFaces("back");
inverter.removeOutputFaces("all").addOutputFaces("front");
inverter.onRedstoneChanged((signal as RedstoneContext) => {
    signal.output = signal.input("back") > 0 ? 0 : 15;
});
inverter.build();
```

Right-click the dial to increase its signal, wrapping from fifteen to zero.
Sneak-right-click resets it. Each placed dial has its own stored output; the script
does not maintain a global counter. A comparator reads that output.

The second block emits fifteen from its front when its back is unpowered, and zero
when powered. `onRedstoneChanged` enables reading redstone input. Clearing the
initial face sets is necessary because their defaults include all faces. Relative
`front` and `back` rotate with the placed block. The redstone callback runs on the
server; click callbacks run on both sides and consume the click.

Supply `block/guide_signal_dial.png`, `block/guide_inverter.png`,
`block/guide_inverter_front.png` and `block/guide_inverter_top.png` under
`scripts/mmdlibdata/assets/mmdlib/textures/`.

## A custom tool module selected by one material

Save as `scripts/workshop_alloy.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemModule;
import mods.mmdlib.ToolSettings;
import mods.mmdlib.MaterialBuilder;

// Begin with the generic-tool crackhammer module, not a vanilla pickaxe factory.
var hammer = new ItemModule("guide_hammer", "mmdlib:crackhammer");
var tool = new ToolSettings();
tool.mineable = "minecraft:mineable/pickaxe";
tool.fastOn = "minecraft:mineable/pickaxe";
tool.attackDamage = 4;
tool.attackSpeed = -2.5;
tool.abilities("pickaxe");
hammer.configureTool(tool);
hammer.build();

// Select only an ingot and the custom tool; avoid creating every material part.
var alloy = new MaterialBuilder("guide_alloy");
alloy.removeItems("all").addItems("ingot", "guide_hammer");
alloy.removeBlocks("all");
alloy.hasFluid = false;
alloy.color = 0xFF8099AA;
alloy.repairItem = "mmdlib:guide_alloy_ingot";
alloy.incorrectBlocks = "minecraft:incorrect_for_iron_tool";
alloy.toolDurability(300).toolEfficiency(6).enchantability(12);
alloy.build();
```

This defines a reusable hammer module and a material that selects only its ingot
and that hammer. The resulting item IDs are `mmdlib:guide_alloy_ingot` and
`mmdlib:guide_alloy_guide_hammer`. The doubled descriptive words come from combining
the material ID path and the custom module ID path; they are intentional here.

`ToolSettings` describes behavior for the generic `mmdlib:tool` factory, which the
crackhammer module uses. It is not a configuration interface for every vanilla tool
factory. The helper is snapshotted when passed to `configureTool`.

Use `toolDurability` on the material for effective durability. Generic-tool
`ToolSettings.durability` scaling currently has a documented runtime limitation;
this example avoids relying on it. Material items receive generated tinted art
from their module templates; standalone item texture requirements from the earlier
examples do not apply to the ingot in the same way.

## A block sound set, generated loot and a creative tab

Save as `scripts/workshop_presentation.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.SoundTypeBuilder;
import mods.mmdlib.BlockBuilder;
import mods.mmdlib.CreativeTabBuilder;

// Reuse registered vanilla sound events, so this example needs no OGG files.
var sounds = new SoundTypeBuilder("guide_workshop_sounds");
sounds.base = "metal";
sounds.pitch = 0.8;
sounds.build();

var casing = new BlockBuilder("guide_workshop_casing");
casing.displayName = "Workshop Casing";
casing.sound = "mmdlib:guide_workshop_sounds";
casing.strength(3, 6).requiresToolToDrop().dropsSelf();
casing.build();

// Tab entries are IDs because this loader runs before item registries exist.
var tab = new CreativeTabBuilder("guide_workshop");
tab.titleFallback = "Workshop Examples";
tab.icon = "mmdlib:guide_workshop_casing";
tab.addItems("mmdlib:guide_workshop_casing", "minecraft:iron_ingot");
tab.after = ["minecraft:building_blocks"];
tab.build();
```

This combines a sound-set builder, a block builder and a creative-tab builder.
The sound set inherits vanilla metal events at a lower pitch, so no custom audio
is required. `dropsSelf` generates the block's self-drop loot table; the correct
tool is still required. The new tab names an explicit icon and two entries using
IDs rather than item brackets, since registries are not ready during this loader.

Supply `scripts/mmdlibdata/assets/mmdlib/textures/block/guide_workshop_casing.png`.
MMDLib generates the ordinary models, English display name and loot. If you need
a custom sound event, separately register it with `SoundBuilder` and supply its
`sounds.json` entry and audio files; declaring an event alone creates no audio.

## Checking your adaptation

Check startup errors before testing the behavior. Find the content in the creative
inventory (only the last example adds its own tab), check resource warnings for
missing textures, and test the callback on a placed block or held item. Definition
changes need a restart; `/reload` does not rebuild these items, blocks or handlers.
Do not add these scripts to the normal recipe loader by removing their loader line.


## Verification of these scripts

All five scripts were compiled and executed by the `mmdlib` loader in the isolated
GameTest server, and the server completed startup and ran its tests. This verifies
ZenCode syntax and registration, not every behavior described above. Adding the
extra content changes registry totals, so the two existing GameTests that assert
fixed material/block counts do not pass in that augmented run. No client rendering
or dedicated gameplay assertions for these exact examples were run.
