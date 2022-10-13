
### Class

```zenscript
import mods.roots.Spells;
```

#### Metodi

```zenscript
Spell getSpell(
  string spellName // the name of the spell (spell_ will be prepended if not provided)
);
```


---


### Esempi

```zenscript
import mods.roots.Spells;
import mods.roots.Spell;
import mods.roots.Costs;
import mods.roots.Herbs;

var harvest = Spells.getSpell("harvest") as Spell; // If not placed at the beginning, "spell_" will be automatically added.
harvest.setCooldown(800); // Sets the cooldown of the Harvest spell to 40 seconds.
harvest.setCost(Herbs.wildewheet, 1.25); // Increases the wildewheet cost of Harvest from the default of 0.55 to 1.25
harvest.setModifierCost(Costs.additional_cost, Herbs.wildroot, 0.9); // Increases the cost of the wildroot-related modifier's additional cost from the default of 0.125 to 0.9
harvest.setInteger("radius_x", 20);
harvest.setInteger("radius_z", 20);
harvest.setInteger("radius_y", 20); // Increases the size of the base Harvest radius to 20 blocks in all directions.
```

### Notes

You will want to use the `/roots spells` command in order to get a list of the relevant properties and their default values output to `roots.log` in order to determine which property names you wish to adjust.
