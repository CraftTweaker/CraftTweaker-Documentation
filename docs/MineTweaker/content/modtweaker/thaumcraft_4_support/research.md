# Research
## Contents

* The Basics
* Removing Research
* Research Tabs
  * Removing Tabs
  * Creating Tabs
* Creating Research
  * Adding Pages to Research
* Connecting Research
* Modifying Research

### The Basics
Each research is identified by a unique string called its Key. The general naming scheme is for the Key to be in all caps. Exceptions to this are wand parts, which tend to come in the ROD_blah or CAP_blahblah format.

If you want to alter an existing research, you'll need to know its key. When adding a new Thaumcraft recipe, you'll need to supply a research Key as the first argument. The recipe will be uncraftable until the player completes the research that identifies by that key.

You can get a list of research keys in a category by using the in-game command /minetweaker research (category) to output all research keys in that category to the MineTweaker log. For example, /minetweaker research BASICS will output all research keys in the Basics tab.

### Removing Research
Research can be removed with the removeResearch() method. However, if the research was used as prerequisite for anything, the Thaumonomicon will cause the game to crash when opened to that research's tab. You can use orphanResearch() to cut all ties to a research to make it safe to remove, or use clearPrereqs() to clear the prerequisites off of specific researches.

Example:

```zenscript
//ResearchKey
mods.thaumcraft.Research.orphanResearch("ROD_greatwood");
mods.thaumcraft.Research.removeResearch("ROD_greatwood");
```
#### Research Tabs
Each research tab is also identified with its own unique string. These are important to know if you want to remove a tab or place a new research in one.

Known Tab Keys:

```
* BASICS
* THAUMATURGY
* ALCHEMY
* ARTIFICE
* GOLEMANCY
* FORBIDDEN (Apocrypha)
* TT_CATEGORY (Thaumic Tinkering)
* TX (Thaumic Esoterica)
* RAILCRAFT (Traheremagy)
* WITCHGADG (Witching Gadgets)
```
You can get a list of all research category keys in the game by typing /minetweaker research to output all the keys into the log.

#### Removing Tabs
Removing a research tab also removes all research in the tab, which can cause crashes if they're prerequisites for anything. Use orphanResearch() to cut all ties to researches in the tab, move all researches to a different tab, or stick to removing small tabs with nothing in them like Traheremagy.

Example:

```zenscript
//TabKey
mods.thaumcraft.Research.removeTab("RAILCRAFT");
```
Creating Tabs
Creating a research tab requires a sprite to supply for the tab icon. You'll need the domain and file path for the texture. You'll also need to create a localization for the tab name either through a resource pack or by using ModTweaker's localization changer. The localization key will always be "tc.research_category." followed by the tab key.

For example, if you wanted a tab with the zombie brain icon from Thaumcraft 4:

```zenscript
//TabKey, Domain, Path
mods.thaumcraft.Research.addTab("DEMENTIA", "thaumcraft", "textures/items/brain.png");
game.setLocalization("en_US", "tc.research_category.DEMENTIA", "Dementia");
```
Tabs can also be created with custom backgrounds if you supply a texture:

```zenscript
//TabKey, IconDomain, IconPath, BackgroundDomain, BackgroundPath
mods.thaumcraft.Research.addTab("AHPYRCOPA", "forbidden", "textures/items/spork.png", "forbidden", "textures/misc/runecircle.png");
game.setLocalization("en_US", "tc.research_category.AHPYRCOPA", "Not Apocrypha");
```
### Creating Research
Research is created with a unique Key, a research tab key, a list of aspects, coordinates, a complexity rating, and either a texture path or an ItemStack to give it an icon. Like with creating a research tab, creating a new research requires a new localization.

If a research is added through ModTweaker, its name is localized as "tc.research_name." followed by the research Key. Its tooltip is localized as "tc.research_text." followed by the Key.

Aspects are entered as a single string with a list of aspects and values separated by commas. If you plan on making a research auto-unlock, it's okay to leave it without aspects and just enter a null as the aspect list.

Aspect coordinates are different from standard mathematical coordinates. Decreasing Y moves the research up, while increasing Y moves it down. Increasing X moves the research further to the right as one would expect.

Example:

```zenscript
//ResearchKey, TabKey, AspectList, X, Y, Complexity, ItemStack //Make sure that the X and Y coordinates of your research doesn't conflict with other researches
mods.thaumcraft.Research.addResearch("WTFPLANTS", "BASICS", "lucrum 100, alienis 200", 1, 0, 8, <minecraft:sapling>);
game.setLocalization("en_US", "tc.research_name.WTFPLANTS", "Trees!");
game.setLocalization("en_US", "tc.research_text.WTFPLANTS", "[MT] Science just doesn't know!");
```
#### Adding Pages to Research
Just creating the base research isn't enough. The base research starts out without pages and crashes the game if you try to open it. Once a research has been created, you can use addPage() to add new pages. Just entering the Key and a localization key will add a normal text page that can be filled in with localization.

Example:

//ResearchKey, LocalizationKey
mods.thaumcraft.Research.addPage("WTFPLANTS", "derp.research_page.WTFPLANTS");
game.setLocalization("en_US", "derp.research_page.WTFPLANTS", "Plants! What are they?<BR>The Thaumometer doesn't know!");
When localizing text for research pages, the following markup can be used:

```zenscript
# Special formatting codes:
# <BR> or <BR/>         Paragraph break (<BR/> is included for people using XML for their localization)
# <LINE> or <LINE/>     Insert a fancy linebreak between sections of text.
# <IMG>...</IMG>  Insert a centered image into text. Parameters are separated by ':' and are:
#                    - mod resource location name
#                    - png file location (assumed to be a 256x256 texture, a sub-image will be grabbed from this png as specified below)
#                    - x location of sub-image in png
#                    - y location of sub-image in png
#                    - x size of sub-image (255 if full x size of png must be used)
#                    - y size of sub-image (255 if full y size of png must be used)
#                    - scaling - 1.0 for normal 256x256 images, or smaller for proportionately smaller .png files (a 16x16 image will be 0.0625)   
#               Examples: 
#                   <IMG>thaumcraft:textures/gui/gui_researchbook.png:24:184:96:4:1.0</IMG>   <-- line break image as used in <LINE> above
#                   <IMG>thaumcraft:textures/items/alumentum.png:0:0:255:255:0.0625</IMG>     <-- alumentum item icon
```
For adding pages displaying recipes, the following methods can be used. Each one takes a Key and an ItemStack as an argument and will add a page displaying the first recipe for that item it can find. Make sure to add a recipe for an item before trying to add a page for the recipe.

```zenscript
//Adds a normal crafting table recipe page
mods.thaumcraft.Research.addCraftingPage("WTFPLANTS", <minecraft:planks>);
//Adds an arcane crafting table recipe page
mods.thaumcraft.Research.addArcanePage("WTFPLANTS", <Thaumcraft:WandRod>);
//Adds a crucible recipe page
mods.thaumcraft.Research.addCruciblePage("WTFPLANTS", <Thaumcraft:ItemResource:1>);
//Adds an infusion recipe page
mods.thaumcraft.Research.addInfusionPage("WTFPLANTS", <Thaumcraft:WandRod:2>);
Infusion Enchanting pages can be added by supplying the key and the Enchantment ID.
```

```zenscript
mods.thaumcraft.Research.addEnchantmentPage("WTFPLANTS", 18);
```
Make sure the recipe uses that research's key as its own key or the recipe will not actually be craftable when the research is unlocked.

### Connecting Research
Research has three types of connections, Parents, Hidden Parents, and Siblings.

Parents are the prerequisite researches you need to unlock before you can research a particular research. For example, ROD_silverwood has INFUSION and ROD_greatwood as its parents. You cannot research Silverwood Wand without first researching Infusion and Greatwood Wand. If a research is on the same page as its parents, the Thaumonomicon will draw a line from parent to child to indicate which leads to which.

Hidden Parents are like Parents, except that the Thaumonomicon will not draw a line between them even if they're on the same page. Use this if you're trying to reduce clutter on a research tab.

To add parents or hidden parents to a research:

```zenscript
//ResearchKey, Parent, Hidden?
mods.thaumcraft.Research.addPrereq("WTFPLANTS", "ICHOR", false);
```
Siblings are researches that are auto-unlocked when a particular research is. For example, DISTILLESSENTIA has JARLABEL as a sibling. When you research Essentia Distillation, you automatically unlock the Jar Label research. When siblings are on the same tab, the Thaumonomicon will draw a line between them.

To add a sibling to a research:

```zenscript
//ResearchKey, Sibling
mods.thaumcraft.Research.addSibling("WTFPLANTS, "ZOMGSAPLINGS");
```
To change parents or siblings for an existing research, you'll need to use the following commands to clear those values and then add your own.

```zenscript
//ResearchKey
mods.thaumcraft.Research.clearPrereqs("ICHOR");
mods.thaumcraft.Research.clearSiblings("WTFPLANTS");
```
### Modifying Research
There are many tags and extra commands for adding more features to your created research or modifying existing ones.

Some standard research tags are:

ROUND - Research has a round icon in the Thaumonomicon. Usually for non-recipe researches or auto-unlocked researches.
SPIKY - Research has spikes around its icon. Generally for indicating that a research is important.
STUB - Research cannot be researched by the player. Generally for researches that are unlocked other ways such as Siblings or auto-unlock.
SECONDARY - Research has an octagonal icon in the Thaumonomicon and is purchased with points instead of researched.
VIRTUAL - Research does not really exist and cannot be researched. Used as "parent" research that cannot normally be unlocked.
AUTO-UNLOCK - Research starts out already unlocked.
CONCEALED - Research does not appear in the Thaumonomicon until its parent researches are completed. Used for most researches by default.
They can be set with the following commands:

```zenscript
//ResearchKey, Value
mods.thaumcraft.Research.setRound("WTFPLANTS", true);
mods.thaumcraft.Research.setSpikey("WTFPLANTS", true);
mods.thaumcraft.Research.setStub("WTFPLANTS", true);
mods.thaumcraft.Research.setSecondary("WTFPLANTS", true);
mods.thaumcraft.Research.setVirtual("WTFPLANTS", true);
mods.thaumcraft.Research.setAutoUnlock("ASPECTS", false);
mods.thaumcraft.Research.setConcealed("WTFPLANTS", true);
```
You can modify what Aspects an existing research has. Aspects determine what and how many research points you need to purchase a research in EASY research mode or if it is a Secondary research. They also determine what aspects you will need to connect during the research mini-game for non-secondary research or in HARD research mode.

```zenscript
//ResearchKey, Aspects
mods.thaumcraft.Research.setAspects("WTFPLANTS", "lucrum 39, perditio 96, potentia 100");
```
Complexity is what determines the difficulty level of a research. The higher the Complexity level of a research, the more annoying challenging it will be in the research mini-game.

```zenscript
//ResearchKey, Complexity
mods.thaumcraft.Research.setComplexity("WTFPLANTS", 16);
```
If you're trying to change pages for an existing research, you'll first need to clear the research of pages with this:

```zenscript
//ResearchKey
mods.thaumcraft.Research.clearPages("WTFPLANTS");
```
Once you've cleared all the pages, you can manually add pages back in whatever format you want.

Normally, when you change a Thaumcraft recipe, the research page for it will still show the original recipe. You can manually change this by clearing all the pages and adding them back, or you can use this to try and force it to refresh the recipe:

```zenscript
//ResearchKey
mods.thaumcraft.Research.refreshResearchRecipe("WTFPLANTS");
```
Refreshing the research will only work if the recipe is still the same type (Arcane Worktable, Infusion, etc...) Otherwise, you'll need to clear the research pages and add them back with the new recipe type.

Finally, if you want to move an existing research to a different location and/or different tab, you can use this:

```zenscript
//ResearchKey, DestinationCategory, X, Y
mods.thaumcraft.Research.moveResearch("INFERNALFURNACE", "FORBIDDEN", 1, 0);
```