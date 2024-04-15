# Dispenser Behavior Support

CraftTweaker allows you to add or remove dispenser behaviors.

## Removal

Use `IItemDefinition#removeDispenserBehavior` method to remove dispenser behavior of the specific item.

```zenscript
// Dispenser can no longer shoot arrows
<minecraft:arrow>.definition.removeDispenserBehavior();
```

## Addition

Use the `IItemDefinition#addDispenserBehavior` method to add dispenser behavior for the specific item.

`itemDef.addDispenserBehavior(IDispenserBehavior behavior, @Optional IDispenserSoundFunction soundFunction)`

### IDispenserBehavior

The IDispenserBehavior function defines how a Dispenser dispenses the item. It has two parameters:

* `source`: An [IBlockSource](Vanilla/Dispenser/IBlockSource) containing some information of the dispenser.
* `item`: The [IItemStack](/Vanilla/Items/IItemStack/) to be dispensed.

The function must return an [IItemStack](/Vanilla/Items/IItemStack/) as the remaining item after dispensed.

### IDispenserSoundFunction

The IDispenserSoundFunction defines what sound the dispenser should play. It has an IBlockSource parameter. The function must return a [DispenserSound](/Vanilla/Dispenser/DispenserSound).

### Example

```zenscript
import crafttweaker.dispenser.DispenserSound;

<minecraft:clay_ball>.definition.addDispenserBehavior(function(source, item) {
    print("balance.");
    item.mutable().shrink(1);
    return item;
}, function(source) {
    return DispenserSound.launch();
});
```

### Shooting Projectile Behavior

```zenscript
// itemDef.addShootingProjectileDispenserBehavior(IEntityDefinition projectile, @Optional float inaccuracy, @Optional float velocity);

<minecraft:apple>.definition.addShootingProjectileDispenserBehavior(<entity:minecraft:egg>);

// NOTE: the default value of inaccuracy is 6.0 and velocity is 1.1
```
