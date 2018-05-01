# Binding Support

## Binding:
This will cancel Item Binding for said specific item if teh player doesn't meet the requirements.

### Pre-1.4.0:

#### Syntax:
```
Blank Example:
mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);

Test Example:
mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
```


### Post-1.4.0
As of CompatSkills 1.4.0 the binding locking has now been rolled in as a part of ItemStack-Locking.
This means there is no longer a dedicated script syntax for adding a binding lock to an item.

This change has also come with a few other changes.
For example the default Error Message displayed has been changed in some regards:
- It now displays alongside requirements in the chat as a player-only status message
- The error message is now a Localizable string: 
```
compatskills.bloodmagic.bindingError=Untold Dark Energies swirl around you and then subside
```

This means that ResourcePack Authors can now localize the error message into whatever language they want.
This also means you can use mods like ResourceLoader or Base (With ContentTweaker present) to change the error string.