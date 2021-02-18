# Custom Skills

## Credits:

Credits goes out to Kindlich for writing most of the Custom Content implementation!

## Custom Skills:

### Implementation Syntax:

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
    

### ZenProperties

| Reference | Property Name | Implementation |
|:--------- |:------------- | -------------- |
| CrTSkill  | name          | See Below      |

    // Creates the skill as a variable
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    // Hard-Sets the name to "Banana"
    // Be aware this makes localization through .lang files not possible!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Method Type | Method Name           | Values                                   |
|:----------- |:--------------------- | ---------------------------------------- |
| Setter      | setLevelCap           | Takes an Integer                         |
| Getter      | getLevelCap           | Returns an Integer                       |
| Setter      | setEnabled            | Takes an Boolean                         |
| Getter      | getEnabled            | Returns an Boolean                       |
| Setter      | setSkillPointInterval | Takes an Integer                         |
| Setter      | setBaseLevelCost      | Takes an Integer                         |
| Getter      | getBaseLevelCost      | Returns an Integer                       |
| Getter      | getName               | Returns the localized String Name        |
| Setter      | setLevelStaggering    | Takes a String[], See Config for Example |
| Getter      | getLevelStaggering    | Returns a String[]                       |
| Setter      | setHidden             | Takes a Boolean                          |
| Getter      | isHidden              | Returns a Boolean                        |

### Localization & Resource Location References:

    Skill Icons:
    
    Either:
    
    - mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

Go to this link to see all possible Locale-Codes! [Gamepedia's Minecraft Language Page](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")