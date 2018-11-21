# CTRandom

The CTRandom object is only accessible from within CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) objects and allows you to access the world's random number generator.

## Importing the class

If you ever want to import the class, here you go:

    import mods.contenttweaker.Random;
    

## ZenMethods

The only methods available are for random values, either as boolean or as int.  
For the latter, you also need to provide an upper bound (the upper bound is exclusive). ``` randomObj.nextBoolean(); randomObj.nextInt(int upperBound);