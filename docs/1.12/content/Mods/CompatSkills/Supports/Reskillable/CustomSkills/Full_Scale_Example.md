# Full Scale Example

## Credit
Credit goes out to Lead Developer pupnewfster for the below example!

```
#modloaded compatskills reskillable
#priority 1000

import mods.compatskills.SkillCreator.createSkill;
import mods.compatskills.Skill;

val smithing = createSkill("smithing", "mekanism:textures/blocks/steelblock.png");
smithing.name = "Smithing";
smithing.setRankIcon(0, "minecraft:textures/items/iron_ingot.png");
smithing.setRankIcon(1, "minecraft:textures/items/gold_ingot.png");
smithing.setRankIcon(2, "techreborn:textures/items/gem/sapphire.png");
smithing.setRankIcon(3, "minecraft:textures/items/diamond.png");
smithing.setRankIcon(4, "minecraft:textures/items/emerald.png");
smithing.setRankIcon(5, "avaritia:textures/items/resource/crystal_matrix_ingot.png");
smithing.setRankIcon(6, "avaritia:textures/items/resource_neutronium_ingot_clean.png");
smithing.setRankIcon(7, "projecte:textures/items/matter/dark.png");
smithing.setRankIcon(8, "projecte:textures/items/matter/red.png");

val technology = createSkill("technology", "appliedenergistics2:textures/blocks/dense_energy_cell7.png");
technology.name = "Tech";
technology.setRankIcon(0, "minecraft:textures/items/oak_boat.png");
technology.setRankIcon(1, "minecraft:textures/items/redstone_dust.png");
technology.setRankIcon(2, "minecraft:textures/items/minecart_normal.png");
technology.setRankIcon(3, "mekanism:textures/items/basiccontrolcircuit.png");
technology.setRankIcon(4, "appliedenergistics2:textures/items/material_certus_quartz_crystal.png");
technology.setRankIcon(5, "enderio:textures/items/item_yeta_wrench.png");
technology.setRankIcon(6, "mekanism:textures/items/advancedcontrolcircuit.png");
technology.setRankIcon(7, "mekanism:textures/items/elitecontrolcircuit.png");
technology.setRankIcon(8, "mekanism:textures/items/ultimatecontrolcircuit.png");


val taming = createSkill("taming", "textures/blocks/hay_block_side.png");
taming.name = "Taming";
taming.setRankIcon(0, "minecraft:textures/items/seeds_wheat.png");
taming.setRankIcon(3, "minecraft:textures/items/fish_cod_raw.png");
taming.setRankIcon(5, "minecraft:textures/items/bone.png");
taming.setRankIcon(7, "minecraft:textures/items/saddle.png");


var stagger = [
	"1|1",
	"3|0",
	"5|1",
	"7|0",
	"9|1",
	"12|0",
	"15|1",
	"16|0",
	"17|1",
	"19|0",
	"21|1",
	"23|0",
	"25|1",
	"29|0",
	"32|-1",
	"35|0",
	"39|1",
	"45|0",
	"49|1",
	"51|2",
	"55|1",
	"57|0",
	"60|-1",
	"63|0",
	"65|-2",
	"67|1",
	"71|0",
	"75|3",
	"77|2",
	"79|1",
	"81|0",
	"85|1",
	"87|0",
	"89|1",
	"92|0",
	"95|1",
	"96|0",
	"97|1",
	"99|0",
	"101|1",
	"103|0",
	"105|1",
	"109|0",
	"112|-1",
	"115|0",
	"119|1",
	"125|0",
	"129|1",
	"131|2",
	"135|1",
	"137|0",
	"140|-1",
	"143|0",
	"145|-2",
	"147|1",
	"151|0",
	"153|2",
	"155|4",
	"157|3",
	"159|1",
	"163|0",
	"165|1",
	"167|0",
	"169|1",
	"172|0",
	"175|1",
	"176|0",
	"177|1",
	"179|0",
	"181|1",
	"183|0",
	"185|1",
	"189|0",
	"192|-1",
	"195|0",
	"199|1",
	"205|0",
	"209|1",
	"211|2",
	"215|1",
	"217|0",
	"220|-1",
	"223|0",
	"225|-2",
	"227|1",
	"231|0",
	"235|4",
	"237|5",
	"239|3",
	"241|1",
	"245|0",
	"247|-2",
	"250|0",
	"252|1",
	"254|3"
] as string[];

var skills = [
	<skill:reskillable:agility>,
	<skill:reskillable:attack>,
	<skill:reskillable:building>,
	<skill:reskillable:defense>,
	<skill:reskillable:farming>,
	<skill:reskillable:gathering>,
	<skill:reskillable:magic>,
	<skill:reskillable:mining>,
	<skill:compatskills:smithing>,
	<skill:compatskills:technology>,
	<skill:compatskills:taming>
] as Skill[];


//Make sure the settings are correct for the skill and that it is enabled
for skill in skills {
	skill.setEnabled(true);
	skill.setBaseLevelCost(0);
    skill.setCap(256);
	skill.setLevelStaggering(stagger);
	skill.setSkillPointInterval(4);
}
```