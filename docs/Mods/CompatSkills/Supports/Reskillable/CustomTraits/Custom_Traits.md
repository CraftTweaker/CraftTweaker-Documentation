# Custom Skills & Traits

## Credits:
Credits goes out to Kindlich for writing most of the Custom Content implementation!


## Custom Traits:
### Implementation Syntax:
```
Examples:
mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, String... requirements)
mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, String... requirements)
mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, String... requirements)
mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, String... requirements)

"traitName" VS "traitLocation" is the same as in Skills.

"CrTSkill parentSkill" is the Skill Bracket Handler.


So a functional Example would be:
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
```

### ZenProperties
|Reference|Property Name       |Implementation|
|CrTTrait |name                |See Below     |
|CrTTrait |description         |See Below     |

```
// Creates the trait as a variable
var trait = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

// Hard-Sets the name to "Test"
// Be aware this makes localization through .lang files not possible!
test.name = "Test"

// Hard-Sets the description to "Hello, I'm a Description"
// Be aware this makes localization through .lang files not possible!
test.description = "Hello, I'm a Description"
```


### ZenSetters/ZenGetters
|Method Type |Method Name          |Values                                               |
|:-----------|:--------------------|-----------------------------------------------------|
|Setter      |setEnabled           |Takes a Boolean                                      |
|Getter      |getEnabled           |Returns a Boolean                                    |
|Getter      |getName              |Returns the localized String Name of the Trait       | 
|Getter      |getDescription       |Returns the localized String Description of the Trait|