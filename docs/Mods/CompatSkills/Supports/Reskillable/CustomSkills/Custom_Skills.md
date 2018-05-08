# Custom Skills

## Credits:
Credits goes out to Kindlich for writing most of the Custom Content implementation!


## Custom Skills:
### Implementation Syntax:
```
Examples:
mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation)
mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)

"createSkill" auto-assigns the CompatSkills ModID to the Name Resource Location.
So for example:
mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");

Would internally return:
"compatskills:banana" as the resource location name for the skill.

The second one has no assigned ModID meaning you can insert your own.
mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
```

### ZenProperties
|Reference|Property Name|Implementation|
|CrTSkill |name         |See Below     |

```
// Creates the skill as a variable
var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");

// Hard-Sets the name to "Banana"
// Be aware this makes localization through .lang files not possible!
banana.name = "Banana"
```


### ZenSetters/ZenGetters
|Method Type |Method Name          |Values                           |
|:-----------|:--------------------|---------------------------------|
|Setter      |setLevelCap          |Takes an Integer                 |
|Getter      |getLevelCap          |Returns an Integer               |
|Setter      |setEnabled           |Takes an Boolean                 |
|Getter      |getEnabled           |Returns an Boolean               |
|Setter      |setSkillPointInterval|Takes an Integer                 |
|Setter      |setBaseLevelCost     |Takes an Integer                 |
|Getter      |getBaseLevelCost     |Returns an Integer               |
|Getter      |getName              |Returns the localized String Name|
