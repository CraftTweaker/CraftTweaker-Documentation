
### Class

```zenscript
import mods.roots.Spell;
```

#### Methods

```zenscript
Spell setDouble(
  string propertyName, // the name of the property (must be a double)
  double value         // the value to be inserted for this property (must be a double)
);
```

If the property is not of the double type, an error will occur.

---


```zenscript
Spell setFloat(
  string propertyName, // the name of the property (must be a float)
  float value          // the value to be inserted for this property (must be a float)
);
```

If the property is not of the float type, an error will occur.

---


```zenscript
Spell setInteger(
  string propertyName, // the name of the property (must be a integer)
  int value            // the value to be inserted for this property (must be a integer)
);
```

If the property is not of the integer type, an error will occur.

---


```zenscript
Spell setString(
  string propertyName, // the name of the property (must be a string)
  string value         // the value to be inserted for this property (must be a string)
);
```

If the property is not of the string type, an error will occur.

---


```zenscript
Spell setCooldown(
  int value // the new spell cooldown (as an integer in ticks)
);
```


---


```zenscript
Spell setDamage(
  float value // the new damage of the spell
);
```

If the spell does not have a damage property, an error will occur. Consult /roots spells.

---


```zenscript
Spell setCost(
  Herb herb,    // the static herb reference found in Herbs (must be an existing cost)
  double amount // the double value of the new cost for this herb
);
```

This cannot be used to add a new cost to a spell, only to modify an existing cost.

---


```zenscript
Spell setModifierCost(
  Cost cost,    // the static cost type found in Costs (must be an existing cost)
  Herb herb,    // the static herb reference found in Herbs (must be an existing modifier cost)
  double amount // the double value of the new cost for this combination of cost type and herb
);
```

This cannot be used to add a new cost to a spell's modifier, only to modify an existing cost.

---


### 使用例

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
