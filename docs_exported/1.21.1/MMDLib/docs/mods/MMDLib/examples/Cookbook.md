# MMDLib ZenCode cookbook

For normal shared crushing-recipe edits, see [CraftTweaker crushing recipes](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/crafttweaker-crusher.md).
Those use the ordinary recipe loader, separately from these startup definitions.

When CraftTweaker is installed, scripts can define MMDLib materials, blocks, items,
and reusable block and item modules. Scripts use the `mmdlib` loader and run once at startup, after every mod has
constructed and before registry events. What they build is planned, checked, and
registered like the matching `mmdlib/` files. Changing a script needs a restart;
`/reload` does not run these scripts again.

The `mmdlib` loader inherits CraftTweaker's `crafttweaker` loader, so its types
(`IData`, item stacks, and so on) are available. Anything that needs registries or a
world, such as `<item:...>` brackets or recipe managers, cannot run this early; use a
normal `crafttweaker` script for recipes.

See the [complete API inventory and runtime capability audit](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/crafttweaker-api-inventory.md)
for inherited members, factory-specific limits, and the boundary between stored
definition fields and implemented behavior.

## Materials

```zenscript
#loader mmdlib
import mods.mmdlib.MaterialBuilder;

var copper = new MaterialBuilder("copper");
copper.type = "metal";
copper.color = 0xFFFF9B40;
copper.hardness = 3.5;
copper.strength = 8;
copper.magic = 4.5;
copper.removeItems("all").addItems("ingot", "nugget", "dust");
copper.removeBlocks("door", "double_slab");
copper.addHarvestTags("minecraft:needs_stone_tool");
copper.addSpecial("blast_resistance", 8);
copper.hasFluid = false;
copper.build();
```

Content is registered in MMDLib's namespace: `copper` above becomes `mmdlib:copper`,
with parts such as `mmdlib:copper_ingot`. The name can also be written
`"mmdlib:copper"`; any other namespace is rejected. A name used by a material file
or another script fails loading.

### Properties

| Property | Type | Default |
| --- | --- | --- |
| `name` | string, read-only | from the constructor |
| `type` | string | `generic` |
| `color` | int (ARGB) | `-1` (opaque white) |
| `hardness`, `strength`, `magic` | double, nonnegative | `0` |
| `damage` | double | `0` |
| `hasFluid` | bool | `true` |
| `fluid` | fluid module ID | `mmdlib:molten` |
| `items`, `blocks`, `harvestTags` | string[], read-only | see below |

See [the material factory](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/material-factory.md) for what each stat drives.

### Material runtime and tool settings

MaterialBuilder also exposes these string properties. IDs are stored until normal
runtime registration; sounds and map colors name vanilla constant keys.

| Property | Default | Meaning |
| --- | --- | --- |
| `repairItem` | `""` | explicit repair item ID; empty restores the material's normal repair choice |
| `incorrectBlocks` | `minecraft:incorrect_for_iron_tool` | block tag this material's tools cannot harvest |
| `baseBlock` | `minecraft:iron_block` | base behavior for factories such as stairs |
| `blockSetType` | `minecraft:iron` | behavior for doors, buttons and pressure plates |
| `blockSound` | `""` | material block sound override: a vanilla set such as `wood`, or a [sound set](#sounds) ID such as `mmdlib:steel_plate`; empty keeps module sound |
| `mapColor` | `""` | material map-color override, e.g. `gold`; empty keeps module map color |

Named methods `toolDurability(int)`, `toolEfficiency(double)`,
`attackDamage(double)`, and `enchantability(int)` write the existing special keys
`tool_durability`, `tool_efficiency`, `base_attack_damage`, and `enchantability`.
They return the builder for chaining. Durability must be at least 1; efficiency
and enchantability must be nonnegative. Damage may be negative; decimal values
must be finite and fit a float. `addSpecial`/`removeSpecial` still work; the last
write to a key wins, and removing it restores the derived stat.

These settings apply to the material's parts. They do not expose a separate tier
registry or override every item factory's native behavior. Existing special stats
can take precedence over derived values; a tool module can additionally scale
material durability and efficiency.

### Collections

Each collection has an add and a remove function. They take any number of names,
return the builder so calls can be chained, and accept `"all"`:

| Functions | Names | `"all"` |
| --- | --- | --- |
| `addItems` / `removeItems` | item parts, such as `ingot` or `pickaxe` | every item part |
| `addBlocks` / `removeBlocks` | block parts, such as `block` or `ore` | every block part |
| `addHarvestTags` / `removeHarvestTags` | block tag IDs | remove only: clears the tags |
| `addSpecial(key, value)` / `removeSpecial` | special stat keys | remove only: clears the stats |

A new builder selects every item and block part, like a material file that omits
those sections; start with `removeItems("all")` to pick parts one by one. Part
names are the same as in material files, including aliases and code-registered
types. An unknown name, or a name from the other section, is an error at that call.
Projectile entities follow their items: selecting the arrow item also builds its
entity.

### Building

`build()` validates the values and queues the material. Call it once per
material. Changes made to the builder after `build()` are ignored. `build()` only
works during the startup run; `MaterialBuilder` is not available to other loaders.

## Blocks

`mods.mmdlib.BlockBuilder` builds one block with its own ID, like a
`mmdlib/standalone/block` file. The optional second argument is the block module
that decides what kind of block it is: `mmdlib:block` (a plain cube, the default),
any MMDLib block part (`mmdlib:stairs`, `mmdlib:door`, `mmdlib:pressure_plate`...),
a module another mod registers, or a script module (below).

```zenscript
#loader mmdlib
import mods.mmdlib.BlockBuilder;

var marble = new BlockBuilder("marble");
marble.hardness = 1.5;
marble.sound = "stone";
marble.build();

var plate = new BlockBuilder("mob_plate", "mmdlib:pressure_plate");
plate.factoryData = {detects: "mobs"};
plate.blockSetType = "minecraft:oak";
plate.build();
```

The block is `mmdlib:<name>`. Its values start from the module's template, and it
is put in `minecraft:mineable/pickaxe`.

| Property | Type | Meaning |
| --- | --- | --- |
| `name`, `module` | string, read-only | |
| `hardness`, `blastResistance` | float | mining time (-1 is unbreakable); explosion resistance |
| `friction`, `speedFactor`, `jumpFactor` | float | slipperiness (ice 0.98); walk and jump multipliers |
| `lightLevel` | int | 0 to 15 |
| `requiresCorrectTool`, `collision`, `occlusion`, `randomTicks`, `replaceable`, `hasItem` | bool | |
| `sound`, `mapColor` | string | such as `stone`, `wood`, `metal`; `sound` may also be a [sound set](#sounds) ID |
| `factoryData` | map | settings for the module's Java implementation |
| `blockEntityData` | map, write-only | settings for a machine's block entity |
| `baseBlock` | block ID | what stairs copy their behavior from |
| `blockSetType` | ID | how doors, buttons and plates open: `minecraft:oak` by hand, `minecraft:iron` (default) by redstone |
| `tags`, `events` | string[], read-only | |

Blocks, items, and modules share three collections: `addTags`/`removeTags` (block
tags here) with `removeTags("all")` to clear them, the `factoryData` map, and events.
`addEvent(event, callback)` binds a registered callback, such as
`addEvent("block-right-click", "mmdlib:open_menu")`. `removeEvents` removes bindings
by event name, and `removeEvents("all")` clears them.

MMDLib generates the block's blockstate, models, item model, English name, loot
table, and tags from the module's template, but **not its textures**. Supply them in
`scripts/mmdlibdata/assets/mmdlib/textures/`. At startup the client log lists each
texture a block still needs. A plain block `marble` needs `block/marble.png`. Shaped
blocks use the block's name for their main texture, plus suffixed ones where the
shape needs more (doors need `block/<name>_lower.png` and `block/<name>_upper.png`).
A module with no MMDLib template gets nothing generated, and a warning says so;
supply its blockstate and models in `scripts/mmdlibdata` too.

## Block modules

`mods.mmdlib.BlockModule` defines a new kind of block, like a `data/<ns>/block`
module file. It starts as a copy of the module named in the second argument
(`mmdlib:block` by default), without that module's aliases, and has the same
properties, tags, and events as a block. In addition:

| Property | Type | Meaning |
| --- | --- | --- |
| `name` | string, read-only | `mmdlib:<name>` |
| `factory` | ID | the Java implementation, such as `mmdlib:stairs` |
| `materialDefaults` | bool | whether a material's stats override the template's |

`build()` registers the module immediately. Later script lines can then use it:

```zenscript
import mods.mmdlib.BlockModule;

var pillar = new BlockModule("pillar", "mmdlib:stairs");
pillar.hardness = 2;
pillar.build();

var steps = new BlockBuilder("marble_steps", "mmdlib:pillar");
steps.build();

var tin = new MaterialBuilder("tin");
tin.addBlocks("pillar");   // tin_pillar
tin.build();
```

Material files can select script modules too: scripts run before material files are
read. A material's part gets generated art from the template of the module it was copied
from (or else its factory's): `tin_pillar` looks like stairs, in the material color.

## Items

`mods.mmdlib.ItemBuilder` builds one item with its own ID, like a
`mmdlib/standalone/item` file. The optional second argument is the item module:
`mmdlib:ingot` (a plain item, the default), any MMDLib item part (`mmdlib:sword`,
`mmdlib:bow`, `mmdlib:helmet`...), a module another mod registers, or a script item
module.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemBuilder;

var wrench = new ItemBuilder("wrench");
wrench.durability = 250;
wrench.addTags("c:tools/wrench");
wrench.build();

var longbow = new ItemBuilder("longbow", "mmdlib:bow");
longbow.durability = 600;
longbow.build();
```

| Property | Type | Meaning |
| --- | --- | --- |
| `name`, `module` | string, read-only | |
| `stackSize` | int | 1 to 99 |
| `durability` | int | uses before breaking; 0 for none. Setting it also sets `stackSize` to 1 |
| `fireResistant` | bool | survives fire and lava |
| `useDuration` | int | ticks of use for the basic-item factory; 0 (default) for none. Other factories keep their native behavior. See [Hooks](#using-an-item-over-time) |
| `useAnimation` | string | how it is held while used: `none`, `eat`, `drink`, `bow`... |
| `container` | item ID | left in the crafting grid after use, such as `minecraft:bucket`; `""` for nothing |
| `factoryData` | map | settings for the module's Java implementation |
| `tags`, `events` | string[], read-only | |

Tags are item tags. `addTags`/`removeTags` and `addEvent`/`removeEvents` work as
they do for blocks. An item has no tags unless its script module gave it some.

MMDLib generates the item's model, English name, and tags, but not its textures.
The client log lists what each item needs: a plain item `wrench` needs
`item/wrench.png`, and a bow `longbow` needs `item/longbow_standby.png` and
`item/longbow_pulling_0.png` to `_2.png`.

## Item modules

`mods.mmdlib.ItemModule` defines a new kind of item. It starts as a copy of the
module named in the second argument (`mmdlib:ingot` by default), without that
module's aliases, and has the same properties as an item, plus a settable `factory`.
`build()` registers it at once. Materials then select it by name, in scripts and in
material files:

```zenscript
import mods.mmdlib.ItemModule;

var widget = new ItemModule("widget");
widget.stackSize = 16;
widget.addTags("c:widgets");
widget.build();

var tin = new MaterialBuilder("tin");
tin.addItems("widget");   // tin_widget, in c:widgets, drawn like a tin ingot
tin.build();
```

A module's tags go to every material part built from it. The part's art comes from
the template of the module it was copied from, in the material color.

## Fluids

`mods.mmdlib.FluidBuilder` builds a fluid with its own ID, like a
`mmdlib/standalone/fluid` file: the fluid, its flowing form, a liquid block and a
bucket.

```zenscript
#loader mmdlib
import mods.mmdlib.FluidBuilder;

var chocolate = new FluidBuilder("chocolate");
chocolate.tint = 0xFF5C3A21;
chocolate.viscosity = 3000;
chocolate.canSwim = false;
chocolate.displayName = "Liquid Chocolate";
chocolate.build();

var plasma = new FluidBuilder("plasma", "mmdlib:molten");
plasma.lightLevel = 15;
plasma.hasBlock = false;
plasma.build();
```

`new FluidBuilder(name)` starts from `mmdlib:fluid`, a plain water-like liquid with
water's textures; `new FluidBuilder(name, module)` starts from another fluid module,
such as `mmdlib:molten`. The fluid is `mmdlib:<name>`, its flowing form
`mmdlib:flowing_<name>` and its bucket `mmdlib:<name>_bucket`.

| Property | Sets |
| --- | --- |
| `density`, `viscosity`, `temperature`, `lightLevel`, `motionScale` | the fluid type's values; temperature in kelvin, water 300 |
| `canSwim`, `canDrown`, `canExtinguish`, `supportsBoating`, `canHydrate` | what entities and blocks can do with it |
| `slopeFindDistance`, `levelDecreasePerBlock`, `tickRate`, `explosionResistance`, `canConvertToSource` | how it flows |
| `still`, `flowing`, `overlay` | block-atlas textures, such as `"minecraft:block/water_still"`; an empty `overlay` removes it |
| `tint` | an ARGB tint over the textures; -1 for none |
| `hasBlock`, `hasBucket` | whether it has a liquid block (to be placed in the world) and a bucket |
| `displayName` | its English name; the bucket is "*name* Bucket" |

MMDLib generates the bucket model, the liquid block's blockstate and the English
names; the textures are block-atlas textures, as in fluid module files.

## Fluent conveniences and generated resource controls

Property assignment remains supported. The following fluent aliases return their
properties builder and delegate to the same setters, so validation timing and
errors remain the same. `build()` still returns void.

| Builder/module | Fluent methods | Existing properties |
| --- | --- | --- |
| Item | `stacksTo(int)`, `craftRemainder(string or ItemReference)` | stackSize, container |
| Block | `destroyTime(float)`, `explosionResistance(float)` | hardness, blastResistance |
| Block | `strength(float)` or `strength(hardness, resistance)` | hardness and blastResistance |
| Block | `noCollisions()`, `noOcclusion()` | collision=false, occlusion=false |
| Block | `requiresToolToDrop()` or `requiresToolToDrop(bool)` | requiresCorrectTool |
| Block | `noCorrespondingItem()` | hasItem=false |

Chains return the shared property type. Use a variable when you need module-only
members such as `factory` or `copy` after a chain.

MaterialBuilder, ItemBuilder, BlockBuilder, ItemModule and BlockModule expose
`displayName`. It overrides the English name generated in `en_us.json`; it does
not change registry IDs, model names, texture paths, or other locales. Blank names
are rejected. A material name supplies the base label for its generated parts;
a module name overrides its selected parts' labels. The token `__material__` in
a module label expands to that material's display name. Standalone builders inherit
module resource settings at construction and can override them. Module `copy`
snapshots these settings as well.

```zenscript
var block = new BlockBuilder("polished_stone");
block.displayName = "Polished Workshop Stone";
block.strength(2, 6).requiresToolToDrop().dropsSelf();
block.build();
```

Blocks and block modules expose these generated-loot controls. The last call wins:

| Method | Generated block loot |
| --- | --- |
| `dropsNormally()` | existing shape-aware rules: double slabs/slabs, doors and anvils retain their special handling |
| `noDrops()` | an explicit empty table |
| `dropsSelf()` | one corresponding block item, subject to explosion survival; requires hasItem=true |
| `dropsFrom("namespace:path")` | a nested reference to an existing loot table, using the block's loot context |

`dropsSelf` intentionally bypasses shape-specific rules. Prefer `dropsNormally`
for slabs and doors. `noCorrespondingItem` suppresses the ordinary self-drop table;
the existing double-slab-to-slab default remains intact. A referenced table must
accept block-context parameters and must not recurse through this block's table.
Direct self-reference is rejected; indirect cycles and missing external tables
remain subject to vanilla loot validation. `dropsFrom` creates a generated wrapper;
it does not change the core block's loot-table ID.

These controls live entirely in the generated pack. Complex loot, custom models,
and translations can be supplied in `scripts/mmdlibdata`. A file at
`data/mmdlib/loot_table/blocks/<block_id_path>.json` overrides that block's generated
table, including an empty table from noDrops. Name overrides go under
`assets/mmdlib/lang/en_us.json`; other locales use their normal filenames. The
folder pack remains above the generated pack, so author-supplied resources win.
Material texture generation and directional templates are unchanged.

## Typed references and module copies

References are typed IDs, not registered objects. The types are
`mods.mmdlib.ItemReference`, `BlockReference`, `BlockTagReference`,
`ItemModuleReference`, and `BlockModuleReference`. Each takes a string ID and
exposes read-only `id`. They do not query a registry at construction and have no
method for obtaining a live game object. Tag IDs omit `#`.

Existing string constructors/properties remain supported. These entry points also
accept the corresponding reference:

| Consumer | Typed entry point |
| --- | --- |
| ItemBuilder / BlockBuilder | second constructor argument: ItemModuleReference / BlockModuleReference |
| ItemModule / BlockModule | second constructor argument: matching module reference |
| ItemBuilder / BlockBuilder | `reference` getter returns ItemReference / BlockReference |
| ItemModule / BlockModule | `reference` getter returns matching module reference |
| MaterialBuilder | `repairWith(ItemReference)`, `baseBlockFrom(BlockReference)`, `incorrectBlocksTag(BlockTagReference)`, `addHarvestTag(BlockTagReference)` |
| MaterialBuilder | `addItemModule(ItemModuleReference)`, `addBlockModule(BlockModuleReference)` |
| ItemBuilder / ItemModule | `remainder(ItemReference)` |
| BlockBuilder | `baseBlockFrom(BlockReference)` |
| BlockBuilder / BlockModule | `addTag(BlockTagReference)` |
| ToolSettings | `mineableTag(BlockTagReference)`, `fastOnTag(BlockTagReference)` |

Each method unwraps the ID into the existing string-based consumer; it does not
change resolution timing. Wrong reference kinds have no matching overload.
Malformed IDs fail at reference construction. Modules must exist in the current
catalog when selected; constructing a module reference alone does not register or
validate a module. Item/block references may be created before their targets exist,
but actual dependencies still obey the existing runtime registration order and
missing-entry checks. No general forward-resolution guarantee is added.

Both ItemModule and BlockModule provide `copy(newName)`. The source need not be
built. This snapshots the current factory, template, factory data, tags, companion
metadata, and block material-default setting. Later edits apply only to the chosen
builder. New identity and resource ancestry are preserved separately; aliases are
not inherited. Copying to the source's own ID fails. Duplicate destination modules
still fail under the existing build validation.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemModule;
import mods.mmdlib.ItemModuleReference;
import mods.mmdlib.ItemBuilder;

var base = new ItemModule("small_part", new ItemModuleReference("mmdlib:ingot"));
base.stackSize = 16;
var large = base.copy("large_part");
large.stackSize = 4;
base.build();
large.build();
new ItemBuilder("small_widget", base.reference).build();
new ItemBuilder("large_widget", large.reference).build();
```

`copy` gives locally attached onXxx handlers new callback IDs and separate handler
maps. Replacing a source handler or removing/changing bindings on one copy does
not change the other's binding. The script function object itself is retained;
mutable variables captured by that function are still shared. Explicit callback
IDs supplied with addEvent remain shared references. Constructing a new module
from an already registered module copies those callback IDs; use `copy` on the
source builder when an independent snapshot of its locally owned handlers is
needed. Class-only block-hook restrictions carry over to copies.

This API copies supported MMDLib module configuration. It does not clone arbitrary
registered vanilla/modded objects, provide a Java subclass, or copy standalone
builder runtime overrides. Modules built earlier in the same script run supply
their item tags to subsequent module and item builders.

## Generic tool configuration

`mods.mmdlib.ToolSettings` edits existing `mmdlib:tool` factory settings.
`configureTool(settings)` is available on ItemBuilder and ItemModule and rejects a
currently selected factory other than `mmdlib:tool`. Configure the factory before
calling it. Normal planning still validates the resulting factory data at build.

```zenscript
#loader mmdlib
import mods.mmdlib.ItemModule;
import mods.mmdlib.ToolSettings;
import mods.mmdlib.MaterialBuilder;

var module = new ItemModule("custom_hammer", "mmdlib:crackhammer");
var tool = new ToolSettings();
tool.mineable = "minecraft:mineable/pickaxe";
tool.fastOn = "minecraft:mineable/pickaxe";
tool.attackDamage = 4;
tool.attackSpeed = -2.5;
tool.abilities("pickaxe");
tool.durability(0.5, 1, "");
tool.speed(0.5, 1, "");
module.configureTool(tool);
module.build();

var material = new MaterialBuilder("custom_metal");
material.removeItems("all").addItems("custom_hammer");
material.removeBlocks("all");
material.hasFluid = false;
material.repairItem = "minecraft:diamond";
material.incorrectBlocks = "minecraft:incorrect_for_wooden_tool";
material.toolDurability(200).toolEfficiency(8).attackDamage(3).enchantability(17);
material.build();
```

The helper has write-only `mineable`, `fastOn`, `attackDamage`, and `attackSpeed`
properties. Tag values are IDs without `#`. `abilities(names...)` replaces the
ability list (no arguments clears it); names use the existing runtime decoder's
vanilla sets or NeoForge ability names. `durability(factor, minimum, stat)` and
`speed(factor, minimum, stat)` replace their respective scaling records. An empty
stat means no material-special override. A named special stat overrides the scaled
value when present. Factors/minima are nonnegative and finite; durability minimum
is at least 1.

Only explicitly supplied keys replace module factory data; unrelated keys survive.
Scaling records and ability lists replace whole records/lists. Helper values are
snapshotted when applied; editing the helper later does not change a built item.
A subsequent `factoryData = ...` replaces the entire map as before. The existing
runtime codec checks the merged tool data, including the required mineable tag.
This helper does not configure the separate vanilla pickaxe/sword factories.

**Existing runtime limitation:** the generic tool computes scaled durability, but
its vanilla `TieredItem` superclass then replaces it with the material tier's uses.
Consequently `durability(...)` currently stores/validates the factory configuration
but does not change the final item durability. Use material `toolDurability(...)`
for effective durability. Speed scaling does apply. Fixing the constructor behavior
requires a core change and is deferred by this integration-only plan.

## Redstone

A block built by `mmdlib:block` (the default module) can react to redstone, emit it,
and run script functions. These properties write the block's
`factory_data.redstone` (see [runtime behaviors](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/runtime-behaviors.md#redstone)):

| Property | Type | Meaning |
| --- | --- | --- |
| `redstoneInput` | bool | read the power reaching the block; set by `onRedstoneChanged` |
| `redstoneOutput` | bool | emit a power that handlers set with `context.output` |
| `strongPower` | bool | also power through the touching block, like a lever |
| `directional` | bool | face the way the placer looked; sides can then be `front`, `back`, `left`, `right` |
| `redstoneDelay` | int | ticks before `onRedstoneChanged` runs; 1 by default, 0 for at once |
| `comparator` | string | what a comparator reads: `"input"`, `"output"`, or `""` |

`addOutputFaces`/`removeOutputFaces` choose the sides the output leaves from, and
`addInputFaces`/`removeInputFaces` the sides the block reads. Both default to every
side, and `remove...("all")` clears them. A block that reads only some sides runs its
handler when any of them changes.

On a directional block, compass names mean different things in the two places:

* In `addInputFaces` and `addOutputFaces`, they are part of the block's definition,
  so they name the block's own sides as if it faced north. The placed block turns
  them with itself.
* In `ctx.input(side)`, the handler is running in the world, so they are world
  directions.

`front`, `back`, `left` and `right` mean the same in both places; use them on
directional blocks.

Two handlers take script functions:

* `onRedstoneChanged((ctx as RedstoneContext) => {...})` runs on the server when the
  power reaching the block changes, after `redstoneDelay` ticks.
* `onRightClick((ctx as ClickContext) => {...})` runs when a player right-clicks the
  block, on both sides. The click is used up, so the held item does nothing.

Both contexts have:

* `input(side)`: the power reaching one side;
* `output`: the power emitted, read and set, clamped to 0-15 and ignored on the client;
* `facing`, `x`, `y`, `z`, and `client`.

`RedstoneContext` adds `power` (the strongest read input), `previous`, and
`powered`. `ClickContext` adds `player`, `sneaking`, and `face`. A handler that
throws is logged, and the game carries on.

An analog lever: each click raises its output by one, wrapping after 15, and a
sneaking click lowers it.

```zenscript
#loader mmdlib
import mods.mmdlib.BlockBuilder;
import mods.mmdlib.ClickContext;
import mods.mmdlib.RedstoneContext;

var lever = new BlockBuilder("analog_lever");
lever.redstoneOutput = true;
lever.strongPower = true;
lever.comparator = "output";
lever.onRightClick((ctx as ClickContext) => {
    if (ctx.sneaking) {
        ctx.output = ctx.output - 1;
    } else {
        ctx.output = (ctx.output + 1) % 16;
    }
});
lever.build();
```

A NAND gate that reads its left and right sides and powers only its front:

```zenscript
var gate = new BlockBuilder("nand_gate");
gate.directional = true;
gate.redstoneOutput = true;
gate.removeOutputFaces("all").addOutputFaces("front");
gate.addInputFaces("left", "right");
gate.onRedstoneChanged((ctx as RedstoneContext) => {
    ctx.output = (ctx.input("left") > 0 && ctx.input("right") > 0) ? 0 : 15;
});
gate.build();
```

A directional block gets a front and a top texture as well as its sides:
`block/nand_gate.png`, `block/nand_gate_front.png`, and `block/nand_gate_top.png`.
The model turns with the block, so an arrow drawn on the top points the way it
faces. Handlers on a block module apply to every block built from it, material parts
included.

## Hooks

Script functions can react to what players do with blocks and items, much as a Java
subclass would. Each `onXxx` method binds a function to one of MMDLib's
[hook contracts](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/method-events.md#hook-contracts). Java code and JSON extension files
can bind the same contracts. Calling a method again replaces the function. A function
that throws is logged, and the game carries on.

| Builder | Method | Context | Runs |
|---|---|---|---|
| item | `onRightClick` | `ItemClickContext`: `player`, `stack`, `target` (`air`, `block`, `entity`), `entity`, `x`/`y`/`z`, `face` | both sides |
| item | `onUseStart`, `onUseTick`, `onUseStop`, `onUseFinish` | `ItemUseContext`: `entity`, `stack`, `phase`, `duration`, `result`, `cancel()` | both sides |
| item | `onHit` | `HitContext`: `attacker`, `target`, `stack`, `damage` | server, after a melee hit |
| item | `onBreakBlock` | `BreakContext`: `player`, `tool`, `block`, `x`/`y`/`z`, `face`, `cancel()`, `mine(x, y, z)` | server, before the block goes |
| block | `onRightClick`, `onRedstoneChanged` | see [Redstone](#redstone) | |
| block | `onBroken` | `BreakContext` | server, before the block goes |
| block | `onPlaced`, `onSteppedOn`, `onRandomTick` | `BlockEventContext`: the block context plus `entity` | placed: server; stepped on: both sides; random tick: server |

Entities, players and stacks are the real game objects as CraftTweaker exposes them,
so their CraftTweaker methods work: `ctx.target.setRemainingFireTicks(100)`,
`ctx.player.isShiftKeyDown()`, `ctx.stack.withAmount(2)`.

Handlers that run on both sides should check `ctx.client` before changing the world.
`duration` can only be set in `onUseStart`, `result` only in `onUseFinish`, and
`cancel()` only works while use starts or ticks.

`onSteppedOn` and `onRandomTick` need a block built by `mmdlib:block`, because only
that block's class fires them; NeoForge has no event for either. Using them on stairs
or a door fails at `build()` and says so. `onRandomTick` turns on `randomTicks`. Every
other hook works on any block or item.

### Using an item over time

The use handlers need an item that is used over time. Food and bows already are. A
plain item becomes one with `useDuration` (ticks) and `useAnimation` (`none`, `eat`,
`drink`, `block`, `bow`, `spear`, `crossbow`, `spyglass`, `toot_horn`, `brush`):

```zenscript
#loader mmdlib
import mods.mmdlib.ItemBuilder;
import mods.mmdlib.ItemUseContext;

var charm = new ItemBuilder("ember_charm");
charm.useDuration = 30;
charm.useAnimation = "bow";
charm.onUseFinish((ctx as ItemUseContext) => {
    if (!ctx.client) ctx.entity.setRemainingFireTicks(0);
});
charm.build();
```

### Weapon effects

```zenscript
import mods.mmdlib.HitContext;

var blade = new ItemBuilder("ember_blade", "mmdlib:sword");
blade.onHit((ctx as HitContext) => {
    ctx.target.setRemainingFireTicks(100);
});
blade.build();
```

### A 3×3 hammer

`mine(x, y, z)` breaks a block as the player would, with drops, experience, tool wear
and protection mods' checks. It skips air, unbreakable blocks, blocks the tool can't
harvest, and the block already being broken, and its breaks don't run the hammer's
handler again. `face` tells which plane to clear:

```zenscript
import mods.mmdlib.BreakContext;

var hammer = new ItemBuilder("hammer", "mmdlib:pickaxe");
hammer.onBreakBlock((ctx as BreakContext) => {
    if (ctx.player.isShiftKeyDown()) return;
    for a in -1 .. 2 {
        for b in -1 .. 2 {
            if (ctx.face == "up" || ctx.face == "down") {
                ctx.mine(ctx.x + a, ctx.y, ctx.z + b);
            } else if (ctx.face == "north" || ctx.face == "south") {
                ctx.mine(ctx.x + a, ctx.y + b, ctx.z);
            } else {
                ctx.mine(ctx.x, ctx.y + a, ctx.z + b);
            }
        }
    }
});
hammer.build();
```

Sneaking mines a single block. The game tests run this hammer
(`src/runtimeTest/scripts/mmdlib_hooks.zs`).

## Screen handlers

Screens, including XML machines' screens, are defined in XML; scripts can supply
what their click and hover handlers do. An element names a handler ID in
`on-click`, `on-right-click`, `on-shift-click`, `on-shift-right-click` or `on-hover`
(see [GUI screens](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/gui-screens.md)), and a script registers a function under that
ID:

```zenscript
#loader mmdlib
import mods.mmdlib.ScreenHandlers;

ScreenHandlers.onClick("eject", (click) => {
    if (click.shift) {
        click.player.addTag("ejected_all");
    }
});

ScreenHandlers.onHover("eject_hint", (hover) => {
    println("Hovering " + hover.element);
});
```

```xml
<button id="eject" text="screen.example.eject" on-click="mmdlib:eject" on-hover="mmdlib:eject_hint"/>
```

`ScreenHandlers.onClick(name, function)` and `onHover(name, function)` register the
handler `mmdlib:<name>` and return that ID. Each ID can be registered once, by a
script or by code. `ScreenHandlers.exists(id)` tells whether a handler ID is
registered.

Screens load after the scripts run, and every handler ID they name is checked then:
an `on-click` naming an ID no script or mod registered, or a hover handler used for
a click, fails loading with the XML file and line.

A click handler runs on the server and gets a `ScreenClickContext`:

| Property | Type | Meaning |
| --- | --- | --- |
| `player` | Player | who clicked |
| `blockEntity`, `level`, `pos` | BlockEntity, Level, BlockPos | the screen's block entity, such as an XML machine |
| `screen` | string | the screen's ID |
| `element` | string | the clicked element's `id`; `""` if it has none |
| `button` | int | 0 left, 1 right |
| `shift`, `control`, `alt` | bool | the keys held |
| `option` | int | the option chosen, such as a radio button's index; otherwise 0 |

A hover handler runs on the client, when the mouse enters or leaves the element,
and gets a `ScreenHoverContext` with `blockEntity`, `level`, `pos`, `screen`,
`element` and `entered` (true on entering). Use it for display; it cannot change
the world. A handler function that throws is logged, and the game carries on.

## Machine handlers

XML machines stay XML; scripts can supply what happens when their processor starts
or finishes a cycle. The machine's `<processor>` names handler IDs in `on-start`
and `on-finish` (see [XML machines](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/xml-machines.md)), and a script registers a
function under each. Only recipe processors have cycles: a machine whose
`<processor>` names a Java `class` cannot take these attributes. Scripts cannot
supply a stored custom processor yet.

```zenscript
#loader mmdlib
import mods.mmdlib.MachineHandlers;

MachineHandlers.onStart("crusher_started", (cycle) => {
    println(cycle.machineId + " started " + cycle.recipe);
});

MachineHandlers.onFinish("crusher_done", (cycle) => {
    cycle.level.setBlockAndUpdate(cycle.pos.above(), cycle.level.getBlockState(cycle.pos.below()));
});
```

```xml
<processor id="crusher" recipe-type="example:crushing"
           on-start="mmdlib:crusher_started" on-finish="mmdlib:crusher_done"/>
```

`MachineHandlers.onStart(name, function)` and `onFinish(name, function)` register
`mmdlib:<name>` and return that ID; `MachineHandlers.exists(id)` tells whether a
handler is registered. A start handler runs when a new cycle starts, not when a
paused one resumes; a finish handler runs once the outputs are placed. Both run on
the server and get a `MachineCycleContext`:

| Property | Type | Meaning |
| --- | --- | --- |
| `machine` | BlockEntity | the machine |
| `level`, `pos` | Level, BlockPos | where it is |
| `machineId` | string | the machine definition's ID |
| `recipe` | string | the cycle's recipe ID |
| `time` | int | the cycle's length, in ticks |

Machines load after the scripts run, and their handler IDs are checked then: a
processor naming an ID nobody registered, or a start handler as its `on-finish`,
fails loading. A handler function that throws is logged, and the machine carries
on.

## Machine recipes

An XML machine's recipe type is declared in its XML (see
[XML machines](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/xml-machines.md)); its recipes can come from datapacks, generators,
and ordinary CraftTweaker recipe scripts (the default `crafttweaker` loader, not
`#loader mmdlib`). The type works with CraftTweaker's own recipe manager, like any
recipe type, and MMDLib adds a typed builder:

```zenscript
import mods.mmdlib.MachineRecipeBuilder;

new MachineRecipeBuilder("example:crushing")
    .inputItems("input", <item:minecraft:cobblestone>, 2)
    .inputEnergy("energy", 2000)
    .outputItem("output", <item:minecraft:gravel> * 3)
    .outputItem("output", <item:minecraft:flint>, 0.1)
    .time(100)
    .build("cobble_to_gravel");

<recipetype:example:crushing>.removeByName("example:crushing/gravel");

<recipetype:example:crushing>.addJsonRecipe("dirt_to_diamond", {
    inputs: { input: [{ items: { item: "minecraft:dirt" } }] },
    outputs: { output: [{ item: { id: "minecraft:diamond", count: 1 } }] },
    time: 100
});
```

`new MachineRecipeBuilder(recipeType)` starts a recipe of a type some machine XML
declares; an unknown type is an error. Group names are the logical input and output
groups the machine declares, as in recipe JSON:

| Method | Adds |
| --- | --- |
| `inputItems(group, ingredient, count = 1, consumed = true)` | takes `count` items matching `ingredient`; with `consumed` false, only requires and reserves them |
| `inputFluid(group, fluid, consumed = true)` | takes the fluid stack's amount, such as `<fluid:minecraft:water> * 500`; `consumed` as for items |
| `inputFluids(group, fluids, consumed = true)` | takes one of several fluids or a fluid tag, such as `<tag:fluids:minecraft:water> * 250`; every choice has the same amount |
| `inputEnergy(group, energy)` | draws `energy` over the cycle |
| `outputItem(group, stack, chance = 1)` | places `stack`, with `chance` from 0 to 1 |
| `outputFluid(group, fluid, chance = 1)` | places the fluid stack |
| `time(ticks)` | the cycle's length; required |

`build(name)` adds the recipe like any CraftTweaker recipe; it needs at least one
input and a time. It first checks the groups against every machine using the type,
as a recipe reload does: an unknown group, a group holding another kind of
resource, or a ghost group asked for more samples than it has slots is an error, and
the recipe is not added. Recipes added with `addJsonRecipe` skip this check.

Removing recipes, and adding them as JSON in the recipe file format, use the type's
`<recipetype:...>` manager: `removeByName`, `addJsonRecipe` and the rest of
CraftTweaker's recipe manager methods. A machine's input slots only accept items
some recipe uses, so removing every recipe for an item also stops the machine
taking it.

MMDLib registers a CraftTweaker recipe handler for machine recipes, so
CraftTweaker's own tools work on them too. `/ct recipes` and the recipe dumps print
each one as `MachineRecipeBuilder` calls. Ingredient replacement takes them apart
and rebuilds them: item inputs are `<recipecomponent:crafttweaker:input/ingredients>`,
fluid inputs `input/fluid_ingredients`, item outputs `output/chanced_items`, fluid
outputs `output/fluids` and the time `processing/time`, as for other recipes.
Energy is `<recipecomponent:mmdlib:machine/energy>`. Each part keeps its group,
count and consumption:

```zenscript
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.replacement.Replacer;
import crafttweaker.api.recipe.replacement.type.ManagerFilteringRule;

Replacer.create()
    .filter(ManagerFilteringRule.of(<recipetype:example:crushing>))
    .replace<IIngredient>(<recipecomponent:crafttweaker:input/ingredients>,
        <item:minecraft:cobblestone>, <tag:items:c:cobblestones>)
    .execute();
```

A replaced recipe is renamed, as CraftTweaker renames every recipe it replaces.

## Recipe generators

A machine's recipe type can generate its recipes on every data reload (see
[XML machines](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/xml-machines.md#recipe-generators-and-authored-recipes)). A
`#loader mmdlib` script can be that generator: it registers a function, and the
machine XML names it through `ScriptRecipeGenerator`:

```zenscript
#loader mmdlib
import mods.mmdlib.RecipeGenerators;

RecipeGenerators.register("ore_dusts", (gen) => {
    for tag in gen.tagIds("c:ores/") {
        val metal = tag[7 .. tag.length];
        if gen.hasTag("c:dusts/" + metal) {
            gen.recipe("ore_to_dust/" + metal)
                .inputTag("input", tag)
                .outputItem("output", gen.tagItems("c:dusts/" + metal)[0] * 2)
                .time(gen.intProperty("time", 100))
                .add();
        }
    }
});
```

```xml
<recipe-type id="example:crushing" declare="true" name="Crushing">
  <generator class="zone.moddev.mc.lib.compat.CraftTweaker.ScriptRecipeGenerator"
             script="mmdlib:ore_dusts" time="120"/>
</recipe-type>
```

The generator's ID is `mmdlib:<name>`. Its function runs on every reload, with:

| Member | Gives |
| --- | --- |
| `recipeType` | the type's ID |
| `property(name, fallback = "")`, `intProperty(name, fallback)`, `doubleProperty(name, fallback)` | the generator element's other attributes, such as `time` above |
| `tagIds(prefix)` | the IDs of the reload's item tags starting with `prefix`, sorted |
| `hasTag(id)`, `tagItems(id)` | whether an item tag has items, and its items |
| `recipe(name)` | a recipe `<type namespace>:<name>` to build and `add()` |

A generated recipe has `inputItems`, `inputTag(group, tag, count = 1, consumed = true)`,
`inputFluid`, `inputEnergy`, `outputItem`, `outputFluid` and `time`, as
`MachineRecipeBuilder`, and `add()`. Read tags through the generation: tag brackets
are not usable during a reload, which is when generators run. As for any generator,
a recipe file with the same ID replaces a generated recipe, groups are checked
against the machines, and an error fails the reload. Naming
`ScriptRecipeGenerator` without CraftTweaker installed, or a generator no script
registered, fails with a message saying so.

## Screen values

Scripts can also supply the values screen elements show. An element reads a value
provider with `value="@mmdlib:<name>"` (or `max`), and a script registers a function
under that name; the screen, including an XML machine's, stays XML:

```zenscript
#loader mmdlib
import mods.mmdlib.ScreenValues;

ScreenValues.whole("height", (machine) => machine.blockPos.y);
ScreenValues.decimal("efficiency", (machine) => 0.85);
ScreenValues.flag("placed", (machine) => machine.hasLevel);
ScreenValues.text("where", (machine) => "At " + machine.blockPos.x);
```

```xml
<label text="screen.example.height" value="@mmdlib:height"/>
<checkbox text="screen.example.placed" value="@mmdlib:placed"/>
```

| Method | Value | Shown by |
| --- | --- | --- |
| `whole(name, function)` | a whole number (`long`) | gauges, meters, progress bars, labels |
| `decimal(name, function)` | a decimal number | meters, labels |
| `flag(name, function)` | `true`/`false` | checkboxes, toggles |
| `text(name, function)` | a string, shown as written | labels |

Each function gets the screen's block entity and runs on the server every tick the
screen is open; its result is sent to the player like any other value. Each returns
the provider's ID, `mmdlib:<name>`. `ScreenValues.exists(id)` tells whether a
provider is registered.

Screens are checked after the scripts run: an element naming a provider nobody
registered, or one whose kind it cannot show (text on a gauge, say), fails loading
with the XML file and line. A function that throws is logged once, and the element
shows no value.

## Sounds

Scripts can declare sound events and block sound sets, and change the ones that
`mmdlib/sound/` and `mmdlib/sound_type/` JSON files declare (see
[sound events](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/definition-loading.md#sound-events) and
[block sound sets](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/definition-loading.md#block-sound-sets) for those files).

```zenscript
#loader mmdlib
import mods.mmdlib.SoundBuilder;
import mods.mmdlib.SoundTypeBuilder;

var hum = new SoundBuilder("machine/hum");
hum.range = 24;
hum.build();

var steel = new SoundTypeBuilder("steel_plate");
steel.base = "metal";
steel.placeSound = "mmdlib:block/steel_place";
steel.stepSound = "mmdlib:block/steel_step";
steel.pitch = 0.9;
steel.build();

var chime = SoundBuilder.edit("example:machine/chime");
chime.range = 0;
chime.build();
```

A sound event only gets an ID: what it sounds like comes from `sounds.json`, as for
any sound event. A sound set chooses the sounds a block plays; a block uses it by
naming its ID as its `sound`, and a material as its `blockSound`.

As with [creative tabs](#creative-tabs), `new SoundBuilder(name)` and
`new SoundTypeBuilder(name)` start an `mmdlib:` ID, and reject a name a file
already declares. `edit(id)` starts from a file's definition, in any namespace,
and building it replaces the file's version. `exists(id)` and `declared()` look up
the file definitions.

`SoundBuilder` has one property:

| Property | Type | Default |
| --- | --- | --- |
| `name` | string, read-only | the sound event's ID |
| `range` | float, blocks | `0`: Minecraft's default, which grows with volume |

`SoundTypeBuilder`:

| Property | Type | Default |
| --- | --- | --- |
| `name` | string, read-only | the sound set's ID |
| `base` | vanilla sound set name | `stone` |
| `breakSound`, `stepSound`, `placeSound`, `hitSound`, `fallSound` | sound event ID | `""`: the base set's |
| `volume`, `pitch` | float | `0`: the base set's |

`base` must be one of vanilla's sets, such as `metal` or `wood`, not another
declared set. Negative `range`, `volume` and `pitch` are errors. Building the same
ID twice is an error. A block or material naming an unknown sound set fails at
startup, naming it; a set naming an unregistered sound event fails when the first
block using it is created.

## Creative tabs

Scripts can make creative tabs, and change the tabs that `mmdlib/creative_tab/`
JSON files declare (see [creative tabs](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/creative-tabs.md) for the file format).

```zenscript
#loader mmdlib
import mods.mmdlib.CreativeTabBuilder;

var tools = new CreativeTabBuilder("tools");
tools.titleFallback = "Tools";
tools.icon = "mmdlib:copper_hammer";
tools.addMaterials("mmdlib:copper").addItems("minecraft:stick");
tools.addTags("c:gears");
tools.after = ["minecraft:tools_and_utilities"];
tools.searchBar = true;
tools.build();

var workshop = CreativeTabBuilder.edit("example:workshop");
workshop.addItems("minecraft:apple").removeTags("c:gears");
workshop.build();
```

`new CreativeTabBuilder("tools")` starts the tab `mmdlib:tools`; other namespaces
are rejected, as for materials. A name a JSON file already declares is rejected
too: change that tab with `edit` instead.

`CreativeTabBuilder.edit(id)` starts from the tab a JSON file declares, in any
namespace, with all its settings and contents. Building it replaces the file's
version, so the changed tab is the one registered. A tab in another mod's namespace
is registered by that mod; the change applies when it registers its tabs from
`MMDLib.creativeTabs()`, as [creative tabs](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/creative-tabs.md) describes.
`CreativeTabBuilder.exists(id)` tells whether a file declares a tab, and
`CreativeTabBuilder.declared()` lists every file tab's ID.

| Property | Type | Default |
| --- | --- | --- |
| `name` | string, read-only | the tab's ID |
| `title` | translation key | `""`: `itemGroup.<namespace>.<path>` |
| `titleFallback` | string | `""`: none |
| `icon` | item ID | `""`: the first item or material entry |
| `searchBar` | bool | `false` |
| `before`, `after` | tab IDs, string[] | empty |
| `contents` | string[], read-only | empty |

`contents` lists the entries in order: an item as `"minecraft:stick"`, a tag as
`"#c:gears"`, a material as `"material=mmdlib:copper"`. Change them with these
methods, which return the builder so they can be chained:

* `addItems(ids...)`, `addTags(tags...)`, `addMaterials(ids...)` add entries at the
  end. A tag may be written with or without its `#`.
* `removeItems(ids...)`, `removeTags(tags...)`, `removeMaterials(ids...)` remove
  every entry of that kind with those IDs; removing an item does not affect a tag
  or material that also includes it.
* `clearContents()` removes every entry.

`build()` checks the tab: one whose contents are all tags needs an `icon`. Building
the same tab twice is an error. Items, materials and placement are checked once
registries are complete, as for tab files.

## Generated resources

Script materials need no resource pack, and script blocks and items need only their
textures.
MMDLib adds two packs whenever CraftTweaker is installed. Both are always enabled, for
client resources and for world data:

1. `mmdlib/script_materials` is generated at startup from the materials, blocks, and
   items the scripts built. For materials it contains:
   * blockstates and item and block models for every selected part;
   * textures: MMDLib's blank templates multiplied by the material color;
   * English names, such as "Copper Ingot" and "Block of Copper";
   * block loot tables;
   * block tags: the module's tags, `minecraft:mineable/pickaxe`, the harvest tags,
     and a `needs_*_tool` tag from hardness (5 stone, 8 iron, 10 diamond);
   * item tags a script item module declares (each part's standard tool, armor,
     arrow and `c:` tags come from MMDLib's material tag pack, as for every
     material; see [material tags](https://github.com/MinecraftModDevelopmentMods/MMDLib/blob/master-2.0-1.21.1-neo/docs/definition-loading.md#material-item-tags));
   * the fluid's `c:molten_<name>` tag.
2. `mmdlib/mmdlibdata` is the `scripts/mmdlibdata` folder, if it exists. It is a
   normal pack root (`assets/`, `data/`, an optional `pack.mcmeta`) placed above the
   generated pack.

Recipes are not generated; add them from scripts. Parts from other mods'
code-registered types get no generated assets; their mod supplies them.

### Replacing artwork

* **One material's texture**: put finished art at the texture's own path, such as
  `scripts/mmdlibdata/assets/mmdlib/textures/item/copper_ingot.png`. It is used as
  drawn, with no tint. Models, blockstates, loot tables, tags, and names can be
  replaced the same way. Lang files merge with the generated names, so a lang file
  only needs the keys it changes.
* **A blank for every script material**: put a file at the template's path under
  `scripts/mmdlibdata/templates/`, mirroring MMDLib's `mmdlib_templates/`. For example,
  `templates/textures/item/__material___ingot.png` replaces the ingot blank.
  `__material__` stands for the material's name.
  * A texture template is a grayscale image whose white is the material color.
  * An optional `<name>.untinted.png` beside it is drawn over the result unchanged;
    MMDLib uses this for handles, strings, and feathers.
  * Model and blockstate templates are JSON in which `__material__` is replaced.

The generated textures are colored already, so script materials set the runtime
`tinted` flag to false and the client does not tint them a second time. A JSON
material can set `"runtime": {"tinted": false}` for the same reason.

MMDLib's templates come from Base Metals artwork and vanilla model structure. See
`scripts/generate_material_templates.py`; `provenance.json` beside the templates
records each source sprite.

Clients need the same scripts and `scripts/mmdlibdata` folder as the server, since
items, blocks, and their resources are created at startup on both sides.

## Not covered yet

* Material-wide event bindings and parent materials still need the material file
  format. Material runtime properties listed above are exposed in scripts.
* Hooks without a contract yet: items ticking in an inventory, crafting and
  smelting, tossing and picking up, tooltips, burn time, entities inside a block,
  falling on a block. Each needs a contract like the others. The class-only ones
  (inventory tick, entity inside, fall) would work on MMDLib's own classes: every
  item, and the plain block.
* Food references, lore, general attribute modifiers, declared tool actions,
  delayed-use `on_complete`, and custom creative-stack declarations are retained in
  definitions but have no consumer in the standard runtime. Scripts do not expose
  setters for these fields. Native tool attributes and generic-tool abilities are
  separate supported paths.
* Use duration and animation are exposed and applied by the basic-item factory.
  Other item factories keep their native use behavior; these properties do not
  turn an arbitrary sword or tool into an item used over time.
* Rarity, feature flags, advanced block-property predicates and independent tool
  tiers have no matching exposed definition path. Screen click sounds and XML
  machine sounds are set in their XML, not from scripts.

