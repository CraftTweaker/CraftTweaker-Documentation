# ChickenRepresentation

The ChickenRepresentation is a template of what your Chicken will do.  
By default, it will only exist and lay the egg you gave it as initial parameter.  
You can change this behavior to allow for better chickens by modifying the given properties.

## Importing the class
Want to import the class? Here you go:
```
import mods.contenttweaker.Chicken;
```

## Registering the chicken

After you have set your chickenRepresentation to be what you want it to be, the most important part is to register it.  
Be careful though, as any changes done to this template after the the registering will still take effect, so you should create a new chickenRepresentation for each chicken you want to have.

## ZenProperties

You can change or get the current value of the properties either by `object.name = newValue` or by using the methods `object.setName(newValue);`  

Example:
```
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| name             | type                                                                                   |
|------------------|----------------------------------------------------------------------------------------|
| name             | string                                                                                 |
| layItem          | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| dropItem         | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| backgroundColor  | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| foregroundColor  | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                             |
| textureLocation  | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnType        | string                                                                                 |
| layCoefficient   | float                                                                                  |
| parentOne        | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo        | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |