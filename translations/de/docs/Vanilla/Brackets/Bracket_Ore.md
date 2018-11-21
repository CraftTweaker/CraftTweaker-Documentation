# Ore Dictionary Bracket Handler

The Ore Dictionary Bracket Handler gives you access to the Ore Dictionaries in the game.

Ore Dictionarys are referenced in the Ore Dictionary Bracket Handler by like so:

    <ore:orename>
    <ore:ingotIron>
    

Returns an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>` If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that. Please refer to the [Ore Dictionary](/Vanilla/OreDict/IOreDictEntry/) Entry for further information on what to do with them.

# Getting all Registered ore Dictionaries

You can use the following command to output all registered ore Dictionaries to the CraftTweaker log

    /ct oredict
    /crafttweaker oredict