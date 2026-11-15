# XML machines with ZenCode

This walkthrough uses the repository's runtime-test fixtures verbatim. They are
included during export, so the snippets cannot silently diverge from those files.
The test names and two-tick recipes make verification quick; choose your own IDs,
timing and behavior for a pack. The cookbook provides additional builder, event,
resource, fluid, tool, sound and creative-tab examples.

## Files and loaders

Install CraftTweaker and MMDLib on both client and server. Put the startup scripts
in `scripts/` and the XML in `scripts/mmdlibdata/mmdlib/machine/test/`, using the
filenames below. Startup scripts begin with `#loader mmdlib`; recipe scripts use
the default CraftTweaker loader. Restart after changing definitions or registering
callbacks. An ordinary `/reload` reloads recipes and runs registered generators;
it does not rerun startup scripts.

Keep startup registration separate from callbacks: item/fluid/recipe brackets
cannot be evaluated while the `mmdlib` loader registers definitions. Resolve item
tags through the generator context during reload instead.

## 1. Declare storage, a recipe type and cycle callbacks

Save as `scripts/mmdlibdata/mmdlib/machine/test/script_machine.xml`.
The file path gives the machine block ID `mmdlib:test/script_machine`. The
recipe-type ID is independently declared in the XML. Here they happen to match.
`input` and `output` are logical resource groups; `items` is the physical store.
Recipes must use the logical names and compatible resource kinds.

```xml
<machine xmlns="https://moddev.zone/mmdlib/machine" version="1"
         extends="mmdlib:base_machine" name="Script Test Machine">
  <appearance preset="cube-front"
              front="minecraft:block/furnace_front"
              side="minecraft:block/iron_block"
              top="minecraft:block/smooth_stone"/>
  <storage>
    <items id="items">
      <slots id="input" count="1" role="input"/>
      <slots id="output" count="1" role="output"/>
    </items>
  </storage>
  <recipe-type id="mmdlib:test/script_machine" declare="true" name="Script Test"/>
  <!-- Its cycle handlers come from the test script mmdlib_machines.zs. -->
  <processor id="worker" recipe-type="mmdlib:test/script_machine"
             on-start="mmdlib:test/machine_start" on-finish="mmdlib:test/machine_finish"/>
</machine>
```

The inherited base supplies the standard machine screen and recovery behavior.
You do not need a Java block entity or a script-defined processor.

## 2. Register handlers before the XML is resolved

Save as `scripts/mmdlib_machines.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.MachineHandlers;

// Cycle handlers for the test machine mmdlib:test/script_machine, which names them
// in its <processor>. Each copies the block under the machine to a spot above it,
// but only for the expected machine and recipe, for the game test to check.
MachineHandlers.onStart("test/machine_start", (cycle) => {
    if (cycle.machineId == "mmdlib:test/script_machine" && cycle.recipe == "mmdlib:test/stick_to_apple" && cycle.time == 2) {
        cycle.level.setBlockAndUpdate(cycle.pos.above(1), cycle.level.getBlockState(cycle.pos.below()));
    }
});

MachineHandlers.onFinish("test/machine_finish", (cycle) => {
    if (cycle.machineId == "mmdlib:test/script_machine" && cycle.recipe == "mmdlib:test/stick_to_apple") {
        cycle.level.setBlockAndUpdate(cycle.pos.above(2), cycle.level.getBlockState(cycle.pos.below()));
    }
});
```

These callbacks deliberately copy the block below the machine to the first and
second positions above it. Leave those positions free when experimenting: this
example changes the world. The checks demonstrate filtering by machine definition,
recipe and cycle duration; they do not cancel processing. Start runs once for a
new cycle, not on resume. Finish runs after outputs have been placed. Exceptions
are logged and do not turn a callback into a transaction or roll back a cycle.

The callbacks reference `mmdlib:test/stick_to_apple`. To exercise both, also put
this recipe in `scripts/mmdlibdata/data/mmdlib/recipe/test/stick_to_apple.json`:

```json
{
  "type": "mmdlib:test/script_machine",
  "inputs": {
    "input": [{ "items": { "item": "minecraft:stick" } }]
  },
  "outputs": {
    "output": [{ "item": { "id": "minecraft:apple", "count": 1 } }]
  },
  "time": 2
}
```

## 3. Add, remove and replace recipes with ordinary CraftTweaker

Save as `scripts/machine_recipes.zs`, without `#loader mmdlib`.

```zenscript
// An ordinary recipe script: XML machines' recipe types work with CraftTweaker's
// generic recipe managers, like any recipe type.
<recipetype:mmdlib:test/script_machine>.addJsonRecipe("dirt_to_diamond", {
    inputs: { input: [{ items: { item: "minecraft:dirt" } }] },
    outputs: { output: [{ item: { id: "minecraft:diamond", count: 1 } }] },
    time: 2
});

// Removes the datapack recipe test/glass_to_sand.
<recipetype:mmdlib:test/script_machine>.removeByName("mmdlib:test/glass_to_sand");

// The same, typed: two cobblestone make three gravel.
import mods.mmdlib.MachineRecipeBuilder;

new MachineRecipeBuilder("mmdlib:test/script_machine")
    .inputItems("input", <item:minecraft:cobblestone>, 2)
    .outputItem("output", <item:minecraft:gravel> * 3, 1.0)
    .time(2)
    .build("cobble_to_gravel");

// A reusable input: the bone stays, and each cycle makes bone meal.
new MachineRecipeBuilder("mmdlib:test/script_machine")
    .inputItems("input", <item:minecraft:bone>, 1, false)
    .outputItem("output", <item:minecraft:bone_meal>, 1.0)
    .time(2)
    .build("bone_to_bone_meal");

// CraftTweaker's ingredient replacement takes machine recipes apart and
// rebuilds them: the datapack recipe test/flint_to_gunpowder now takes clay.
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.replacement.Replacer;
import crafttweaker.api.recipe.replacement.type.NameFilteringRule;

Replacer.create()
    .filter(NameFilteringRule.anyOf("mmdlib:test/flint_to_gunpowder"))
    .replace<IIngredient>(<recipecomponent:crafttweaker:input/ingredients>,
        <item:minecraft:flint>, <item:minecraft:clay_ball>)
    .execute();
```

To supply the recipes targeted by removal and replacement, save these under
`scripts/mmdlibdata/data/mmdlib/recipe/test/` as `glass_to_sand.json` and
`flint_to_gunpowder.json`, respectively. The first is removed by the script; the
second is rebuilt to consume clay instead of flint.

```json
{
  "type": "mmdlib:test/script_machine",
  "inputs": {
    "input": [{ "items": { "item": "minecraft:glass" } }]
  },
  "outputs": {
    "output": [{ "item": { "id": "minecraft:sand", "count": 1 } }]
  },
  "time": 2
}
```

```json
{
  "type": "mmdlib:test/script_machine",
  "inputs": {
    "input": [{ "items": { "item": "minecraft:flint" } }]
  },
  "outputs": {
    "output": [{ "item": { "id": "minecraft:gunpowder", "count": 1 } }]
  },
  "time": 2
}
```

`build(name)` adds an ordinary CraftTweaker recipe; its resulting namespace is
CraftTweaker's recipe namespace, not automatically the machine's namespace.
The bone recipe demonstrates `consumed = false`: the bone is required and reserved
but retained. Empty the output before testing another recipe. These recipes have
no energy input because the machine declares no energy group. Add an energy store
and logical group in XML before using `inputEnergy`.

The builder checks group names and resource kinds against every machine sharing
the type. Chance outputs use probabilities from 0 to 1; they are not guaranteed
extra output. A cycle cannot consume inputs while its outputs cannot be placed.

## 4. Generate a family of recipes on every data reload

Save the next XML as
`scripts/mmdlibdata/mmdlib/machine/test/generated_machine.xml` and the script as
`scripts/mmdlib_generators.zs`. This is a second machine with its own recipe type;
it can be installed alongside the first one.

```xml
<machine xmlns="https://moddev.zone/mmdlib/machine" version="1"
         extends="mmdlib:base_machine" name="Generated Test Machine">
  <appearance preset="cube-front"
              front="minecraft:block/furnace_front"
              side="minecraft:block/iron_block"
              top="minecraft:block/smooth_stone"/>
  <storage>
    <items id="items">
      <slots id="input" count="1" role="input"/>
      <slots id="output" count="1" role="output"/>
    </items>
  </storage>
  <!-- Its recipes come from the test script mmdlib_generators.zs. -->
  <recipe-type id="mmdlib:test/generated" declare="true" name="Generated Test">
    <generator class="zone.moddev.mc.lib.compat.CraftTweaker.ScriptRecipeGenerator"
               script="mmdlib:test/ingot_nuggets" nuggets="4" time="2"/>
  </recipe-type>
  <processor id="worker" recipe-type="mmdlib:test/generated"/>
</machine>
```

```zenscript
#loader mmdlib
// A recipe generator for the test machine test/generated_machine: for every
// c:ingots/<metal> with a c:nuggets/<metal> tag, an ingot makes nuggets. The
// machine XML sets the nugget count and time.
import mods.mmdlib.RecipeGenerators;

RecipeGenerators.register("test/ingot_nuggets", (gen) => {
    for tag in gen.tagIds("c:ingots/") {
        val metal = tag[9 .. tag.length];
        if gen.hasTag("c:nuggets/" + metal) {
            gen.recipe("ingot_nuggets/" + metal)
                .inputTag("input", tag)
                .outputItem("output",
                    gen.tagItems("c:nuggets/" + metal)[0] * gen.intProperty("nuggets", 9))
                .time(gen.intProperty("time", 100))
                .add();
        }
    }
});
```

The generator enumerates ingot tag IDs, checks the corresponding nugget tag,
selects its first item, and adds a recipe for each matching metal. It works with
modded metals without listing them individually. XML overrides the count and time
with `nuggets="4"` and `time="2"`; the script also supplies defaults. Every call to
`gen.recipe` creates a new builder. Do not capture a builder or a tag's contents
at startup and reuse it across reloads.

Generated recipe IDs use the recipe type's namespace. An authored recipe with the
same ID overrides the generated recipe. Missing CraftTweaker, an unregistered
generator ID, invalid groups or a generator exception fail loading/reload rather
than silently yielding a working generator.

## 5. Bind screen callbacks and synchronized values

These are separate startup scripts, saved as `scripts/mmdlib_screens.zs` and
`scripts/mmdlib_screen_values.zs`.

```zenscript
#loader mmdlib
import mods.mmdlib.ScreenHandlers;

// A click handler screen XML can name as on-click="mmdlib:test/script_click".
// It tags the player with what it saw, for the game test to check.
ScreenHandlers.onClick("test/script_click", (click) => {
    click.player.addTag("mmdlib_click_" + click.button + (click.shift ? "_shift" : ""));
    click.player.addTag("mmdlib_screen_" + click.screen);
});

// A hover handler, named as on-hover="mmdlib:test/script_hover".
ScreenHandlers.onHover("test/script_hover", (hover) => {
    if (hover.entered) {
        println("Hovering " + hover.element);
    }
});
```

```zenscript
#loader mmdlib
import mods.mmdlib.ScreenValues;

// Value providers screen XML reads as value="@mmdlib:test/...": each gets the
// screen's block entity.
ScreenValues.whole("test/x", (machine) => machine.blockPos.x);
ScreenValues.decimal("test/half", (machine) => 2.5);
ScreenValues.flag("test/placed", (machine) => machine.hasLevel);
ScreenValues.text("test/where", (machine) => "At " + machine.blockPos.x);
```

To expose them on the first machine, add this screen override inside its
`<machine>` element. This screen composition illustrates the bindings; unlike the
included source fixtures, this combined layout has not been exercised by the
runtime tests.

```xml
<screen xmlns="https://moddev.zone/mmdlib/screen" extends="mmdlib:base_machine">
  <fill name="body">
    <vbox padding="7" spacing="4">
      <inventory storage="input"><item-slot index="0"/></inventory>
      <inventory storage="output"><item-slot index="0"/></inventory>
      <label text="screen.mmdlib.example.where" text-fallback="{value}"
             value="@mmdlib:test/where"/>
      <button id="inspect" text="screen.mmdlib.example.inspect" text-fallback="Inspect"
              on-click="mmdlib:test/script_click" on-hover="mmdlib:test/script_hover"/>
    </vbox>
  </fill>
</screen>
```

Click handlers run on the server and receive the player, modifiers, option,
element ID and block entity. Hover handlers run on the client and are for display.
Value providers run on the server while the screen is open and synchronize their
results to its client. Keep providers cheap and free of side effects; do not store
shared per-machine state in a captured script variable. The supplied callbacks
receive vanilla block entities; they do not expose arbitrary XML processor fields
as additional ZenCode properties.

## Verification boundaries

The included scripts and XML are shared with the runtime-test harness. Exporting
these docs checks assembly and compilation of the Java integration; it does not
execute ZenCode, open a screen or prove gameplay. Run the repository's documented
CraftTweaker server/client verification separately when changing the examples or
integration. For a pack, verify startup logs, reload, processing, full outputs,
callback execution, and matching client/server definitions before shipping.
