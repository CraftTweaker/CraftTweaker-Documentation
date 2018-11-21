# IEntityAnimal

An Animal.

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityAnimal;`

## Extending [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal extends [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). That means all functions available to [IEntities](/Vanilla/Entities/IEntityAgeable/) also are available to IEntityAnimal.

## Methods

### ZenGetters/Setters

| ZenGetter | Type                                                |
| --------- | --------------------------------------------------- |
| loveCause | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove  | bool                                                |

### ZenMethods

#### check if an item can be used to breed the animal

Method expects an [IItemStack](/Vanilla/Items/IItemStack/).  
Returns a bool.

    entAnObj.isBreedingItem(IItemStack itemStack);
    

#### Set or Reset in love

First method expects an optional [IPlayer](/Vanilla/Players/IPlayer/) object, second nothing.  
Returns nothing.

    entAnObj.setInLove(@Optional IPlayer player);
    entAnObj.resetInLove();
    

#### Check if another animal can mate with this one.

Method expects an IEntityAnimal object.  
Returns a bool.

    entAnObj.canMateWith(IEntityAnimal other);