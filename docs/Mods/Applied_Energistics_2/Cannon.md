#Cannon

### Importing

```
import mods.appliedenergistics2.Cannon;
```

### Adding
Adds ammo types for the matter cannon. Weight refers to (roughly) the atomic weight of the material. 
```
Cannon.registerAmmo(IItemStack ammo, double weight);

Cannon.registerAmmo(<minecraft:bone>, 40.07);
```