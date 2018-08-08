# IPotionEffect

An IPotionEffect is an [IPotion](IPotion/) that also has a duration and an amplifier (strength) parameter.  
You can get them from an [IPotion](IPotion/) object.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                              | Type                                         |
|----------------------------------------|----------------------------------------------|
| duration                               | int                                          |
| potion                                 | [IPotion](IPotion/)                           |
| doesShowParticles                      | bool                                         |
| amplifier                              | int                                          |
| curativeItems                          | List<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                             | bool                                         |
| isAmbient                              | bool                                         |
| isPotionDurationMax (also a ZenSetter) | bool                                         |


## ZenMethods
### Is an item a curative item
Uses an [IItemStack](/Vanilla/Items/IItemStack/).  
Returns a bool
```
isCurativeItem(IItemStack item);
```

### Perform Effect on an Entity

Uses an [IEntity](/Vanilla/Entities/IEntity/) or any of its subclasses (e.g. [IPlayer](/Vanilla/Players/IPlayer/)).  
Returns void (nothing).
```
performEffect(IEntity Entity);
```