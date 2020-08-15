# 論理要件構文

今、あなたはどのロジックゲートであるかを知っているので、それらを使用することを可能にするReskillableに実装された構文を記述することができます。 後のセクションでは、より詳細な例があります。

以下のすべての構文において `要件` は、他のサポートされている要件(CompatSkillsまたは他のアドオンによって追加されたものを含む)の文字列表現です。

* * *

## 単一の要件ゲート

### NOT 要件

Reskillableがサポートしているという最も単純なロジック要件は、要件を反転する能力です。 これは **NOT** ゲートを使用して行い、構文は `not|requirement` です。 上記のロジックゲートのセクションで説明したように このロジック要件は、指定された `要件` が満たない場合にのみ満たされます。

* * *

## バイナリ要件ゲート

他のロジック要件は、2つの *入力* 要件を要求するため、少し複雑です。 As the logic gates are relatively simple the order of the requirements does not actually matter, however I will be referring to them as `requirement<sub>1</sub>` and `requirement<sub>2</sub>` as to differentiate which one is which.

They also share the syntax: `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `nor`, `xor`, or `xnor`.  
**Note**: The brackets around `requirement<sub>1</sub>` and `requirement<sub>2</sub>` are needed.

* * *

### AND 要件

他のロジック要件とは異なり、 **AND** 要件は主に、ネストされたロジック要件に有用です(この下の要件により多くの場合)。 複数の要件を持つアイテムや他のオブジェクトをロックするためには、特定の要件をすべて満たす必要があります。 これは **AND** 機能と同じであるため、可能な限り使用する必要があります。 ツールチップを読みやすくするためです

## 使用例

以下の例はすべて、CompatSkillのCraftTweakerサポートの構文を使用して、読みやすく表示されます。 ロジック要件は設定からも正常に動作します。

All the example script CrT script entries below use the import statement: `import mods.compatskills.Requirement.addRequirement;` this is mainly to reduce the lengths of the other lines and make them more readable. (So if you are copying any of the examples you will need to include it at the top of your script file.) A couple of the examples below that directly start with `mods.compatskills.` are locks that are specific to CompatSkills and that I came up with decent logic requirement examples for.

* * *

巣の外でゾンビピッグマンの攻撃を許可するだけです: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

プレイヤーが少なくとも15の攻撃または防衛レベルを持っている場合、ネザーに入ることを許可します: `mods.compatskills.DimensionLock.addDimensionLock(-1, "or|[reskillable:attack|15]~[reskillable:defense|15]');`

* * *

一度プレイヤーが防御レベル24に到達し、敏捷性レベル24のストップは、彼らが革の鎧を使用することができます:

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    

* * *

プレイヤーがレベル5を採掘または採集するまで木製のシャベルを使用することができます: `addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");`

* * *

プレイヤーがマジック32を持っている場合、または敏捷性32を持っている場合にのみ、エンダーパールを使用することができます。 しかし、彼らがレベル 32 で両方のスキルを持っている場合は、それを使用させないでください: `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]]~[reskillable:agility|32]');`. これは、複数の進行木を持っていて、特定のアイテムを使用し続けたい場合に、それらをフォローする必要があることを確認する場合に便利です。

* * *

**XNOR**の例を考え出すのは難しかったですが、これはどのように動作するかの例です。

Only allow a player to level defense to level 5 if they have not put any points into attack yet or if they are at attack level 32: `mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### ネストされたロジック要件

ネストされたロジック要件は、別のロジック要件の `要件` パラメータの1つとしてロジック要件を使用している場合です。 ネストされた要件のブラケット配置に特別な注意を払う。

* * *

Only allow diamond ore to be broken if the player has mining level 20 or if the player has both gathering level 25 and mining level 15: `addRequirement(<minecraft:diamond_ore>, "or|[reskillable:mining|20]~[and|[reskillable:gathering|25]~[reskillable:mining|15]]");` *Note*: This also has the side effect of not allowing players to place diamond ore unless they meet the requirement as well.

* * *

Only allow using the elytra with agility 15 in the end or having agility and magic levels 25 while not being in the end: `addRequirement(<minecraft:elytra:*>, "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` *Note*: Once you reach agility and magic 25 you are unable to use the elytra in the end. これは一部の例としてだけで、必ずしも誰かが望んでいるものではありません。

Another way that the above requirement could be written is: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` because both sides require at least agility 15.