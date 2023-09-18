# Lexica Botania
## The Basics
Botania's Lexica Botania is seperated into three different steps.

* Category: Categories are the icons that show up once you open up your Lexica Botania.
* Entry: Entries will show up once you click on a Category. They can be unlocked with Knowledge Levels.
* Page: Pages are inside of an entry. There are often several and they differentiate in type.
Each category/entry/page is identified by a unique string called its Key.

If you want to alter an existing category/entry/page, you'll need to know its key. When adding a new Botania recipe, you'll need to supply the pages with the recipe manually as it will not detect the recipe itself.

You can print a list of category/entry/page keys inside of your minetweaker.txt by using these commands:

* /mt LexiconCategories
* /mt LexiconEntries
* /mt LexiconPages
If you want a more precise dump you can define the command:

* /mt LexiconEntries [CATEGORY]
* /mt LexiconPages [ENTRY]

## Removing Categories/Entries/Pages
Categories/Entries/Pages can be removed with the removeCategory/Entry/Page() method.

### Removing Categories
Removing a Cagetory is only visual. The entries that were inside of it can still be found in the Index so if you want to remove a Category completly you have to track down all of the entries inside of a category and then remove them.

Example:

```zenscript
//CategoryKey
mods.botania.Lexicon.removeCategory("botania.category.basics");
```
### Removing Entries
Removing an Entry is only visual as well. The pages that were inside of it can still be found via Item Mapping or Bookmarks so if you want to remove a Entry completly you have to track down all of the pages inside of the entry and then remove them.

Example:

```zenscript
//EntryKey
mods.botania.Lexicon.removeEntry("botania.entry.mIntro");
```
### Removing Pages
Instead of supplying a PageKey to remove a page you have to use the EntryKey plus the number of the page. Do note that Page 1 in the Lexica would be 0 and Page 2 would be 1, and so on, in the script.

```zenscript
//EntryKey, PageNumber
mods.botania.Lexicon.removePage("botania.entry.fIntro", 0);
```
## Categories
Each category is also identified with its own unique string. These are important to know if you want to remove a category or place a new entry in one.

Known Tab Keys:

* `botania.category.basics` (Basics and Mechanics)
* `botania.category.mana` (Mana Manipulation)
* `botania.category.generationFlowers` (Generating Flora)
* `botania.category.functionalFlowers` (Functionial Flora)
* `botania.category.devices` (Natural Apparatus)
* `botania.category.tools` (Mystical Items)
* `botania.category.baubles` (Baubles and Acessoires)
* `botania.category.alfhomancy` (Alfhomancy)
* `botania.category.misc` (Miscellaneous)

### Creating Categories
Creating a category requires a texture to supply for the category icon. You'll need the domain and file path for the texture. You'll also need to create a localization for the Category name either through a resource pack or by using ModTweaker's localization changer. The localization key will always be "botania.category." followed by the category key. Categories also have a priority that indicates where it is located in the Lexica. If the number is 6+ it will end up as the first category in the Lexica.

For example, if you wanted a category with the Rod of the Bifrost texture from Botania:

```zenscript
//CategoryKey
mods.botania.Lexicon.addCategory("botania.category.rainbow");
game.setLocalization("en_US", "botania.category.rainbow", "Rainbow");
//CategoryKey, Domain + ResourcePath
mods.botania.Lexicon.setCategoryIcon("botania.category.rainbow", "botania:textures/items/rainbowRod.png");
//CategoryKey, Priority
mods.botania.Lexicon.setCategoryPriority("botania.category.rainbow", 6);
```

## Entries
### Creating Entries
Entries are created with a unique Key, a category key and optionally a knowledge type. Like with creating a category, creating a new entry requires a new localization. An entry also requires an ItemStack to display it next to the entry when you are browsing through a category.

If an entry is added through ModTweaker, its name is localized as "botania.entry.[name]" followed by the localized name of it.

Example:

```zenscript
//EntryKey, CategoryKey, ItemStack
mods.botania.Lexicon.addEntry("botania.entry.colour","botania.category.rainbow", <Botania:bifrost>);
game.setLocalization("en_US", "botania.entry.colour", "Modtweaker Guide");
```
If you want the entry to be a bit more advanced, let's say on Elven knowledge level, you have to define it that way. You do not have to add the Knowledge Level if you want the entry to be accessable on opening.

Each Knowledge Level is identified with its own unique string.

Known Knowledge Type Keys:

* `minecraft` (Basic Knowledge)
* `alfheim` (Elven Knowledge)
* `relic` (Relic Knowledge)
Example:

```zenscript
//EntryKey, KnowledgeTypeKey
mods.botania.Lexicon.setEntryKnowledgeType("botania.entry.colour", "alfheim");
```

## Pages
### Creating Pages
Just creating the base entry isn't enough. The base entry starts out without pages and crashes the game if you try to open it. Once an entry has been created, you can use add[Type]Page() to add new pages to the entry. There are several types of page types, going from text, to image, to crafting and even to lore pages. Adding text to the pages is done via localizations. Additionally you have to define the number of the page as it will throw an error if it doesn't go from 1-2-3-4.. Do note that the crafting pages (Regular Crafting, Runic Altar, Petal Apothecary, Alfheim Portal, etc) do not use an OutputStack for it to display the recipe inside of the Lexica Botania like Thaumcraft 4 Research Modtweaking does. Thus, you have to "re"-create the recipe in the page creation. That means that they are only visual and that an appropriate script would be necessary.

Example:

### Text & Image Pages
```zenscript
//PageKey, EntryKey, PageNumber //Adds a Text Page
mods.botania.Lexicon.addTextPage("botania.page.colourText","botania.entry.colour",0);
game.setLocalization("en_US", "botania.page.colourText", "&oThe first and (...)"); 

//PageKey, EntryKey, PageNumber, Domain + ResourcePath //Adds an Image Page
mods.botania.Lexicon.addImagePage("botania.page.colourImage","botania.entry.colour",1, "botania:textures/gui/entries/elvenGarde.png");
game.setLocalization("en_US", "botania.page.colourImage", "Guide for Modtweaker"); 
```

### Crafting Pages
```zenscript
//PageKey, EntryKey, PageNumber, OutputStack, InputArray //Adds a Crafting Page, Out/InputStack are just visual
mods.botania.Lexicon.addCraftingPage("botania.page.colourCrafting","botania.entry.colour",2,[<minecraft:diamond_block>], [[[<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>], [<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>], [<minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>]]]);
game.setLocalization("en_US", "botania.page.colourCrafting", "Crafting the &1Diamond Block&0."); 

//PageKey, EntryKey, PageNumber, OutputStack, InputArray //Adds a Petal Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalGreen>, <ore:petalRed>, <ore:petalRed>]);"
mods.botania.Lexicon.addPetalPage("botania.page.colourPetal","botania.entry.colour",3,[<minecraft:melon>],[[<Botania:petal:5>, <Botania:petal:14>, <Botania:petal:14>]]);
game.setLocalization("en_US", "botania.page.colourPetal", "&oWhy didn't the melons get married? Because they cantaloupe!&r."); 

//PageKey, EntryKey, PageNumber, OutputStack, InputArray, ManaCost //Adds an Infusion Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.ManaInfusion.addInfusion(<minecraft:golden_apple:1>, <minecraft:golden_apple>, 50000);" 
mods.botania.Lexicon.addInfusionPage("botania.page.colourInfusion","botania.entry.colour",4,[<minecraft:golden_apple:1>],[<minecraft:golden_apple>],[50000]);
game.setLocalization("en_US", "botania.page.colourInfusion", "Infusing &1Golden Apple&0.");  

//PageKey, EntryKey, PageNumber, OutputStack, InputArray, ManaCost //Adds an Alchemy Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.ManaInfusion.addAlchemy(<minecraft:sand> * 4, <minecraft:sandstone:*>, 10);" 
mods.botania.Lexicon.addAlchemyPage("botania.page.colourAlchemy","botania.entry.colour",5,[<minecraft:sand> * 4],[<minecraft:sandstone:*>],[10]);
game.setLocalization("en_US", "botania.page.colourAlchemy", "Breaking down &1Sandstone&0");  

//PageKey, EntryKey, PageNumber, OutputStack, InputArray, ManaCost //Adds a Conjuration Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.ManaInfusion.addConjuration(<minecraft:sand:1> * 2, <minecraft:sand:1>, 5);" 
mods.botania.Lexicon.addConjurationPage("botania.page.colourConjuration","botania.entry.colour",6,[<minecraft:sand:1> * 2],[<minecraft:sand:1>],[5]);
game.setLocalization("en_US", "botania.page.colourConjuration", "Conjuring &1Red Sand&0");  

//PageKey, EntryKey, PageNumber, OutputStack, InputArray, ManaCost //Adds a Rune Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.RuneAltar.addRecipe(<minecraft:stonebrick:2>, [<minecraft:stonebrick>, <minecraft:gunpowder>], 5);"
mods.botania.Lexicon.addRunePage("botania.page.colourRune","botania.entry.colour",7,[<minecraft:stonebrick:2>],[[<minecraft:stonebrick>, <minecraft:gunpowder>]],[5]);
game.setLocalization("en_US", "botania.page.colourRune", "The &1Cracked Stone Brick&0.");  
 
//PageKey, EntryKey, PageNumber, BrewString, Ingredients //Adds a Brew Page, Out/InputStack are just visual. The appropriate script for the page would be "[Waiting for Botanical Brewing Support]", for a list of BrewStrings use "/mt BotaniaBrews 
mods.botania.Lexicon.addBrewPage("botania.page.colourBrew","botania.entry.colour",8, "invisibility", [<minecraft:nether_wart>, <minecraft:snowball>, <minecraft:glowstone_dust>], "botania.page.colourBrew_bottom.text");
game.setLocalization("en_US", "botania.page.colourBrew", "A simple brew, it mimics a &1Potion of Invisibility&0, when taken, it has a similar effect, giving the individual a &4Invisibility&0 effect.");
game.setLocalization("en_US", "botania.page.colourBrew_bottom.text", "Pretend you have Incursio");

//PageKey, EntryKey, PageNumber, OutputStack, InputStack //Adds an Elven Page, Out/InputStack are just visual. The appropriate script for the page would be "mods.botania.ElvenTrade.addRecipe(<Botania:flower:4>, [<minecraft:yellow_flower>]);"
mods.botania.Lexicon.addElvenPage("botania.page.colourElven","botania.entry.colour",9,[<Botania:flower:4>],[[<minecraft:yellow_flower>]]);
game.setLocalization("en_US", "botania.page.colourElven", "Trading for &1Yellow Mystical Flower&0."); 
```

### Miscellaneous Pages
```zenscript
//PageKey, EntryKey, EntityName, Size //Adds a Entity Page, for a list of EntityNames use "/mt entities
mods.botania.Lexicon.addEntityPage("botania.page.colourEntity","botania.entry.colour",10,"Botania.botania:pixie",100);
game.setLocalization("en_US", "botania.page.colourEntity", "The Pixie");

//PageKey, EntryKey //Adds a Lore Page
mods.botania.Lexicon.addLorePage("botania.page.colourLore","botania.entry.colour",11);
game.setLocalization("en_US", "botania.page.colourLore", "(...) &othe final Page!");   
```
When localizing text for pages, the following markup can be used:

```
# Special formatting codes:
# <BR> or <BR/>         Paragraph break (<BR/> is included for people using XML for their localization)
# <LINE> or <LINE/>     Insert a fancy linebreak between sections of text.
```

## Item Mapping
With Modtweaker you are able to remove and add Item Mapping for the Lexica Botania. It has two features that concentrate on world interaction as well as GUI interaction. One of them is the ability to shift-rightclick blocks to see if they have any documentation inside of the Lexica while holding the Lexica in your hand. The second one is to shift-leftclick something inside of the Lexica Botania to see its root path, for example in recipes. Using our previously made page about Diamond Block Crafting we can now link the Diamond Block through the world and the book via Item Mapping.

Example:

```zenscript
//InputStack, EntryKey, PageNumber
mods.botania.Lexicon.addRecipeMapping(<minecraft:diamond_block>, "botania.entry.colour", 3);
```
Removing Item Mapping for a specific block or time is possible too.

Example:

```zenscript
//InputStack
mods.botania.Lexicon.removeRecipeMapping(<Botania:spreader>);
```
Note: World Item Mapping is currently unsupported.