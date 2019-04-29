# Hand

A Hand is an enumeration of the player's two possible hands: main and off

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Hand;`

## Enumerations

Hand can be of those two values:

- main
- off

    import mods.contenttweaker.Hand;
    
    Hand.off();
    Hand.main();
    Hand.fromString("off");
    Hand.fromString("main");
    

## Uses

A Hand's main use is in a [IItemUse Function](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Comparing two Hand objects

You can compare two Hand objects using the `==` getter.

    Hand.main() == Hand.main()