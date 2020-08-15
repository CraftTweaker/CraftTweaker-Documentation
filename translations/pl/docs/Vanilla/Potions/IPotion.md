# IPotion

An IPotion object refers a potion in the game.

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.potions.IPotion;`

## Getting an IPotion object

You can get such an object through the use of the [Potion Bracket handler](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

Currently, all you can do with potions is retrieving some information on them.  
Example `<potion:minecraft:strength>.name`

| Zengetter     | Co to robi                                          | Typ zwrotu                                      |
| ------------- | --------------------------------------------------- | ----------------------------------------------- |
| Nazwa         | Returns the potion's internal name                  | ciąg znaków                                     |
| badEffect     | Returns if the potion effect is bad                 | bool                                            |
| liquidColor   | Returns the potion's color                          | odcień                                          |
| liquidColour  | Returns the potion's colour                         | odcień                                          |
| curativeItems | Returns a list of all curative Items for the potion | Lista<[IItemStack](/Vanilla/Items/IItemStack/)> |
| hasStatusIcon | Returns whether the potion has a status icon        | bool                                            |
| isBeneficial  | Returns whether the potion is beneficial            | bool                                            |
| isInstant     | Returns whether the potion is instant               | bool                                            |

## Metody ZenMethods

### Make PotionEffect

An [IPotionEffect](/Vanilla/Potions/IPotionEffect/) is a Potion that has a duration and amplifier. You can use these two methods to get one from an IPotion:  
As one might guess, both return an [IPotionEffect](/Vanilla/Potions/IPotionEffect/) object.

```zenscript
pot.makePotionEffect(int duration, int amplifier);
pot.makePotionEffect(int duration, int amplifier, boolean ambientEffect, boolean particlesShown);
```