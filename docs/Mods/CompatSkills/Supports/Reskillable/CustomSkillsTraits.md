# Custom Skills & Traits

## Credits:
Credits goes out to Kindlich for writing most of the Custom Content implementation!


## Custom Skills & Trait
### Custom Skills:
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

### Custom Traits:
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