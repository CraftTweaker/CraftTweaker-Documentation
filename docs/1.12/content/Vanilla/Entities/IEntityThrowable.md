# IEntityThrowable

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityThrowable;`

## Extending
IEntityThrowable implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntity](/Vanilla/Entities/IEntity/)
- [IProjectile](/Vanilla/Entities/IProjectile/)

## ZenGetter/ZenSetter

| ZenGetter      | ZenSetter         | Type                                                               |
|----------------|-------------------|--------------------------------------------------------------------|
| thrower        |                   | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)          |
| shake          |                   | int                                                                |
