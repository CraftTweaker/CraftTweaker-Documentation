# OreEntry

An OreEntry is a material like Gold, Diamond, Coal, Redstone and so on.  
You can use this to get several [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Methods

In general, the methods take a string parameter that is a prefix to be used.  
For example, an OreEntry for `"Gold"`, called with the prefix `"dust"` will return Gold Dust.  
For these examples, we will assume this was declared:  
The comments after the example calls will state what the method call can return (unless in the extra category).

    val oreEntry = mods.jaopca.JAOPCA.getOre("Gold");
    

### Get entry properties

You can get these properties:

    oreEntry.energyModifier; //1.0 as double
    oreEntry.rarity; //1.0 as double
    oreEntry.oreType; //"INGOT" as string
    

### Get OreName or OreNameSynonyms

The ore name is essentialy how it is registered and what you use in a getOre to retrieve it.  
The ore name synonyms are synonyms that mods or pack authors can register to combine two or more oreEntries (e.g. "Aluminum" and "Aluminium"). Most oreEntries will probably have nothing registered, though. The synonyms getter will return a list containing all the synonyms as strings.

    oreEntry.oreName; //"Gold"
    oreEntry.oreNameSynonyms; //[]
    

### Get IOreDictEntry

Returns a new [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) with the given prefix.

    oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
    

### Get IItemStack

Returns a new [IItemStacks](/Vanilla/Items/IItemStack/) that matches the given prefix.  
You can provide an alternate fallback prefix to be used if no matching Item is found.

If no matching item is found and no matching item is found using the fallback prefix (if provided), it will return `null`.

    //oreEntry.getItemStack(prefix);
    oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
    oreEntry.getItemStack("invalid"); //null
    
    //oreEntry.getItemStack(prefix, fallback);
    oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
    oreEntry.getItemStack("invalid", "faulty"); //null
    

### Get ILiquidStack

Returns a new [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) that matches the given prefix.  
You can provide an alternate fallback prefix to be used if no matching Liquid is found.

If no matching liquid is found and no matching liquid is found using the fallback prefix (if provided), it will return `null`.

    //oreEntry.getLiquidStack(prefix);
    oreEntry.getLiquidStack("molten"); //<liquid:gold>
    oreEntry.getLiquidStack("invalid"); //null
    
    //oreEntry.getLiquidStack(prefix, fallback);
    oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
    oreEntry.getLiquidStack("invalid", "faulty"); //null
    

### Get Extra

An Entry can have an extra registered. An extra can for example be a secondary output when pulverizing a matching ore.

You can either check if an entry has an extra, get the extra (or `null` if not present) or the extraName.  
You can also use the same methods as above (`getOreDictEntry`, `getLiquidStack` and `getItemStack`).

There are up to 3 extras that can be registered. For the sake of simplicity there won't be examples for the equivalent methods, they will only be stated

    //First extra
    oreEntry.hasExtra; //true or false
    oreEntry.extra; //matching oreEntry or null
    oreEntry.extraName; //the name or null
    
    //Methods for first extra
    oreEntry.getOreDictEntryExtra(prefix);
    oreEntry.getItemStackExtra(prefix);
    oreEntry.getItemStackExtra(prefix, fallback);
    oreEntry.getLiquidStackExtra(prefix);
    oreEntry.getLiquidStackExtra(prefix, fallback);
    
    
    
    //Second extra
    oreEntry.hasSecondExtra; //true or false
    oreEntry.secondExtra; //matching oreEntry or null
    oreEntry.secondExtraName; //the name or null
    
    //Methods for second extra
    oreEntry.getOreDictEntrySecondExtra(prefix);
    oreEntry.getItemStackSecondExtra(prefix);
    oreEntry.getItemStackSecondExtra(prefix, fallback);
    oreEntry.getLiquidStackSecondExtra(prefix);
    oreEntry.getLiquidStackSecondExtra(prefix, fallback);
    
    
    
    //Third extra
    oreEntry.hasThirdExtra; //true or false
    oreEntry.thirdExtra; //matching oreEntry or null
    oreEntry.thirdExtraName; //the name or null
    
    //Methods for third extra
    oreEntry.getOreDictEntryThirdExtra(prefix);
    oreEntry.getItemStackThirdExtra(prefix);
    oreEntry.getItemStackThirdExtra(prefix, fallback);
    oreEntry.getLiquidStackThirdExtra(prefix);
    oreEntry.getLiquidStackThirdExtra(prefix, fallback);